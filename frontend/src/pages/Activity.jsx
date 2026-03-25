// src/pages/Logs.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Logs = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { label: "Courses", icon: "menu_book", path: "/builder" },
    { label: "Logs", icon: "history_edu", path: "/logs" },
    { label: "Catalog", icon: "local_library", path: "/catalog" },
    { label: "Settings", icon: "settings", path: "/settings" },
  ];

  // Activity data
  const [activities] = useState([
    {
      id: 1,
      user: "Justin tutu",
      action: "login",
      description: "User accessed dashboard",
      email: "justin.tutu@student.moringaschool.com",
      time: "3/25/2026, 10:20:28 AM",
    },
    {
      id: 2,
      user: "Justin tutu",
      action: "login",
      description: "User accessed dashboard",
      email: "justin.tutu@student.moringaschool.com",
      time: "3/25/2026, 12:33:49 AM",
    },
    {
      id: 3,
      user: "Justin tutu",
      action: "login",
      description: "User accessed dashboard",
      email: "justin.tutu@student.moringaschool.com",
      time: "3/25/2026, 12:32:50 AM",
    },
    {
      id: 4,
      user: "Justin tutu",
      action: "login",
      description: "User accessed dashboard",
      email: "justin.tutu@student.moringaschool.com",
      time: "3/25/2026, 12:32:45 AM",
    },
    {
      id: 5,
      user: "Justin tutu",
      action: "course created",
      description: "Created course 'React Basics'",
      email: "justin.tutu@student.moringaschool.com",
      time: "3/24/2026, 9:10:12 PM",
    },
    {
      id: 6,
      user: "Justin tutu",
      action: "lesson created",
      description: "Added lesson 'Components'",
      email: "justin.tutu@student.moringaschool.com",
      time: "3/24/2026, 9:20:45 PM",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter logic
  const filteredActivities = activities.filter((a) => {
    const matchesSearch =
      a.user.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || a.action.toLowerCase() === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="font-bold text-indigo-600 mb-6">The Atelier</h2>

        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-2 p-2 rounded mb-2 ${
                isActive ? "bg-indigo-100 text-indigo-600" : ""
              }`}
            >
              <span className="material-symbols-outlined">
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <h1 className="text-2xl font-bold mb-1">User Activity</h1>
        <p className="text-gray-500 mb-6">
          Audit trail of all user actions across the platform.
        </p>

        {/* Controls */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by user or resource..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="all">All Actions</option>
            <option value="login">Login</option>
            <option value="course created">Course Created</option>
            <option value="lesson created">Lesson Created</option>
          </select>
        </div>

        {/* Activity List */}
        <div className="space-y-4">
          {filteredActivities.map((a) => (
            <div
              key={a.id}
              className="bg-white p-4 rounded-xl shadow-sm border"
            >
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{a.user}</div>
                  <div className="text-sm text-gray-500 capitalize">
                    {a.action}
                  </div>
                  <div className="text-sm mt-1">{a.description}</div>
                </div>

                <div className="text-right text-sm text-gray-400">
                  {a.time}
                  <div>{a.email}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Logs;