"use client";

import React, { useEffect, useState } from "react";

interface StatProps {
  target: number;
  label: string;
}

function StatCircle({ target, label }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center ">
      <div className="w-38 h-38 rounded-full bg-white text-zinc-800 flex border-2 border-zinc-800   items-center justify-center text-2xl font-bold mb-2">
        {count}+
      </div>
      <span className="text-center text-sm md:text-base">{label}</span>
    </div>
  );
}

export default function Anim() {
  return (
    <section className="py-16 my-10 bg-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
        <StatCircle target={120} label="Projects Completed" />
        <StatCircle target={50000} label="Lines of Code Written" />
        <StatCircle target={300} label="Problems Solved" />
      </div>
    </section>
  );
}
