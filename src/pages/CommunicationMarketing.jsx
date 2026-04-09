import { useEffect } from 'react';

export default function CommunicationMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">💬 Marketing</div>
            <h1>Intelligent Communication & Marketing</h1>
            <p>Omnichannel marketing automation, email campaigns, SMS outreach, and targeted member engagement at scale.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Engage & Retain Members</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📧</div>
              <h3>Email Campaigns</h3>
              <p>Beautiful, mobile-optimized email templates. Automated segments and personalization.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💬</div>
              <h3>SMS Marketing</h3>
              <p>Fast, high-engagement SMS campaigns. Class reminders, promotions, and alerts.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤖</div>
              <h3>Marketing Automation</h3>
              <p>Workflows trigger automatically based on member actions and milestones.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Targeted Campaigns</h3>
              <p>Segment and target members by activity, interests, behavior, and demographics.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Campaign Analytics</h3>
              <p>Track open rates, click rates, conversions, and ROI for every campaign.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Retention Programs</h3>
              <p>Automated re-engagement campaigns target inactive members with personalized offers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container-custom">
          <h2>Marketing Automation in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Campaign Builder</p>
                  <p>Drag-and-drop campaign creation with templates for onboarding, retention, upsell, and win-back sequences.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Segmentation Engine</p>
                  <p>Create unlimited segments based on member behavior, demographics, and engagement levels automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container-custom">
          <h2>Keep Members Coming Back</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Reduce Churn</h3>
              <p>Automated engagement campaigns keep members motivated and attached to your gym.</p>
            </div>
            <div className="case-card">
              <h3>Drive Class Attendance</h3>
              <p>Smart reminders and class promotions fill classes and reduce no-shows.</p>
            </div>
            <div className="case-card">
              <h3>Increase Revenue</h3>
              <p>Targeted upsell campaigns and promotions drive additional member spending.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>Communication & Marketing integrates with every PULSE module to reach members with the right message at the right time.</p>
          <div className="integration-items">
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Member Management</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Class Scheduling</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Analytics & Reporting</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Progress Tracking</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-stats">
        <div className="container-custom">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">38%</div>
              <div className="stat-label">Churn Reduction</div>
            </div>
            <div className="stat">
              <div className="stat-value">52%</div>
              <div className="stat-label">Email Open Rate</div>
            </div>
            <div className="stat">
              <div className="stat-value">$12K</div>
              <div className="stat-label">Avg. Revenue Increase/Year</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cta">
        <div className="container-custom">
          <h2>Master Member Engagement</h2>
          <p>Sophisticated marketing automation that keeps members engaged and loyal.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
