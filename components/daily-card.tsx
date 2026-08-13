"use client"

import { useState } from "react"
import { affirmations, oracleCards } from "@/lib/data"

export function DailyCard() {
  const [flipped, setFlipped] = useState(false)
  const [card, setCard] = useState(oracleCards[0])
  const [affirmation, setAffirmation] = useState(affirmations[0])

  const toggleOracle = () => {
    setFlipped((prev) => {
      if (!prev) {
        setCard(oracleCards[Math.floor(Math.random() * oracleCards.length)])
      }
      return !prev
    })
  }

  const drawAffirmation = () => {
    setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)])
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      toggleOracle()
    }
  }

  return (
    <section className="daily dark" id="daily">
      <div className="wrap daily-grid">
        <div
          className={`oracle${flipped ? " flipped" : ""}`}
          role="button"
          tabIndex={0}
          aria-label="Tap to draw today's card"
          onClick={toggleOracle}
          onKeyDown={onKeyDown}
        >
          <div className="oracle-inner">
            <div className="oracle-face oracle-front">
              <div className="glyph">◐</div>
              <span>Tap to draw today&apos;s card</span>
            </div>
            <div className="oracle-face oracle-back">
              <h3>{card.title}</h3>
              <p>{card.meaning}</p>
            </div>
          </div>
        </div>
        <div className="daily-copy">
          <p className="eyebrow">Daily ritual</p>
          <h2>Your card &amp; affirmation of the day</h2>
          <p className="lede" style={{ color: "var(--text-on-dark-muted)" }}>
            A one-minute practice to open your day with intention — draw a card,
            sit with the affirmation, carry it with you.
          </p>
          <div className="affirmation-box">
            <p>&ldquo;{affirmation}&rdquo;</p>
          </div>
          <button className="small-link" onClick={drawAffirmation}>
            Draw a new affirmation →
          </button>
        </div>
      </div>
    </section>
  )
}
