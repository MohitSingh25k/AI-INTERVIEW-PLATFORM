import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works?</h2>

      <div className="steps">

        <div className="step">
          <div className="step-number">1</div>
          <h3>Upload Resume</h3>
          <p>Upload your resume in PDF format.</p>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <h3>AI Analysis</h3>
          <p>Our AI analyzes your resume and skills.</p>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <h3>Mock Interview</h3>
          <p>Practice technical and HR interviews.</p>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <h3>Get Hired</h3>
          <p>Apply to recommended jobs with confidence.</p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;