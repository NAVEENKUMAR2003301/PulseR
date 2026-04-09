import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MemberManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Feature Hero */}
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">👥 Core Feature</div>
            <h1>Complete Member Management</h1>
            <p>Comprehensive member lifecycle management from signup to retention. Track profiles, memberships, preferences, and growth with precision.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Why Member Management Matters</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Complete Profiles</h3>
              <p>Centralized member data with photos, contact info, medical history, fitness goals, and preferences all in one place.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💳</div>
              <h3>Membership Tiers</h3>
              <p>Create unlimited membership types, track renewals, auto-billing, and manage subscription statuses effortlessly.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Goal Tracking</h3>
              <p>Help members set fitness goals, track progress, and celebrate milestones. Increase engagement and retention rates.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Member Portal</h3>
              <p>White-labeled mobile app where members manage their profiles, view classes, track attendance, and communicate with trainers.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔍</div>
              <h3>Smart Segmentation</h3>
              <p>Segment members by demographics, interests, activity level, and more. Target marketing and communications precisely.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏰</div>
              <h3>Churn Prevention</h3>
              <p>Early warning system identifies at-risk members. Trigger automated retention campaigns before they cancel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="feature-showcase">
        <div className="container-custom">
          <h2>Intelligent Member Management in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Member Directory</p>
                  <p>Sortable, searchable database with filters for membership type, join date, activity level, and more.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Engagement Dashboard</p>
                  <p>Monitor member activity, class attendance, app usage, and goal progress with visual analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases">
        <div className="container-custom">
          <h2>Real-World Applications</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Onboarding New Members</h3>
              <p>Automated intake forms capture all necessary information. Welcome sequences engage new members from day one.</p>
            </div>
            <div className="case-card">
              <h3>Personalized Communications</h3>
              <p>Segment members and send targeted messages based on their interests, activity level, and goals.</p>
            </div>
            <div className="case-card">
              <h3>Preventing Churn</h3>
              <p>System identifies inactive members and automatically triggers re-engagement campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>Member Management integrates with every PULSE module to create a unified member experience.</p>
          <div className="integration-items">
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Payments & Billing</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Biometric Attendance</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Class Scheduling</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>AI Fitness Plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="feature-stats">
        <div className="container-custom">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">87%</div>
              <div className="stat-label">Avg. Retention Increase</div>
            </div>
            <div className="stat">
              <div className="stat-value">3.2hrs</div>
              <div className="stat-label">Admin Time Saved Weekly</div>
            </div>
            <div className="stat">
              <div className="stat-value">45%</div>
              <div className="stat-label">More Active Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="feature-cta">
        <div className="container-custom">
          <h2>Ready to Master Member Management?</h2>
          <p>See how PULSE transforms member relationships and drives sustainable growth.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
