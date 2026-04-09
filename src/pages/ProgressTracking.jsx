import { useEffect } from 'react';

export default function ProgressTracking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">📈 Motivation</div>
            <h1>Advanced Progress Tracking</h1>
            <p>Visual fitness progress tracking, body metrics, achievement milestones, and social features that keep members motivated.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Celebrate Member Achievements</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Body Metrics Tracking</h3>
              <p>Log weight, body fat %, measurements, and photos. Track changes over time with visual timelines.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Goal Milestones</h3>
              <p>Set fitness goals and celebrate milestones. Automated notifications on achievements.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3>Strength Tracking</h3>
              <p>Log workout performance, personal records, and progression over time.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Leaderboards</h3>
              <p>Friendly competition through class attendance, weight loss, and strength gain leaderboards.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎖️</div>
              <h3>Badges & Rewards</h3>
              <p>Gamified achievements unlock badges. Reward top performers with real incentives.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Social Sharing</h3>
              <p>Members share progress on social media. Word-of-mouth marketing from proud members.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container-custom">
          <h2>Progress Tracking in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Visual Progress Analytics</p>
                  <p>Interactive charts show body metrics changes over time. Progress photos create visual motivation.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Gamified Achievements</p>
                  <p>Unlock badges, climb leaderboards, and share achievements. Community competition drives engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container-custom">
          <h2>Drive Engagement & Retention</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Boost Motivation</h3>
              <p>Visualizing progress keeps members motivated and committed to their fitness journey.</p>
            </div>
            <div className="case-card">
              <h3>Build Community</h3>
              <p>Leaderboards and social features create friendly competition and community spirit.</p>
            </div>
            <div className="case-card">
              <h3>Increase Retention</h3>
              <p>Progress tracking and achievements significantly improve member retention rates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>Progress Tracking integrates with all PULSE modules to create a comprehensive member engagement experience.</p>
          <div className="integration-items">
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>AI Workout & Diet Plans</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Member Management</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Analytics & Reporting</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Communication & Marketing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-stats">
        <div className="container-custom">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">87%</div>
              <div className="stat-label">Engagement Increase</div>
            </div>
            <div className="stat">
              <div className="stat-value">64%</div>
              <div className="stat-label">Retention Improvement</div>
            </div>
            <div className="stat">
              <div className="stat-value">3.2x</div>
              <div className="stat-label">Social Sharing Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cta">
        <div className="container-custom">
          <h2>Celebrate Every Achievement</h2>
          <p>Progress tracking that motivates members and drives lasting behavior change.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
