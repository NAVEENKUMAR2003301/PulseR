import { Link } from 'react-router-dom';

export default function Footer() {
  const footerSections = [
    {
      title: 'Core Features',
      links: [
        { text: 'Member Management', href: '/features/member-management' },
        { text: 'Biometric Attendance', href: '/features/biometric-attendance' },
        { text: 'Scheduling & Classes', href: '/features/scheduling-classes' },
        { text: 'Payments & Billing', href: '/features/payments-billing' },
        { text: 'Trainer & Staff', href: '/features/trainer-staff' }
      ]
    },
    {
      title: 'Advanced Features',
      links: [
        { text: 'Analytics & Reporting', href: '/features/analytics-reporting' },
        { text: 'Communication & Marketing', href: '/features/communication-marketing' },
        { text: 'Inventory & Equipment', href: '/features/inventory-equipment' },
        { text: 'AI Workout Plans', href: '/features/ai-workout-diet' },
        { text: 'Progress Tracking', href: '/features/progress-tracking' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Support Center', href: '#' },
        { text: 'Contact', href: '#' },
        { text: 'Careers', href: '#' }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img src="/images/Pulse.png" alt="PULSE Logo" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              </div>
            </div>
            <p>The complete gym management platform for modern fitness businesses worldwide.</p>
            <div className="social-links">
              <a href="#" className="social-link" title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href}>{link.text}</Link>
                    ) : (
                      <a href={link.href}>{link.text}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2024 PULSE. All rights reserved. | Made with ❤️ for gym owners worldwide</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security & Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
