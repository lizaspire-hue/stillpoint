export type MediaCategory = "meditation" | "yoga" | "music" | "movement"
export type MediaType = "video" | "audio"

export type MediaItem = {
  id: string
  category: MediaCategory
  media_type: MediaType
  title: string
  meta: string | null
  description: string | null
  duration: string | null
  media_url: string
  thumbnail_url: string | null
  created_at: string
}

export const MEDIA_CATEGORIES: { value: MediaCategory; label: string }[] = [
  { value: "meditation", label: "Meditation" },
  { value: "yoga", label: "Yoga" },
  { value: "music", label: "Sound & Music" },
  { value: "movement", label: "Movement" },
]
