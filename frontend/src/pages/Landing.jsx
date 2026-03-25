import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [role, setRole] = useState("learner");
  const [showRegister, setShowRegister] = useState(false);
  const [form, setForm] = useState({
    adminName: "",
    adminCode: "",
    email: "",
    password: "",
    remember: false,
    fullName: "",
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

    if (role === "admin" && !showRegister) {
      if (!form.adminName) err.adminName = "Admin name required.";
      if (!form.adminCode) err.adminCode = "Admin code required.";
    }

    if (showRegister && !form.fullName) err.fullName = "Full name required for registration.";

    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    setMessage(null);

    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    setSubmitting(true);

    try {
      // ----------------------------
      // DEV-ONLY LOCAL ADMIN BYPASS
      // ----------------------------
      // Only enable when not in production AND running on localhost
      const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const devAllow = process.env.NODE_ENV !== "production" && isLocalhost;

      // Define your fake admin pair here (change as you like)
      const DEV_ADMIN_NAME = "devadmin";
      const DEV_ADMIN_CODE = "letmein";

      if (role === "admin" && !showRegister && devAllow) {
        // If the developer entered the exact fake admin name + code, bypass real auth
        if (form.adminName === DEV_ADMIN_NAME && form.adminCode === DEV_ADMIN_CODE) {
          // Create a fake token and user object in localStorage (development only)
          const fakeUser = { id: "dev-1", name: form.adminName, email: form.email || "dev@local", role: "admin" };
          const fakeToken = "dev-token-12345";

          localStorage.setItem("token", fakeToken);
          localStorage.setItem("role", "admin");
          localStorage.setItem("user", JSON.stringify(fakeUser));

          // small delay to simulate network
          setTimeout(() => {
            setSubmitting(false);
            navigate("/admin/dashboard", { replace: true });
          }, 300);

          return;
        }
      }

      // ----------------------------
      // EXISTING PRODUCTION / SERVER FLOW
      // ----------------------------
      let response, data;

      if (showRegister) {
        response = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.fullName,
            email: form.email,
            password: form.password,
          }),
        });
        data = await response.json();

        if (!response.ok) {
          setErrors({ general: data.message || "Registration failed." });
          setSubmitting(false);
          return;
        }

        setMessage("Account created! You can now log in.");
        setShowRegister(false);
        setSubmitting(false);
        return;
      }

      // Normal login request to server. Include role and admin fields in payload.
      const loginPayload = {
        email: form.email,
        password: form.password,
        role,
      };

      if (role === "admin" && !showRegister) {
        loginPayload.adminName = form.adminName;
        loginPayload.adminCode = form.adminCode;
      }

      response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginPayload),
      });
      data = await response.json();

      if (!response.ok) {
        setErrors({ general: data.message || "Login failed." });
        setSubmitting(false);
        return;
      }

      const returnedRole = data.user?.role || data.role || "learner";

      // Prevent accidental access if server did not grant admin role
      if (role === "admin" && returnedRole !== "admin") {
        setErrors({ general: "Admin credentials are invalid or you do not have admin access." });
        setSubmitting(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", returnedRole);
      localStorage.setItem("user", JSON.stringify(data.user || {}));

      if (returnedRole === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/learner/dashboard", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setErrors({ general: "Server error. Try again." });
    } finally {
      setSubmitting(false);
    }
  }

  const isDevLocal =
    process.env.NODE_ENV !== "production" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex flex-col font-sans text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="h-20 flex items-center px-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-600">Academic Atelier</h1>
        </div>
      </header>

      {/* Dev banner (local only) */}
      {isDevLocal && (
        <div className="fixed right-4 top-24 z-50 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md px-3 py-2 text-sm shadow">
          Dev admin: adminName="devadmin" adminCode="letmein"
        </div>
      )}

      {/* Main: strict half/half using full viewport width */}
      <main className="pt-28 flex-1">
        <div className="flex flex-col md:flex-row w-screen min-h-[70vh]">
          {/* Left half */}
          <div className="w-full md:w-1/2 flex items-center justify-start px-8 md:px-12">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
                Your Journey into{" "}
                <span className="text-indigo-600 underline decoration-indigo-200 decoration-4">Modern Learning</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience a microservices-aware architecture designed for the future of education. Lightweight,
                secure, and built for growth.
              </p>

              <div className="flex flex-wrap gap-3 items-center mb-6">
                <div className="flex gap-3">
                  <button
                    onClick={() => setRole("learner")}
                    className={`px-5 py-2 rounded-md font-semibold transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                      role === "learner"
                        ? "bg-indigo-600 text-white shadow-md transform scale-105"
                        : "bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50"
                    }`}
                    aria-pressed={role === "learner"}
                  >
                    Learner
                  </button>

                  <button
                    onClick={() => setRole("admin")}
                    className={`px-5 py-2 rounded-md font-semibold transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                      role === "admin"
                        ? "bg-indigo-600 text-white shadow-md transform scale-105"
                        : "bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50"
                    }`}
                    aria-pressed={role === "admin"}
                  >
                    Admin
                  </button>
                </div>

                <button
                  onClick={() => setShowRegister(!showRegister)}
                  className="ml-2 px-4 py-2 rounded-md bg-amber-500 text-white font-medium hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  {showRegister ? "Back to Login" : "Create Account"}
                </button>
              </div>

              <div className="text-sm text-gray-500">
                <strong className="text-gray-700">Tip:</strong> Use separate admin credentials to access the admin console.
              </div>
            </div>
          </div>

          {/* Vertical divider (optional) */}
          <div className="hidden md:block w-px bg-gray-200" />

          {/* Right half */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-12">
            <div className="w-full max-w-md bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
              {message && <div className="mb-4 text-sm text-green-700 bg-green-50 p-3 rounded">{message}</div>}
              {errors.general && <div className="mb-4 text-sm text-red-700 bg-red-50 p-3 rounded">{errors.general}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                {showRegister && (
                  <div>
                    <label htmlFor="fullName" className="sr-only">Full name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                    {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                )}

                {role === "admin" && !showRegister && (
                  <>
                    <div>
                      <label htmlFor="adminName" className="sr-only">Admin name</label>
                      <input
                        id="adminName"
                        name="adminName"
                        value={form.adminName}
                        onChange={handleChange}
                        placeholder="Admin name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      />
                      {errors.adminName && <p className="text-red-600 text-sm mt-1">{errors.adminName}</p>}
                    </div>

                    <div>
                      <label htmlFor="adminCode" className="sr-only">Admin code</label>
                      <input
                        id="adminCode"
                        name="adminCode"
                        value={form.adminCode}
                        onChange={handleChange}
                        placeholder="Admin code"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      />
                      {errors.adminCode && <p className="text-red-600 text-sm mt-1">{errors.adminCode}</p>}
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                  {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={form.remember}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-200"
                    />
                    <span className="ml-2">Remember me</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      setShowRegister(true);
                      setRole("learner");
                    }}
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Need an account?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    submitting ? "bg-indigo-300 text-white cursor-wait" : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {submitting
                    ? "Submitting..."
                    : showRegister
                    ? "Create account"
                    : role === "admin"
                    ? "Enter Admin Console"
                    : "Enter The Atelier"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;