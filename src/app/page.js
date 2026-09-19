"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 px-6 md:px-10 py-16 min-h-[88vh] relative max-w-7xl mx-auto">
        
        {/* Left Content */}
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
            I’m a recent graduate of Boston University, currently based in NYC. Passionate about thoughtful, human-centered technology that expands access and creates meaningful impact.
            Outside of coding, you can find me collecting stickers for my scrapbook 𓄲, eating copious amounts of frozen yogurt (๑ᵔ⤙ᵔ๑), wandering to new restaurants 𓐐, browsing GoodReads for my next read ꩜, or making new syrups for my daily lattes ִ ࣪𖤐.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/projects" className="px-6 py-2.5 bg-[#2a1a12] text-[#fdf6f0] text-[13px] font-medium tracking-wide rounded-full transition-all hover:bg-[#e85d7a] hover:-translate-y-0.5">
              view my work →
            </Link>
          </div>

          {/* Social Pills */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="https://www.linkedin.com/in/sukiezhang/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-[#c89678]/25 rounded-full px-3.5 py-1.5 text-[12px] text-[#7a5a48] font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <span className="w-2 h-2 rounded-full bg-[#e85d7a]"></span>LinkedIn
            </a>
            <a href="https://github.com/sukiecodes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-[#c89678]/25 rounded-full px-3.5 py-1.5 text-[12px] text-[#7a5a48] font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <span className="w-2 h-2 rounded-full bg-[#2a1a12]"></span>GitHub
            </a>
          </div>
        </div>

        {/* Right: taped-in photo */}
        <div className="relative flex justify-center lg:justify-end">
          {/* soft pink wash behind the photo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-4 w-72 h-72 rounded-full bg-[#fce4eb] blur-3xl opacity-70"
          ></div>

          <figure className="group relative -rotate-[2.5deg] bg-white rounded-[20px] p-3 pb-16 border border-[#c89678]/20 shadow-[0_24px_50px_-24px_rgba(42,26,18,0.4)] transition-transform duration-500 ease-out hover:rotate-0">
            {/* washi tape */}
            <span
              aria-hidden="true"
              className="absolute -top-3 left-10 w-24 h-7 -rotate-6 bg-[#fce4eb]/80 border-x border-[#e85d7a]/20"
            ></span>
            <span
              aria-hidden="true"
              className="absolute -top-4 right-12 w-20 h-7 rotate-6 bg-[#f4e2d2]/85 border-x border-[#c89678]/25"
            ></span>

            <div className="relative w-[270px] sm:w-[320px] lg:w-[360px] aspect-[4/5] overflow-hidden rounded-[12px] bg-[#f6ece4]">
              <Image
                src="/images/sukie.jpg"
                alt="Sukie Zhang"
                fill
                priority
                sizes="(max-width: 640px) 270px, (max-width: 1024px) 320px, 360px"
                className="object-cover"
              />
            </div>

          </figure>
        </div>
      </section>
    </Layout>
  );
}