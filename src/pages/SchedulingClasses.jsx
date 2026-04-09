import { useEffect } from 'react';

export default function SchedulingClasses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">📅 Operations</div>
            <h1>Intelligent Class Scheduling</h1>
            <p>Smart scheduling, automated bookings, capacity management, and instructor assignment. Maximize attendance and minimize no-shows.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Class Management Reimagined</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📆</div>
              <h3>Automated Scheduling</h3>
              <p>AI-powered schedule optimization suggests optimal class times and durations based on demand patterns.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💺</div>
              <h3>Capacity Management</h3>
              <p>Set room capacity limits, manage waitlists, and auto-rotate students when spots open up.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔔</div>
              <h3>Smart Notifications</h3>
              <p>Automated reminders reduce no-shows. Send SMS/email reminders 24hrs and 2hrs before class.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Staff Management</h3>
              <p>Assign instructors, manage certifications, track PT slots, and handle instructor schedules.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Member App Integration</h3>
              <p>Members book classes, view schedules, and get notifications all through the mobile app.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Class Analytics</h3>
              <p>Track attendance, instructor performance, class popularity, and revenue per class.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container-custom">
          <h2>Smart Class Scheduling in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Visual Class Calendar</p>
                  <p>Intuitive drag-and-drop calendar for viewing and managing all classes. Color-coded by instructor and type.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Automated Attendance</p>
                  <p>Biometric check-ins automatically track attendance. Waitlist management moves members up as spots open.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container-custom">
          <h2>Maximize Class Revenue</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Reduce No-Shows</h3>
              <p>Automated reminders reduce no-show rates by 60%, keeping classes full and instructors motivated.</p>
            </div>
            <div className="case-card">
              <h3>Optimize Instructor Rotation</h3>
              <p>Smart scheduling balances instructor workload and ensures consistent class quality.</p>
            </div>
            <div className="case-card">
              <h3>Launch New Classes</h3>
              <p>Data-driven insights show demand for new class types. Launch with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>Class Scheduling integrates with every PULSE module for complete operational management.</p>
          <div className="integration-items">
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Trainer & Staff</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Biometric Attendance</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Member Management</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Communication</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-stats">
        <div className="container-custom">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">60%</div>
              <div className="stat-label">No-Show Reduction</div>
            </div>
            <div className="stat">
              <div className="stat-value">12hrs</div>
              <div className="stat-label">Monthly Admin Saved</div>
            </div>
            <div className="stat">
              <div className="stat-value">34%</div>
              <div className="stat-label">Class Revenue Increase</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cta">
        <div className="container-custom">
          <h2>Build a Full Class Schedule</h2>
          <p>Automated scheduling and member engagement that fills every class.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
