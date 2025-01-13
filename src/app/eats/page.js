"use client";

import Image from "next/image";
import Layout from "../../components/Layout";

export default function Eats() {
    return (
    <Layout>
        <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-10">
            
            {/* introduction to page */}
            <section className="text-center max-w-3xl w-full mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> good eats </h1>
                <p className="text-lg text-gray-600 mb-4"> 
                    one of my biggest hobbies is trying new restaurants and cafés! 🍽️ 
                </p>
                <p className="text-lg text-gray-600 mb-4"> 
                    here are some of my favorite bites and sips from places i've been to 🌎
                </p>
            </section>

            {/* box to hold all places */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {/* new york city */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> new york, ny </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-pink-700 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> shanghai you garden </li>
                    <li className="text-lg text-white"> makimaki sushi </li>
                    <li className="text-lg text-white"> take 31 </li>
                    <li className="text-lg text-white"> sam won gahk </li>
                    <li className="text-lg text-white"> little ruby's east village </li>
                </ul>
            </section>

            {/* bay area */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> bay area, ca </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-rose-400 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> capital </li>
                    <li className="text-lg text-white"> saigon seafood harbor </li>
                    <li className="text-lg text-white"> pocha k </li>
                    <li className="text-lg text-white"> phở nhy </li>
                    <li className="text-lg text-white"> bún bò huế an nam </li>
                </ul>
            </section>

            {/* seattle + bellevue */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> seattle, wa + bellevue, wa </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-pink-400 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> fern thai eatery & bar </li>
                    <li className="text-lg text-white"> royal kitchen chinese restaurant </li>
                    <li className="text-lg text-white"> supreme dumplings </li>
                    <li className="text-lg text-white"> bruciato </li>
                    <li className="text-lg text-white"> tanoor seattle </li>
                </ul>
            </section>

            {/* la + san diego + malibu */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> southern california </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-pink-800 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> yokohama yakitori koubou </li>
                    <li className="text-lg text-white"> malibu farm pier cafe </li>
                    <li className="text-lg text-white"> mo-mo-paradise </li>
                    <li className="text-lg text-white"> pot of cha </li>
                </ul>
            </section>

            {/* boston */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> boston, ma </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-rose-600 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> mountain house boston 川山甲 </li>
                    <li className="text-lg text-white"> banh mi ok </li>
                    <li className="text-lg text-white"> maruichi select </li>
                    <li className="text-lg text-white"> giggling rice </li>
                    <li className="text-lg text-white"> shy bird - south boston </li>
                </ul>
            </section>

            {/* rochester */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> rochester, ny </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-rose-900 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> szechuan opera </li>
                    <li className="text-lg text-white"> tsingtao house </li>
                    <li className="text-lg text-white"> seoul drop </li>
                    <li className="text-lg text-white"> coco garden </li>
                    <li className="text-lg text-white"> boba mi </li>
                </ul>
            </section>
            
            {/* canada */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> canada </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-pink-500 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> nook </li>
                    <li className="text-lg text-white"> sen pad thai </li>
                    <li className="text-lg text-white"> the works craft burgers & beer </li>
                    <li className="text-lg text-white"> la bise bakery </li>
                </ul>
            </section>
            </section>

            <p className="text-lg text-gray-600 mb-6"> check out my beli for more 🫖 </p>
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
        </div>
        </Layout>
    );
}