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
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          🎒 Happy Resumption,
          <span className="block text-orange-600 mt-2">
            {name}
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
            className="inline-block rounded-full bg-gradient-to-r from-orange-400 to-orange-700 px-8 py-4 text-white font-medium shadow-lg hover:bg-purple-700 transition"
          >
            Create your SkoolVibe
          </a>
        </div>
      </div>
    </main>
  );
}
