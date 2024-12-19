"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || "Something went wrong!");
      }

      setSuccess("Account created successfully!");
      setFormData({ username: "", email: "", password: "" });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-extrabold text-[#DE8C9C] mb-4 text-center">
          Create Account
        </h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#DE8C9C] font-medium">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#DE8C9C] focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#DE8C9C] font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#DE8C9C] focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#DE8C9C] font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#DE8C9C] focus:outline-none"
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
            <Link
              href="/login"
              className="text-sm text-[#DE8C9C] hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
