"use client"

import { useState } from "react"

const NAV_LINKS = [
  { href: "#meditation", label: "Meditation" },
  { href: "#daily", label: "Daily card" },
  { href: "#yoga", label: "Yoga" },
  { href: "#sound", label: "Sound" },
  { href: "#music", label: "Music" },
  { href: "#movement", label: "Movement" },
  { href: "#nutrition", label: "Nutrition" },
  { href: "#reminders", label: "Reminders" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="nav">
        <a href="#top" className="logo">
          inner<span>ly</span>
        </a>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#booking" className="nav-cta">
          Book a call
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>
      </nav>
    </header>
  )
}
