import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth <= 768 && mobileMenuOpen) {
        if (navbarRef.current && !navbarRef.current.contains(e.target)) {
          const mobileBtn = document.getElementById('mobileMenuBtn');
          if (mobileBtn && !mobileBtn.contains(e.target)) {
            setMobileMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navSections = [
    {
      title: 'Dashboard',
      links: [
        { emoji: '📊', text: 'Enterprise Dashboard', href: '/dashboard' }
      ]
    },
    {
      title: 'Core Features',
      links: [
        { emoji: '👥', text: 'Member Management', href: '/features/member-management' },
        { emoji: '🔐', text: 'Biometric Attendance', href: '/features/biometric-attendance' },
        { emoji: '📅', text: 'Scheduling & Classes', href: '/features/scheduling-classes' },
        { emoji: '💳', text: 'Payments & Billing', href: '/features/payments-billing' },
        { emoji: '👨‍🏫', text: 'Trainer & Staff', href: '/features/trainer-staff' }
      ]
    },
    {
      title: 'Advanced Features',
      links: [
        { emoji: '📊', text: 'Analytics & Reporting', href: '/features/analytics-reporting' },
        { emoji: '💬', text: 'Communication & Marketing', href: '/features/communication-marketing' },
        { emoji: '🛠️', text: 'Inventory & Equipment', href: '/features/inventory-equipment' },
        { emoji: '🤖', text: 'AI Workout & Diet', href: '/features/ai-workout-diet' },
        { emoji: '📈', text: 'Progress Tracking', href: '/features/progress-tracking' }
      ]
    }
  ];

  return (
    <>
      <button 
        className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
        id="mobileMenuBtn"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav 
        ref={navbarRef}
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'active' : ''}`} 
        id="navbar"
      >
        <div className="navbar-content">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <div className="logo-container-3d">
              <img src="/images/Pulse.png" alt="PULSE Logo" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
            </div>
          </Link>

          <div className="nav-menu" id="navMenu">
            {navSections.map((section, index) => (
              <div key={index} className="nav-section">
                <span className="nav-section-title">{section.title}</span>
                {section.links.map((link, linkIndex) => (
                  <Link 
                    key={linkIndex} 
                    to={link.href} 
                    className="nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span className="nav-emoji">{link.emoji}</span>
                    <span className="nav-text">{link.text}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="nav-footer">
            <button className="btn btn-primary nav-cta" onClick={closeMobileMenu}>Book Demo</button>
          </div>
        </div>
      </nav>
    </>
  );
}
