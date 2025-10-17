import React from "react";
import { Stat } from "../utils/Stat";

const HomeHero = () => {
  return (
    <>
      <main className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="max-w-xl">
                <p className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
                  ⭐ Join 10,000+ readers
                </p>

                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                  Learn Anything in <span className="text-indigo-500">5</span>{" "}
                  Minutes
                </h1>

                <p className="mt-6 text-slate-600 text-lg">
                  Master new skills with bite-sized lessons created by experts and enthusiasts. Learn at your pace, track your progress, and join a thriving community.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                  <a
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 text-white font-medium shadow-lg hover:scale-[1.01] transition-transform"
                    href="#start"
                  >
                    Start Learning →
                  </a>
                  <a
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700"
                    href="#create"
                  >
                    Become a Creator
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-6">
                  <Stat value="10,000+" label="Lessons" />
                  <Stat value="2,000+" label="Creators" />
                  <Stat value="500K+" label="Completions" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="rounded-2xl bg-violet-50 shadow-xl p-4 sm:p-6 lg:p-8">
                  <div className="w-full h-56 sm:h-64 lg:h-72 rounded-lg overflow-hidden bg-gradient-to-br from-violet-100 to-indigo-50 flex items-center justify-center">
                    <img
                      src="https://img.freepik.com/premium-vector/diverse-team-professionals-collaborates-around-laptop-sharing-ideas-discussing-projects-colorful-modern-office-setting-filled-with-plants_520881-15661.jpg"
                      alt="hero"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-6 flex items-center bg-gradient-to-r from-indigo-500 to-emerald-400 text-white px-3 py-1.5 rounded-full shadow-md">
                    <span className="text-sm font-medium">✨ Community Hero</span>
                  </div>
                  <div className="absolute -top-3 right-4">
                    <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-semibold shadow-sm">
                      ⚡ Fast Learner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeHero;
