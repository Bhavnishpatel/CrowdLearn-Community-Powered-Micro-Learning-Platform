import React, { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="w-full bg-white/60 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-white font-bold shadow">
                CL
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-slate-800">
                  Crowd Learn 
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Features
              </a>
              <a
                href="#community"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Community
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm">
                Login
              </button>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 text-white text-sm shadow-lg">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <svg
                  className="w-6 h-6 text-slate-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-100">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#features" className="block text-base text-slate-700">
                Features
              </a>
              <a href="#community" className="block text-base text-slate-700">
                Community
              </a>
              <a href="#pricing" className="block text-base text-slate-700">
                Subscribe
              </a>
              <div className="pt-2">
                <button className="w-full mb-2 px-4 py-2 rounded-full border border-slate-200 text-slate-700">
                  Login
                </button>
                <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 text-white">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
