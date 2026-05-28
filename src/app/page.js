"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
    <div className="mt-12 bg-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-10">
      {/* header section */}
      <section className="flex items-center"> 
          <Image
            src="/favicon.ico"
            alt="logo"
            width={200}  
            height={200}
            className="rounded-full hover:opacity-80 mr-8"
          />
        <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4"> Sukie Zhang </h1>
        </div>
      </section>
      
      {/* about me */}
      <section className="text-center mb-12 max-w-3xl">
          <p className="text-lg text-gray-600">
          I’m a software engineer based in NYC and a Boston University alum with a degree in Computer Science. 
          Passionate about thoughtful, human-centered technology that expands access and creates meaningful impact.
          Outside of coding, you can find me collecting stickers for my scrapbook 𓄲, 
          eating copious amounts of frozen yogurt (๑ᵔ⤙ᵔ๑), wandering to new restaurants 𓐐, 
          browsing GoodReads for my next read ꩜, or making new syrups for my daily lattes ִ ࣪𖤐.
          </p>
      </section>
      
      {/* buttons to pages */}
      <section className="flex justify-center space-x-6 mb-12">
        <Link href="/experience">
          <button className="bg-rose-300 text-white py-2 px-6 rounded-full transition duration-200 hover:bg-rose-400">
            experience
          </button>
        </Link>

        <Link href="/projects">
          <button className="bg-rose-300 text-white py-2 px-6 rounded-full transition duration-200 hover:bg-rose-400">
            projects
          </button>
        </Link>
      </section>

        
      {/* external links section */}
      <section className="flex justify-center space-x-6 text-lg mb-12">
        {/* linkedin logo button */}
        <a 
          href="https://www.linkedin.com/in/sukiezhang/" 
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-105 hover:shadow-lg"
        >
          <Image
            src="/images/linkedin-logo.png"
            alt="linkedin"
            width={40}  
            height={40}
            className="rounded-full hover:opacity-80"
          />
        </a>

        {/* github logo button */}
        <a 
          href="https://github.com/sukiecodes" 
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-105 hover:shadow-lg"
        >
          <Image
            src="/images/github-logo.png" 
            alt="github"
            width={40} 
            height={40} 
            className="rounded-full hover:opacity-80"
          />
        </a>
      </section>
    </div>
    </Layout>
  );
}