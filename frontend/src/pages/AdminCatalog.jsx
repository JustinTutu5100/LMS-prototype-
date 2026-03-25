// src/pages/AdminCatalog.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminCatalog() {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    status: "draft",
    cover: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=60&auto=format&fit=crop",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API = "http://localhost:5000/api/courses";

  // Fetch courses from backend
  const fetchCourses = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.title || form.title.trim().length < 3)
      err.title = "Course title is required.";
    if (!form.description || form.description.trim().length < 10)
      err.description = "Description is required.";
    if (!form.category) err.category = "Category is required.";
    return err;
  };

  const openCreateModal = () => {
    setEditingCourse(null);
    setForm({
      title: "",
      description: "",
      category: "",
      status: "draft",
      cover: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=60&auto=format&fit=crop",
    });
    setErrors({});
    setModalOpen(true);
  };

  const openEditModal = (course) => {
    setEditingCourse(course);
    setForm({
      title: course.title,
      description: course.description,
      category: course.category,
      status: course.status,
      cover: course.cover,
    });
    setErrors({});
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setLoading(true);

    try {
      let res;
      if (editingCourse) {
        // Update
        res = await fetch(`${API}/${editingCourse.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        // Create
        res = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }

      if (!res.ok) throw new Error("Failed to save course");

      setModalOpen(false);
      setEditingCourse(null);
      setForm({
        title: "",
        description: "",
        category: "",
        status: "draft",
        cover: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=60&auto=format&fit=crop",
      });

      fetchCourses();
    } catch (err) {
      console.error(err);
      alert("Failed to save course.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setCourses(courses.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete course.");
    }
  };

  return (
    <main className="ml-64 pt-20 px-8 pb-12 min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-indigo-600">
              Manage Courses
            </p>
            <h1 className="mt-2 text-3xl font-extrabold">
              Create and manage your course library.
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openCreateModal}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
            >
              <span className="material-symbols-outlined">add</span> New Course
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {courses.map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 md:p-8 flex gap-6">
                <div className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={course.cover}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {course.title}
                      </h2>
                      <div className="mt-1 text-sm text-gray-500 max-w-2xl">
                        {course.description}
                      </div>

                      <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs">
                          {course.lessons} lessons
                        </span>
                        <span className="text-gray-400">·</span>
                        <span className="capitalize text-sm text-gray-500">
                          {course.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase ${
                          course.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {course.status}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditModal(course)}
                          className="px-3 py-1 rounded-md border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(course.id)}
                          className="px-3 py-1 rounded-md border border-red-400 text-sm font-medium text-red-700 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {courses.length === 0 && (
            <div className="rounded-2xl bg-white border border-dashed border-gray-200 p-8 text-center text-gray-500">
              No courses yet. Click "New Course" to add your first course.
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-auto z-50 overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">
                    {editingCourse ? "Edit Course" : "Create New Course"}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Fill in the course details below.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-2 rounded"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <label className="block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Course Title *</span>
                    {errors.title && (
                      <span className="text-xs text-red-600">{errors.title}</span>
                    )}
                  </div>
                  <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="e.g., Introduction to React"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    required
                  />
                </label>

                <label className="block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Description *</span>
                    {errors.description && (
                      <span className="text-xs text-red-600">{errors.description}</span>
                    )}
                  </div>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe what learners will gain from this course..."
                    rows={4}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    required
                  />
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Category *</span>
                      {errors.category && (
                        <span className="text-xs text-red-600">{errors.category}</span>
                      )}
                    </div>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="design">Design</option>
                      <option value="data science">Data Science</option>
                      <option value="programming">Programming</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </label>

                  <label>
                    <div className="mb-2">
                      <span className="text-sm font-medium">Status</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="status"
                          value="draft"
                          checked={form.status === "draft"}
                          onChange={handleChange}
                          className="h-4 w-4"
                        />
                        <span className="text-sm">Draft</span>
                      </label>

                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="status"
                          value="published"
                          checked={form.status === "published"}
                          onChange={handleChange}
                          className="h-4 w-4"
                        />
                        <span className="text-sm">Published</span>
                      </label>
                    </div>
                  </label>
                </div>

                <label>
                  <div className="mb-2">
                    <span className="text-sm font-medium">
                      Cover Image URL (optional)
                    </span>
                  </div>
                  <input
                    name="cover"
                    value={form.cover}
                    onChange={handleChange}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </label>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
                >
                  {loading ? "Saving…" : editingCourse ? "Update Course" : "Create Course"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}