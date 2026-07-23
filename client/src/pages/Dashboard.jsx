import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";
import ResumeUpload from "../components/ResumeUpload";
import AIAnalysis from "../components/AIAnalysis";

import "../styles/Dashboard.css";

function Dashboard() {
  const user = {
    name: "User",
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="welcome-section">
          <h1>Welcome Back, {user.name} 👋</h1>
          <p>Let's prepare for your dream job today.</p>
        </div>

        <div className="cards">
          <DashboardCard
            title="Resume Score"
            value="85%"
            color="#3b82f6"
          />

          <DashboardCard
            title="Mock Interviews"
            value="12"
            color="#10b981"
          />

          <DashboardCard
            title="ATS Score"
            value="91%"
            color="#f59e0b"
          />

          <DashboardCard
            title="Jobs Applied"
            value="08"
            color="#ef4444"
          />
        </div>

        <ResumeUpload />

        <AIAnalysis />
      </div>
    </div>
  );
}

export default Dashboard;