import { useState } from 'react';
import { faqData } from '../constants/data';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container-custom">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about PULSE</p>
        </div>

        <div className="faq-container">
          <div className="faq-list" id="faqList">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">▼</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-content">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <p>Still have questions?</p>
            <button className="btn btn-primary">Contact Our Support Team</button>
          </div>
        </div>
      </div>
    </section>
  );
}
