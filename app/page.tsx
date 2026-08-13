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
import {
  medFilters,
  medItems,
  moveFilters,
  moveItems,
  musicItems,
  yogaFilters,
  yogaItems,
} from "@/lib/data"

export default function Page() {
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
          items={medItems}
          filters={medFilters}
          note="The same card + filter pattern powers the Yoga, Sound, Music and Movement sections — one library structure, different content."
        />

        <DailyCard />

        <LibrarySection
          id="yoga"
          title="Yoga — yin & soft flow"
          intro="Slow, tissue-deep yin holds and gentle vinyasa flows. Nothing punishing — everything restorative."
          items={yogaItems}
          filters={yogaFilters}
        />

        <Frequencies />

        <LibrarySection
          id="music"
          title="Grounding & motivational music"
          intro="Drumming, rhythm and low-fi motivational tracks for grounding, walking and pre-training focus."
          items={musicItems}
        />

        <PulseDivider variant="clay" />

        <LibrarySection
          id="movement"
          title="Strength & small movement"
          intro="Full strength sessions and short mobility snacks — pick your window, from 5 minutes to 45."
          items={moveItems}
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
