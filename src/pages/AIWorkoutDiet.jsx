import { useEffect } from 'react';

export default function AIWorkoutDiet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">🤖 Next-Gen</div>
            <h1>AI-Powered Workout & Diet Plans</h1>
            <p>Personalized fitness programs and nutrition plans powered by AI. Scale 1-on-1 coaching to every member.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Intelligent Fitness Coaching</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3>Personalized Workouts</h3>
              <p>AI generates customized workout plans based on member goals, fitness level, and preferences.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🥗</div>
              <h3>Nutritional Guidance</h3>
              <p>AI-crafted meal plans personalized to fitness goals, dietary restrictions, and preferences.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Mobile Integration</h3>
              <p>Members access AI-generated plans on mobile, track workouts, and get real-time modifications.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Goal-Based Progression</h3>
              <p>AI adjusts difficulty based on member progress toward their fitness goals.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📹</div>
              <h3>Form Correction</h3>
              <p>Computer vision technology analyzes form and provides real-time feedback and corrections.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⭐</div>
              <h3>AI Coaching</h3>
              <p>24/7 AI assistant answers member questions about exercises, nutrition, and techniques.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container-custom">
          <h2>AI Coaching in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">AI Workout Generator</p>
                  <p>Members answer questions about their goals and fitness level. AI instantly generates customized workouts.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Form Analysis & Correction</p>
                  <p>Mobile app uses phone camera to analyze exercise form and provide real-time corrections through augmented reality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container-custom">
          <h2>Enhance Member Outcomes</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Scale PT Services</h3>
              <p>AI coaching extends PT capabilities, allowing one trainer to serve more members effectively.</p>
            </div>
            <div className="case-card">
              <h3>Improve Retention</h3>
              <p>Personalized AI plans increase member engagement and results, driving longer membership tenure.</p>
            </div>
            <div className="case-card">
              <h3>Reduce Injuries</h3>
              <p>Form correction technology prevents improper technique that leads to injuries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>AI Workout & Diet Plans integrates with all PULSE modules to create comprehensive member coaching.</p>
          <div className="integration-items">
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Progress Tracking</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Member Management</span>
            </div>
            <div className="integration-item">
              <i className="fas fa-link"></i>
              <span>Trainer & Staff</span>
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
              <div className="stat-value">73%</div>
              <div className="stat-label">Goal Completion Rate</div>
            </div>
            <div className="stat">
              <div className="stat-value">81%</div>
              <div className="stat-label">Engagement Increase</div>
            </div>
            <div className="stat">
              <div className="stat-value">92%</div>
              <div className="stat-label">Injury Prevention</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cta">
        <div className="container-custom">
          <h2>Transform Member Results</h2>
          <p>Advanced AI coaching that delivers personal training at scale.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
