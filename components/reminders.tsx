"use client"

import { useState } from "react"

const INITIAL: string[] = [
  "I train for the woman I'm becoming, not the one I was.",
  "Rest is productive.",
]

export function Reminders() {
  const [reminders, setReminders] = useState<string[]>(INITIAL)
  const [value, setValue] = useState("")

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    const text = value.trim()
    if (!text) return
    setReminders((prev) => [...prev, text])
    setValue("")
  }

  const remove = (index: number) => {
    setReminders((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <section className="reminders dark" id="reminders">
      <div className="wrap">
        <div
          className="section-head"
          style={{ margin: "0 auto 48px", textAlign: "center" }}
        >
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Your space
          </p>
          <h2>Your affirmations &amp; goal reminders</h2>
          <p>
            Write the words you want to come back to. They&apos;ll sit here,
            ready whenever you need them.
          </p>
        </div>
        <div className="reminders-panel">
          <form className="reminders-form" onSubmit={add}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. I train for the woman I'm becoming, not the one I was"
              maxLength={140}
              aria-label="New reminder"
            />
            <button type="submit">Add</button>
          </form>
          <ul className="reminders-list">
            {reminders.length === 0 ? (
              <li className="reminders-empty">
                No reminders yet — add the first one above.
              </li>
            ) : (
              reminders.map((text, i) => (
                <li key={`${text}-${i}`}>
                  <span>{text}</span>
                  <button
                    onClick={() => remove(i)}
                    aria-label="Remove reminder"
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
          <p className="reminders-note">
            Reminders live in this browser session for now. Connect a database
            and accounts to have each member&apos;s reminders persist and sync
            across devices.
          </p>
        </div>
      </div>
    </section>
  )
}
