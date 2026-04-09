import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PremiumBenefits from '../components/PremiumBenefits';
import Features from '../components/Features';
import TrustSection from '../components/TrustSection';
import IntegrationPartners from '../components/IntegrationPartners';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import ComparisonSection from '../components/ComparisonSection';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import NewsletterSection from '../components/NewsletterSection';
import Demo from '../components/Demo';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import '../styles/styles.css';

export default function Home() {
  return (
    <main>
      <Hero />
      <PremiumBenefits />
      <Features />
      <TrustSection />
      <IntegrationPartners />
      <HowItWorks />
      <ComparisonSection />
      <Stats />
      <Testimonials />
      <Pricing />
      <NewsletterSection />
      <Demo />
      <FAQ />
      <CTA />
    </main>
  );
}
