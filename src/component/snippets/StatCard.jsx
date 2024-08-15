import React from "react";

function StatCard({ value, label }) {
  return (
    <div className="flex flex-col">
      <div className="self-start text-4xl font-bold text-zinc-800">{value}</div>
      <div className="text-xs leading-8 text-zinc-500">{label}</div>
    </div>
  );
}

export default StatCard;
