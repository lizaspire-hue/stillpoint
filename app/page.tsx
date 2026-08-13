import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { PulseDivider } from "@/components/pulse-divider"
import { LibrarySection } from "@/components/library-section"
import { DailyCard } from "@/components/daily-card"
import { Frequencies } from "@/components/frequencies"
import { Nutrition } from "@/components/nutrition"
import { Reminders } from "@/components/reminders"
import { Booking } from "@/components/booking"
import { SiteFooter } from "@/components/site-footer"
import { createClient } from "@/lib/supabase/server"
import type { MediaItem } from "@/lib/media"
import {
  medFilters,
  medItems,
  moveFilters,
  moveItems,
  musicItems,
  yogaFilters,
  yogaItems,
  type LibraryItem,
} from "@/lib/data"

export const dynamic = "force-dynamic"

function toLibraryItem(m: MediaItem): LibraryItem {
  return {
    title: m.title,
    tag: m.meta ?? (m.media_type === "audio" ? "Audio" : "Video"),
    cat: (m.meta ?? "").toLowerCase(),
    duration: m.duration ?? "",
    desc: m.description ?? "",
    mediaUrl: m.media_url,
    mediaType: m.media_type,
    thumbnailUrl: m.thumbnail_url,
  }
}

export default async function Page() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("media_items")
    .select("*")
    .order("created_at", { ascending: false })

  const uploaded = (data as MediaItem[]) ?? []
  const byCategory = (cat: string) => uploaded.filter((m) => m.category === cat).map(toLibraryItem)

  // Uploaded media appears first, followed by the starter examples.
  const meditation = [...byCategory("meditation"), ...medItems]
  const yoga = [...byCategory("yoga"), ...yogaItems]
  const music = [...byCategory("music"), ...musicItems]
  const movement = [...byCategory("movement"), ...moveItems]

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />

        <PulseDivider variant="dusk" />

        <LibrarySection
          id="meditation"
          title="Meditation & guided recordings"
          intro="Short and long-form sessions for sleep, anxiety, focus and morning grounding. Filter by what you need today."
          items={meditation}
          filters={medFilters}
          note="Add your own videos and recordings from the studio dashboard — new uploads appear here automatically."
        />

        <DailyCard />

        <LibrarySection
          id="yoga"
          title="Yoga — yin & soft flow"
          intro="Slow, tissue-deep yin holds and gentle vinyasa flows. Nothing punishing — everything restorative."
          items={yoga}
          filters={yogaFilters}
        />

        <Frequencies />

        <LibrarySection
          id="music"
          title="Grounding & motivational music"
          intro="Drumming, rhythm and low-fi motivational tracks for grounding, walking and pre-training focus."
          items={music}
        />

        <PulseDivider variant="clay" />

        <LibrarySection
          id="movement"
          title="Strength & small movement"
          intro="Full strength sessions and short mobility snacks — pick your window, from 5 minutes to 45."
          items={movement}
          filters={moveFilters}
        />

        <Nutrition />
        <Reminders />
        <Booking />
      </main>
      <SiteFooter />
    </>
  )
}
