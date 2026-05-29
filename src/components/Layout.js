// components/Layout.js
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathname = usePathname();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scaling, setScaling] = useState(false);

  // Track mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX - 6, y: e.clientY - 6 });
    };
    const handleMouseDown = () => setScaling(true);
    const handleMouseUp = () => setScaling(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Helper to style the active link dynamically
  const linkClass = (path) => 
    `text-[12px] tracking-[0.12em] uppercase font-medium transition-colors ${
      pathname === path ? 'text-[#e85d7a]' : 'text-[#7a5a48] hover:text-[#e85d7a]'
    }`;

  return (
    <>
      {/* Global Scrapbook Aesthetic Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght=0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&family=Caveat:wght@500;700&display=swap');
        
        body {
          background-color: #fdf6f0;
          font-family: 'DM Sans', sans-serif;
          color: #2a1a12;
          overflow-x: hidden;
          cursor: none;
        }
        
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: 
            linear-gradient(rgba(200,160,130,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,160,130,0.07) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-caveat { font-family: 'Caveat', cursive; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-8px) rotate(var(--rot, 0deg)); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 18s linear infinite; }

        .underline-squiggle::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px; right: 0;
          height: 6px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 10'%3E%3Cpath d='M0,5 Q15,0 30,5 T60,5 T90,5 T120,5' stroke='%23e85d7a' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") repeat-x center;
          background-size: 60px 6px;
          opacity: 0.7;
        }
      `}</style>

      {/* Shared Custom Bubble Cursor */}
      <div 
        className="fixed w-3 h-3 bg-[#e85d7a] rounded-full pointer-events-none z-[9999] mix-blend-multiply transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: scaling ? 'scale(2.5)' : 'scale(1)'
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        {/* Global Navigation Bar */}
        <nav className="flex justify-between items-center px-6 md:px-10 py-5 sticky top-0 bg-[#fdf6f0]/90 backdrop-blur-md z-50 border-b border-[#c89678]/15">
          <Link href="/" className="font-playfair font-black text-2xl text-[#2a1a12] tracking-tight no-underline">
            Sukie Zhang
          </Link>
          <div className="flex gap-8">
            <Link href="/" className={linkClass('#')}>about</Link>
            <Link href="/projects" className={linkClass('/projects')}>projects</Link>
          </div>
        </nav>

        {/* Dynamic Page Content Injector */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="bg-[#2a1a12] text-[#fdf6f0]/70 text-center py-8 text-[13px]">
          <p>
            made with <span className="text-[#e85d7a]">♡</span> by <Link href="#" className="text-[#f2a3b5] no-underline">sukie zhang</Link> · <a href="mailto:sukiez@bu.edu" className="text-[#f2a3b5]">sukiez@bu.edu</a> · 2026 ©
          </p>
        </footer>
      </div>
    </>
  );
}
