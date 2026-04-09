import { useEffect } from 'react';

export default function BiometricAttendance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">🔐 Security & Access</div>
            <h1>Advanced Biometric Attendance</h1>
            <p>Next-generation check-in with facial recognition, fingerprint scanning, and NFC card access. Real-time attendance tracking meets modern security.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Biometric Advantage</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">👤</div>
              <h3>Facial Recognition</h3>
              <p>AI-powered facial recognition for instant, secure member verification. Works in various lighting conditions.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔑</div>
              <h3>Fingerprint Scanning</h3>
              <p>Fast, reliable fingerprint authentication with 99.9% accuracy for member identification.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Mobile Access</h3>
              <p>Members use their smartphones as digital keys. No cards or passwords needed.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏱️</div>
              <h3>Real-Time Tracking</h3>
              <p>Instant check-in data with automatic membership validation and access control.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚨</div>
              <h3>Security & Fraud Prevention</h3>
              <p>Prevent unauthorized access, account sharing, and membership fraud automatically.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Attendance Analytics</h3>
              <p>Detailed attendance reports, member patterns, peak hours, and engagement metrics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container-custom">
          <h2>Biometric Technology in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Multi-Method Check-In</p>
                  <p>Members choose their preferred authentication: facial scan, fingerprint, or NFC tap. All data syncs instantly to the member management system.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Security & Compliance</p>
                  <p>Military-grade encryption, data privacy compliance (GDPR, CCPA), and audit trails for every access event.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container-custom">
          <h2>Smart Access Control</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Reduce Membership Fraud</h3>
              <p>Biometric data ensures only legitimate members access the facility, preventing account sharing.</p>
            </div>
            <div className="case-card">
              <h3>Optimize Peak Hours</h3>
              <p>Data on when members visit helps schedule staff, classes, and equipment maintenance.</p>
            </div>
            <div className="case-card">
              <h3>Contactless Entry</h3>
              <p>Post-pandemic safety with zero-touch access. Facial recognition from 3+ feet away.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>Biometric Attendance integrates with every PULSE module to create a secure, unified gym experience.</p>
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
              <span>Analytics & Reporting</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-stats">
        <div className="container-custom">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Recognition Accuracy</div>
            </div>
            <div className="stat">
              <div className="stat-value">0.5s</div>
              <div className="stat-label">Check-In Time</div>
            </div>
            <div className="stat">
              <div className="stat-value">92%</div>
              <div className="stat-label">Fraud Prevention Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cta">
        <div className="container-custom">
          <h2>Step Into the Future of Gym Access</h2>
          <p>Advanced biometric technology with enterprise-grade security and member convenience.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
