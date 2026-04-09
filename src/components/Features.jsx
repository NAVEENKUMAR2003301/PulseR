import { featuresData } from '../constants/data';

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container-custom">
        <div className="section-header">
          <h2>10 Powerful Modules</h2>
          <p>Everything you need to run a world-class fitness business</p>
        </div>

        <div className="features-grid-large">
          {featuresData.map((feature, index) => (
            <a key={index} href={feature.link} className="feature-card feature-link">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-link-arrow">→</div>
              <div className="feature-accent"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
