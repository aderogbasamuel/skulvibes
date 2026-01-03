"use client";

import ShareWhatsApp from "@/components/ShareWhatsApp";
import { useState } from "react";

export default function Create() {
  const [name, setName] = useState("");

  const link =
    name.length > 0
      ? `${typeof window !== "undefined" ? window.location.origin : ""}/?name=${encodeURIComponent(
          name
        )}`
      : "";

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-3xl font-bold">Create your SkoolVibe</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="mt-6 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
        />

        {link && (
            <div>
          <div className="mt-6">
            <input
              readOnly
              value={link}
              className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm"
            />
          </div>
          <ShareWhatsApp name={name}/>
          </div>
        )}

      </div>
    </main>
  );
}
