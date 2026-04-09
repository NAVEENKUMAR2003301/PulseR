// ======================== //
// Data Objects //
// ======================== //

export const featuresData = [
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

export const testimonialsData = [
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

export const pricingPlans = [
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

export const faqData = [
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

export const demoTabs = [
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

export const demoContent = {
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
