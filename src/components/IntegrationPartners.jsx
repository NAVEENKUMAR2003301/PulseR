export default function IntegrationPartners() {
  const integrations = [
    { icon: '📊', name: 'Analytics', description: 'Real-time dashboards' },
    { icon: '💳', name: 'Payment', description: 'Multiple gateways' },
    { icon: '📧', name: 'Email', description: 'Campaign automation' },
    { icon: '📱', name: 'SMS', description: 'Member notifications' },
    { icon: '⏰', name: 'Scheduling', description: 'Calendar sync' },
    { icon: '🤖', name: 'AI Tools', description: 'Smart recommendations' },
    { icon: '📹', name: 'Video', description: 'Streaming platform' },
    { icon: '🔐', name: 'Security', description: 'Advanced protection' }
  ];

  return (
    <section className="integration-partners">
      <div className="container-custom">
        <h2>Seamless Integrations</h2>
        <p className="section-subtitle">Connect with 500+ apps and services</p>
        
        <div className="integrations-grid">
          {integrations.map((integration, index) => (
            <div key={index} className="integration-card">
              <div className="integration-icon">{integration.icon}</div>
              <h4>{integration.name}</h4>
              <p>{integration.description}</p>
            </div>
          ))}
        </div>

        <div className="integration-cta">
          <p>Can't find what you need? Our API lets you build custom integrations.</p>
          <button className="btn btn-secondary">Explore API Documentation →</button>
        </div>
      </div>
    </section>
  );
}
