export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="eyebrow">Holistic health &amp; wellbeing</p>
        <h1 className="text-balance">
          A quieter kind of <em>strength</em>, built from the inside out.
        </h1>
        <p className="lede">
          Meditation, sound healing, movement and mindset work in one place — a
          library to return to daily, and a coach in your corner when you need
          one.
        </p>
        <div className="hero-actions">
          <a href="#meditation" className="btn btn-primary">
            Explore the library
          </a>
          <a href="#booking" className="btn btn-ghost">
            Book a 1:1 call
          </a>
        </div>
      </div>
      <div className="hero-wave pulse-divider" aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            className="pulse-line"
            d="M0,30 L120,30 L145,8 L170,52 L195,30 L340,30 L365,14 L390,46 L415,30 L600,30 L625,4 L650,56 L675,30 L860,30 L885,12 L910,48 L935,30 L1200,30"
          />
        </svg>
      </div>
    </section>
  )
}
