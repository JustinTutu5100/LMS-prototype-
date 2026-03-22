import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Example Avatar URL
const profilePic =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAHDQAuz1axK0DQ_HhNpCN2nwxFVc8mcnzbZdyUy8V6Be8DWX2Nyj-HjD3zSuyBprV5dzLil6G1ck-sbLgyXe70QruVm-ZOJuTJVfAb82UIi0ATzv-6G7C_7sK9Ksky2DM3rFLc0t5yGl9JNWDtrht9mByQUL-jtvt1nrcLydkIo-1kNb4ml774cyJKVK7LddYjePiubeK8L3ViqWA4lFf6a1quO7UaXdoxzmcHlfSanDmUf2N9coFp8zNC6VDIHAUiet2ApkV0vQ";

export default function account() {
  const [fullName, setFullName] = useState("Julian Vane");
  const [email, setEmail] = useState("julian.vane@atelier.edu");
  const [bio, setBio] = useState(
    "Exploring the intersection of classical humanities and digital architecture. Dedicated to curating premium learning experiences for the next generation of scholars."
  );

  const location = useLocation(); // to detect current page for active link
 const navItems = [
    { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { label: "Courses", icon: "menu_book", path: "/builder" },
    { label: "Logs", icon: "history_edu", path: "/logs" },
    { label: "Catalog", icon: "local_library", path: "/catalog" },
    { label: "My Progress", icon: "trending_up", path: "/progress" },
  ];
  return (
    <div className="flex bg-surface text-on-surface min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 fixed left-0 top-0 h-screen bg-slate-50 dark:bg-slate-900 overflow-y-auto z-50 py-8 px-4 font-['Manrope']">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                palette
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tighter text-blue-900 dark:text-blue-100">
                The Atelier
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">
                Master Curator
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/80 ${
                  isActive
                    ? "font-bold border-r-4 border-teal-500 bg-teal-50/50 dark:bg-teal-900/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-200"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4">
          <button className="w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            Upgrade Plan
          </button>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-error transition-colors rounded-lg"
            to="/"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Logout
            </span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:pl-64 pt-24 pb-20 px-6 flex-1">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-headline font-extrabold tracking-tight text-primary mb-2">
                Account Atelier
              </h1>
              <p className="text-on-surface-variant font-body">
                Refine your digital presence and studio preferences.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-lg hover:bg-surface-container-highest transition-colors">
                Discard
              </button>
              <button className="px-6 py-2.5 bg-primary text-on-primary font-semibold rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Save Atelier
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3 sticky top-32 space-y-1">
              {["Profile", "Security", "Notifications", "Billing"].map(
                (section) => (
                  <a
                    key={section}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                      section === "Profile"
                        ? "bg-white shadow-sm text-secondary font-bold"
                        : "text-on-surface-variant hover:bg-surface-container"
                    }`}
                    href={`#${section.toLowerCase()}`}
                  >
                    <span className="material-symbols-outlined">
                      {section === "Profile"
                        ? "person"
                        : section === "Security"
                        ? "verified_user"
                        : section === "Notifications"
                        ? "notifications_active"
                        : "payments"}
                    </span>
                    <span className="text-sm">{section}</span>
                  </a>
                )
              )}
            </div>

            {/* Content */}
            <div className="lg:col-span-9 space-y-8">
              <section
                id="profile"
                className="bg-surface-container-lowest rounded-xl p-8 shadow-sm"
              >
                <h2 className="text-xl font-headline font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                  Profile Details
                </h2>

                <div className="flex flex-col md:flex-row gap-10 items-start mb-8">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-2xl bg-slate-100 overflow-hidden border-4 border-white shadow-md">
                      <img
                        src={profilePic}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute -bottom-3 -right-3 p-2 bg-secondary text-on-secondary rounded-lg shadow-lg hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm">
                        photo_camera
                      </span>
                    </button>
                  </div>

                  <div className="flex-1 w-full space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-surface border-outline-variant/20 focus:border-secondary focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                          Role
                        </label>
                        <div className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg py-3 px-4 text-secondary font-semibold">
                          Master Curator
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-surface border-outline-variant/20 focus:border-secondary focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Bio
                      </label>
                      <textarea
                        rows="4"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full bg-surface border-outline-variant/20 focus:border-secondary focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}