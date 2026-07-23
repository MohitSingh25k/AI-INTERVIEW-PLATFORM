import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <p>"This platform helped me improve my resume and crack interviews."</p>
          <h4>- Aman Sharma</h4>
        </div>

        <div className="testimonial-card">
          <p>"The AI Mock Interview gave me confidence before placements."</p>
          <h4>- Priya Verma</h4>
        </div>

        <div className="testimonial-card">
          <p>"I received personalized job recommendations that matched my skills."</p>
          <h4>- Rahul Singh</h4>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;