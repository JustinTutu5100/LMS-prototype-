// src/pages/MyProgress.jsx
import React, { useMemo } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const sampleCourses = [
  {
    id: 1,
    title: "Spatial Composition",
    category: "Design Philosophy",
    progress: 72,
    img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=1200&q=60&auto=format&fit=crop",
    slug: "spatial-composition",
  },
  {
    id: 2,
    title: "Micro-Adaptive Systems",
    category: "Systems Engineering",
    progress: 45,
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=60&auto=format&fit=crop",
    slug: "micro-adaptive-systems",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    category: "Design",
    progress: 0,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=60&auto=format&fit=crop",
    slug: "uiux",
  },
  {
    id: 4,
    title: "Data Science with Python",
    category: "Data Science",
    progress: 100,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=60&auto=format&fit=crop",
    slug: "data-python",
  },
];

const CourseCard = ({ course, onContinue }) => {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-md">
      <div className="flex items-stretch">
        <div className="w-36 h-28 shrink-0 overflow-hidden">
          <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-slate-900">{course.title}</h4>
              <span className="text-xs text-slate-500">{course.progress}%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">{course.category}</p>

            <div className="mt-3">
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 bg-indigo-600"
                  style={{ width: `${Math.max(2, course.progress)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <Link
              to={`/learner/courses/${course.slug}`}
              className="text-xs px-3 py-1 rounded-md bg-indigo-600 text-white"
              onClick={onContinue}
            >
              Continue
            </Link>

            <div className="text-xs text-slate-500">Started</div>
          </div>
        </div>
      </div>
    </article>
  );
};

const MyProgress = (props) => {
  const user = props.user;

  // Use courses passed from props (e.g., parent state or API) or fallback to sample list
  const allCourses = props.courses ?? sampleCourses;

  // Filter to started courses only: progress > 0 and < 100
  const startedCourses = useMemo(
    () => allCourses.filter((c) => Number(c.progress) > 0 && Number(c.progress) < 100),
    [allCourses]
  );

  return (
    <div className="flex bg-surface text-on-surface min-h-screen font-body">
      {/* Sidebar */}
      <Sidebar user={user} onLogout={props.onLogout} />

      {/* Main Area */}
      <div className="flex-1 ml-64">
        {/* Top Navbar */}
        <Navbar user={user} />

        {/* Main Content */}
        <main className="pt-20 px-8 pb-12">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Header */}
           

            {/* Stats Grid */}
            
            {/* Started Courses */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">My Progress</h2>
                <Link to="/learner/courses" className="text-sm text-indigo-600 hover:underline">
                  Browse all courses
                </Link>
              </div>

              {startedCourses.length === 0 ? (
                <div className="rounded-2xl bg-white border border-dashed border-gray-200 p-8 text-center text-slate-500">
                  You have no started courses yet. Begin a course to see progress here.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {startedCourses.map((c) => (
                    <CourseCard
                      key={c.id}
                      course={c}
                      onContinue={() => {
                        // Optional: track analytics or focus on player
                        if (props.onOpenCourse) props.onOpenCourse(c.id);
                      }}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyProgress;