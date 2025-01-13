"use client";

import Layout from "../../components/Layout";

export default function Projects() {
    return (
        <Layout>
        <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-10">
            <section className="max-w-3xl w-full text-center mb-12">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4"> projects </h1>
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-medium text-gray-900"> in progress </h2>
                    <p className="text-gray-600"> check back later :) </p>
                </div>
            </section>
        </div>
        </Layout>
    );
}