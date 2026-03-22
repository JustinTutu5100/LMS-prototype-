import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LearnerDashboard = ({ user, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sidebar links
  const links = [
    { to: "/", label: "Dashboard", icon: "dashboard" },
    { to: "/courses", label: "Courses", icon: "menu_book" },
    { to: "/logs", label: "Logs", icon: "history_edu" },
    { to: "/catalog", label: "Catalog", icon: "local_library" },
    { to: "/my-progress", label: "My Progress", icon: "trending_up" },
    { to: "/settings", label: "Settings", icon: "settings" },
  ];

  // Logout function
  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Call logout handler from parent/context
    }
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-slate-50 dark:bg-slate-900 z-50 font-['Manrope'] antialiased tracking-tight">
        <div className="flex flex-col h-full py-8 px-4">
          {/* Header */}
          <div className="px-4 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold shadow-sm">
                {user?.name?.[0] ?? "U"}
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tighter text-blue-900 dark:text-blue-100">
                  The Atelier
                </h2>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  Master Curator
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-grow space-y-1">
            {links.map((link) => {
              const isActive =
                link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-slate-200 dark:bg-slate-700 font-semibold"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800/80"
                  }`}
                >
                  <span className="material-symbols-outlined">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800/50 space-y-4">
            <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold text-sm">
              Upgrade Plan
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-error w-full rounded-lg"
            >
              <span className="material-symbols-outlined">logout</span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Top Nav */}
      <nav className="fixed top-0 right-0 left-64 h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm flex items-center justify-between px-8 z-40">
        <span className="text-xl font-black text-blue-900 dark:text-blue-50 tracking-tighter">
          Academic Atelier
        </span>
      </nav>

      {/* Main Content */}
      <main className="ml-64 pt-24 min-h-screen bg-surface">
        <div className="max-w-7xl mx-auto px-10 py-8">
          {/* Welcome */}
          <h1 className="text-4xl font-extrabold mb-2 text-primary">
            Welcome back, {user?.name ?? "Learner"}!
          </h1>
          <p className="text-on-surface-variant mb-8">
            Your curated learning path is 64% complete for this semester.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow">
              <p className="text-3xl font-bold">14</p>
              <p>Total Enrolled</p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow">
              <p className="text-3xl font-bold">08</p>
              <p>Completed Courses</p>
            </div>

            <div className="bg-primary text-on-primary p-8 rounded-xl shadow">
              <p className="text-3xl font-bold">1,240</p>
              <p>Learning Points</p>
            </div>
          </div>

          {/* Milestones */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-extrabold text-primary mb-8">Recent Milestones</h2>
            <div className="bg-surface-container-low rounded-xl p-6 space-y-8">
              {/* Milestone Example */}
              <div className="flex gap-4 relative">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm z-10 border border-outline-variant/10">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    military_tech
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider">
                    Yesterday
                  </p>
                  <p className="font-bold text-primary">Theory Master</p>
                  <p className="text-sm text-on-surface-variant">
                    Completed 5 consecutive theory modules with 100% score.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearnerDashboard;