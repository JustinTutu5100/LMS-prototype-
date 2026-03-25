import React from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * Props:
 * - user: { name, role }
 * - onLogout: function
 * - courses: array of courses (id, title, category, description, lessons, progress, thumbnail)
 * - stats: { totalEnrolled, lessonsDone, hoursLearned, currentCourse }
 *
 * This component uses TailwindCSS classes. Ensure you have Tailwind and Material Symbols loaded.
 */

const sampleCourses = [
  {
    id: "uiux",
    title: "UI/UX Design Principles",
    category: "Design",
    description:
      "Master the core principles of UI and UX: typography, color, layout and accessibility.",
    lessons: 2,
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&q=60&auto=format&fit=crop",
  },
  {
    id: "ds-python",
    title: "Data Science with Python",
    category: "Data Science",
    description:
      "Learn pandas, NumPy, matplotlib and scikit-learn to analyze data and build models.",
    lessons: 2,
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=60&auto=format&fit=crop",
  },
  {
    id: "react-intro",
    title: "Introduction to React",
    category: "Programming",
    description:
      "Fundamentals of React: components, hooks, state and building modern UIs.",
    lessons: 3,
    progress: 33,
    thumbnail: "https://images.unsplash.com/photo-1523475496153-3d6ccf2b2d3a?w=800&q=60&auto=format&fit=crop",
  },
];

const LearnerDashboard = ({
  user,
  onLogout,
  courses = sampleCourses,
  stats = {
    totalEnrolled: 1,
    lessonsDone: 1,
    hoursLearned: 0,
    currentCourse: {
      title: "Introduction to React",
      completedLessons: 1,
      totalLessons: 3,
      percent: 33,
    },
  },
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/login");
  };

  const handleEnroll = (courseId) => {
    navigate(`/learner/courses/${courseId}`);
  };

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-40">
        <div className="h-full flex flex-col">
          <div className="px-6 py-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg font-bold">
                {user?.name?.charAt(0) ?? "U"}
              </div>
              <div>
                <div className="text-lg font-extrabold text-indigo-700">Academic Atelier</div>
                <div className="text-xs text-slate-500">{user?.role ?? "Learner"}</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
            <Link to="/learner/dashboard" className="block px-4 py-3 rounded-lg bg-indigo-50 text-indigo-700 font-medium">Dashboard</Link>
            <Link to="/learner/courses" className="block px-4 py-3 rounded-lg hover:bg-slate-50">Courses</Link>
            <Link to="/learner/my-progress" className="block px-4 py-3 rounded-lg hover:bg-slate-50">My Progress</Link>
            <Link to="/learner/catalog" className="block px-4 py-3 rounded-lg hover:bg-slate-50">Catalog</Link>
            <Link to="/learner/settings" className="block px-4 py-3 rounded-lg hover:bg-slate-50">Settings</Link>
          </nav>

          <div className="px-6 py-6 border-t">
            <button
              onClick={() => navigate("/learner/upgrade")}
              className="w-full mb-3 px-4 py-3 rounded-lg bg-indigo-600 text-white font-semibold"
            >
              Upgrade Plan
            </button>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-rounded">logout</span>
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-72">
        <header className="h-20 flex items-center justify-between px-8 border-b bg-white sticky top-0 z-30">
          <div>
            <h1 className="text-2xl font-extrabold">Available Courses</h1>
            <p className="text-sm text-slate-500">in the library</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-600">Welcome, <span className="font-semibold">{user?.name ?? "Learner"}</span></div>
            <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold">
              {user?.name?.split(" ").map(n => n[0]).slice(0,2).join("") || "U"}
            </div>
          </div>
        </header>

        <main className="p-8 max-w-6xl mx-auto">
          {/* Top stats: boxed flex items */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 bg-white rounded-2xl p-5 shadow flex flex-col">
              <div className="text-sm text-slate-500">Enrolled</div>
              <div className="text-3xl font-extrabold mt-2">{stats.totalEnrolled}</div>
              <div className="text-xs text-slate-400 mt-2">courses started</div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-5 shadow flex flex-col">
              <div className="text-sm text-slate-500">Lessons Done</div>
              <div className="text-3xl font-extrabold mt-2">{stats.lessonsDone}</div>
              <div className="text-xs text-slate-400 mt-2">completed</div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-5 shadow flex flex-col">
              <div className="text-sm text-slate-500">Hours Learned</div>
              <div className="text-3xl font-extrabold mt-2">{stats.hoursLearned}</div>
              <div className="text-xs text-slate-400 mt-2">estimated</div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-5 shadow flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-slate-500">Course Progress</div>
                  <div className="text-base font-semibold mt-1">{stats.currentCourse.title}</div>
                  <div className="text-xs text-slate-400">{stats.currentCourse.completedLessons} / {stats.currentCourse.totalLessons} lessons</div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600">{stats.currentCourse.percent}%</div>
                  <div className="text-xs text-slate-400 mt-2">
                    <Link to="/learner/courses" className="text-indigo-600 hover:underline">View All</Link>
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-100 rounded-full h-2 mt-4 overflow-hidden">
                <div
                  className="h-2 bg-indigo-600 rounded-full transition-all"
                  style={{ width: `${stats.currentCourse.percent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Explore header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-extrabold">Explore More Courses</h2>
            <Link to="/learner/courses" className="text-sm text-indigo-600 hover:underline">View All</Link>
          </div>

          {/* Courses list: each card is horizontal flex with thumbnail */}
          <div className="space-y-4">
            {courses.map((c) => (
              <article
                key={c.id}
                className="bg-white rounded-2xl p-4 shadow flex flex-col sm:flex-row gap-4 items-stretch"
              >
                {/* Thumbnail */}
                <button
                  onClick={() => navigate(`/learner/courses/${c.id}`)}
                  className="flex-shrink-0 w-full sm:w-48 h-32 sm:h-auto rounded-lg overflow-hidden bg-slate-100"
                >
                  <img
                    src={c.thumbnail}
                    alt={c.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
                  />
                </button>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                        <div className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mt-1">{c.category}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-slate-500">{c.lessons} lessons</div>
                        {c.progress ? (
                          <div className="mt-2">
                            <div className="text-sm font-semibold text-indigo-600">{c.progress}%</div>
                            <div className="w-24 bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
                              <div className="h-2 bg-indigo-600" style={{ width: `${c.progress}%` }} />
                            </div>
                          </div>
                        ) : (
                          <div className="mt-3">
                            <button
                              onClick={() => handleEnroll(c.id)}
                              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold"
                            >
                              Enroll
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mt-4 line-clamp-3">{c.description}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span className="material-symbols-rounded text-base">schedule</span>
                      <span>{c.lessons} lessons</span>
                      <span className="text-slate-300">•</span>
                      <span>{c.progress ? `${c.progress}% progress` : "Not enrolled"}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link to={`/learner/courses/${c.id}`} className="text-sm text-indigo-600 hover:underline">View Course</Link>
                      <button
                        onClick={() => handleEnroll(c.id)}
                        className="text-sm px-3 py-2 border rounded-lg hover:bg-slate-50"
                      >
                        {c.progress ? "Continue" : "Enroll"}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LearnerDashboard;