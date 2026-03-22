import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"; // optional, your dashboard doesn't use it
import Card from "../components/Card";
import MilestoneCard from "../components/MilestoneCard";

const Lesson = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { label: "Courses", icon: "menu_book", path: "/builder" },
    { label: "Logs", icon: "history_edu", path: "/logs" },
    { label: "Catalog", icon: "local_library", path: "/catalog" },
    { label: "My Progress", icon: "trending_up", path: "/progress" },
  ];

  const courses = [
    {
      id: 1,
      title: "Spatial Composition",
      category: "Design Philosophy",
      progress: 72,
      description:
        "Exploring the relationship between negative space and structural integrity in modern urban environments.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhIZPX5l7_qNjxBNUwkfGXWn4LY7pmnI3FRZ02tYpmj-tviNk-TNs8seAC_SonDIIYfHkrGOSgkFzYEDyMjSdNqBINUedCxjyWbop9Yg85r2AbQwnyzw6FFO6ZL5iVMKFF2kposZgri5WvxOc9hHR5WpbzsNnIEQ-2a7lqUPfslL_sgQIqIthwEWfJq87408jDz8zyB54siJ0fx4cZtaQEfCtWoCsHtKUw-fsHjFRL3q9mQL1vYC0ozU7el3FEsSWaXFGq8c_SAw",
    },
    {
      id: 2,
      title: "Micro-Adaptive Systems",
      category: "Systems Engineering",
      progress: 45,
      description:
        "Introduction to self-regulating feedback loops in digital ecosystems and autonomous networks.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTGXiNsxUkTQ6I99xkxsb3rBgfzHag95IbA2kn5fPFhNRbgJxvev95eMldkOqv043MiDKFW5mbsffM6nGefiCn2tEILdol2BEnDxfMwhQauTB6NGQuCokaHeFgWEnzE3b6HxVpcPQxH1HQNWVGCjZJ6Bdrfu5izWHJRqZnbOaavgSaKV60vnQsmUJ32sP854dG7F4Sg9rDFegaibSZF-ztv1KFsnF9ZNhhLLBpYLnG736xmrVj11CeXio3SbfyZOym9fu8ffaCuA",
    },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen font-['Manrope']">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-slate-50 dark:bg-slate-900 flex flex-col py-8 px-4 z-50">
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

      {/* Top Navbar */}
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
            Lesson Overview
          </h1>
          <p className="text-on-surface-variant mt-2">
            Explore your current courses and milestones.
          </p>

          {/* Metrics Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card title="Total Enrolled" value="14" subtitle="+2 this week" icon="menu_book" color="primary" />
            <Card title="Completed Courses" value="08" subtitle="Top 5% Learner" icon="task_alt" color="secondary" />
            <Card title="Learning Points" value="1,240" icon="token" color="primary" />
          </section>

          {/* Courses and Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
            <div className="lg:col-span-8 space-y-6">
              {courses.map((course) => (
                <Card key={course.id} {...course} />
              ))}
            </div>
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-extrabold font-headline tracking-tight text-primary mb-8">
                Recent Milestones
              </h2>
              <MilestoneCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lesson;