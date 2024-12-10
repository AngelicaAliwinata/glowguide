// pages/auth-options.tsx
import Link from "next/link";

export default function AuthOptions() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to GlowGuide</h1>
      <p className="text-lg text-gray-600 mb-8">Choose an option to get started:</p>
      <div className="flex space-x-4">
        <Link href="/login">
          <a className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600">
            Login
          </a>
        </Link>
        <Link href="/signup">
          <a className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300">
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  );
}
