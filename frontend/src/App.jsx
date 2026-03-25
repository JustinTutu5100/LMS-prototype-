import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Landing = lazy(() => import("./pages/Landing"));
const LearnerDashboard = lazy(() => import("./pages/LearnerDashboard"));
const MyProgress = lazy(() => import("./pages/MyProgress"));
const Courses= lazy(() => import("./pages/Courses"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminCatalog = lazy(() => import("./pages/AdminCatalog"));
const Activity = lazy(() => import("./pages/Activity"));

const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen text-center px-4">
    <div>
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-sm text-slate-600">The page you are looking for does not exist.</p>
    </div>
  </div>
);

export default function App() {
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  // Update localStorage whenever role changes
  useEffect(() => {
    if (role) localStorage.setItem("role", role);
  }, [role]);

  const LearnerLayout = ({ children }) => (
    <div className="flex">
      <Sidebar user={{ role: "learner" }} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );

  const AdminLayout = ({ children }) => (
    <div className="flex">
      <Sidebar user={{ role: "admin" }} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );

  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading…</div>}>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Landing setRole={setRole} />} />

          {/* Learner Routes */}
          {role === "learner" && (
            <>
              <Route path="/learner/dashboard" element={<LearnerLayout><LearnerDashboard /></LearnerLayout>} />
              <Route path="/learner/courses" element={<LearnerLayout><Courses /></LearnerLayout>} />
              <Route path="/learner/my-progress" element={<LearnerLayout><MyProgress /></LearnerLayout>} />
              <Route path="*" element={<Navigate to="/learner/dashboard" replace />} />
            </>
          )}

          {/* Admin Routes */}
          {role === "admin" && (
            <>
              <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
              <Route path="/admin/courses" element={<AdminLayout><AdminCatalog /></AdminLayout>} />
              <Route path="/admin/activity" element={<AdminLayout><Activity /></AdminLayout>} />
              <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />
            </>
          )}

          {/* Redirect if role not set */}
          {!role && <Route path="*" element={<Navigate to="/" replace />} />}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}