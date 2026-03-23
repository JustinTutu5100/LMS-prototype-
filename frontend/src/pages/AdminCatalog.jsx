// src/pages/AdminCatalog.jsx
import React, { useEffect, useState } from "react";
import '../custom.css';

// Example API fetch function
const fetchCourses = async () => {
  // Replace this with your backend API call
  return [
    {
      id: 1,
      title: "Advanced Architectural Geometry",
      status: "Live",
      enrollment: 1204,
      progress: 68,
      revenue: "$12.4k",
      instructors: ["Instructor 1", "Instructor 2"],
    },
    {
      id: 2,
      title: "The Philosophy of Digital Curation",
      status: "Draft",
      enrollment: 0,
      modules: 12,
      lastEdited: "2 hours ago",
      primaryMentor: "Dr. Julianne Doss",
      satisfaction: "92%",
    },
    {
      id: 3,
      title: "Global Economic Systems 2024",
      status: "Live",
      enrollment: 3890,
      progress: 45,
      rating: 4.9,
      instructors: ["Instructor 3"],
    },
  ];
};

const AdminCatalog = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };
    getCourses();
  }, []);

  return (
    <main
      style={{
        marginLeft: 256, 
        paddingTop: 64, 
        minHeight: "100vh", 
        background: "var(--color-surface)", 
        color: "var(--color-on-surface)"
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: 32 }}>
        {/* Header */}
        <header style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <p
              style={{
                color: "var(--color-secondary)",
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: 12,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Management Suite
            </p>
            <h1
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: "var(--color-on-surface)",
                margin: "8px 0 0 0",
              }}
            >
              Course Catalog
            </h1>
            <p
              style={{
                color: "var(--color-on-surface-variant)",
                maxWidth: 480,
                margin: "8px 0 0 0",
              }}
            >
              Orchestrate your academic offerings. Monitor performance, update curriculum, and curate the learner experience.
            </p>
          </div>
        </header>

        {/* Course Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
          }}
        >
          {courses.map((course) => (
            <article
              key={course.id}
              style={{
                background: "var(--color-surface-container-lowest)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                border: "1px solid var(--color-outline-variant)",
              }}
            >
              <div style={{ padding: 24, paddingTop: 32 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: 2,
                        color: "var(--color-secondary)",
                        background: "rgba(0,106,97,0.1)",
                        borderRadius: 6,
                        padding: "2px 8px",
                      }}
                    >
                      {course.status}
                    </span>
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--color-on-surface)",
                        margin: "12px 0 0 0",
                      }}
                    >
                      {course.title}
                    </h3>
                  </div>
                  <button
                    style={{
                      padding: 8,
                      color: "var(--color-outline)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                      more_vert
                    </span>
                  </button>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 16 }}>
                  <div>
                    <p
                      style={{
                        fontSize: 10,
                        color: "var(--color-outline)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      Enrollment
                    </p>
                    <p style={{ fontSize: 18, fontWeight: 900, color: "var(--color-on-surface)", margin: 0 }}>
                      {course.enrollment || 0}
                    </p>
                  </div>
                  {course.progress !== undefined && (
                    <div>
                      <p
                        style={{
                          fontSize: 10,
                          color: "var(--color-outline)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        Avg. Progress
                      </p>
                      <p style={{ fontSize: 18, fontWeight: 900, color: "var(--color-on-surface)", margin: 0 }}>
                        {course.progress}%
                      </p>
                    </div>
                  )}
                  {course.revenue && (
                    <div>
                      <p
                        style={{
                          fontSize: 10,
                          color: "var(--color-outline)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        Revenue
                      </p>
                      <p style={{ fontSize: 18, fontWeight: 900, color: "var(--color-on-surface)", margin: 0 }}>
                        {course.revenue}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 16,
                    borderTop: "1px solid var(--color-outline-variant)",
                    marginTop: 16,
                  }}
                >
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      style={{
                        padding: 8,
                        borderRadius: 8,
                        background: "var(--color-surface-container-low)",
                        color: "var(--color-primary)",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                        edit
                      </span>
                    </button>
                    <button
                      style={{
                        padding: 8,
                        borderRadius: 8,
                        background: "var(--color-surface-container-low)",
                        color: "var(--color-secondary)",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                        monitoring
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AdminCatalog;