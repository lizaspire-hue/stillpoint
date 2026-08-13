import { freqItems } from "@/lib/data"

export function Frequencies() {
  return (
    <section className="frequencies" id="sound">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Library</p>
          <h2>Sound frequency library</h2>
          <p>
            Solfeggio and healing frequencies for regulation, release and
            manifestation work. Headphones recommended.
          </p>
        </div>
        <div className="freq-grid">
          {freqItems.map((f) => (
            <div className="freq-card" key={f.hz + f.name}>
              <div className="freq-hz">
                {f.hz} <span>Hz</span>
              </div>
              <h3>{f.name}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
