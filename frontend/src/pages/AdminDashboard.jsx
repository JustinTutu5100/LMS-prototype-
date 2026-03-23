import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { path: "/admin/courses", label: "Courses", icon: "menu_book" },
    { path: "/admin/catalog", label: "Catalog", icon: "local_library" },
    { path: "/admin/settings", label: "Settings", icon: "settings" },
  ];

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/"); // redirect to landing
  };

  return (
    <div style={{ background: 'var(--color-background)', color: 'var(--color-on-surface)', minHeight: '100vh', fontFamily: 'Manrope, Arial, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ height: '100vh', width: 256, position: 'fixed', left: 0, top: 0, overflowY: 'auto', background: 'var(--color-surface-container-lowest)', display: 'flex', flexDirection: 'column', padding: '32px 16px', zIndex: 50 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--color-primary)', color: 'var(--color-on-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
            <span className="material-symbols-outlined">school</span>
          </div>
          <div>
            <h2 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-primary)' }}>The Atelier</h2>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-outline)' }}>Master Curator</p>
          </div>
        </div>
        {/* Nav */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {links.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 12,
                  color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface)',
                  background: isActive ? 'var(--color-primary-fixed)' : 'transparent',
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                  cursor: 'pointer',
                }}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          style={{ width: '100%', padding: '12px 0', background: 'var(--color-primary)', color: 'var(--color-on-primary)', border: 'none', borderRadius: 12, fontWeight: 700, marginTop: 16, cursor: 'pointer', fontSize: '1rem', transition: 'background 0.2s' }}
          onClick={() => navigate("/admin/courses")}
        >
          Create Course
        </button>
        <button
          onClick={handleLogout}
          style={{ width: '100%', padding: '12px 0', background: 'var(--color-error)', color: 'var(--color-on-error)', border: 'none', borderRadius: 12, fontWeight: 700, marginTop: 12, cursor: 'pointer', fontSize: '1rem', transition: 'background 0.2s' }}
        >
          Logout
        </button>
      </aside>

      {/* Topbar */}
      <header style={{ position: 'fixed', top: 0, left: 256, right: 0, height: 64, background: 'var(--color-surface-container-highest)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', zIndex: 10 }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Admin Dashboard</h1>
      </header>

      {/* Main */}
      <main style={{ marginLeft: 256, paddingTop: 80, padding: 32 }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>Curator Dashboard</h1>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 32 }}>
          <div style={{ padding: 24, background: 'var(--color-surface-container-lowest)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <p>Total Courses</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>42</h2>
          </div>
          <div style={{ padding: 24, background: 'var(--color-surface-container-lowest)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <p>Active Learners</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>1,284</h2>
          </div>
          <div style={{ padding: 24, background: 'var(--color-surface-container-lowest)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <p>Activity</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>856</h2>
          </div>
        </div>

        {/* Table */}
        <div style={{ background: 'var(--color-surface-container)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 24 }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>Recent Courses</h2>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>
                <th>Course</th>
                <th>Curator</th>
                <th>Students</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>
                <td>Mastering Narrative Design</td>
                <td>Dr. Aris</td>
                <td>142</td>
                <td>Live</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>
                <td>Post-Modern Aesthetics</td>
                <td>Elena</td>
                <td>89</td>
                <td>Draft</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;