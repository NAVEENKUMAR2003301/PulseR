import { useEffect } from 'react';

export default function TrainerStaff() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">👥 Team</div>
            <h1>Complete Trainer & Staff Management</h1>
            <p>Schedule staff, track certifications, manage PT Sessions, monitor performance, and optimize team productivity.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Build and Manage Your Team</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📅</div>
              <h3>Smart Staff Scheduling</h3>
              <p>Automated scheduling respects availability, certifications, and prevents overbooking.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Certification Tracking</h3>
              <p>Track trainer certifications, renewals, and specializations. Automated renewal reminders.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3>PT Session Management</h3>
              <p>Schedule personal training, manage packages, track sessions completed, and collect fees.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⭐</div>
              <h3>Performance Tracking</h3>
              <p>Monitor trainer performance, member satisfaction, revenue generated, and attendance.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Compensation Management</h3>
              <p>Automate trainer payroll based on sessions, classes, or revenue performance.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Staff Portal</h3>
              <p>Trainers access schedules, client info, training notes, and payment history from mobile app.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container-custom">
          <h2>Team Management in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Staff Dashboard</p>
                  <p>View all trainers, their schedules, certifications, and performance metrics at a glance.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">PT Session Booking</p>
                  <p>Members book sessions directly with available trainers. Automated billing and completion tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container-custom">
          <h2>Optimize Your Team</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Reduce Scheduling Conflicts</h3>
              <p>Intelligent scheduling prevents double-booking and respects staff availability preferences.</p>
            </div>
            <div className="case-card">
              <h3>Boost PT Revenue</h3>
              <p>Easy PT management increases trainer efficiency and helps identify upsell opportunities.</p>
            </div>
            <div className="case-card">
              <h3>Maintain Compliance</h3>
              <p>Automatic certification tracking ensures all staff meet required qualifications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>Trainer & Staff Management integrates with all PULSE modules to create a unified team experience.</p>
          <div className="integration-items">
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Class Scheduling</span>
            </div>
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
              <span>Analytics & Reporting</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-stats">
        <div className="container-custom">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">85%</div>
              <div className="stat-label">PT Revenue Increase</div>
            </div>
            <div className="stat">
              <div className="stat-value">15hrs</div>
              <div className="stat-label">Scheduling Time Saved</div>
            </div>
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Team Compliance Tracked</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cta">
        <div className="container-custom">
          <h2>Empower Your Training Team</h2>
          <p>Management tools that help trainers focus on what they do best: transforming members.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
