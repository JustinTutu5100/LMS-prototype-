// src/pages/Courses.jsx
import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar"; // optional, your existing navbar
import Card from "../components/Card"; // metric cards
import MilestoneCard from "../components/MilestoneCard";
import { Link } from "react-router-dom";

const initialCourses = [
  {
    id: 1,
    slug: "spatial-composition",
    title: "Spatial Composition",
    category: "Design Philosophy",
    progress: 72,
    description:
      "Exploring the relationship between negative space and structural integrity in modern urban environments.",
    img:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhIZPX5l7_qNjxBNUwkfGXWn4LY7pmnI3FRZ02tYpmj-tviNk-TNs8seAC_SonDIIYfHkrGOSgkFzYEDyMjSdNqBINUedCxjyWbop9Yg85r2AbQwnyzw6FFO6ZL5iVMKFF2kposZgri5WvxOc9hHR5WpbzsNnIEQ-2a7lqUPfslL_sgQIqIthwEWfJq87408jDz8zyB54siJ0fx4cZtaQEfCtWoCsHtKUw-fsHjFRL3q9mQL1vYC0ozU7el3FEsSWaXFGq8c_SAw",
  },
  {
    id: 2,
    slug: "micro-adaptive-systems",
    title: "Micro-Adaptive Systems",
    category: "Systems Engineering",
    progress: 45,
    description:
      "Introduction to self-regulating feedback loops in digital ecosystems and autonomous networks.",
    img:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTGXiNsxUkTQ6I99xkxsb3rBgfzHag95IbA2kn5fPFhNRbgJxvev95eMldkOqv043MiDKFW5mbsffM6nGefiCn2tEILdol2BEnDxfMwhQauTB6NGQuCokaHeFgWEnzE3b6HxVpcPQxH1HQNWVGCjZJ6Bdrfu5izWHJRqZnbOaavgSaKV60vnQsmUJ32sP854dG7F4Sg9rDFegaibSZF-ztv1KFsnF9ZNhhLLBpYLnG736xmrVj11CeXio3SbfyZOym9fu8ffaCuA",
  },
  {
    id: 3,
    slug: "uiux",
    title: "UI/UX Design Principles",
    category: "Design",
    progress: 0,
    description:
      "Master core UI/UX principles: typography, color, layout, accessibility, and prototyping.",
    img:
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=1400&q=60&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "data-python",
    title: "Data Science with Python",
    category: "Data Science",
    progress: 0,
    description:
      "Learn pandas, NumPy, matplotlib and scikit-learn to analyze data and build models.",
    img:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1400&q=60&auto=format&fit=crop",
  },
];

