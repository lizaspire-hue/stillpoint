export function Booking() {
  return (
    <section className="booking" id="booking">
      <div className="wrap booking-grid">
        <div>
          <p className="eyebrow" style={{ color: "rgba(22,33,27,0.6)" }}>
            Work with me
          </p>
          <h2>Book a 1:1 coaching call</h2>
          <p className="lede">
            Thirty minutes, one to one, to talk through where you are and build
            a plan that actually fits your life — training, mindset, nutrition
            or all three.
          </p>
          <a
            href="#"
            className="btn"
            style={{
              background: "var(--ink)",
              color: "var(--sand)",
              marginTop: "28px",
            }}
          >
            See all available times →
          </a>
        </div>
        <div className="booking-panel">
          <h3>Next available</h3>
          <p>All calls held over video, 30 minutes.</p>
          <div className="booking-slots">
            <div>
              <span>Tue 18 Aug</span>
              <span>10:00</span>
            </div>
            <div>
              <span>Wed 19 Aug</span>
              <span>14:30</span>
            </div>
            <div>
              <span>Fri 21 Aug</span>
              <span>09:00</span>
            </div>
          </div>
          <a href="#" className="btn btn-primary">
            Book this call
          </a>
        </div>
      </div>
    </section>
  )
}
