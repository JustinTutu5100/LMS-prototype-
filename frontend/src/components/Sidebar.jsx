import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ user, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const userRole = user?.role ?? "guest";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: "dashboard", roles: ["learner","admin","guest"] },
  { to: "/courses", label: "Courses", icon: "menu_book", roles: ["learner","admin","guest"] }, // <- points here
  { to: "/logs", label: "Logs", icon: "history_edu", roles: ["learner","admin"] },
  { to: "/catalog", label: "Catalog", icon: "local_library", roles: ["learner","admin"] },
  { to: "/my-progress", label: "My Progress", icon: "trending_up", roles: ["learner"] },
  { to: "/settings", label: "Settings", icon: "settings", roles: ["learner","admin"] },
];

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/login");
  };

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6 flex flex-col gap-6 hidden md:flex">
      {/* Brand */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">The Atelier</h1>
        <p className="text-sm text-slate-400">{user?.role || "Master Curator"}</p>
      </div>

      {/* Links */}
      <nav className="flex-1 flex flex-col gap-2">
        {links.map((link) => {
          if (!link.roles.includes(userRole)) return null;

          const isActive = location.pathname === link.to;

          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive ? "bg-slate-700 font-semibold" : "hover:bg-slate-700"
              }`}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-slate-800 flex flex-col gap-2">
        <Link
          to="/account"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-700"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="text-sm">Account</span>
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-600 transition-colors font-semibold text-sm"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;