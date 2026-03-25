import { Link, useLocation, useNavigate } from "react-router-dom";
import '../custom.css';

const Sidebar = ({ user, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAdmin = user?.role === "admin";

  // ✅ Role-based links
  const links = isAdmin
    ? [
        { to: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
        { to: "/admin/courses", label: "Courses", icon: "menu_book" },
        { to: "/admin/activity", label: "Activity", icon: "settings" },
      ]
    : [
        { to: "/learner/dashboard", label: "Dashboard", icon: "dashboard" },
        { to: "/learner/my-progress", label: "My Progress", icon: "trending_up" },
        { to: "/learner/courses", label: "Courses", icon: "local_library" },
        { to: "/learner/settings", label: "Settings", icon: "settings" },
      ];

  const handleLogout = () => {
    if (onLogout) onLogout();
    localStorage.removeItem("role");
    navigate("/");
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
            {isAdmin ? "Admin Panel" : "Learner Panel"}
          </p>
        </div>
      </div>

      <nav className="nav">
        {links.map((link) => {
          const isActive = location.pathname.startsWith(link.to);
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

      {/* ✅ Fixed Create Course button */}
      <button
        onClick={() =>
          navigate(isAdmin ? "/admin/courses" : "/learner/courses")
        }
        className="create-course-btn"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>add</span>
        <span>{isAdmin ? "Create New Course" : "Browse Courses"}</span>
      </button>

      <div className="footer">
        
        <button onClick={handleLogout} className="footer-btn logout">
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;