export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              inner<span style={{ color: "var(--sage)" }}>ly</span>
            </div>
            <p style={{ fontSize: "14px", maxWidth: "260px" }}>
              Holistic wellbeing, mindset and coaching — built to be returned to
              daily.
            </p>
          </div>
          <div>
            <h4>Library</h4>
            <ul>
              <li>
                <a href="#meditation">Meditation</a>
              </li>
              <li>
                <a href="#yoga">Yoga</a>
              </li>
              <li>
                <a href="#sound">Sound</a>
              </li>
              <li>
                <a href="#music">Music</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Practice</h4>
            <ul>
              <li>
                <a href="#movement">Movement</a>
              </li>
              <li>
                <a href="#nutrition">Nutrition</a>
              </li>
              <li>
                <a href="#reminders">Reminders</a>
              </li>
              <li>
                <a href="#daily">Daily card</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="#booking">Book a call</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Innerly. All rights reserved.</span>
          <span>
            Built for a daily practice. · <a href="/admin">Studio</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
