import { useEffect } from 'react';

export default function InventoryEquipment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">🛠️ Operations</div>
            <h1>Smart Inventory & Equipment Management</h1>
            <p>Track assets, schedule preventive maintenance, manage inventory, and optimize facility operations.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Maximize Equipment ROI</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📋</div>
              <h3>Equipment Tracking</h3>
              <p>Complete inventory of all equipment with serial numbers, purchase dates, and condition status.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚙️</div>
              <h3>Maintenance Scheduling</h3>
              <p>Automated preventive maintenance schedules. Service reminders prevent unexpected breakdowns.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📦</div>
              <h3>Stock Management</h3>
              <p>Track supplies, supplements, merchandise. Auto-reorder when stock falls below thresholds.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>Work Orders</h3>
              <p>Create maintenance tickets, assign to staff, track completion, and monitor costs.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Asset Depreciation</h3>
              <p>Track equipment value, depreciation, and ROI across your facility.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Facility Planning</h3>
              <p>Data-driven insights on equipment usage help justify upgrades and replacements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container-custom">
          <h2>Equipment Management in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Equipment Inventory</p>
                  <p>Complete equipment database with photos, specifications, purchase info, and maintenance history.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Maintenance Calendar</p>
                  <p>Visual calendar with automated maintenance reminders and work order tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container-custom">
          <h2>Operate Efficiently</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Prevent Equipment Downtime</h3>
              <p>Predictive maintenance prevents unexpected breakdowns that hurt member experience.</p>
            </div>
            <div className="case-card">
              <h3>Reduce Costs</h3>
              <p>Preventive maintenance extends equipment life and reduces repair costs.</p>
            </div>
            <div className="case-card">
              <h3>Optimize Purchases</h3>
              <p>Usage data justifies new equipment purchases and shows ROI to stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>Inventory & Equipment Management integrates with all PULSE modules to support facility operations.</p>
          <div className="integration-items">
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Payments & Billing</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Trainer & Staff</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Analytics & Reporting</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Class Scheduling</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-stats">
        <div className="container-custom">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">68%</div>
              <div className="stat-label">Downtime Reduction</div>
            </div>
            <div className="stat">
              <div className="stat-value">35%</div>
              <div className="stat-label">Maintenance Cost Savings</div>
            </div>
            <div className="stat">
              <div className="stat-value">4yrs</div>
              <div className="stat-label">Avg. Equipment Lifespan Extended</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cta">
        <div className="container-custom">
          <h2>Keep Your Facility Running Smoothly</h2>
          <p>Proactive asset management that keeps equipment and facilities in peak condition.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
