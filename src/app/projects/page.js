"use client";

import Image from "next/image";
import Layout from "../../components/Layout";

export default function Projects() {
    return (
        <Layout>
        <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 sm:px-10">
            <section className="max-w-3xl w-full text-center mb-12">
                {/* projects section */}
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> Projects </h1>

                {/* flour power */}
                <div className="items-center p-4 bg-white shadow-md rounded-lg space-x-4 mb-6">
                    <div>
                    <h2 className="text-2xl font-medium text-gray-900 mb-3"> 
                        <a href="https://github.com/sukiecodes/flour-power" target="_blank" rel="noopener noreferrer">Flour Power  (May 2025 - present) </a>
                    </h2>
                        <p className="text-gray-600"> <strong>Technologies: Next.js, Node.js, MongoDB Atlas</strong></p>
                        <p className="text-gray-600"> A full-stack recipe sharing platform for aspiring chefs and bakers, with remote data persistence </p>
                    </div>
                </div>

                {/* timeless trails */}
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg space-x-4 mb-6">
                    <div className="flex items-center justify-center w-40 h-40">
                        <Image
                            src="/images/timeless-trails-logo.png" 
                            alt="timeless trails"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                    </div>
                    <div>
                    <h2 className="text-2xl font-medium text-gray-900 mb-3"> 
                        <a href="https://github.com/chenyu51735/cs-501-project" target="_blank" rel="noopener noreferrer">Timeless Trails  (Jan 2025 - May 2025) </a>
                    </h2>
                        <p className="text-gray-600"> <strong>Technologies: Kotlin, Jetpack Compose, Room Persistence Library, Gemini API, MediaWiki API, Maps SDK</strong></p>
                        <p className="text-gray-600"> An interactive and customizable map travel journal, allowing you to discover history at your feet </p>
                    </div>
                </div>
            </section>
            
            {/* skills section */}
            <section className="max-w-3xl w-full text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> Technical Skills </h1>
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