"use client";

import { useEffect, useState } from "react";
import { getCountdown } from "@/lib/countdown";

export default function Countdown({ target }: { target: Date }) {
  const [time, setTime] = useState(getCountdown(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCountdown(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="grid grid-cols-4 gap-4 text-center mt-8">
      {Object.entries(time).map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl bg-purple-50 p-4 shadow-sm"
        >
          <div className="text-3xl font-bold text-purple-700">
            {value}
          </div>
          <div className="text-xs uppercase tracking-wide text-gray-500">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
