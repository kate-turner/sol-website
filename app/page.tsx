import React from "react";

const colors = {
  solGold: "#F7C348",
  softApricot: "#FCF5E0",
  seaQuietBlue: "#547F48",
  clayNeutral: "#D5C7B3",
  citrusSparkYellow: "#F9FF3B",
  comicBlue: "#3490FF",
  papayaPunch: "#FF955C",
  sunOutlineWhite: "#EFEFFF",
  monoBlack: "#1C1C1C",
};

// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: colors.softApricot, color: colors.monoBlack }}>
      {/* NAV */}
      <nav className="w-full flex justify-between items-center px-6 py-4" style={{ backgroundColor: colors.sunOutlineWhite }}>
        <span className="tracking-wide text-[${colors.monoBlack}]">SOL • Summer House Gatherings</span>
        <button className="px-4 py-2 rounded-lg text-white font-medium" style={{ backgroundColor: colors.papayaPunch }}>
          JOIN
        </button>
      </nav>

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 max-w-6xl mx-auto">
        <div className="w-full h-64 rounded-xl flex items-center justify-center text-xl font-semibold" style={{ backgroundColor: colors.clayNeutral }}>
          IMG
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold leading-tight" style={{ color: colors.seaQuietBlue }}>
            A curated summer house experience
          </h1>
          <p className="text-lg leading-relaxed">
            A week of sunshine, connection, and effortless ease — for thoughtful adults who want a summer that sparks ☀️
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg text-white font-medium" style={{ backgroundColor: colors.solGold }}>
              JOIN THE WAITLIST
            </button>
            <button className="px-4 py-2 rounded-lg font-medium border" style={{ borderColor: colors.seaQuietBlue, color: colors.seaQuietBlue }}>
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* WHAT SOL IS */}
      <section className="px-6 py-16 max-w-6xl mx-auto" style={{ backgroundColor: colors.sunOutlineWhite }}>
        <h2 className="text-xl font-semibold mb-6 tracking-wide" style={{ color: colors.comicBlue }}>WHAT SOL IS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-64 rounded-xl flex items-center justify-center text-xl font-semibold" style={{ backgroundColor: colors.clayNeutral }}>
            IMG
          </div>
          <p className="text-lg leading-relaxed">
            SOL is a week-long summer house gathering in a beautiful coastal location — a small group of adults sharing relaxed meals, warm evenings, fun days, and curated moments that make the days feel alive.
            <br /><br />
            Not a retreat.<br />
            Not a party holiday.<br />
            Not a self-optimization program.<br /><br />
            Just a well-designed summer experience for people who appreciate good company, beauty, and depth — without pressure of performance.
          </p>
        </div>
      </section>

      {/* WHAT THE WEEK FEELS LIKE */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 tracking-wide" style={{ color: colors.comicBlue }}>WHAT THE WEEK FEELS LIKE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full h-64 rounded-xl flex items-center justify-center" style={{ backgroundColor: colors.clayNeutral }}>
            ICONS/IMAGES
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-20 rounded" style={{ backgroundColor: colors.sunOutlineWhite }} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-4 rounded" style={{ backgroundColor: colors.sunOutlineWhite }} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY SOL EXISTS */}
      <section className="px-6 py-16 max-w-6xl mx-auto" style={{ backgroundColor: colors.softApricot }}>
        <h2 className="text-xl font-semibold mb-6 tracking-wide" style={{ color: colors.seaQuietBlue }}>WHY SOL EXISTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-64 rounded-xl flex items-center justify-center text-xl font-semibold" style={{ backgroundColor: colors.clayNeutral }}>
            IMG
          </div>
          <ul className="text-lg leading-relaxed list-disc pl-6" style={{ color: colors.monoBlack }}>
            <li>emotionally aware</li>
            <li>curious</li>
            <li>kind, independent, but enjoy connection</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

