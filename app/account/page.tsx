"use client";

import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-medium">
          You are not logged in. Please log in to view your profile.
        </p>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        {/* Profile Header */}
        <div className="text-center mb-6">
          <img
            src={user.image || "/images/avatar.png"}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-[#DE8C9C]"
          />
          <h2 className="text-2xl font-bold text-[#DE8C9C] mt-4">
            {user.name || "Your Name"}
          </h2>
          <p className="text-gray-500">{user.email || "yourname@email.com"}</p>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-[#DE8C9C] font-medium">Username</label>
            <input
              type="text"
              value={user.name || "N/A"}
              readOnly
              className="w-full px-4 py-2 mt-1 border rounded-md bg-pink-50 border-pink-200 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-[#DE8C9C] font-medium">Email</label>
            <input
              type="email"
              value={user.email || "N/A"}
              readOnly
              className="w-full px-4 py-2 mt-1 border rounded-md bg-pink-50 border-pink-200 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-[#DE8C9C] font-medium">Bio</label>
            <textarea
              value="I love pink and building awesome web applications!"
              readOnly
              className="w-full px-4 py-2 mt-1 border rounded-md bg-pink-50 border-pink-200 text-gray-700 resize-none"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
