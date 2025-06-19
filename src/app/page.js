"use client";

import React from 'react';
import { ReactTyped } from 'react-typed';
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4"> Hi! I'm Sukie Zhang </h1>
        <ReactTyped 
          strings={[
            "Software Engineer",
            "Creative",
            "Student",
            "Foodie",
            "Mobile Developer",
          ]}
          typeSpeed={100} 
          backSpeed={50} 
          backDelay={1000} 
          loop={true} 
          className="text-4xl font-bold text-gray-800"
        />
        </div>
      </section>

      <section className="text-center mb-8 max-w-2xl">
        <p className="mt-5 text-lg italic text-gray-700">Passionate about approaching technology from a humanistic perspective</p>
      </section>
      
      {/* about me */}
      <section className="text-center mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4"> Welcome to my corner of the internet! Thanks for stopping by 🌷🌟🍓 </h2>
          <p className="text-lg text-gray-600">
          I am a senior at Boston University studying computer science, originally from NYC. 
          Growing up as a first-generation + low-income student, I’ve experienced the challenges of navigating 
          a world where resources and representation are often limited. I believe technology, when approached 
          with empathy and a human-centered mindset, has the power to bridge gaps and amplify marginalized voices. 
          My goal is to create tech solutions that prioritize people, especially those who have been overlooked, 
          and help create a future where everyone has the opportunity to thrive.
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

        <Link href="/eats">
          <button className="bg-rose-300 text-white py-2 px-6 rounded-full transition duration-200 hover:bg-rose-400">
            eats
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

        {/* beli logo button */}
        <a 
          href="https://beliapp.co/app/sukiezh" 
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-105 hover:shadow-lg"
        >
          <Image
            src="/images/beli-logo.png" 
            alt="beli"
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