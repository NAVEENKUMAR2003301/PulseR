export default function ComparisonSection() {
  const features = [
    { name: 'Core Member Management', pulse: true, competitor: true },
    { name: 'Biometric Integration', pulse: true, competitor: false },
    { name: 'AI Workout Plans', pulse: true, competitor: false },
    { name: 'Advanced Analytics', pulse: true, competitor: true },
    { name: 'Marketing Automation', pulse: true, competitor: false },
    { name: '24/7 Priority Support', pulse: true, competitor: false },
    { name: 'Custom White Label', pulse: true, competitor: false },
    { name: 'API Access', pulse: true, competitor: true },
    { name: 'Mobile App', pulse: true, competitor: true },
    { name: 'Unlimited Users', pulse: true, competitor: false },
  ];

  return (
    <section className="comparison-section">
      <div className="container-custom">
        <h2>Why PULSE Stands Out</h2>
        <p className="section-subtitle">Feature comparison with industry leaders</p>
        
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>PULSE</th>
                <th>Competitors</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="feature-name">{feature.name}</td>
                  <td className="pulse-col">
                    {feature.pulse ? <span className="checkmark">✓</span> : <span className="x">✗</span>}
                  </td>
                  <td className="competitor-col">
                    {feature.competitor ? <span className="checkmark">✓</span> : <span className="x">✗</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
