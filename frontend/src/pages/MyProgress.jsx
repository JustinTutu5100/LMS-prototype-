import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MyProgress = (props) => {
  const user = props.user;

  return (
    <div className="flex bg-surface text-on-surface min-h-screen font-body">
      
      {/* Sidebar */}
      <Sidebar user={user} onLogout={props.onLogout} />

      {/* Main Area */}
      <div className="flex-1 ml-64">
        
        {/* Top Navbar */}
        <Navbar user={user} />

        {/* Main Content */}
        <main className="pt-20 px-8 pb-12">
          <div className="max-w-7xl mx-auto space-y-12">

            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-5xl font-extrabold tracking-tighter">
                  Welcome back, {user?.name || "Elena"}.
                </h1>
                <p className="text-on-surface-variant italic text-lg max-w-2xl">
                  "The beautiful thing about learning is that nobody can take it away from you."
                </p>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-xs uppercase text-on-surface-variant">
                  Last Updated
                </span>
                <span className="font-bold text-secondary">
                  Today, 09:42 AM
                </span>
              </div>
            </header>

            {/* Stats Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="p-8 rounded-xl shadow flex flex-col justify-between bg-surface-container-lowest">
                <span className="material-symbols-outlined text-4xl">schedule</span>
                <div>
                  <div className="text-4xl font-bold">128</div>
                  <div className="text-sm uppercase text-on-surface-variant">
                    Hours Learned
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl shadow flex flex-col justify-between bg-surface-container-lowest">
                <span className="material-symbols-outlined text-4xl">extension</span>
                <div>
                  <div className="text-4xl font-bold">24</div>
                  <div className="text-sm uppercase text-on-surface-variant">
                    Modules Completed
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl shadow flex flex-col justify-between bg-surface-container-lowest">
                <span className="material-symbols-outlined text-4xl">auto_graph</span>
                <div>
                  <div className="text-4xl font-bold">842</div>
                  <div className="text-sm uppercase text-on-surface-variant">
                    Skill Score
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl shadow flex flex-col justify-between bg-surface-container-lowest">
                <span className="material-symbols-outlined text-4xl">local_fire_department</span>
                <div>
                  <div className="text-4xl font-bold">12</div>
                  <div className="text-sm uppercase text-on-surface-variant">
                    Day Streak
                  </div>
                </div>
              </div>

            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default MyProgress;