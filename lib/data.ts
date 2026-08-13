export type LibraryItem = {
  title: string
  tag: string
  cat: string
  duration: string
  desc: string
}

export type Filter = { label: string; value: string }

export const medFilters: Filter[] = [
  { label: "All", value: "all" },
  { label: "Sleep", value: "sleep" },
  { label: "Anxiety", value: "anxiety" },
  { label: "Focus", value: "focus" },
  { label: "Morning", value: "morning" },
]

export const medItems: LibraryItem[] = [
  { title: "Deep Sleep Wind-Down", tag: "Sleep", cat: "sleep", duration: "22 min", desc: "A body-scan led descent into sleep, for restless nights." },
  { title: "Calming the Anxious Mind", tag: "Anxiety", cat: "anxiety", duration: "12 min", desc: "Breath-led regulation for when your thoughts are moving faster than you are." },
  { title: "Morning Clarity", tag: "Morning", cat: "morning", duration: "8 min", desc: "A short grounding practice to open the day with intention." },
  { title: "Focus Before Work", tag: "Focus", cat: "focus", duration: "10 min", desc: "Settle a scattered mind before a big task or meeting." },
  { title: "Releasing the Day", tag: "Sleep", cat: "sleep", duration: "18 min", desc: "Unwind the nervous system before bed." },
  { title: "Steady in Uncertainty", tag: "Anxiety", cat: "anxiety", duration: "15 min", desc: "For the moments that feel bigger than you can hold alone." },
]

export const yogaFilters: Filter[] = [
  { label: "All", value: "all" },
  { label: "Yin", value: "yin" },
  { label: "Soft flow", value: "flow" },
  { label: "Restorative", value: "restorative" },
]

export const yogaItems: LibraryItem[] = [
  { title: "Yin for Tight Hips", tag: "Yin", cat: "yin", duration: "35 min", desc: "Long, passive holds to release deep connective tissue." },
  { title: "Soft Flow — Full Body", tag: "Soft flow", cat: "flow", duration: "28 min", desc: "A gentle, breath-led sequence to move the whole body." },
  { title: "Restorative Evening Wind-Down", tag: "Restorative", cat: "restorative", duration: "20 min", desc: "Supported poses to shift out of a busy day." },
  { title: "Yin for the Spine", tag: "Yin", cat: "yin", duration: "30 min", desc: "Gentle spinal release for desk-heavy days." },
  { title: "Slow Sun Salutations", tag: "Soft flow", cat: "flow", duration: "18 min", desc: "A softened take on the classic sequence." },
  { title: "Rest & Restore", tag: "Restorative", cat: "restorative", duration: "25 min", desc: "Deeply supported, prop-led recovery practice." },
]

export const musicItems: LibraryItem[] = [
  { title: "Heartbeat Drumming", tag: "Drumming", cat: "drumming", duration: "14 min", desc: "Steady, low drumming for grounding and presence." },
  { title: "Earth Rhythm", tag: "Grounding", cat: "grounding", duration: "20 min", desc: "Layered percussion for walking or seated grounding." },
  { title: "Rise Playlist", tag: "Motivational", cat: "motivational", duration: "45 min", desc: "A build of low-fi motivational tracks for training days." },
  { title: "Shamanic Drum Journey", tag: "Drumming", cat: "drumming", duration: "25 min", desc: "A longer drumming journey for deeper meditative states." },
]

export const moveFilters: Filter[] = [
  { label: "All", value: "all" },
  { label: "Strength", value: "strength" },
  { label: "Small movement", value: "mobility" },
  { label: "Rehab-friendly", value: "rehab" },
]

export const moveItems: LibraryItem[] = [
  { title: "Full Body Strength — 40 min", tag: "Strength", cat: "strength", duration: "40 min", desc: "A complete strength session, minimal equipment." },
  { title: "5-Minute Mobility Snack", tag: "Small movement", cat: "mobility", duration: "5 min", desc: "A quick reset for stiff shoulders and hips at your desk." },
  { title: "Rehab-Friendly Lower Body", tag: "Rehab-friendly", cat: "rehab", duration: "22 min", desc: "Low-impact strength work, built for returning from injury." },
  { title: "Strength for Beginners", tag: "Strength", cat: "strength", duration: "30 min", desc: "A confident starting point if you're new to training." },
  { title: "10-Minute Morning Mobility", tag: "Small movement", cat: "mobility", duration: "10 min", desc: "Wake the body up gently before the day begins." },
  { title: "Postnatal-Friendly Strength", tag: "Rehab-friendly", cat: "rehab", duration: "25 min", desc: "Rebuilding strength with care, at your own pace." },
]

export type Frequency = { hz: string; name: string; desc: string }

export const freqItems: Frequency[] = [
  { hz: "396", name: "Liberating Guilt", desc: "Releasing fear and guilt, grounding the root." },
  { hz: "432", name: "Natural Tuning", desc: "A calming, harmonic alternative to standard pitch." },
  { hz: "528", name: "Transformation", desc: "Associated with repair, clarity and manifestation." },
  { hz: "639", name: "Connection", desc: "Supports relationships and open communication." },
  { hz: "741", name: "Intuition", desc: "Clears mental clutter, sharpens problem-solving." },
  { hz: "852", name: "Spiritual Order", desc: "Quietens the mind, opens inner awareness." },
  { hz: "963", name: "Higher Awareness", desc: "Deep stillness, associated with insight." },
  { hz: "174", name: "Pain Relief", desc: "A low, grounding tone for physical tension." },
]

export type OracleCard = { title: string; meaning: string }

export const oracleCards: OracleCard[] = [
  { title: "The Well", meaning: "You have more resourced than you think. Draw from what's already yours before reaching outward." },
  { title: "The Open Door", meaning: "Something is asking for your yes. Notice where you've been hesitating out of habit, not truth." },
  { title: "Roots", meaning: "Slow down before you scale up. What you build now needs a steady base." },
  { title: "The Tide", meaning: "Energy moves in cycles, not straight lines. Rest is part of the momentum, not a break from it." },
  { title: "The Mirror", meaning: "What you're noticing in others may be worth turning back toward yourself, gently." },
  { title: "The Ember", meaning: "You don't need a blaze today. Tend the small, steady thing that's already alight." },
]

export const affirmations: string[] = [
  "I am not behind. I am exactly where my body and mind needed me to arrive.",
  "Strength is something I return to, not something I have to prove today.",
  "I trust the pace my nervous system is asking for.",
  "I am allowed to want more, and to rest while I build it.",
  "My worth was never up for negotiation.",
  "Today I choose one small, honest action over a perfect plan.",
]
