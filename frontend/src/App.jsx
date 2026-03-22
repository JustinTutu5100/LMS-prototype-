import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CoursePlayer from "./pages/CoursePlayer";
import Account from "./pages/Account";
import Lesson from "./pages/Lesson";

// Lazy-load pages
const Landing = lazy(() => import("./pages/Landing"));
const LearnerDashboard = lazy(() => import("./pages/LearnerDashboard"));
const MyProgress = lazy(() => import("./pages/MyProgress"));


// 404 Component
const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen text-center px-4">
    <div>
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-sm text-slate-600">The page you are looking for does not exist.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading…</div>}>
        <Routes>
          {/* Landing page has no sidebar */}
          <Route path="/" element={<Landing />} />

          {/* Pages with sidebar */}
          <Route
            path="/dashboard"
            element={
              <div className="flex">
                <Sidebar />
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
                <Sidebar />
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
      <Sidebar />
      <main className="flex-1 p-8">
        <Lesson/>
      </main>
    </div>
  }
/>
        <Route
  path="/catalog"
  element={
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <CoursePlayer/>
      </main>
    </div>
  }
  />
          <Route
  path="/settings"
  element={
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Account/>
      </main>
    </div>
  }
  />
  

          {/* Add other pages here */}
          
          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
