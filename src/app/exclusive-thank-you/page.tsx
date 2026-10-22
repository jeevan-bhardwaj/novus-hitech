import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Novus Hi-Tech",
};

export default function ExclusiveThankYouPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-5 py-16 text-center text-[#081f3a]">
      <div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Thank you!
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#526272] sm:text-xl">
          Please check your inbox. We’ve sent you exclusive content.
        </p>
      </div>
    </main>
  );
}
