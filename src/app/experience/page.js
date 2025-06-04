"use client";

import Image from "next/image";
import Layout from "../../components/Layout";

export default function Experience() {
    return (
        <Layout>
        <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 sm:px-10">
            {/* professional experience section */}
            <section className="max-w-3xl w-full text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> professional experience </h1>
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
                        <h2 className="text-2xl font-medium text-gray-900"> software engineer intern at fidelity investments</h2>
                        <p className="text-gray-600"> jersey city, nj | jun 2025 - present </p>
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
                        <h2 className="text-2xl font-medium text-gray-900"> break through tech ai/ml fellow at mit </h2>
                        <p className="text-gray-600"> cambridge, ma | 2025-26 academic year cohort </p>
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
                        <h2 className="text-2xl font-medium text-gray-900"> software engineer intern at liberty mutual insurance </h2>
                        <p className="text-gray-600"> seattle, wa | may 2024 - aug 2024 </p>
                    </div>
                </div>
            </section>

            {/* leadership experience section */}
            <section className="max-w-3xl w-full text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> leadership experience </h1>
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
                        <h2 className="text-2xl font-medium text-gray-900"> external outreach director at bu women in cs </h2>
                        <p className="text-gray-600"> boston, ma | sep 2024 - present </p>
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
                        <h2 className="text-2xl font-medium text-gray-900"> resident advisor at rit center for residence life </h2>
                        <p className="text-gray-600"> rochester, ny | aug 2023 - may 2024 </p>
                    </div>
                </div>
            </section>
            
            {/* achievements/organizations section */}
            <section className="max-w-3xl w-full text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> achievements/organizations </h1>
                <ul className="list-disc list-inside text-left space-y-2 bg-white shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-gray-700"> rewriting the code </li>
                    <li className="text-lg text-gray-700"> presidential scholarship recipient (rit 2022-2024, transferred) </li>
                    <li className="text-lg text-gray-700"> jane street academy of math and programming scholar (2022) </li>
                </ul>
            </section>
        </div>
        </Layout>
    );
}
