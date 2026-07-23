import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>AI-Powered Job & Interview Platform</h1>

        <p>
          Practice AI interviews, analyze your resume, improve your ATS score,
          and get personalized job recommendations.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <h2>🤖 AI Assistant</h2>
        <p>AI Illustration will come here.</p>
      </div>
    </section>
  );
}

export default Hero;