import "../styles/Topbar.css";

function Topbar() {
  // Temporary user (baad me backend se aayega)
  const user = {
    name: "User",
  };

  return (
    <div className="topbar">
      <input
        type="text"
        placeholder="🔍 Search jobs, companies..."
        className="search-box"
      />

      <div className="topbar-right">
        <span className="notification">🔔</span>

        <div className="profile">
          <span className="profile-icon">👤</span>
          <span>{user.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;