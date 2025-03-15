"use client";

import Image from "next/image";
import Layout from "../../components/Layout";

export default function Projects() {
    return (
        <Layout>
        <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 sm:px-10">
            <section className="max-w-3xl w-full text-center mb-12">
                {/* projects section */}
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> projects </h1>

                {/* budget buddy */}
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg space-x-4 mb-6">
                    <div className="flex items-center justify-center w-40 h-40">
                        <Image
                            src="/images/budget-buddy-logo.png" 
                            alt="budget buddy"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                    </div>
                    <div>
                    <h2 className="text-2xl font-medium text-gray-900"> budget buddy  (feb 2025 - present) </h2>
                        <p className="text-gray-600"> <strong>technologies: kotlin, android studio, jetpack compose, room persistence library</strong></p>
                        <p className="text-gray-600"> a personal finance tracking app with a visual spending analysis, users can categorize inputted purchases and allocate percentages of their income to categories</p>
                    </div>
                </div>
            </section>
            
            {/* skills section */}
            <section className="max-w-3xl w-full text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> technical skills </h1>
                    <div className="flex items-center justify-center space-x-6">
                        <Image
                            src="/images/python-logo.png" 
                            alt="python"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                        <Image
                            src="/images/java-logo.png" 
                            alt="java"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                        <Image
                            src="/images/git-logo.png" 
                            alt="git"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                        <Image
                            src="/images/kotlin-logo.png" 
                            alt="kotlin"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                    </div>
                    <div className="flex items-center justify-center space-x-6">
                        <Image
                            src="/images/jira-logo.png" 
                            alt="jira"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                        <Image
                            src="/images/c-logo.png" 
                            alt="c"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                        <Image
                            src="/images/next-js-logo.png" 
                            alt="next-js"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                        <Image
                            src="/images/figma-logo.png" 
                            alt="figma"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                    </div>
            </section>
        </div>
        </Layout>
    );
}