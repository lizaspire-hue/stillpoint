export function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-portrait">
          <img
            src="/images/spiral.png"
            alt="Strong Point emblem — a warm terracotta spiral representing a continuous journey of small decisions"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Why mindset comes first</p>
          <h2 className="text-balance">
            Holistic wellbeing isn&apos;t a mood. It&apos;s an infrastructure.
          </h2>
          <p>
            Twenty years of coaching has taught me the same lesson from every
            angle: the body will only carry what the mind believes it can.{" "}
            <strong>
              Strength training without nervous-system regulation burns people
              out. Nutrition without self-worth becomes another rule to fail at.
            </strong>{" "}
            Real change happens when mindset, movement and rest are trained
            together, not treated as separate projects.
          </p>
          <p>
            This platform holds the practices I use with clients every week —
            meditation, sound, gentle yoga, affirmation and honest nutrition
            guidance — so you can build a daily relationship with your own
            regulation, not just book a session and hope it sticks.
          </p>
          <a href="#booking" className="small-link">
            Work with me directly →
          </a>
          <div className="pillars">
            <div className="pillar">
              <p className="eyebrow">Regulate</p>
              <p>Nervous-system-first practices before anything physical.</p>
            </div>
            <div className="pillar">
              <p className="eyebrow">Rebuild</p>
              <p>Strength and movement that respects where you are today.</p>
            </div>
            <div className="pillar">
              <p className="eyebrow">Return</p>
              <p>Small daily rituals that outlast any single session.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
