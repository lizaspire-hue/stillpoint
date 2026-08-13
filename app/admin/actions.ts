"use server"

import { createServerClient } from "@supabase/ssr"
import { createClient as createAdminClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import type { MediaCategory, MediaItem, MediaType } from "@/lib/media"
import { MEDIA_CATEGORIES } from "@/lib/media"

// Confirms there is a logged-in admin behind the current request.
async function requireUser() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: () => {},
      },
    },
  )
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("Not authorized")
  return user
}

// Service-role client bypasses RLS for trusted, server-side writes.
function adminClient() {
  return createAdminClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

function safeExt(name: string, fallback: string) {
  const ext = name.split(".").pop()?.toLowerCase() ?? ""
  return /^[a-z0-9]{1,5}$/.test(ext) ? ext : fallback
}

export type SignedTarget = { path: string; token: string }

// Issues signed upload URLs so the browser can push files straight to storage.
export async function createUploadTargets(input: {
  mediaFileName: string
  thumbFileName?: string | null
}): Promise<{ media: SignedTarget; thumbnail: SignedTarget | null }> {
  const user = await requireUser()
  const admin = adminClient()

  const mediaExt = safeExt(input.mediaFileName, "bin")
  const mediaPath = `media/${user.id}/${crypto.randomUUID()}.${mediaExt}`
  const { data: mediaData, error: mediaErr } = await admin.storage.from("media").createSignedUploadUrl(mediaPath)
  if (mediaErr || !mediaData) throw new Error(mediaErr?.message ?? "Could not prepare media upload")

  let thumbnail: SignedTarget | null = null
  if (input.thumbFileName) {
    const thumbExt = safeExt(input.thumbFileName, "jpg")
    const thumbPath = `thumbnails/${user.id}/${crypto.randomUUID()}.${thumbExt}`
    const { data: thumbData, error: thumbErr } = await admin.storage.from("media").createSignedUploadUrl(thumbPath)
    if (thumbErr || !thumbData) throw new Error(thumbErr?.message ?? "Could not prepare thumbnail upload")
    thumbnail = { path: thumbData.path, token: thumbData.token }
  }

  return {
    media: { path: mediaData.path, token: mediaData.token },
    thumbnail,
  }
}

// Persists the metadata row after the files are in storage.
export async function saveMediaItem(input: {
  title: string
  category: MediaCategory
  media_type: MediaType
  meta?: string | null
  duration?: string | null
  description?: string | null
  mediaPath: string
  thumbnailPath?: string | null
}): Promise<MediaItem> {
  const user = await requireUser()
  const admin = adminClient()

  const title = input.title.trim()
  if (!title) throw new Error("Title is required")
  if (!MEDIA_CATEGORIES.some((c) => c.value === input.category)) throw new Error("Invalid section")
  if (input.media_type !== "video" && input.media_type !== "audio") throw new Error("Invalid media type")
  if (!input.mediaPath) throw new Error("Missing uploaded media")

  const mediaUrl = admin.storage.from("media").getPublicUrl(input.mediaPath).data.publicUrl
  const thumbnailUrl = input.thumbnailPath
    ? admin.storage.from("media").getPublicUrl(input.thumbnailPath).data.publicUrl
    : null

  const { data, error } = await admin
    .from("media_items")
    .insert({
      title,
      category: input.category,
      media_type: input.media_type,
      meta: input.meta?.trim() || null,
      duration: input.duration?.trim() || null,
      description: input.description?.trim() || null,
      media_url: mediaUrl,
      thumbnail_url: thumbnailUrl,
      created_by: user.id,
    })
    .select("*")
    .single()

  if (error) throw new Error(error.message)

  revalidatePath("/")
  revalidatePath("/admin")
  return data as MediaItem
}

export async function deleteMediaItem(id: string): Promise<void> {
  await requireUser()
  const admin = adminClient()
  const { error } = await admin.from("media_items").delete().eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/")
  revalidatePath("/admin")
}
