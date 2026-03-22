// src/pages/Builder.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Builder = () => {
  const location = useLocation();
  const navItems = [
    { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { label: "Courses", icon: "menu_book", path: "/builder" },
    { label: "Logs", icon: "history_edu", path: "/logs" },
    { label: "Catalog", icon: "local_library", path: "/catalog" },
    { label: "My Progress", icon: "trending_up", path: "/progress" },
    { label: "Settings", icon: "settings", path: "/settings" },
  ];

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-slate-50 dark:bg-slate-900 flex flex-col py-8 px-4 z-50 font-['Manrope']">
        {/* Header / Logo */}
        <div className="px-2 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary shadow-sm">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tighter text-blue-900 dark:text-blue-100 leading-tight">The Atelier</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Master Curator</p>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-teal-600 font-bold border-r-4 border-teal-500 bg-teal-50/50 dark:bg-teal-900/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        {/* Create Course Button */}
        <div className="px-2 mb-6">
          <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-sm">add</span>
            <span>Create New Course</span>
          </button>
        </div>
        {/* Footer Links */}
        <footer className="mt-auto pt-4 space-y-1 border-t border-slate-100 dark:border-slate-800/50">
          <Link
            to="/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              location.pathname === "/settings"
                ? "text-teal-600 font-bold border-r-4 border-teal-500 bg-teal-50/50 dark:bg-teal-900/20"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">settings</span>
            <span className="font-medium text-sm">Settings</span>
          </Link>
          <button className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error-container/20 transition-all duration-200 rounded-xl w-full">
            <span className="material-symbols-outlined text-[22px]">logout</span>
            <span className="font-medium text-sm">Logout</span>
          </button>
        </footer>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 left-64 h-20 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm shadow-blue-900/5 flex items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <span className="hidden md:block text-2xl font-black text-blue-900 dark:text-blue-50 tracking-tighter font-headline">
            Academic Atelier
          </span>
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              to="/dashboard"
              className="text-teal-600 dark:text-teal-400 font-bold border-b-2 border-teal-600 px-1 py-2 font-headline tracking-tight"
            >
              Admin View
            </Link>
            <Link
              to="/learner"
              className="text-slate-500 dark:text-slate-400 font-medium hover:text-blue-900 px-1 py-2 font-headline tracking-tight transition-all"
            >
              Learner View
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-secondary/20 w-64"
              placeholder="Search resources..."
              type="text"
            />
          </div>
          <button className="p-2 hover:bg-slate-100/50 rounded-full transition-all">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          </button>
          <button className="p-2 hover:bg-slate-100/50 rounded-full transition-all">
            <span className="material-symbols-outlined text-on-surface-variant">help_outline</span>
          </button>
          <img
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXrg8o1YSRnoy3eg8ST10Ts5YtwkWFIfA8SIg1BexMr35EpjkRNaX_OiM6oeQkMoJVzi6mYJNK_bLzkbD0oeXLrtPDM_zn3T5TAai62xeACsPhpZRG3vXxYJ_5cfAV_OOTwF-dI7wLEyMKmN9-czOFs0HFjmB4Ua0Uf2lZWAFL2fWC-5ARqa4FXB6MsPlACyGtXZl4DWmiaWZKAThUIO8sAIZRUnxgXNkEyz7AmQF1z761Xyo9Kehxk2Y-1gJG_TldUOtAmZgLQ"
            alt="User avatar"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 pt-24 px-10 pb-20 min-h-screen">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <nav className="flex gap-2 text-xs text-outline mb-2 uppercase tracking-widest font-bold">
              <span>Admin</span> / <span className="text-secondary">Course Creator</span>
            </nav>
            <h1 className="text-4xl font-black font-headline tracking-tighter text-primary">Assemble Your Atelier</h1>
            <p className="text-on-surface-variant mt-1">Define the foundation and lessons for your curated learning path.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 rounded-lg font-bold text-primary bg-primary-fixed hover:bg-primary-fixed/80 transition-all">Save Draft</button>
            <button className="px-8 py-2.5 rounded-lg font-bold text-on-primary bg-secondary hover:bg-secondary/90 transition-all shadow-md shadow-secondary/20">Publish Course</button>
          </div>
        </header>
        {/* Multi-step course form content goes here */}
      </main>
    </div>
  );
};

export default Builder;