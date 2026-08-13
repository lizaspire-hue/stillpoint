export type LibraryItem = {
  title: string
  tag: string
  cat: string
  duration: string
  desc: string
  mediaUrl?: string | null
  mediaType?: "video" | "audio" | null
  thumbnailUrl?: string | null
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

export const oracleCards: string[] = [
  "I do less and attract more.",
  "I am committed to bringing forth my greatness.",
  "I will no longer play small.",
  "I release what is no longer mine to carry.",
  "I trust the timing of my own becoming.",
  "I am worthy of the life I am building.",
  "I meet this moment with an open, steady heart.",
  "Abundance flows to me with ease and grace.",
  "I am allowed to take up space.",
  "My presence is enough. I have nothing to prove.",
  "I choose peace over the need to be right.",
  "Everything I need is already within me.",
]

// Colorful abstract gradient backgrounds, drawn at random with each card.
export const cardGradients: string[] = [
  "radial-gradient(120% 120% at 20% 15%, #ff9a8b 0%, #ff6a88 35%, #7b2ff7 100%)",
  "radial-gradient(120% 120% at 80% 10%, #43e97b 0%, #38f9d7 45%, #2b5876 100%)",
  "radial-gradient(120% 120% at 10% 80%, #fddb92 0%, #d1913c 40%, #b621fe 100%)",
  "radial-gradient(120% 120% at 85% 85%, #4facfe 0%, #7367f0 50%, #ce9ffc 100%)",
  "radial-gradient(120% 120% at 15% 20%, #f78ca0 0%, #f9748f 35%, #fd868c 60%, #9f5afd 100%)",
  "radial-gradient(120% 120% at 75% 25%, #21d4fd 0%, #2152ff 55%, #b224ef 100%)",
  "radial-gradient(120% 120% at 25% 90%, #f5576c 0%, #f093fb 45%, #5b247a 100%)",
  "radial-gradient(120% 120% at 90% 60%, #0ba360 0%, #3cba92 40%, #3a1c71 100%)",
]

export const affirmations: string[] = [
  "I am not behind. I am exactly where my body and mind needed me to arrive.",
  "Strength is something I return to, not something I have to prove today.",
  "I trust the pace my nervous system is asking for.",
  "I am allowed to want more, and to rest while I build it.",
  "My worth was never up for negotiation.",
  "Today I choose one small, honest action over a perfect plan.",
]
