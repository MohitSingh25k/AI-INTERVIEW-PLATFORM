import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>AI Job Platform</h2>

      <p>
        Helping students prepare smarter with AI-powered resume analysis,
        mock interviews, and job recommendations.
      </p>

      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <p className="copyright">
        © 2026 AI Job Platform. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;