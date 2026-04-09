export default function Hero() {
  return (
    <section className="hero">
      <div className="container-custom">
        <div className="hero-content">
          <h1 className="hero-title">
            The Complete Gym Management <span className="gradient-text">Platform</span>
          </h1>
          <p className="hero-subtitle">
            10 powerful modules integrated into one seamless platform. From member management to AI-powered fitness plans, scale your gym with intelligence, efficiency, and unmatched creativity.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Start Free Trial (30 Days) →</button>
            <button className="btn btn-secondary">Explore All Features</button>
          </div>

          <div className="hero-social-proof">
            <span>✓ 500+ Gyms Worldwide</span>
            <span>|</span>
            <span>✓ 2.5M+ Members Managed</span>
            <span>|</span>
            <span>✓ 99.9% Uptime</span>
          </div>
        </div>

        <div className="hero-mockup">
          <div className="mockup-container">
            <div className="mockup-header">Enterprise Dashboard</div>
            <div className="mockup-content">
              <div className="dashboard-grid">
                <div className="dashboard-card">
                  <div className="card-value">1,245</div>
                  <div className="card-label">Active Members</div>
                </div>
                <div className="dashboard-card">
                  <div className="card-value">$34.8K</div>
                  <div className="card-label">Monthly Revenue</div>
                </div>
                <div className="dashboard-card">
                  <div className="card-value">87%</div>
                  <div className="card-label">Attendance Rate</div>
                </div>
                <div className="dashboard-card">
                  <div className="card-value">2.1%</div>
                  <div className="card-label">Churn Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
