import { redirect } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import type { MediaItem } from "@/lib/media"
import { MediaManager } from "@/components/admin/media-manager"
import { SignOutButton } from "@/components/admin/sign-out-button"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: items } = await supabase
    .from("media_items")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="admin-page">
      <header className="admin-topbar">
        <div className="wrap">
          <div className="admin-brand">
            Stillpoint<span>Studio</span>
          </div>
          <div className="admin-actions">
            <Link href="/" target="_blank" rel="noreferrer">
              View site
            </Link>
            <SignOutButton />
          </div>
        </div>
      </header>

      <div className="wrap">
        <MediaManager initialItems={(items as MediaItem[]) ?? []} />
      </div>
    </div>
  )
}
