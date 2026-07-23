import "../styles/AIAnalysis.css";

function AIAnalysis() {
  return (
    <div className="analysis-card">
      <h2>🤖 AI Resume Analysis</h2>

      <div className="analysis-grid">
        <div className="analysis-item">
          <span>ATS Score</span>
          <strong>91%</strong>
        </div>

        <div className="analysis-item">
          <span>Resume Score</span>
          <strong>85%</strong>
        </div>

        <div className="analysis-item">
          <span>Experience</span>
          <strong>Good</strong>
        </div>

        <div className="analysis-item">
          <span>Missing Skills</span>
          <strong>Docker, AWS, Redis</strong>
        </div>
      </div>

      <div className="suggestions">
        <h3>Suggestions</h3>

        <ul>
          <li>✅ Add more projects</li>
          <li>✅ Improve your summary</li>
          <li>✅ Add GitHub profile</li>
          <li>✅ Mention internships</li>
        </ul>
      </div>
    </div>
  );
}

export default AIAnalysis;