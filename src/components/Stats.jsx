export default function Stats() {
  const stats = [
    { number: '500+', label: 'Active Gym Partners' },
    { number: '2.5M+', label: 'Members Managed Daily' },
    { number: '$480M+', label: 'Annual Revenue Managed' },
    { number: '99.9%', label: 'Platform Uptime' }
  ];

  return (
    <section className="stats-highlight">
      <div className="container-custom">
        <div className="stats-content">
          {stats.map((stat, index) => (
            <div key={index} className="stat-big">
              <div className="stat-number">{stat.number}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
