// ======================== //
// Data Objects //
// ======================== //

const featuresData = [
    {
        icon: '👥',
        title: 'Member Management',
        description: 'Complete lifecycle management from signup to retention. Profiles, memberships, engagement tracking.',
        link: 'pages/member-management.html'
    },
    {
        icon: '🔐',
        title: 'Biometric Attendance',
        description: 'Facial recognition, fingerprint scanning, and NFC access control. Modern check-in technology.',
        link: 'pages/biometric-attendance.html'
    },
    {
        icon: '📅',
        title: 'Scheduling & Classes',
        description: 'Smart class scheduling, capacity management, automated reminders, and instructor assignment.',
        link: 'pages/scheduling-classes.html'
    },
    {
        icon: '💳',
        title: 'Payments & Billing',
        description: 'Automated recurring billing, multiple payment methods, smart dunning, and PCI compliance.',
        link: 'pages/payments-billing.html'
    },
    {
        icon: '👨‍🏫',
        title: 'Trainer & Staff',
        description: 'Staff scheduling, certification tracking, PT session management, and performance monitoring.',
        link: 'pages/trainer-staff.html'
    },
    {
        icon: '📊',
        title: 'Analytics & Reporting',
        description: 'Real-time dashboards, predictive analytics, custom reports, and data-driven insights.',
        link: 'pages/analytics-reporting.html'
    },
    {
        icon: '💬',
        title: 'Communication & Marketing',
        description: 'Email campaigns, SMS marketing, automation workflows, and targeted member engagement.',
        link: 'pages/communication-marketing.html'
    },
    {
        icon: '🛠️',
        title: 'Inventory & Equipment',
        description: 'Asset tracking, preventive maintenance scheduling, and facility management tools.',
        link: 'pages/inventory-equipment.html'
    },
    {
        icon: '🤖',
        title: 'AI Workout & Diet Plans',
        description: 'Personalized AI fitness programs, nutrition plans, form correction, and 24/7 coaching.',
        link: 'pages/ai-workout-diet.html'
    },
    {
        icon: '📈',
        title: 'Progress Tracking',
        description: 'Visual progress tracking, body metrics, achievements, leaderboards, and member motivation.',
        link: 'pages/progress-tracking.html'
    }
];

const statsData = [
    { number: '500+', label: 'Gyms Worldwide' },
    { number: '2M+', label: 'Members Managed' },
    { number: '99%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Team' }
];

const testimonialsData = [
    {
        name: 'John Martinez',
        gym: 'FitZone Gym, Austin TX',
        avatar: '👨‍💼',
        quote: 'PULSE saved us 15 hours per week on admin. Revenue increased by 28% in 6 months.',
        rating: 5
    },
    {
        name: 'Sarah Johnson',
        gym: 'Elevation Fitness, NYC',
        avatar: '👩‍💼',
        quote: 'Best investment for our gym. Members love the mobile app, billing is seamless.',
        rating: 5
    },
    {
        name: 'Mike Chen',
        gym: 'CrossFit Elite, LA',
        avatar: '👨‍💼',
        quote: 'The analytics helped us optimize classes. Member retention went up 34%.',
        rating: 5
    }
];

const pricingPlans = [
    {
        name: 'Starter',
        description: 'Perfect for small gyms',
        basePrice: 99,
        features: [
            'Up to 100 members',
            'Basic member management',
            'Attendance tracking',
            'Simple billing',
            'Email support',
            '1 trainer account'
        ],
        highlighted: false
    },
    {
        name: 'Professional',
        description: 'For growing gyms',
        basePrice: 199,
        features: [
            'Up to 500 members',
            'Advanced member management',
            'Class scheduling',
            'Automated billing',
            'Analytics dashboard',
            'Unlimited trainers',
            'Marketing tools',
            'Priority support'
        ],
        highlighted: true
    },
    {
        name: 'Enterprise',
        description: 'For large studios',
        basePrice: 399,
        features: [
            'Unlimited members',
            'Full feature access',
            'Advanced analytics',
            'Custom integrations',
            'Dedicated account manager',
            '24/7 phone support',
            'Custom white-label',
            'Advanced security'
        ],
        highlighted: false
    }
];

