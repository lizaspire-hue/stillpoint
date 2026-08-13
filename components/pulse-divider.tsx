type PulseDividerProps = {
  variant?: "sage" | "dusk" | "clay"
}

const PATHS: Record<NonNullable<PulseDividerProps["variant"]>, string> = {
  sage: "M0,28 L200,28 L225,6 L250,50 L275,28 L500,28 L525,10 L550,46 L575,28 L800,28 L825,4 L850,52 L875,28 L1200,28",
  dusk: "M0,28 L200,28 L225,6 L250,50 L275,28 L500,28 L525,10 L550,46 L575,28 L800,28 L825,4 L850,52 L875,28 L1200,28",
  clay: "M0,28 L160,28 L185,10 L210,46 L235,28 L460,28 L485,4 L510,52 L535,28 L760,28 L785,14 L810,42 L835,28 L1200,28",
}

const STROKE: Record<NonNullable<PulseDividerProps["variant"]>, string> = {
  sage: "var(--sage)",
  dusk: "var(--dusk)",
  clay: "var(--clay)",
}

export function PulseDivider({ variant = "sage" }: PulseDividerProps) {
  return (
    <div className="pulse-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 56" preserveAspectRatio="none">
        <path
          className="pulse-line"
          style={{ stroke: STROKE[variant] }}
          d={PATHS[variant]}
        />
      </svg>
    </div>
  )
}
