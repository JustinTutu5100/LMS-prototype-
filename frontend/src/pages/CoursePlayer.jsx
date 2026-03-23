import React from "react";
import Sidebar from "../components/Sidebar";

const CoursePlayer = (props) => {
  // You may want to pass user and onLogout props from a parent or context
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen font-['Manrope'] flex">
      <Sidebar user={props.user} onLogout={props.onLogout} />
      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Navbar */}
        <header className="fixed top-0 right-0 left-64 h-16 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl flex items-center justify-between px-8 shadow-sm shadow-slate-200/50 dark:shadow-none">
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 font-headline text-sm font-medium">
              <a
                href="/dashboard"
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Admin View
              </a>
              <a
                href="/learner"
                className="text-teal-600 dark:text-teal-400 font-semibold"
              >
                Learner View
              </a>
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
        <main className="pt-20 pb-10 px-8 md:px-12 bg-surface-container-low min-h-screen overflow-y-auto">
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
    </div>
  );
};

export default CoursePlayer;