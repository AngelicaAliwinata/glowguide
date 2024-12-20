'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo2.png" // Replace with your logo path
            alt="GlowGuide Logo"
            width={300}
            height={100}
            className="rounded-full"
          />
        </div>


        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          GlowGuide is an application designed to help you find the best
          skincare recommendations based on your skin type and needs. With
          GlowGuide, you can confidently choose products that suit you to
          maintain healthy and beautiful skin every day.
        </p>

        {/* Call-to-action */}
        <div className="mt-8">
          <a
            href="/recom"
            className="bg-[#DE8C9C] hover:bg-[#C97D87] text-white font-semibold py-3 px-6 rounded-full shadow-md text-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
