import React from "react";
import { Link, useLocation } from "react-router-dom";

const CoursePlayer = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { label: "Courses", icon: "menu_book", path: "/courses" },
    { label: "Logs", icon: "history_edu", path: "/logs" },
    { label: "Catalog", icon: "local_library", path: "/catalog" },
    { label: "My Progress", icon: "trending_up", path: "/my-progress" },
    { label: "Settings", icon: "settings", path: "/settings" },
  ];

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen font-['Manrope']">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-slate-50 dark:bg-slate-900 z-50 font-['Manrope'] antialiased tracking-tight flex flex-col py-8 px-4">
        {/* Header */}
        <div className="px-2 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">
            U
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100">
              The Atelier
            </h2>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
              Master Curator
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-teal-600 font-bold border-r-4 border-teal-500 bg-teal-50/50 dark:bg-teal-900/20 translate-x-1"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span className="font-semibold text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800/50 space-y-4">
          <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold text-sm">
            Upgrade Plan
          </button>
          <Link
            to="/logout"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-error w-full rounded-lg"
          >
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Top Navbar */}
      <header className="fixed top-0 right-0 left-64 h-16 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl flex items-center justify-between px-8 shadow-sm shadow-slate-200/50 dark:shadow-none">
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 font-headline text-sm font-medium">
            <Link
              to="/dashboard"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Admin View
            </Link>
            <Link
              to="/learner"
              className="text-teal-600 dark:text-teal-400 font-semibold"
            >
              Learner View
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:text-blue-700 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary-fixed overflow-hidden ring-2 ring-slate-100">
            <img
              alt="User Profile Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUCWbHuGeAAl-7h-PHutg-E_Rtb0tABwcXyi0E_Jz4ecpSoO992c0AlxEl1uY3whUrvve2neaEY1y9yCO1Yl25WNhQcANCCsyFuCvaiaghjBdH4I0veFbgrtVsbHNk_MvqJ2yVGknq-MFzA2oF75USr_u2vBzwM7AkKSmCXh71Ng7xT5PKfka7QnNZ5jVBc30LptbrPKX0iJmTvXr3R2033VZKh5NEKPih-sE_oeY-XPz-Laqnepe9vkd8CZ47R6ZXG4u0wi1lvA"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 ml-64 pt-20 pb-10 px-8 md:px-12 bg-surface-container-low min-h-screen overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Lesson Header */}
          <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <nav className="flex items-center gap-2 text-xs font-bold text-teal-600 uppercase tracking-widest mb-2">
                <span>Module 01</span>
                <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                <span className="text-slate-500">Lesson 03</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-blue-900 tracking-tight leading-tight">
                Spatial Composition & Breathing Room
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-surface-container-highest text-on-surface hover:bg-surface-variant transition-all">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
                Previous
              </button>
              <button className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm bg-secondary text-white shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Mark as Completed
                <span className="material-symbols-outlined text-lg">check</span>
              </button>
            </div>
          </header>

          {/* Media Section */}
          <section className="relative h-[450px] w-full rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-blue-900/10">
            <img
              alt="Lesson Header Visual"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZjumwbVGmddHx59oUYGHUVgmyzdWdlmEDMGs6-c7PqyI8Qkp-984gsR6dDZPNE8QI-K72gFxViAwLFcQeO-iU4-I2nKLSFBmExAGbt7hAXnCHRomB87wZXIy4CEsPiRWrFLrW-t-B-uw6dXB13OdxzwzbtfTvgQzpviPctVy8iN_mpUIb6I6Ndu_obOnpi75RmLsr_jmFz3jsYlrFx-MBoqkH_rVkGh4NXakcHMPQZmVbm7-iXVp8_UAiVTOnQ1u6aMgM8dnd0A"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent flex items-end p-10">
              <div className="backdrop-blur-md bg-white/10 ring-1 ring-white/20 px-6 py-3 rounded-full flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                <p className="text-white text-sm font-bold tracking-tight">
                  Case Study: Visualizing Spatial Composition
                </p>
              </div>
            </div>
          </section>

          {/* Lesson Content */}
          {/* Add your lesson text, exercises, or media here */}
        </div>
      </main>
    </div>
  );
};

export default CoursePlayer;