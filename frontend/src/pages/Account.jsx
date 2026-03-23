import React from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import MilestoneCard from "../components/MilestoneCard";

const Lesson = (props) => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { label: "Courses", icon: "menu_book", path: "/courses" },
    { label: "Lessons", icon: "school", path: "/lesson" },
  ];

  const courses = [
    {
      id: 1,
      title: "Spatial Composition",
      category: "Design Philosophy",
      progress: 72,
      description:
        "Exploring the relationship between negative space and structural integrity in modern urban environments.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhIZPX5l7_qNjxBNUwkfGXWn4LY7pmnI3FRZ02tYpmj-tviNk-TNs8seAC_SonDIIYfHkrGOSgkFzYEDyMjSdNqBINUedCxjyWbop9Yg85r2AbQwnyzw6FFO6ZL5iVMKFF2kposZgri5WvxOc9hHR5WpbzsNnIEQ-2a7lqUPfslL_sgQIqIthwEWfJq87408jDz8zyB54siJ0fx4cZtaQEfCtWoCsHtKUw-fsHjFRL3q9mQL1vYC0ozU7el3FEsSWaXFGq8c_SAw",
    },
    {
      id: 2,
      title: "Micro-Adaptive Systems",
      category: "Systems Engineering",
      progress: 45,
      description:
        "Introduction to self-regulating feedback loops in digital ecosystems and autonomous networks.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTGXiNsxUkTQ6I99xkxsb3rBgfzHag95IbA2kn5fPFhNRbgJxvev95eMldkOqv043MiDKFW5mbsffM6nGefiCn2tEILdol2BEnDxfMwhQauTB6NGQuCokaHeFgWEnzE3b6HxVpcPQxH1HQNWVGCjZJ6Bdrfu5izWHJRqZnbOaavgSaKV60vnQsmUJ32sP854dG7F4Sg9rDFegaibSZF-ztv1KFsnF9ZNhhLLBpYLnG736xmrVj11CeXio3SbfyZOym9fu8ffaCuA",
    },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen font-['Manrope'] flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">

        {/* Navbar */}
        <Navbar />

        <main className="pt-16 p-8 min-h-screen">
          <div className="max-w-7xl mx-auto space-y-8">

            <h1 className="text-4xl font-extrabold text-primary">
              Lesson Overview
            </h1>

            <p className="text-on-surface-variant">
              Explore your current courses and milestones.
            </p>

            {/* Metrics */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card title="Total Enrolled" value="14" subtitle="+2 this week" icon="menu_book" />
              <Card title="Completed Courses" value="08" subtitle="Top 5% Learner" icon="task_alt" />
              <Card title="Learning Points" value="1,240" icon="token" />
            </section>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

              {/* Courses */}
              <div className="lg:col-span-8 space-y-6">
                {courses.map((course) => (
                  <Card key={course.id} {...course} />
                ))}
              </div>

              {/* Milestones */}
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-bold mb-6">
                  Recent Milestones
                </h2>
                <MilestoneCard />
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Lesson;