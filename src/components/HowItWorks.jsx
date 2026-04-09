export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Streamline Operations',
      description: 'Replace scattered spreadsheets and manual tracking with intelligent automation across all business functions.'
    },
    {
      number: '02',
      title: 'Empower Members',
      description: 'Give members tools to track progress, book classes, and follow personalized AI-driven fitness plans.'
    },
    {
      number: '03',
      title: 'Maximize Revenue',
      description: 'Optimize pricing, reduce churn, and unlock new revenue streams with data-driven insights.'
    },
    {
      number: '04',
      title: 'Scale Confidently',
      description: 'Every system is built to grow with your business, from single locations to multi-site chains.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container-custom">
        <div className="section-header">
          <h2>How PULSE Transforms Your Business</h2>
          <p>A strategic approach to gym management, powered by data and automation</p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
