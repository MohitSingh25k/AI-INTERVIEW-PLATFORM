import "../styles/Features.css";
function Features() {
  return (
    <section className="features">
      <h2>Why Choose Our Platform?</h2>

      <div className="feature-container">
        <div className="feature-card">
          <h3>🤖 AI Resume Analyzer</h3>
          <p>Analyze your resume and get AI-powered suggestions.</p>
        </div>

        <div className="feature-card">
          <h3>🎤 AI Mock Interview</h3>
          <p>Practice interviews with AI and improve your confidence.</p>
        </div>

        <div className="feature-card">
          <h3>💼 Job Recommendations</h3>
          <p>Find jobs based on your skills and profile.</p>
        </div>

        <div className="feature-card">
          <h3>📊 ATS Score Checker</h3>
          <p>Check your resume ATS score before applying.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;