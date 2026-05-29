"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout'; // Adjust the import path as needed

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0 px-6 md:px-10 py-16 min-h-[88vh] relative">
        
        {/* Hero Left Content */}
        <div className="lg:pr-8">
          <span className="inline-block bg-[#fce4eb] text-[#c04060] text-[11px] tracking-[0.14em] uppercase font-medium px-3 py-1.5 rounded-full mb-6">
            ✦ software engineer
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[4.2rem] font-black leading-[1.05] text-[#2a1a12] mb-2">
            building tech<br />
            <em className="italic text-[#e85d7a]">with</em> <span className="inline-block relative underline-squiggle">heart</span> &<br />
            intention
          </h1>
          <p className="text-[16px] text-[#7a5a48] leading-[1.75] my-6 max-w-[440px] font-light">
            I’m a Boston University alum with a degree in Computer Science, based in NYC. Passionate about thoughtful, human-centered technology that expands access and creates meaningful impact.
            Outside of coding, you can find me collecting stickers for my scrapbook 𓄲, eating copious amounts of frozen yogurt (๑ᵔ⤙ᵔ๑), wandering to new restaurants 𓐐, browsing GoodReads for my next read ꩜, or making new syrups for my daily lattes ִ ࣪𖤐.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/projects" className="px-6 py-2.5 bg-[#2a1a12] text-[#fdf6f0] text-[13px] font-medium tracking-wide rounded-full transition-all hover:bg-[#e85d7a] hover:-translate-y-0.5">
              view my work →
            </Link>
            <a href="mailto:sukiez@bu.edu" className="px-6 py-2.5 bg-transparent text-[#2a1a12] border-1.5 border-[#c4a090] text-[13px] font-medium tracking-wide rounded-full transition-all hover:border-[#2a1a12] hover:-translate-y-0.5">
              say hello
            </a>
          </div>

          {/* Social Pills */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="https://www.linkedin.com/in/sukiezhang/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-[#c89678]/25 rounded-full px-3.5 py-1.5 text-[12px] text-[#7a5a48] font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <span className="w-2 h-2 rounded-full bg-[#e85d7a]"></span>LinkedIn
            </a>
            <a href="https://github.com/sukiecodes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-[#c89678]/25 rounded-full px-3.5 py-1.5 text-[12px] text-[#7a5a48] font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <span className="w-2 h-2 rounded-full bg-[#2a1a12]"></span>GitHub
            </a>
            <a href="#" className="flex items-center gap-2 bg-white border border-[#c89678]/25 rounded-full px-3.5 py-1.5 text-[12px] text-[#7a5a48] font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <span className="w-2 h-2 rounded-full bg-[#e8a05d]"></span>Beli
            </a>
          </div>
        </div>
      </section>

      {/* Infinite Moving Marquee Strip */}
      <div className="bg-[#2a1a12] text-[#fdf6f0] overflow-hidden py-3 whitespace-nowrap relative">
        <div className="inline-flex animate-marquee">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="font-playfair italic text-[14px] px-6">software engineer <span className="text-[#e85d7a] px-2 not-italic">✦</span></span>
              <span className="font-playfair italic text-[14px] px-6">frozen yogurt enthusiast <span className="text-[#e85d7a] px-2 not-italic">✦</span></span>
              <span className="font-playfair italic text-[14px] px-6">nyc-based <span className="text-[#e85d7a] px-2 not-italic">✦</span></span>
              <span className="font-playfair italic text-[14px] px-6">latte connoisseur <span className="text-[#e85d7a] px-2 not-italic">✦</span></span>
              <span className="font-playfair italic text-[14px] px-6">BU CS alum <span className="text-[#e85d7a] px-2 not-italic">✦</span></span>
              <span className="font-playfair italic text-[14px] px-6">sticker collector <span className="text-[#e85d7a] px-2 not-italic">✦</span></span>
              <span className="font-playfair italic text-[14px] px-6">restaurant wanderer <span className="text-[#e85d7a] px-2 not-italic">✦</span></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Fun Facts Headings Section */}
      <div className="flex items-center gap-4 px-6 md:px-10 pt-10 mt-10">
        <span className="font-caveat text-[22px] text-[#e85d7a] font-bold">a little about me</span>
        <div className="flex-1 h-[1px] bg-[#c89678]/25"></div>
      </div>

      {/* Grid Blocks - Fun Facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10 py-10">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 border border-[#c89678]/15 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#e85d7a]">
          <div className="text-3xl mb-2.5">💻</div>
          <div className="font-playfair font-bold text-lg mb-1.5 text-[#2a1a12]">the engineer</div>
          <div className="text-[13px] text-[#9a7a68] leading-relaxed font-light">Building software that centers empathy. Especially passionate about tech that serves first-gen and low-income communities.</div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-6 border border-[#c89678]/15 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#e8a05d]">
          <div className="text-3xl mb-2.5">𓐐</div>
          <div className="font-playfair font-bold text-lg mb-1.5 text-[#2a1a12]">the food explorer</div>
          <div className="text-[13px] text-[#9a7a68] leading-relaxed font-light">Always on the hunt for new spots. Cataloguing everything on Beli. Froyo is a non-negotiable.</div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 border border-[#c89678]/15 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#7a9ee8]">
          <div className="text-3xl mb-2.5">✂️</div>
          <div className="font-playfair font-bold text-lg mb-1.5 text-[#2a1a12]">the maker</div>
          <div className="text-[13px] text-[#9a7a68] leading-relaxed font-light">Scrapbooking, sticker collecting, homemade syrups. Creativity lives outside the terminal too.</div>
        </div>
      </div>
    </Layout>
  );
}