import React from "react";
export function Stat({ value, label }) {
  return (
    <div className="flex flex-col">
      <span className="text-xl font-bold text-slate-900">{value}</span>
      <span className="text-sm text-slate-500">{label}</span>
    </div>
  );
}