const Courses = (props) => {
  const [courses, setCourses] = useState(initialCourses);
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0]?.id ?? null);

  const selectedCourse = useMemo(
    () => courses.find((c) => c.id === selectedCourseId) ?? null,
    [courses, selectedCourseId]
  );

  const markAsCompleted = async (courseId) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === courseId ? { ...c, progress: 100 } : c))
    );
  };

  const openCourse = (courseId) => {
    setSelectedCourseId(courseId);
    const player = document.getElementById("course-player-pane");
    if (player) player.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex bg-background text-on-surface min-h-screen font-['Manrope']">
      <Sidebar user={props.user} onLogout={props.onLogout} />

      <div className="flex-1 ml-64">
        <Navbar />

        <main className="pt-16 p-6 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Courses</h1>
                <p className="text-sm text-on-surface-variant mt-1">
                  Browse the catalog and open a lesson on the left. Mark lessons as completed as you progress.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link to="/learner/courses" className="text-sm text-indigo-600 hover:underline">
                  Full Catalog
                </Link>
              </div>
            </div>

            

            {/* If no course selected: show catalog grid first (boxes left-to-right), then placeholder player below */}
            {selectedCourseId === null ? (
              <div className="space-y-8">
                {/* Grid of boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((c) => (
                    <article
                      key={c.id}
                      onClick={() => openCourse(c.id)}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
                    >
                      <div className="w-full h-40 overflow-hidden">
                        <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-slate-900">{c.title}</h4>
                          <div className="text-xs text-slate-500">{c.progress}%</div>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{c.category}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="w-28 bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div className="h-2 bg-indigo-600" style={{ width: `${c.progress}%` }} />
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openCourse(c.id);
                            }}
                            className="text-xs px-3 py-1 rounded-md bg-indigo-600 text-white"
                          >
                            Open
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Placeholder player below */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
                  <p className="text-slate-500 mb-4">Select a course above to open the lesson.</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedCourseId(courses[0]?.id ?? null)}
                      className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
                    >
                      Open first course
                    </button>
                    <Link to="/learner/courses" className="px-4 py-2 rounded-lg bg-slate-100 text-sm hover:bg-slate-200">
                      Browse All
                    </Link>
                  </div>
                </section>
              </div>
            ) : (
              /* When a course is selected, show the two-column layout: player left, catalog right */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <section
                  id="course-player-pane"
                  className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
                  aria-live="polite"
                >
                  {selectedCourse ? (
                    <>
                      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-widest">
                            <span>Module 01</span>
                            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                            <span className="text-slate-500">Lesson 03</span>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                            {selectedCourse.title}
                          </h2>

                          <p className="text-sm text-slate-500">{selectedCourse.category} • {selectedCourse.progress}% complete</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setSelectedCourseId(null)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-sm hover:bg-slate-200 transition"
                          >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Catalog
                          </button>

                          <button
                            onClick={() => markAsCompleted(selectedCourse.id)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:scale-[1.02] transition"
                            aria-pressed={selectedCourse.progress === 100}
                          >
                            Mark as Completed
                            <span className="material-symbols-outlined">check</span>
                          </button>
                        </div>
                      </div>

                      <div className="relative w-full rounded-xl overflow-hidden mb-6 h-[320px] bg-slate-100 shadow">
                        <img alt={selectedCourse.title} src={selectedCourse.img} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-5">
                          <div className="bg-white/10 text-white text-sm px-3 py-1 rounded-full backdrop-blur">{selectedCourse.title}</div>
                        </div>
                      </div>

                      <article className="prose prose-slate max-w-none text-slate-700 space-y-5">
                        <p>{selectedCourse.description}</p>

                        <h3 className="mt-6 text-lg font-semibold">Lesson Contents</h3>
                        <ol className="list-decimal ml-6 text-slate-700">
                          <li>Introduction & objectives</li>
                          <li>Core concepts and examples</li>
                          <li>Mini exercise</li>
                          <li>Summary & resources</li>
                        </ol>

                        <h3 className="mt-6 text-lg font-semibold">Key Takeaways</h3>
                        <ul className="list-disc ml-6 text-slate-700">
                          <li>Use consistent spacing scales to create rhythm.</li>
                          <li>Group related items and separate unrelated ones.</li>
                          <li>Leverage negative space to emphasize important content.</li>
                        </ul>
                      </article>
                    </>
                  ) : null}
                </section>

                <aside className="lg:col-span-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Courses</h3>
                    <Link to="/learner/courses" className="text-sm text-indigo-600 hover:underline">View All</Link>
                  </div>

                  <div className="space-y-3">
                    {courses.map((c) => (
                      <article
                        key={c.id}
                        className={`bg-white rounded-lg shadow-sm border border-gray-100 flex items-center gap-3 p-3 hover:shadow-md transition cursor-pointer ${selectedCourseId === c.id ? "ring-2 ring-indigo-100" : ""
                          }`}
                        onClick={() => openCourse(c.id)}
                        role="button"
                        aria-pressed={selectedCourseId === c.id}
                      >
                        <div className="shrink-0 w-20 h-12 rounded-md overflow-hidden bg-slate-100">
                          <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="text-sm font-semibold text-slate-900 truncate">{c.title}</h4>
                            <div className="text-xs text-slate-400">{c.progress}%</div>
                          </div>

                          <div className="text-xs text-slate-400 mt-1 truncate">{c.category}</div>

                          <div className="mt-2 flex items-center gap-3">
                            <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden">
                              <div className="h-2 bg-indigo-600" style={{ width: `${c.progress}%` }} />
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openCourse(c.id);
                              }}
                              className="text-xs px-2 py-1 rounded-md bg-indigo-600 text-white"
                            >
                              Open
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold mb-3">Recent Milestones</h4>
                    <MilestoneCard />
                  </div>
                </aside>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Courses;