import Countdown from "@/components/Countdown";

export default function Home({
  searchParams,
}: {
  searchParams: { name?: string };
}) {
  const name = searchParams.name || "Student";

  // SET RESUMPTION DATE (2 DAYS FROM NOW)
  const resumptionDate = new Date();
  resumptionDate.setDate(resumptionDate.getDate() + 2);

  return (
<main className="relative min-h-screen overflow-hidden">
  {/* Subtle moving background effect – pure CSS */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,165,0,0.4)_0%,transparent_60%)] animate-pulse-slow" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(255,69,0,0.3)_0%,transparent_70%)] animate-pulse-slow [animation-delay:1.5s]" />
  </div>

  <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-5 py-12 text-center">
    <div className="mb-8 animate-bounce-slow">
      <span className="text-7xl md:text-9xl drop-shadow-xl">🎒🔥</span>
    </div>

    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none animate-fade-in">
      Happy Resumption,
      <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent block mt-3">
        from {name}!
      </span>
    </h1>

        <p className="mt-4 text-gray-600">
          School is calling. Books. Stress. New goals.  
          Let’s count it down.
        </p>

        <Countdown target={resumptionDate} />

        <div className="mt-10">
          <a
            href="/create"
            className="inline-block rounded-full bg-gradient-to-r from-orange-300 to-orange-600 px-8 py-4 text-white font-medium shadow-lg hover:bg-purple-700 transition"
          >
            Create your SkoolVibe
          </a>
        </div>
      </div>
    </main>
  );
}
