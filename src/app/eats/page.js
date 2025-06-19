"use client";

import Image from "next/image";
import Layout from "../../components/Layout";

export default function Eats() {
    return (
    <Layout>
        <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 sm:px-10">
            
            {/* introduction to page */}
            <section className="text-center max-w-3xl w-full mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> Good Eats </h1>
                <p className="text-lg text-gray-600 mb-4"> 
                    One of my biggest hobbies is trying new restaurants and cafés! 🍽️ 
                </p>
                <p className="text-lg text-gray-600 mb-4"> 
                    Here are some of my favorite bites and sips from places i've been to 🌎
                </p>
            </section>

            {/* box to hold all places */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {/* new york city */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> NYC </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-pink-700 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> Shanghai You Garden </li>
                    <li className="text-lg text-white"> MakiMaki Sushi </li>
                    <li className="text-lg text-white"> Take 31 </li>
                    <li className="text-lg text-white"> Cho Dang Gol </li>
                    <li className="text-lg text-white"> Little Ruby's East Village </li>
                </ul>
            </section>

            {/* bay area */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Bay Area </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-rose-400 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> Capital </li>
                    <li className="text-lg text-white"> Saigon Seafood Harbor </li>
                    <li className="text-lg text-white"> Pocha K </li>
                    <li className="text-lg text-white"> Phở Nhy </li>
                    <li className="text-lg text-white"> Bún Bò Huế An Nam </li>
                </ul>
            </section>

            {/* seattle + bellevue */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Seattle + Bellevue </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-pink-400 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> Fern Thai Eatery & Bar </li>
                    <li className="text-lg text-white"> Royal Kitchen Chinese Restaurant </li>
                    <li className="text-lg text-white"> Supreme Dumplings </li>
                    <li className="text-lg text-white"> Bruciato </li>
                    <li className="text-lg text-white"> tanoor Seattle </li>
                </ul>
            </section>

            {/* la + san diego + malibu */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> SoCal </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-pink-800 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> Yokohama Yakitori Koubou </li>
                    <li className="text-lg text-white"> Malibu Farm Pier Cafe </li>
                    <li className="text-lg text-white"> Mo-Mo-Paradise </li>
                    <li className="text-lg text-white"> Pot of Cha </li>
                </ul>
            </section>

            {/* boston */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Boston </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-rose-600 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> Mountain House Boston 川山甲 </li>
                    <li className="text-lg text-white"> Banh Mi Ok </li>
                    <li className="text-lg text-white"> JiangNan Boston </li>
                    <li className="text-lg text-white"> Giggling Rice </li>
                    <li className="text-lg text-white"> Shy Bird </li>
                </ul>
            </section>

            {/* rochester */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Rochester </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-rose-900 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> Szechuan Opera </li>
                    <li className="text-lg text-white"> Tsingtao House </li>
                    <li className="text-lg text-white"> Seoul Drop </li>
                    <li className="text-lg text-white"> Coco Garden </li>
                    <li className="text-lg text-white"> Boba Mi </li>
                </ul>
            </section>
            
            {/* canada */}
            <section className="max-w-3xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Toronto + Vancouver </h2>
                <ul className="list-disc list-inside text-left space-y-2 bg-pink-500 shadow-lg rounded-lg p-6 mb-8">
                    <li className="text-lg text-white"> Nook </li>
                    <li className="text-lg text-white"> Sen Pad Thai </li>
                    <li className="text-lg text-white"> The Works Craft Burgers & Beer </li>
                    <li className="text-lg text-white"> La Bise Bakery </li>
                </ul>
            </section>
            </section>

            <p className="text-lg text-gray-600 mb-6"> Check out my beli for more 🫖 </p>
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