import { testimonialsData } from '../constants/data';

export default function Testimonials() {
  return (
    <section className="testimonials-featured">
      <div className="container-custom">
        <div className="section-header">
          <h2>Trusted by Industry Leaders</h2>
          <p>See why fitness professionals choose PULSE</p>
        </div>

        <div className="testimonials-showcase" id="testimonialsGrid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <p>{testimonial.name}</p>
                  <p>{testimonial.gym}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
