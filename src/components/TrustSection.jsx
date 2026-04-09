export default function TrustSection() {
  const partners = [
    '🏋️ FitNess Pro Networks',
    '💪 Global Gym Alliance',
    '🏆 Premium Fitness Council',
    '⭐ International Gyms Association',
    '🌟 Wellness Leaders Group',
    '👥 Fitness Innovators Hub'
  ];

  return (
    <section className="trust-section">
      <div className="container-custom">
        <h3>Trusted by Industry Leaders</h3>
        <p>500+ fitness centers across 50+ countries rely on PULSE</p>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-badge">{partner}</div>
          ))}
        </div>

        <div className="trust-metrics">
          <div className="trust-metric">
            <span className="metric-value">500+</span>
            <span className="metric-label">Active Gyms</span>
          </div>
          <div className="trust-metric">
            <span className="metric-value">2.5M+</span>
            <span className="metric-label">Users Managed</span>
          </div>
          <div className="trust-metric">
            <span className="metric-value">99.9%</span>
            <span className="metric-label">Uptime SLA</span>
          </div>
          <div className="trust-metric">
            <span className="metric-value">27+</span>
            <span className="metric-label">Years Industry Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
