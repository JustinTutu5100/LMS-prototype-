// src/Dashboard.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { label: "Courses", icon: "menu_book", path: "/builder" },
    { label: "Logs", icon: "history_edu", path: "/logs" },
    { label: "Catalog", icon: "local_library", path: "/catalog" },
    { label: "My Progress", icon: "trending_up", path: "/progress" },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-slate-50 dark:bg-slate-900 flex flex-col py-8 px-4 z-50 font-['Manrope']">
        {/* Logo + Profile */}
        <div className="px-2 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 leading-tight">
              The Atelier
            </h2>
            <p className="text-xs text-slate-500 font-medium">Master Curator</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-teal-600 font-bold border-r-4 border-teal-500 bg-teal-50/50 dark:bg-teal-900/20 translate-x-1"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-semibold text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom buttons */}
        <div className="px-2 mt-4 space-y-4">
          <button className="w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-sm">add</span>
            Create New Course
          </button>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-64 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm h-16 flex items-center justify-between px-8 font-['Manrope'] text-sm font-medium">
        <div className="flex items-center gap-8">
          <span className="hidden md:block text-xl font-black text-blue-900 dark:text-blue-50 tracking-tighter">
            Academic Atelier
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 pt-16 p-8 min-h-screen">
        <div className="max-w-7xl mx-auto py-8 space-y-8">
          <h1 className="text-4xl font-extrabold font-headline text-primary">
            Curator Dashboard
          </h1>
          <p className="text-on-surface-variant mt-2">
            Welcome back. Here is the overview of your academic studio.
          </p>

          {/* Metrics and Course Tables can go here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;