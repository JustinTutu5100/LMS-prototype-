import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
const [role, setRole] = useState("learner");
const [form, setForm] = useState({
adminName: "",
adminCode: "",
email: "",
password: "",
remember: false,
});
const [errors, setErrors] = useState({});
const [submitting, setSubmitting] = useState(false);
const [message, setMessage] = useState(null);
const navigate = useNavigate();

function handleChange(e) {
const { name, type, value, checked } = e.target;
setForm((prev) => ({
...prev,
[name]: type === "checkbox" ? checked : value,
}));
}

function validate() {
const err = {};
if (!form.email || !form.email.includes("@")) err.email = "Enter a valid email.";
if (!form.password || form.password.length < 4) err.password = "Password must be at least 4 characters.";
if (role === "admin") {
if (!form.adminName) err.adminName = "Admin name required.";
if (!form.adminCode) err.adminCode = "Admin code required.";
}
return err;
}

async function handleSubmit(e) {
e.preventDefault();
setErrors({});
setMessage(null);

clojure
const err = validate();
if (Object.keys(err).length) {
  setErrors(err);
  return;
}

setSubmitting(true);

try {
  // Simulate network delay / auth
  await new Promise((r) => setTimeout(r, 600));

  if (role === "admin") {
    // simple fake check — change to real API validation
    if (form.adminCode !== "ADMIN123") {
      setErrors({ adminCode: "Invalid admin code." });
      setSubmitting(false);
      return;
    }
    setMessage("Admin login successful. Redirecting to builder...");
    // navigate to builder (replace with actual builder route)
    navigate("/builder", { replace: true });
  } else {
    setMessage("Learner login successful. Redirecting to dashboard...");
    navigate("/dashboard", { replace: true });
  }
} catch (error) {
  console.error("Login error", error);
  setMessage("An unexpected error occurred. Try again.");
  setSubmitting(false);
}

}

return (
<div className="bg-background text-on-surface font-body antialiased min-h-screen">
{/* Top Navigation */}
<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm shadow-blue-900/5">
<div className="flex justify-between items-center px-8 h-20 w-full max-w-full">
<div className="text-2xl font-black text-blue-900 tracking-tighter font-headline">
Academic Atelier
</div>
<div className="hidden md:flex gap-8">
<a className="text-slate-500 font-medium hover:text-blue-900 transition-all font-label" href="#">
Documentation
</a>
<a className="text-slate-500 font-medium hover:text-blue-900 transition-all font-label" href="#">
Support
</a>
</div>
</div>
</header>

routeros
  <main className="min-h-screen pt-20 flex flex-col md:flex-row items-stretch">
    {/* Hero Section */}
    <section className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12 bg-surface text-on-surface relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-fixed/30 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-2xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6 font-label">
          Architected for Excellence
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-primary tracking-tight leading-[1.1] mb-8">
          Your Journey into <span className="text-secondary">Modern Learning</span>
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 font-body max-w-xl">
          Experience a microservices-aware architecture designed for the future of education.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <button
            type="button"
            onClick={() => setRole("learner")}
            className={`px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition-all ${
              role === "learner"
                ? "bg-primary text-on-primary"
                : "bg-surface-container-high text-primary hover:bg-surface-container-highest"
            }`}
          >
            Learner Login
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>

          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition-all ${
              role === "admin"
                ? "bg-primary text-on-primary"
                : "bg-surface-container-high text-primary hover:bg-surface-container-highest"
            }`}
          >
            Admin Access
            <span className="material-symbols-outlined">shield_person</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">dynamic_form</span>
            </div>
            <h3 className="font-bold text-primary font-headline">Micro-Adaptive</h3>
            <p className="text-sm text-on-surface-variant font-body">Real-time content scaling based on learner velocity.</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-secondary/5 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <h3 className="font-bold text-secondary font-headline">Secure Core</h3>
            <p className="text-sm text-on-surface-variant font-body">Enterprise-grade isolation for academic integrity.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Login Section */}
    <section className="w-full md:w-[500px] lg:w-[600px] bg-surface-container-low flex flex-col justify-center px-8 md:px-12 py-16">
      <div className="w-full max-w-md mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold font-headline text-primary mb-2">Welcome Back</h2>
          <p className="text-on-surface-variant font-body">Sign in to continue your curated experience.</p>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-surface-container p-1 rounded-xl mb-8">
          <button
            type="button"
            onClick={() => setRole("learner")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all font-label ${
              role === "learner" ? "bg-white text-primary shadow-sm" : "text-on-surface-variant"
            }`}
          >
            Learner Portal
          </button>
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all font-label ${
              role === "admin" ? "bg-white text-primary shadow-sm" : "text-on-surface-variant"
            }`}
          >
            Admin View
          </button>
        </div>

        {message && <div className="mb-4 text-sm text-green-600">{message}</div>}

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {role === "admin" && (
            <>
              <div>
                <label htmlFor="adminName" className="block text-sm font-medium text-on-surface-variant mb-2 font-label">
                  Admin Name
                </label>
                <input
                  id="adminName"
                  name="adminName"
                  type="text"
                  value={form.adminName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 bg-white border border-outline-variant/20 rounded-lg"
                />
                {errors.adminName && <p className="text-sm text-red-600 mt-1">{errors.adminName}</p>}
              </div>

              <div>
                <label htmlFor="adminCode" className="block text-sm font-medium text-on-surface-variant mb-2 font-label">
                  Admin Code
                </label>
                <input
                  id="adminCode"
                  name="adminCode"
                  type="text"
                  value={form.adminCode}
                  onChange={handleChange}
                  placeholder="ENTER-ADMIN-CODE"
                  className="w-full px-4 py-3 bg-white border border-outline-variant/20 rounded-lg"
                />
                {errors.adminCode && <p className="text-sm text-red-600 mt-1">{errors.adminCode}</p>}
              </div>
            </>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-2 font-label">Institutional Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@atelier.edu"
              className="w-full px-4 py-3 bg-white border border-outline-variant/20 rounded-lg"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-on-surface-variant mb-2 font-label">Security Key</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white border border-outline-variant/20 rounded-lg"
            />
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="remember" className="text-sm text-on-surface-variant font-body">Keep me signed in for 30 days</label>
          </div>

          <button type="submit" disabled={submitting} className={`w-full py-4 rounded-lg font-bold text-lg ${submitting ? "bg-slate-400 text-white" : "bg-primary text-on-primary"}`}>
            {submitting ? "Signing in…" : role === "admin" ? "Enter Admin Console" : "Enter The Atelier"}
          </button>
        </form>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="w-full py-8 bg-white border-t flex justify-between items-center px-10">
    <div className="text-xs text-slate-500">© 2024 The Academic Atelier</div>
  </footer>
</div>

);
};
export default Landing;