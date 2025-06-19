"use client";

import Image from "next/image";
import Layout from "../../components/Layout";

export default function Experience() {
    return (
        <Layout>
        <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 sm:px-10">
            {/* professional experience section */}
            <section className="max-w-3xl w-full text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> Professional Experience </h1>
                {/* fidelity investments */}
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg space-x-12 mb-6">
                    <div className="flex items-center justify-center w-40 h-40">
                        <Image
                            src="/images/fidelity-logo.png" 
                            alt="fidelity"
                            width={150} 
                            height={150} 
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium text-gray-900"> Software Engineer Intern at Fidelity Investments</h2>
                        <p className="text-gray-600"> Jersey City, NJ | Jun 2025 - present </p>
                    </div>
                </div>
                {/* break through tech */}
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg space-x-12 mb-6">
                    <div className="flex items-center justify-center w-40 h-40">
                        <Image
                            src="/images/btt-logo.jpg" 
                            alt="break through tech"
                            width={150} 
                            height={150} 
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium text-gray-900"> Break Through Tech AI/ML Fellow at MIT </h2>
                        <p className="text-gray-600"> Cambridge, MA | May 2025 - present </p>
                    </div>
                </div>
                {/* liberty mutual */}
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg space-x-4 mb-6">
                    <div className="flex items-center justify-center w-40 h-40">
                        <Image
                            src="/images/liberty-mutual-logo.png" 
                            alt="liberty mutual"
                            width={150} 
                            height={150} 
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium text-gray-900"> Software Engineer Intern at Liberty Mutual Insurance </h2>
                        <p className="text-gray-600"> Seattle, WA | May 2024 - Aug 2024 </p>
                    </div>
                </div>
            </section>

            {/* leadership experience section */}
            <section className="max-w-3xl w-full text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> Leadership Experience </h1>
                {/* bu women in cs */}
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg space-x-4 mb-6">
                    <div className="flex items-center justify-center w-40 h-40">
                        <Image
                            src="/images/wics-logo.jpg"
                            alt="bu wics"
                            width={150} 
                            height={150} 
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium text-gray-900"> External Outreach Director at BU Women in CS </h2>
                        <p className="text-gray-600"> Boston, MA | Sep 2024 - present </p>
                    </div>
                </div>

                {/* rit center for res life */}
                <div className="flex items-center p-4 bg-white shadow-md rounded-lg space-x-4 mb-6">
                    <div className="flex items-center justify-center w-40 h-40">
                        <Image
                            src="/images/rit-logo.png"
                            alt="rit tigers"
                            width={100} 
                            height={100} 
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium text-gray-900"> Resident Advisor at RIT Center for Residence Life </h2>
                        <p className="text-gray-600"> Rochester, NY | Aug 2023 - May 2024 </p>
                    </div>
                </div>
            </section>
            
            {/* achievements/organizations section */}
            <section className="max-w-3xl w-full text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> Achievements/Organizations </h1>
                <ul className="list-disc list-inside text-left space-y-2 bg-white shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-gray-700"> Rewriting the Code </li>
                    <li className="text-lg text-gray-700"> Presidential Scholarship Recipient (RIT 2022-2024, transferred) </li>
                    <li className="text-lg text-gray-700"> Jane Street Academy of Math and Programming Scholar (2022) </li>
                </ul>
            </section>
        </div>
        </Layout>
    );
}
