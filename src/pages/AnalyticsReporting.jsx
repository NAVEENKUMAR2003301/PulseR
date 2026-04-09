import { useEffect } from 'react';

export default function AnalyticsReporting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">📊 Intelligence</div>
            <h1>Powerful Analytics & Reporting</h1>
            <p>Real-time dashboards, custom reports, predictive analytics, and actionable insights to drive business decisions.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Data-Driven Decision Making</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Real-Time Dashboards</h3>
              <p>Live KPI dashboards updated continuously. View key metrics at a glance.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>Custom Reports</h3>
              <p>Build unlimited custom reports. Export to PDF, Excel, or schedule automated emails.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤖</div>
              <h3>Predictive Analytics</h3>
              <p>AI predicts member churn, identifies growth opportunities, and recommends actions.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Member Segmentation</h3>
              <p>Automatic member segmentation based on behavior, demographics, and engagement.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💹</div>
              <h3>Revenue Analytics</h3>
              <p>Track revenue by source, member, class, trainer, and more. Identify trends and opportunities.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Goal Tracking</h3>
              <p>Set business goals and track progress in real-time. Get alerts when off track.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container-custom">
          <h2>Analytics & Dashboards in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Executive Dashboard</p>
                  <p>Real-time KPIs at a glance: revenue, member count, churn rate, repeat class attendance, and more.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Custom Report Builder</p>
                  <p>Unlimited reports with filters, drill-down capabilities, and scheduled automatic delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container-custom">
          <h2>Make Smarter Decisions</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Predict Churn Early</h3>
              <p>AI identifies at-risk members weeks before they cancel, giving time to intervene.</p>
            </div>
            <div className="case-card">
              <h3>Optimize Class Pricing</h3>
              <p>Analytics show which classes have untapped pricing potential based on demand.</p>
            </div>
            <div className="case-card">
              <h3>Resource Allocation</h3>
              <p>Understand peak hours and member distribution to optimize staffing and equipment allocation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>Analytics & Reporting integrates with all PULSE modules to provide comprehensive business intelligence.</p>
          <div className="integration-items">
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Member Management</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Payments & Billing</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Class Scheduling</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Biometric Attendance</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-stats">
        <div className="container-custom">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">68%</div>
              <div className="stat-label">Better Decisions</div>
            </div>
            <div className="stat">
              <div className="stat-value">45%</div>
              <div className="stat-label">Revenue Increase</div>
            </div>
            <div className="stat">
              <div className="stat-value">72%</div>
              <div className="stat-label">Churn Reduction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cta">
        <div className="container-custom">
          <h2>Transform Data Into Action</h2>
          <p>Intelligence-driven insights that drive growth and profitability.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
