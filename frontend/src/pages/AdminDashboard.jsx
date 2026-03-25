import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [recentCourses, setRecentCourses] = useState([]);
  const [stats, setStats] = useState({
    manageCourses: 0,
    totalCourses: 0,
    publishedCourses: 0,
    totalLearners: 0, // you can fetch from backend if you have users API
    totalLessons: 0,
    activityLogs: [],
  });

  const location = useLocation();
  const navigate = useNavigate();

  const curatorName = "Justin";

  const links = [
    { path: "/admin/courses", label: "Courses", icon: "menu_book" },
    { path: "/admin/settings", label: "Settings", icon: "settings" },
  ];

  // Fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token"); // for protected routes
        const res = await fetch("http://localhost:5000/api/courses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        // latest 4 courses
        setRecentCourses(data.slice(0, 4));

        const totalLessons = data.reduce((sum, c) => sum + (c.lessons || 0), 0);
        const publishedCourses = data.filter((c) => c.status === "published").length;

        setStats((s) => ({
          ...s,
          manageCourses: data.length,
          totalCourses: data.length,
          publishedCourses,
          totalLessons,
          // activityLogs: optionally fetch separately
        }));
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-100 shadow-sm flex flex-col z-40">
        <div className="px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-2xl shadow">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-indigo-600">The Atelier</h2>
              <p className="text-xs text-gray-400">Master Curator</p>
            </div>
          </div>
        </div>

        <nav className="px-4 flex-1">
          <ul className="space-y-2">
            {links.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-4 pb-6">
          <button
            onClick={() => navigate("/admin/courses")}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700"
          >
            <span className="material-symbols-outlined">add</span>
            Create Course
          </button>

          <button
            onClick={handleLogout}
            className="w-full mt-3 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold shadow hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Topbar */}
      <header className="fixed left-64 right-0 top-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-30">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>

        <div className="text-right">
          <div className="text-sm font-semibold">{curatorName}</div>
          <div className="text-xs text-gray-400">Curator</div>
        </div>
      </header>

      {/* Main */}
      <main className="ml-64 pt-20 px-8 pb-12 max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold">Curator Dashboard</h2>
          <p className="text-gray-500 mt-2">
            Welcome back, <span className="font-semibold">{curatorName}</span>.
          </p>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Manage Courses</p>
            <div className="text-3xl font-bold">{stats.manageCourses}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Total Courses</p>
            <div className="text-3xl font-bold">{stats.totalCourses}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Published Courses</p>
            <div className="text-3xl font-bold">{stats.publishedCourses}</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Lessons</p>
            <div className="text-3xl font-bold">{stats.totalLessons}</div>
          </div>
        </section>

        {/* Courses + Activity */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Courses */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold">Recent Courses</h3>
              <Link to="/admin/courses" className="text-indigo-600 text-sm">
                View All
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {recentCourses.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition"
                >
                  <img
                    src={c.cover || "https://via.placeholder.com/400x160"}
                    alt={c.title}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{c.title}</div>
                      <div className="text-sm text-gray-400">
                        {c.lessons || 0} lessons • {c.status}
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/admin/courses/${c.id}`)}
                      className="px-3 py-1 border rounded text-sm"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity */}
          <aside className="bg-white rounded-2xl p-4 shadow-sm border">
            <h4 className="font-semibold mb-3">Activity Logs</h4>
            {stats.activityLogs.length > 0 ? (
              stats.activityLogs.map((a, i) => (
                <div key={i} className="text-sm mb-2 p-2 bg-gray-50 rounded">
                  {a}
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-400">No recent activity</div>
            )}
          </aside>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;