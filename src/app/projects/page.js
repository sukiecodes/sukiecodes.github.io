// pages/projects.js or app/projects/page.js
"use client";

import React from 'react';
import Image from "next/image";
import Layout from '@/components/Layout'; // Adjust path based on your folder setup

export default function Projects() {
  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto px-6 md:px-10 py-12">
        {/* PROJECTS */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-caveat text-3xl text-[#e85d7a] font-bold">built works & code</span>
            <div className="flex-1 h-[1px] bg-[#c89678]/25"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Flour Power */}
            <div className="bg-white p-5 rounded-2xl border border-[#c89678]/15 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#e85d7a]">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-playfair font-bold text-xl text-[#2a1a12] hover:text-[#e85d7a] transition-colors">
                  <a href="https://github.com/sukiecodes/flour-power" target="_blank" rel="noopener noreferrer" className="no-underline">
                    Flour Power 🍞
                  </a>
                </h2>
                <span className="text-[11px] text-[#b08070] uppercase tracking-wider font-medium whitespace-nowrap">May 2025 - Pres.</span>
              </div>
              <p className="text-[14px] text-[#7a5a48] font-light leading-relaxed mb-4">
                A full-stack recipe sharing platform designed for aspiring home chefs and bakers, structured with remote data persistence across sessions.
              </p>
              <div className="mt-auto">
                <div className="text-[10px] tracking-wider uppercase text-[#b08070] mb-1.5 font-medium">Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#feeee0] text-[#b05a20] text-[11px] px-2.5 py-0.5 rounded-lg font-medium">Next.js</span>
                  <span className="bg-[#feeee0] text-[#b05a20] text-[11px] px-2.5 py-0.5 rounded-lg font-medium">Node.js</span>
                  <span className="bg-[#feeee0] text-[#b05a20] text-[11px] px-2.5 py-0.5 rounded-lg font-medium">MongoDB Atlas</span>
                </div>
              </div>
            </div>

            {/* Timeless Trails */}
            <div className="bg-white p-5 rounded-2xl border border-[#c89678]/15 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#e8a05d]">
              <div className="flex gap-4 items-start mb-2">
                <div className="flex items-center justify-center w-14 h-14 bg-[#fdf6f0] rounded-xl p-1.5 shrink-0 border border-[#c89678]/10">
                  <Image src="/images/timeless-trails-logo.png" alt="timeless trails" width={48} height={48} className="object-contain mix-blend-multiply" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-start">
                    <h2 className="font-playfair font-bold text-xl text-[#2a1a12] hover:text-[#e85d7a] transition-colors">
                      <a href="https://github.com/chenyu51735/cs-501-project" target="_blank" rel="noopener noreferrer" className="no-underline">
                        Timeless Trails 🗺️
                      </a>
                    </h2>
                    <span className="text-[11px] text-[#b08070] uppercase tracking-wider font-medium whitespace-nowrap">Jan - May 2025</span>
                  </div>
                  <p className="text-[14px] text-[#7a5a48] font-light leading-relaxed mt-2 mb-4">
                    An interactive and completely customizable map-driven travel journal that helps adventurers map paths and discover historical points right at their feet.
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <div className="text-[10px] tracking-wider uppercase text-[#b08070] mb-1.5 font-medium">Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#e2f4e8] text-[#2d7a4a] text-[11px] px-2.5 py-0.5 rounded-lg font-medium">Kotlin</span>
                  <span className="bg-[#e2f4e8] text-[#2d7a4a] text-[11px] px-2.5 py-0.5 rounded-lg font-medium">Jetpack Compose</span>
                  <span className="bg-[#e2f4e8] text-[#2d7a4a] text-[11px] px-2.5 py-0.5 rounded-lg font-medium">Room DB</span>
                  <span className="bg-[#ede8fc] text-[#5840b0] text-[11px] px-2.5 py-0.5 rounded-lg font-medium">Gemini API</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="mb-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-caveat text-3xl text-[#e85d7a] font-bold">skills & tool belt</span>
            <div className="flex-1 h-[1px] bg-[#c89678]/25"></div>
          </div>

          <div className="bg-white border border-[#c89678]/15 rounded-2xl p-8 shadow-sm flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="flex flex-col items-center transform -rotate-2 hover:rotate-0 transition-transform bg-[#fdf6f0]/60 p-3 rounded-xl border border-[#c89678]/10 w-24">
                <Image src="/images/python-logo.png" alt="python" width={44} height={44} className="object-contain mix-blend-multiply" />
                <span className="text-[11px] text-[#7a5a48] font-medium mt-1">Python</span>
              </div>
              <div className="flex flex-col items-center transform rotate-3 hover:rotate-0 transition-transform bg-[#fdf6f0]/60 p-3 rounded-xl border border-[#c89678]/10 w-24">
                <Image src="/images/java-logo.png" alt="java" width={44} height={44} className="object-contain mix-blend-multiply" />
                <span className="text-[11px] text-[#7a5a48] font-medium mt-1">Java</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}