import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaUtensils,
  FaLanguage,
  FaMusic,
  FaDumbbell,
} from "react-icons/fa";

const categories = [
  { id: 1, name: "Coding", lessons: 1250, icon: <FaCode /> },
  { id: 2, name: "Design", lessons: 850, icon: <FaPaintBrush /> },
  { id: 3, name: "Cooking", lessons: 620, icon: <FaUtensils /> },
  { id: 4, name: "Languages", lessons: 940, icon: <FaLanguage /> },
  { id: 5, name: "Music", lessons: 480, icon: <FaMusic /> },
  { id: 6, name: "Fitness", lessons: 560, icon: <FaDumbbell /> },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Explore Categories
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Discover thousands of micro-lessons across diverse topics
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <article
              key={cat.id}
              className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 hover:shadow-md transition-shadow flex items-center space-x-4"
            >
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white ${getBgByIndex(
                  idx
                )}`}
              >
                {cat.icon}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {cat.name}
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  {cat.lessons.toLocaleString()} lessons
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function getBgByIndex(i) {
  const classes = [
    "bg-gradient-to-br from-indigo-500 to-purple-500",
    "bg-gradient-to-br from-pink-500 to-rose-500",
    "bg-gradient-to-br from-amber-500 to-yellow-400",
    "bg-gradient-to-br from-cyan-500 to-teal-500",
    "bg-gradient-to-br from-violet-500 to-fuchsia-500",
    "bg-gradient-to-br from-green-500 to-emerald-500",
  ];
  return classes[i % classes.length];
}
