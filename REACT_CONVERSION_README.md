# PULSE - Gym Management Platform (React Version)

A pixel-perfect React conversion of the PULSE landing page with full interactivity and modern component-based architecture.

## Project Overview

This is a complete conversion of the original HTML/CSS/JavaScript PULSE landing page into a scalable React application. Every design element, animation, and interaction has been preserved with 100% visual fidelity.

### What's Included

- **Full React Component Architecture**: Modular, reusable components for every section
- **Pixel-Perfect Design**: Exact recreation of original styling and animations
- **Interactive Features**: Fully functional navigation, modals, accordions, and more
- **Mobile Responsive**: All original responsive breakpoints maintained
- **Performance Optimized**: Uses React hooks for efficient state management
- **Modern Tooling**: Vite for fast development and optimized builds

## Project Structure

```
PulseR/
├── public/
│   └── images/           # Images and assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── Demo.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── constants/        # Data constants
│   │   └── data.js
│   ├── styles/           # Global CSS
│   │   └── styles.css
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Navigate to the project directory:
```bash
cd PulseR
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Technology Stack

- **React 18.2**: Modern UI library
- **Vite 4.4**: Fast build tool and dev server
- **CSS3**: Original styling preserved exactly
- **React Hooks**: useState, useEffect for state management
- **Font Awesome 6.4**: Icon library

## Component Details

### Navbar
- Fixed left sidebar navigation
- Smooth scroll detection with visual feedback
- Mobile menu with hamburger toggle
- All feature links preserved

### Hero Section
- Large hero title with gradient text effect
- Dashboard mockup with animated cards
- Social proof section
- CTA buttons with hover effects

### Features
- 10 feature cards with emoji icons
- Hover animations and transitions
- Link arrows with smooth animations
- Full feature descriptions

### How It Works
- 4-step process cards
- Gradient text for step numbers
- Hover effects and shadows

### Stats Section
- 4 major statistics
- Gradient text for numbers
- Hover animations

### Testimonials
- 3 customer testimonial cards
- Star ratings
- Author avatars and information
- Hover lift effects

### Pricing
- CTA button to pricing page
- Ready for pricing table implementation

### Interactive Demo
- Tab navigation system
- Dynamic content switching
- Stats grid with change indicators
- Helpful hints

### FAQ
- Accordion-style questions and answers
- Smooth expand/collapse animations
- Arrow icon rotation
- Contact section

### CTA Section
- Bold call-to-action area
- Two button options
- Animated background gradients

### Footer
- Multi-column layout
- Social media links
- All footer links and sections
- Copyright and legal links

## Key Features Implemented

✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop
✅ **Smooth Animations**: All original CSS animations preserved
✅ **Interactive Elements**: Working hamburger menu, accordion FAQs, tab switching
✅ **Performance**: Optimized component rendering with React hooks
✅ **Modern Build**: Vite for fast development and production builds
✅ **Clean Code**: Well-organized, commented components
✅ **SEO Ready**: Proper HTML structure and meta tags
✅ **Accessibility**: Semantic HTML and proper ARIA attributes

## CSS Architecture

All original CSS styling is preserved in `src/styles/styles.css`:
- CSS Variables for consistent theming (colors, fonts)
- Responsive media queries maintained
- All animations and transitions intact
- Smooth scroll behavior enabled

### Color Scheme
- Navy: `#0f1b2d`
- Navy Dark: `#0a1421`
- Charcoal: `#1e2a3a`
- Blue Primary: `#2d7ff9`
- Teal: `#00d4aa`
- Text Light: `#e8e9eb`
- Text Muted: `#a8acb3`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Code splitting handled by Vite
- Lazy component loading ready for implementation
- CSS is minified in production builds
- JavaScript is optimized and bundled

## Customization

To modify components:

1. Edit component files in `src/components/`
2. Update data in `src/constants/data.js`
3. Modify CSS in `src/styles/styles.css`
4. All changes reflect immediately in development mode

## Deployment

The project is ready for deployment to any static hosting:

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
# Connect your GitHub repo to Vercel
```

### Static Hosting
```bash
npm run build
# Upload 'dist' folder to your server
```

## Future Enhancements

- Add actual backend integration for demo tabs
- Implement pricing table with billing cycle toggle
- Add contact form backend
- Create pricing page component
- Add feature page templates
- Implement dynamic testimonials from API

## Troubleshooting

### Development server not starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### CSS not loading
- Ensure `src/styles/styles.css` is imported in `App.jsx`
- Check that Font Awesome CDN link is in `index.html`

### Images not displaying
- Verify image paths in `public/images/` directory
- Update image paths in components if needed

## License

This project is the React conversion of the PULSE landing page application.

## Support

For issues or questions, refer to the component structure and comments within each file.

---

**Note**: This React version maintains 100% visual and functional fidelity with the original HTML/CSS/JavaScript version. All design patterns, animations, and interactions have been preserved.
