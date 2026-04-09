import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container-custom">
        <div className="newsletter-content">
          <h2>Stay Updated on Fitness Industry Trends</h2>
          <p>Get weekly insights on gym management, fitness technology, and member engagement strategies delivered to your inbox.</p>
          
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary">
              {subscribed ? '✓ Subscribed!' : 'Subscribe Now'}
            </button>
          </form>

          <p className="newsletter-note">✓ No spam. Unsubscribe anytime. We respect your privacy.</p>
        </div>

        <div className="newsletter-benefits">
          <div className="benefit-item">
            <span className="icon">📊</span>
            <span>Weekly gym metrics & trends</span>
          </div>
          <div className="benefit-item">
            <span className="icon">💡</span>
            <span>AI & automation tips</span>
          </div>
          <div className="benefit-item">
            <span className="icon">🎯</span>
            <span>Member retention strategies</span>
          </div>
          <div className="benefit-item">
            <span className="icon">🏆</span>
            <span>Success case studies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
