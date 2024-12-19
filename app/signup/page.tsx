'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const action = "register"
    const username = event.currentTarget.username.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action, username, email, password }),
      });

      if (response.ok) {
        // Redirect ke halaman login setelah berhasil signup
        window.location.href = "/login";
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Sign up failed");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-pink-100 items-center justify-center">
        <Image
          src="/images/skincare-illustration.png"
          alt="Skincare Illustration"
          width={500}
          height={600}
          className="rounded-lg"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-extrabold text-[#DE8C9C] mb-4 text-center">
            Create Account
          </h1>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4 text-center">{errorMessage}</div>
          )}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#DE8C9C]"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#DE8C9C]"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#DE8C9C]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#DE8C9C] text-white py-2 rounded-full hover:bg-[#C97D87] font-semibold shadow-md"
            >
              Create Account
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-700 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-sm text-[#DE8C9C] hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
