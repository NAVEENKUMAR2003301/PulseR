export default function PremiumBenefits() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Enterprise-grade performance with sub-second response times'
    },
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'End-to-end encryption with SOC 2 Type II compliance'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Fully responsive design optimized for all devices'
    },
    {
      icon: '🤖',
      title: 'AI Intelligence',
      description: 'Machine learning powered insights and recommendations'
    },
    {
      icon: '🌍',
      title: 'Global Scale',
      description: 'Serve customers across 150+ countries with local support'
    },
    {
      icon: '🔄',
      title: '24/7 Integration',
      description: 'Seamless API integration with 500+ third-party services'
    }
  ];

  return (
    <section className="premium-benefits">
      <div className="container-custom">
        <h2>Why Choose PULSE?</h2>
        <p className="section-subtitle">Enterprise-grade gym management built for growth</p>
        
        <div className="benefits-showcase">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-highlight">
              <div className="benefit-icon-large">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