const faqData = [
    {
        question: 'How much does PULSE cost?',
        answer: 'PULSE offers flexible pricing starting at $99/month for small gyms. See our pricing page for Starter, Professional, and Enterprise plans. All plans include a 30-day free trial.'
    },
    {
        question: 'Can I integrate PULSE with my existing systems?',
        answer: 'Yes! PULSE integrates with popular platforms like Zapier, Stripe, PayPal, and more. Our API also allows custom integrations.'
    },
    {
        question: 'How long does implementation take?',
        answer: 'Most gyms are up and running within 24-48 hours. Our team provides onboarding support to ensure a smooth transition from your current system.'
    },
    {
        question: 'What about data security?',
        answer: 'PULSE uses enterprise-grade encryption, regular backups, and complies with GDPR and PCI-DSS standards. Your data is safely stored in our secure cloud infrastructure.'
    },
    {
        question: 'Do you offer 24/7 support?',
        answer: 'Yes! Professional and Enterprise plans include 24/7 support. Starter plan members get email support during business hours.'
    },
    {
        question: 'Can members access their accounts on mobile?',
        answer: 'Absolutely. Our white-label mobile app allows members to check-in, view schedules, manage bookings, and track their progress on iOS and Android.'
    }
];

const demoTabs = [
    {
        name: 'Dashboard',
        icon: '📊',
        description: 'Real-time overview of your gym metrics'
    },
    {
        name: 'Members',
        icon: '👥',
        description: 'Manage and track all member profiles'
    },
    {
        name: 'Billing',
        icon: '💳',
        description: 'Automated payment and invoicing system'
    },
    {
        name: 'Classes',
        icon: '📅',
        description: 'Schedule and manage fitness classes'
    }
];

const demoContent = {
    0: {
        title: 'Dashboard Overview',
        stats: [
            { label: 'Active Members', value: '1,245', change: '+8%' },
            { label: 'Monthly Revenue', value: '$34,890', change: '+12%' },
            { label: 'Class Attendance', value: '87%', change: '+3%' },
            { label: 'Member Churn', value: '2.1%', change: '-0.5%' }
        ]
    },
    1: {
        title: 'Member Directory',
        stats: [
            { label: 'Total Members', value: '1,245', change: '+25 this month' },
            { label: 'Active Subscriptions', value: '1,089', change: '87% retention' },
            { label: 'Free Trial', value: '156', change: 'Pending conversion' },
            { label: 'Inactive', value: '89', change: 'At-risk segment' }
        ]
    },
    2: {
        title: 'Billing Control',
        stats: [
            { label: 'Pending Invoices', value: '23', change: '$4,560 total' },
            { label: 'Paid This Month', value: '1,156', change: '92.8% collection' },
            { label: 'Failed Payments', value: '12', change: 'Auto-retry enabled' },
            { label: 'Revenue Pipeline', value: '$42.3K', change: 'Next 30 days' }
        ]
    },
    3: {
        title: 'Class Schedule',
        stats: [
            { label: 'Active Classes', value: '32', change: '7 days/week' },
            { label: 'Avg. Attendance', value: '28', change: 'Per class' },
            { label: 'Most Popular', value: 'HIIT', change: '95% capacity' },
            { label: 'Trainer Hours', value: '168', change: 'This month' }
        ]
    }
};

// ======================== //
// Render Functions //
// ======================== //

function renderFeatures() {
    const grid = document.getElementById('featuresGrid');
    grid.innerHTML = featuresData.map(feature => `
        <a href="${feature.link}" class="feature-card feature-link">
            <div class="feature-icon">${feature.icon}</div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
            <div class="feature-link-arrow">→</div>
            <div class="feature-accent"></div>
        </a>
    `).join('');
}

