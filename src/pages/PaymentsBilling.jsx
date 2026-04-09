import { useEffect } from 'react';

export default function PaymentsBilling() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="feature-hero">
        <div className="container-custom">
          <div className="feature-hero-content">
            <div className="feature-badge">💳 Revenue</div>
            <h1>Automated Payments & Billing</h1>
            <p>Enterprise-grade payment processing with recurring billing, multi-currency support, and intelligent collection strategies.</p>
            <button className="btn btn-primary btn-large">Schedule Demo →</button>
          </div>
        </div>
      </section>

      <section className="feature-benefits">
        <div className="container-custom">
          <h2>Control Your Revenue Stream</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Recurring Billing</h3>
              <p>Automated monthly, quarterly, and annual billing cycles. Set it once and let PULSE handle the rest.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Multiple Payment Methods</h3>
              <p>Accept credit cards, debit cards, ACH transfers, bank payments, and digital wallets.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🧠</div>
              <h3>Smart Dunning</h3>
              <p>AI-powered payment retry logic automatically retries failed payments at optimal times.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📧</div>
              <h3>Invoice Management</h3>
              <p>Auto-generate and send invoices. Members can view payment history anytime.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>PCI Compliance</h3>
              <p>Enterprise security with tokenization, encryption, and fraud detection built-in.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Revenue Insights</h3>
              <p>Real-time payment tracking, churn analysis, and revenue forecasting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-showcase">
        <div className="container-custom">
          <h2>Payment Processing in Action</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Payment Dashboard</p>
                  <p>Real-time view of all payments, failed transactions, and revenue analytics by membership type.</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-visual">
                <div className="code-block">
                  <p className="code-title">Smart Dunning</p>
                  <p>Failed payments automatically retry at optimal times with customized messaging to improve collection rates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container-custom">
          <h2>Maximize Cash Flow</h2>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Eliminate Late Payments</h3>
              <p>Automated reminders and smart retry logic ensure payments are collected on time.</p>
            </div>
            <div className="case-card">
              <h3>Reduce Admin Work</h3>
              <p>Remove manual invoicing and payment chasing. Save 8+ hours per month on accounting.</p>
            </div>
            <div className="case-card">
              <h3>Increase Collection Rates</h3>
              <p>Smart dunning increases successful payment collection by up to 28%.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-integration">
        <div className="container-custom">
          <h2>Seamless Integration</h2>
          <p>Payments & Billing integrates with every PULSE module to create a unified revenue management system.</p>
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
              <div className="stat-value">28%</div>
              <div className="stat-label">Collection Rate Increase</div>
            </div>
            <div className="stat">
              <div className="stat-value">8hrs</div>
              <div className="stat-label">Monthly Admin Saved</div>
            </div>
            <div className="stat">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Payment Processing Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cta">
        <div className="container-custom">
          <h2>Secure Your Revenue</h2>
          <p>Enterprise-grade billing with maximum security and member convenience.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <button className="btn btn-secondary btn-large">Book Live Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
