import { useState } from 'react';
import { pricingPlans } from '../constants/data';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const getPricing = (basePrice, cycle) => {
    if (cycle === 'quarterly') {
      return Math.floor(basePrice * 3 * 0.9);
    } else if (cycle === 'annual') {
      return Math.floor(basePrice * 12 * 0.8);
    }
    return basePrice;
  };

  const getPeriodLabel = (cycle) => {
    return cycle === 'monthly' ? 'month' : cycle === 'quarterly' ? 'quarter' : 'year';
  };

  const getSavingLabel = (cycle) => {
    return cycle === 'quarterly' ? 'Save 10%' : cycle === 'annual' ? 'Save 20%' : '';
  };

  return (
    <section id="pricing" className="pricing-hero">
      <div className="container-custom">
        <div className="section-header">
          <h2>Transparent Pricing</h2>
          <p>Choose the plan that scales with your business</p>
        </div>

        <div className="pricing-link-btn">
          <button className="btn btn-primary">See All Plans & Pricing →</button>
        </div>
      </div>
    </section>
  );
}
