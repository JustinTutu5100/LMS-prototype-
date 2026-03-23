// src/pages/Builder.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Builder = () => {
  const location = useLocation();
  const navItems = [
    { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { label: "Courses", icon: "menu_book", path: "/builder" },
    { label: "Logs", icon: "history_edu", path: "/logs" },
    { label: "Catalog", icon: "local_library", path: "/catalog" },
    { label: "My Progress", icon: "trending_up", path: "/progress" },
    { label: "Settings", icon: "settings", path: "/settings" },
  ];

  return (
    <div style={{ background: 'var(--color-surface)', color: 'var(--color-on-surface)', fontFamily: 'Manrope, Arial, sans-serif', minHeight: '100vh' }}>
      {/* SideNavBar */}
      <aside className="sidebar">
        {/* Header / Logo */}
        <div className="logo">
          <div className="logo-icon">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-primary)', margin: 0 }}>The Atelier</h3>
            <p style={{ fontSize: '0.7rem', color: 'var(--color-outline)', textTransform: 'uppercase', fontWeight: 600, margin: 0 }}>Master Curator</p>
          </div>
        </div>
        {/* Navigation */}
        <nav className="nav">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`nav-link${isActive ? ' active' : ''}`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{item.icon}</span>
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        {/* Create Course Button */}
        <button className="create-course-btn">
          <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>add</span>
          <span>Create New Course</span>
        </button>
        {/* Footer Links */}
        <div className="footer">
          <Link to="/settings" className={`footer-btn${location.pathname === "/settings" ? ' active' : ''}`}>
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </Link>
          <button className="footer-btn logout">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* TopNavBar */}
      <header style={{ position: 'fixed', top: 0, left: 256, right: 0, height: 80, background: 'var(--color-surface-container-highest)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', zIndex: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-primary)', letterSpacing: '-1px', fontFamily: 'Manrope, Arial, sans-serif' }}>
            Academic Atelier
          </span>
          <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Link to="/dashboard" style={{ color: 'var(--color-secondary)', fontWeight: 700, borderBottom: '2px solid var(--color-secondary)', padding: '0 8px', fontFamily: 'Manrope, Arial, sans-serif', letterSpacing: '-0.5px', textDecoration: 'none' }}>Admin View</Link>
            <Link to="/learner" style={{ color: 'var(--color-outline)', fontWeight: 500, padding: '0 8px', fontFamily: 'Manrope, Arial, sans-serif', letterSpacing: '-0.5px', textDecoration: 'none' }}>Learner View</Link>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ position: 'relative', display: 'block' }}>
            <span className="material-symbols-outlined" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-outline)' }}>search</span>
            <input
              style={{ paddingLeft: 40, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: 'var(--color-surface-container-low)', border: 'none', borderRadius: 999, fontSize: '1rem', width: 256 }}
              placeholder="Search resources..."
              type="text"
            />
          </div>
          <button style={{ padding: 8, borderRadius: '50%', background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--color-on-surface-variant)' }}>notifications</span>
          </button>
          <button style={{ padding: 8, borderRadius: '50%', background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--color-on-surface-variant)' }}>help_outline</span>
          </button>
          <img
            style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXrg8o1YSRnoy3eg8ST10Ts5YtwkWFIfA8SIg1BexMr35EpjkRNaX_OiM6oeQkMoJVzi6mYJNK_bLzkbD0oeXLrtPDM_zn3T5TAai62xeACsPhpZRG3vXxYJ_5cfAV_OOTwF-dI7wLEyMKmN9-czOFs0HFjmB4Ua0Uf2lZWAFL2fWC-5ARqa4FXB6MsPlACyGtXZl4DWmiaWZKAThUIO8sAIZRUnxgXNkEyz7AmQF1z761Xyo9Kehxk2Y-1gJG_TldUOtAmZgLQ"
            alt="User avatar"
          />
        </div>
      </header>

      {/* Main Content */}
      <main style={{ marginLeft: 256, paddingTop: 96, paddingLeft: 40, paddingRight: 40, paddingBottom: 80, minHeight: '100vh' }}>
        <header style={{ marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <nav style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--color-outline)', marginBottom: 8, textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>
              <span>Admin</span> / <span style={{ color: 'var(--color-secondary)' }}>Course Creator</span>
            </nav>
            <h1 style={{ fontSize: 36, fontWeight: 900, fontFamily: 'Manrope, Arial, sans-serif', color: 'var(--color-primary)', margin: 0 }}>Assemble Your Atelier</h1>
            <p style={{ color: 'var(--color-on-surface-variant)', marginTop: 4 }}>Define the foundation and lessons for your curated learning path.</p>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <button style={{ padding: '10px 24px', borderRadius: 8, fontWeight: 700, color: 'var(--color-primary)', background: 'var(--color-primary-fixed)', border: 'none', fontSize: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}>Save Draft</button>
            <button style={{ padding: '10px 32px', borderRadius: 8, fontWeight: 700, color: 'var(--color-on-primary)', background: 'var(--color-secondary)', border: 'none', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 2px 8px var(--color-secondary-fixed-dim)' }}>Publish Course</button>
          </div>
        </header>
        {/* Multi-step course form content goes here */}
      </main>
    </div>
  );
};

export default Builder;