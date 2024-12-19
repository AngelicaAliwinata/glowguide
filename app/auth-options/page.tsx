"use client"
import Link from "next/link";
import React from "react";

export default function AuthOptions() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to GlowGuide!</h1>
      <p className="text-lg text-gray-700 mb-8">Choose an option to get started:</p>
      <div className="flex space-x-4">
        <Link
          href="/login"
          className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-300"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
