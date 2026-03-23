// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CoursePlayer from "./pages/CoursePlayer";
import Account from "./pages/Account";
import Lesson from "./pages/Lesson";
import AdminCatalog from "./pages/AdminCatalog";

// Lazy-loaded pages
const Landing = lazy(() => import("./pages/Landing"));
const LearnerDashboard = lazy(() => import("./pages/LearnerDashboard"));
const MyProgress = lazy(() => import("./pages/MyProgress"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// 404 Page
const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen text-center px-4">
    <div>
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-sm text-slate-600">
        The page you are looking for does not exist.
      </p>
    </div>
  </div>
);

export default function App() {
  // Get role from localStorage (set on login)
  const role = localStorage.getItem("role"); // should be 'admin' or 'learner'

  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading…</div>}>
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Landing />} />

          {/* Learner routes */}
          {role !== "admin" && (
            <>
              <Route
                path="/dashboard"
                element={
                  <div className="flex">
                    <Sidebar user={{ role: "learner" }} />
                    <main className="flex-1 p-8">
                      <LearnerDashboard />
                    </main>
                  </div>
                }
              />
              <Route
                path="/my-progress"
                element={
                  <div className="flex">
                    <Sidebar user={{ role: "learner" }} />
                    <main className="flex-1 p-8">
                      <MyProgress />
                    </main>
                  </div>
                }
              />
              <Route
                path="/courses"
                element={
                  <div className="flex">
                    <Sidebar user={{ role: "learner" }} />
                    <main className="flex-1 p-8">
                      <Lesson />
                    </main>
                  </div>
                }
              />
              <Route
                path="/catalog"
                element={
                  <div className="flex">
                    <Sidebar user={{ role: "learner" }} />
                    <main className="flex-1 p-8">
                      <CoursePlayer />
                    </main>
                  </div>
                }
              />
              <Route
                path="/settings"
                element={
                  <div className="flex">
                    <Sidebar user={{ role: "learner" }} />
                    <main className="flex-1 p-8">
                      <Account />
                    </main>
                  </div>
                }
              />
            </>
          )}

          {/* Admin routes */}
          {role === "admin" && (
            <>
              <Route
                path="/admin/dashboard"
                element={
                  <div className="flex">
                    <Sidebar user={{ role: "admin" }} />
                    <main className="flex-1 p-8">
                      <AdminDashboard />
                    </main>
                  </div>
                }
              />
              <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
              <Route
                path="/admin/courses"
                element={
                  <div className="flex">
                    <Sidebar user={{ role: "admin" }} />
                    <main className="flex-1 p-8">
                      <AdminCatalog />
                    </main>
                  </div>
                }
              />
              <Route
                path="/admin/catalog"
                element={
                  <div className="flex">
                    <Sidebar user={{ role: "admin" }} />
                    <main className="flex-1 p-8">
                      <AdminCatalog />
                    </main>
                  </div>
                }
              />
              <Route
                path="/admin/settings"
                element={
                  <div className="flex">
                    <Sidebar user={{ role: "admin" }} />
                    <main className="flex-1 p-8">
                      <Account />
                    </main>
                  </div>
                }
              />
            </>
          )}

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}