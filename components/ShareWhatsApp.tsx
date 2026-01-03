"use client";

import { useCallback } from "react";

interface ShareWhatsAppProps {
  name?: string;
}

export default function ShareWhatsApp({ name }: ShareWhatsAppProps) {
  const text = `🎒 Hey! Check out my SkoolVibe: ${
    name ? `Personalized for ${name}` : "Join the vibe"
  } 😎`;

  const handleShare = useCallback(() => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const message = `${text} ${url}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }, [text]);

  return (
    <button
      onClick={handleShare}
      type="button"
      className="inline-block mt-6 rounded-full bg-green-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-green-600 transition"
    >
      Share on WhatsApp
    </button>
  );
}
