"use client"

import { useState } from "react"
import type { Filter, LibraryItem } from "@/lib/data"

function LibraryCard({ item }: { item: LibraryItem }) {
  return (
    <div className="card">
      <div className="card-media">
        <div className="play">&#9658;</div>
        <span className="card-duration">{item.duration}</span>
      </div>
      <div className="card-body">
        <span className="card-tag">{item.tag}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  )
}

type LibrarySectionProps = {
  id: string
  eyebrow?: string
  title: string
  intro: string
  items: LibraryItem[]
  filters?: Filter[]
  className?: string
  note?: string
}

export function LibrarySection({
  id,
  eyebrow = "Library",
  title,
  intro,
  items,
  filters,
  className,
  note,
}: LibrarySectionProps) {
  const [active, setActive] = useState("all")

  const visible =
    active === "all" ? items : items.filter((i) => i.cat === active)

  return (
    <section id={id} className={className}>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>

        {filters && filters.length > 0 && (
          <div className="filters">
            {filters.map((f) => (
              <button
                key={f.value}
                className={`chip${active === f.value ? " active" : ""}`}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid">
          {visible.map((item) => (
            <LibraryCard key={item.title} item={item} />
          ))}
        </div>

        {note && <p className="library-note">{note}</p>}
      </div>
    </section>
  )
}
