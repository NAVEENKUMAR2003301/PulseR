import { useState } from 'react';
import { demoTabs, demoContent } from '../constants/data';

export default function Demo() {
  const [activeTab, setActiveTab] = useState(0);
  const content = demoContent[activeTab];

  return (
    <section className="demo">
      <div className="container-custom">
        <div className="section-header">
          <h2>Interactive Demo - Explore Every Feature</h2>
          <p>Click through our live dashboard to see PULSE in action</p>
        </div>

        <div className="demo-tabs">
          {demoTabs.map((tab, index) => (
            <button
              key={index}
              className={`demo-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="demo-icon">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        <div className="demo-content" id="demoContent">
          <h3 className="demo-title">{content.title}</h3>
          <p className="demo-description">{demoTabs[activeTab].description}</p>

          <div className="demo-stats">
            {content.stats.map((stat, index) => (
              <div key={index} className="demo-stat-item">
                <div className="demo-stat-label">{stat.label}</div>
                <div>
                  <span className="demo-stat-value">{stat.value}</span>
                  <span className="demo-stat-change">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="demo-hint">
            💡 Click through the tabs above to explore different areas of your gym's operations.
          </div>
        </div>
      </div>
    </section>
  );
}
