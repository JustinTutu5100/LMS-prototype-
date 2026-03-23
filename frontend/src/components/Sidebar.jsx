import { Link, useLocation, useNavigate } from "react-router-dom";
import '../custom.css';

const Sidebar = ({ user, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { to: "/courses", label: "Courses", icon: "menu_book" },
    { to: "/logs", label: "Logs", icon: "history_edu" },
    { to: "/catalog", label: "Catalog", icon: "local_library" },
    { to: "/my-progress", label: "My Progress", icon: "trending_up" },
    { to: "/settings", label: "Settings", icon: "settings" },
  ];

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          {user?.name?.[0] ?? "U"}
        </div>
        <div>
          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-primary)' }}>
            The Atelier
          </h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-outline)', textTransform: 'uppercase', fontWeight: 600 }}>
            Master Curator
          </p>
        </div>
      </div>
      <nav className="nav">
        {links.map((link) => {
          const isActive = link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to);
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link${isActive ? ' active' : ''}`}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <button
        onClick={() => navigate("/courses")}
        className="create-course-btn"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>add</span>
        <span>Create New Course</span>
      </button>
      <div className="footer">
        <button className="footer-btn">Upgrade Plan</button>
        <button onClick={handleLogout} className="footer-btn logout">
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;