function renderStats() {
    const grid = document.getElementById('statsGrid');
    grid.innerHTML = statsData.map(stat => `
        <div class="stat-item">
            <div class="stat-number">${stat.number}</div>
            <p class="stat-label">${stat.label}</p>
        </div>
    `).join('');
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = testimonialsData.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-rating">
                ${[...Array(testimonial.rating)].map(() => '<span class="star">★</span>').join('')}
            </div>
            <p class="testimonial-quote">"${testimonial.quote}"</p>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.avatar}</div>
                <div class="author-info">
                    <p>${testimonial.name}</p>
                    <p>${testimonial.gym}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPricing() {
    const grid = document.getElementById('pricingGrid');
    const currentCycle = document.querySelector('.toggle-btn.active').dataset.cycle;
    
    grid.innerHTML = pricingPlans.map((plan, index) => {
        let price = plan.basePrice;
        if (currentCycle === 'quarterly') {
            price = Math.floor(plan.basePrice * 3 * 0.9);
        } else if (currentCycle === 'annual') {
            price = Math.floor(plan.basePrice * 12 * 0.8);
        }
        
        const period = currentCycle === 'monthly' ? 'month' : 
                      currentCycle === 'quarterly' ? 'quarter' : 'year';
        const saving = currentCycle === 'quarterly' ? 'Save 10%' : 
                      currentCycle === 'annual' ? 'Save 20%' : '';
        
        return `
            <div class="pricing-card ${plan.highlighted ? 'highlighted' : ''}">
                ${plan.highlighted ? '<div class="pricing-badge">BEST VALUE</div>' : ''}
                <h3 class="pricing-name">${plan.name}</h3>
                <p class="pricing-description">${plan.description}</p>
                <div class="pricing-amount">$${price}</div>
                <p class="pricing-period">/${period}</p>
                ${saving ? `<div class="pricing-saving">${saving}</div>` : ''}
                <button class="btn btn-primary full-width" style="margin-bottom: 2rem;">Get Started</button>
                <ul class="pricing-features">
                    ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
    }).join('');
}

function renderDemoTabs() {
    const tabsContainer = document.getElementById('demoTabs');
    tabsContainer.innerHTML = demoTabs.map((tab, index) => `
        <button class="demo-tab ${index === 0 ? 'active' : ''}" data-index="${index}">
            <span class="demo-icon">${tab.icon}</span>
            <span>${tab.name}</span>
        </button>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.demo-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.demo-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateDemoContent(parseInt(btn.dataset.index));
        });
    });
}

function updateDemoContent(tabIndex) {
    const content = demoContent[tabIndex];
    const container = document.getElementById('demoContent');
    
    container.innerHTML = `
        <h3 class="demo-title">${content.title}</h3>
        <p class="demo-description">${demoTabs[tabIndex].description}</p>
        
        <div class="demo-stats">
            ${content.stats.map(stat => `
                <div class="demo-stat-item">
                    <div class="demo-stat-label">${stat.label}</div>
                    <div>
                        <span class="demo-stat-value">${stat.value}</span>
                        <span class="demo-stat-change">${stat.change}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="demo-hint">
            💡 Click through the tabs above to explore different areas of your gym's operations.
        </div>
    `;
}

function renderFAQ() {
    const list = document.getElementById('faqList');
    list.innerHTML = faqData.map((faq, index) => `
        <div class="faq-item" data-index="${index}">
            <button class="faq-question">
                <span>${faq.question}</span>
                <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">${faq.answer}</div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// ======================== //
// Navigation & Scroll //
// ======================== //

function setupNavScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setupMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
}

// ======================== //
// Pricing Toggle //
// ======================== //

function setupPricingToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPricing();
        });
    });
}

// ======================== //
// Contact Form //
// ======================== //

function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                gym: document.getElementById('gym').value,
                message: document.getElementById('message').value
            };
            
            // Log form data (in real app, send to server)
            console.log('Form submitted:', formData);
            
            // Show success message
            const wrapper = document.querySelector('.contact-form-wrapper');
            wrapper.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
                    <h4 style="color: white; font-size: 1.5rem; margin-bottom: 0.5rem;">Thank You!</h4>
                    <p style="color: var(--text-muted);">We'll be in touch within 2 hours to schedule your demo.</p>
                </div>
            `;
            
            // Reset after 3 seconds
            setTimeout(() => {
                setupContactForm();
                form.reset();
            }, 3000);
        });
    }
}

// ======================== //
// Initialization //
// ======================== //

document.addEventListener('DOMContentLoaded', () => {
    // Render all components
    renderFeatures();
    renderStats();
    renderTestimonials();
    renderPricing();
    renderDemoTabs();
    updateDemoContent(0);
    renderFAQ();
    
    // Setup interactions
    setupNavScroll();
    setupMobileMenu();
    setupPricingToggle();
    setupContactForm();
    
    // Log that everything is loaded
    console.log('PULSE Landing Page Loaded ✓');
});

// ======================== //
// Smooth Scroll Polyfill //
// ======================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});