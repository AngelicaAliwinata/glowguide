// pages/page.tsx
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <h1 className="text-3xl md:text-4xl font-bold text-[#DE8C9C] mb-4">
        What is your skin type?
      </h1>
      <div className="w-full max-w-md px-4">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full px-4 py-2 border-2 border-[#DE8C9C] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#DE8C9C] mb-6"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {/* Dry Skin */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-[#DE8C9C] mb-2">Dry Skin</h2>
          <p className="text-gray-700 mb-4">
            Hydrating and nourishing products for dry skin.
          </p>
          <button className="bg-[#DE8C9C] text-white py-2 px-4 rounded-full hover:bg-[#C97D87]">
            View Recommendations
          </button>
        </div>

        {/* Oily Skin */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-[#DE8C9C] mb-2">Oily Skin</h2>
          <p className="text-gray-700 mb-4">
            Oil-controlling and mattifying products for oily skin.
          </p>
          <button className="bg-[#DE8C9C] text-white py-2 px-4 rounded-full hover:bg-[#C97D87]">
            View Recommendations
          </button>
        </div>

        {/* Sensitive Skin */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-[#DE8C9C] mb-2">Sensitive Skin</h2>
          <p className="text-gray-700 mb-4">
            Gentle and soothing products for sensitive skin.
          </p>
          <button className="bg-[#DE8C9C] text-white py-2 px-4 rounded-full hover:bg-[#C97D87]">
            View Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;