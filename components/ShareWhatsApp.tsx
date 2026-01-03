"use client";

interface ShareWhatsAppProps {
  name?: string;
}

export default function ShareWhatsApp({ name }: ShareWhatsAppProps) {
  // Default message
  const text = `🎒 Hey! Check out my SkoolVibe: ${
    name ? `Personalized for ${name}` : "Join the vibe"
  } 😎`;

  // Generate share link
  const shareUrl = encodeURIComponent(
    `${typeof window !== "undefined" ? window.location.href : ""}`
  );

  const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    text + " " + shareUrl
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 rounded-full bg-green-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-green-600 transition"
    >
      Share on WhatsApp
    </a>
  );
}
