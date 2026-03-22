import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MyProgress = ({ user, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
const sidebarLinks = [
  { to: "/", label: "Dashboard", icon: "dashboard", roles: ["learner", "admin"] },
  { to: "/courses", label: "Courses", icon: "menu_book", roles: ["learner", "admin"] },
  { to: "/logs", label: "Logs", icon: "history_edu", roles: ["learner", "admin"] },
  { to: "/catalog", label: "Catalog", icon: "local_library", roles: ["learner", "admin"] },
  { to: "/my-progress", label: "My Progress", icon: "trending_up", roles: ["learner", "admin"] },
  { to: "/settings", label: "Settings", icon: "settings", roles: ["learner", "admin"] },
];

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/login");
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 pt-24 bg-slate-50 dark:bg-slate-950 flex flex-col gap-2 z-40 hidden md:flex">
        <div className="px-6 mb-8 flex flex-col items-center text-center">
          <img
            src={user?.avatar || "https://via.placeholder.com/64"}
            alt="Curator Avatar"
            className="w-16 h-16 rounded-full mb-3 object-cover shadow-sm"
          />
          <div className="text-blue-900 dark:text-blue-400 font-headline text-sm font-semibold">
            {user?.role || "Master Curator"}
          </div>
          <div className="text-slate-500 text-xs">Academic Level 8</div>
        </div>

        <nav className="flex flex-col gap-1">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`ml-4 pl-6 py-4 flex items-center gap-3 rounded-l-full font-headline text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-sm translate-x-1"
                    : "text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:text-blue-900"
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-6 flex flex-col gap-2">
          <button className="w-full bg-primary text-on-primary py-3 px-4 rounded-lg font-headline text-sm font-bold shadow-md hover:opacity-90 transition-opacity">
            Enroll New Course
          </button>
          <button
            onClick={handleLogout}
            className="w-full py-3 px-4 rounded-lg text-on-primary font-bold text-sm bg-error hover:opacity-90 transition-opacity"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Top Nav */}
      <nav className="fixed top-0 left-0 md:left-64 w-full h-20 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow flex justify-between items-center px-8">
        <div className="text-2xl font-extrabold tracking-tighter text-blue-900 dark:text-blue-100 font-headline">
          Academic Atelier
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span className="material-symbols-outlined cursor-pointer">notifications</span>
          <span className="material-symbols-outlined cursor-pointer">help</span>
          <img
            src={user?.avatar || "https://via.placeholder.com/40"}
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-secondary-container"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-64 pt-28 pb-12 px-8 min-h-screen bg-surface">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface font-headline mb-2">
                Welcome back, {user?.name || "Elena"}.
              </h1>
              <p className="text-on-surface-variant italic font-body text-lg max-w-2xl">
                "The beautiful thing about learning is that nobody can take it away from you." — B.B. King
              </p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">
                Last Updated
              </span>
              <span className="text-headline-sm font-bold text-secondary">Today, 09:42 AM</span>
            </div>
          </header>

          {/* Learning Stats Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example Stat Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                schedule
              </span>
              <div>
                <div className="text-4xl font-extrabold font-headline text-primary mb-1">128</div>
                <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Hours Learned
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-secondary text-4xl">extension</span>
              <div>
                <div className="text-4xl font-extrabold font-headline text-primary mb-1">24</div>
                <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Modules Completed
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-tertiary-container text-4xl">auto_graph</span>
              <div>
                <div className="text-4xl font-extrabold font-headline text-primary mb-1">842</div>
                <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Skill Score
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-error text-4xl">local_fire_department</span>
              <div>
                <div className="text-4xl font-extrabold font-headline text-primary mb-1">12</div>
                <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Day Streak
                </div>
              </div>
            </div>
          </section>

          {/* Additional content: course cards, skill breakdown, milestones */}
        </div>
      </main>
    </div>
  );
};

export default MyProgress;