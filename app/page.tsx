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
          <div className="flex flex-col gap-4 text-md leading-relaxed">
            <p>A gentle rhythm. A mix of shared moments and solo pockets.</p>
            <p>Sun, saltwater, long tables, warm nights.</p>
            <p className="font-medium mt-2">You might find yourself:</p>
            <ul className="flex flex-col gap-1.5 pl-4 text-base">
              <li>swimming at sunrise</li>
              <li>stretching on the terrace</li>
              <li>wandering a small village</li>
              <li>napping by the pool</li>
              <li>reading in the shade</li>
              <li>discovering a local café</li>
              <li>enjoying an artful moment</li>
              <li>cooking dinner with new friends</li>
              <li>dancing under warm lights</li>
            </ul>
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
          <div className="text-lg leading-relaxed" style={{ color: colors.monoBlack }}>
            <p className="mb-4">
              After years of intense careers, self-growth, structured retreats that felt heavy, and solo trips that felt lonely, we wanted something else.
            </p>
            <p className="mb-4">
              A place for thoughtful adults to gather in the spirit of summer — connection, pleasure, beauty, and ease.
            </p>
            <p className="mb-4">
              A summer house for adults who grew up, but still want to feel alive.
            </p>
            <p className="font-medium">
              That's the heart of SOL.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-6 py-16" style={{ backgroundColor: colors.sunOutlineWhite }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-8 tracking-wide" style={{ color: colors.comicBlue }}>
            WHO IT'S FOR
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Text Content */}
            <div className="flex flex-col gap-6">
              <p className="text-lg font-medium" style={{ color: colors.seaQuietBlue }}>
                Adults who are:
              </p>
              
              <ul className="flex flex-col gap-3 text-lg pl-1">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.solGold }} />
                  emotionally aware
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.solGold }} />
                  curious
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.solGold }} />
                  kind
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.solGold }} />
                  independent, but enjoy connection
                </li>
              </ul>
              
              <p className="text-lg leading-relaxed mt-2">
                If you value depth, warmth, and a relaxed summer rhythm, you'll feel at home.
              </p>
              
              <p className="text-base leading-relaxed" style={{ color: colors.monoBlack, opacity: 0.8 }}>
                Most guests tend to be in their late 20s to early 40s, working in creative, cultural, tech, or international fields — but the common thread is energy, not industry.
              </p>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Suggestion: Candid group photos, dinner table moments, people laughing */}
              <div 
                className="w-full h-40 rounded-xl flex items-center justify-center text-sm text-center p-4" 
                style={{ backgroundColor: colors.clayNeutral }}
              >
                IMG<br /><span className="text-xs opacity-70">candid group moment</span>
              </div>
              {/* Suggestion: Solo contemplative moment - reading, looking at view */}
              <div 
                className="w-full h-40 rounded-xl flex items-center justify-center text-sm text-center p-4" 
                style={{ backgroundColor: colors.clayNeutral }}
              >
                IMG<br /><span className="text-xs opacity-70">solo moment</span>
              </div>
              {/* Suggestion: Warm dinner table scene with guests */}
              <div 
                className="w-full h-40 rounded-xl flex items-center justify-center text-sm text-center p-4" 
                style={{ backgroundColor: colors.clayNeutral }}
              >
                IMG<br /><span className="text-xs opacity-70">dinner table warmth</span>
              </div>
              {/* Suggestion: People in conversation, genuine connection */}
              <div 
                className="w-full h-40 rounded-xl flex items-center justify-center text-sm text-center p-4" 
                style={{ backgroundColor: colors.clayNeutral }}
              >
                IMG<br /><span className="text-xs opacity-70">genuine connection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE AND WHEN */}
      <section className="px-6 py-20 text-center" style={{ backgroundColor: colors.clayNeutral }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-8 tracking-wide" style={{ color: colors.comicBlue }}>
            WHERE AND WHEN
          </h2>
          
          <p className="text-lg mb-6" style={{ color: colors.monoBlack }}>
            Exploring locations for Summer 2026:
          </p>
          
          <p className="text-2xl md:text-3xl font-medium tracking-wide mb-8" style={{ color: colors.seaQuietBlue }}>
            Corsica • Ibiza • Madeira • Algarve • Aegean islands
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-base" style={{ color: colors.monoBlack }}>
            <span className="px-4 py-2 rounded-full" style={{ backgroundColor: colors.sunOutlineWhite }}>
              8–14 guests
            </span>
            <span className="px-4 py-2 rounded-full" style={{ backgroundColor: colors.sunOutlineWhite }}>
              6 or 7 nights
            </span>
          </div>
          
          <p className="text-lg font-medium" style={{ color: colors.papayaPunch }}>
            Dates announced soon.
          </p>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="px-6 py-20" style={{ backgroundColor: colors.softApricot }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 tracking-wide text-center" style={{ color: colors.seaQuietBlue }}>
            APPLY
          </h2>
          <p className="text-center text-base mb-10 opacity-80">
            Tell us a bit about yourself. We read every response.
          </p>
          
          <form className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border-0 text-base"
                style={{ backgroundColor: colors.sunOutlineWhite }}
                aria-label="Your name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border-0 text-base"
                style={{ backgroundColor: colors.sunOutlineWhite }}
                aria-label="Your email address"
              />
            </div>

            {/* Instagram or website */}
            <div className="flex flex-col gap-2">
              <label htmlFor="social" className="text-sm font-medium">
                Instagram or website
              </label>
              <input
                type="text"
                id="social"
                name="social"
                placeholder="@handle or URL"
                className="w-full px-4 py-3 rounded-lg border-0 text-base"
                style={{ backgroundColor: colors.sunOutlineWhite }}
                aria-label="Your Instagram handle or website"
              />
            </div>

            {/* Where you're based */}
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-sm font-medium">
                Where you're based
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="City, Country"
                className="w-full px-4 py-3 rounded-lg border-0 text-base"
                style={{ backgroundColor: colors.sunOutlineWhite }}
                aria-label="Where you are based"
              />
            </div>

            {/* What draws you to SOL? */}
            <div className="flex flex-col gap-2">
              <label htmlFor="draw" className="text-sm font-medium">
                What draws you to SOL?
              </label>
              <textarea
                id="draw"
                name="draw"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border-0 text-base resize-none"
                style={{ backgroundColor: colors.sunOutlineWhite }}
                aria-label="What draws you to SOL"
              />
            </div>

            {/* Summer experience longing */}
            <div className="flex flex-col gap-2">
              <label htmlFor="longing" className="text-sm font-medium">
                Describe the kind of summer experience you're longing for
              </label>
              <textarea
                id="longing"
                name="longing"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-0 text-base resize-none"
                style={{ backgroundColor: colors.sunOutlineWhite }}
                aria-label="The kind of summer experience you're longing for"
              />
            </div>

            {/* Anything to help curate */}
            <div className="flex flex-col gap-2">
              <label htmlFor="curate" className="text-sm font-medium">
                Anything we should know to help curate the group?
              </label>
              <textarea
                id="curate"
                name="curate"
                rows={3}
                placeholder="Optional"
                className="w-full px-4 py-3 rounded-lg border-0 text-base resize-none"
                style={{ backgroundColor: colors.sunOutlineWhite }}
                aria-label="Anything to help curate the group"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg text-white font-medium text-lg mt-4 transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.papayaPunch }}
              aria-label="Submit application"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* ABOUT SOL */}
      <section className="px-6 py-20" style={{ backgroundColor: colors.sunOutlineWhite }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-10 tracking-wide text-center" style={{ color: colors.comicBlue }}>
            ABOUT SOL
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-lg mb-6" style={{ color: colors.seaQuietBlue }}>
              SOL was born from a simple desire:
            </p>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8" style={{ color: colors.monoBlack }}>
              to bring warmth, beauty, and ease back into adult life.
            </p>
            <p className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              After years of intense careers, self-growth, structured retreats, and solo trips, we wanted something else — a place for thoughtful adults to gather in the spirit of summer, connection, and pleasure.
            </p>
            <p className="text-xl font-medium mb-2" style={{ color: colors.seaQuietBlue }}>
              A home for a week.
            </p>
            <p className="text-xl font-medium mb-8" style={{ color: colors.seaQuietBlue }}>
              A feeling you carry long after.
            </p>
            <p className="text-base opacity-80">
              Created with care by Lina and friends — humans who love beautiful gatherings, warm atmospheres, and deeply human experiences.
            </p>
          </div>

          {/* Instagram Embeds Placeholder */}
          <div className="mt-12">
            <p className="text-sm text-center mb-6 opacity-60">Follow along</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Replace these placeholders with actual Instagram embed code */}
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className="aspect-square rounded-xl flex items-center justify-center text-sm text-center p-4"
                  style={{ backgroundColor: colors.clayNeutral }}
                >
                  <span className="opacity-70">
                    Instagram<br />Embed {i + 1}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-center mt-4 opacity-50">
              Replace with Instagram embed code or use @elfsight/react-instagram-feed
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12" style={{ backgroundColor: colors.monoBlack, color: colors.sunOutlineWhite }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <p className="text-lg font-medium tracking-wide" style={{ color: colors.solGold }}>
                SOL
              </p>
              <p className="text-sm opacity-70">
                Summer House Gatherings
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
              <a 
                href="#" 
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram (coming soon)"
                tabIndex={0}
              >
                Instagram (coming soon)
              </a>
              <a 
                href="mailto:hello@sol.house" 
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Contact email"
                tabIndex={0}
              >
                hello@sol.house
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs opacity-50">
              © {new Date().getFullYear()} SOL. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

