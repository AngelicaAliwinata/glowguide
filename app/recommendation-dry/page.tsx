// pages/catalog.tsx
import React from 'react';
import Image from 'next/image';

const Catalog: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <h1 className="text-3xl md:text-4xl font-bold text-[#DE8C9C] mb-8">
        Skincare Recommendations for Dry Skin
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {/* Facial Wash */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/images/facial-wash.png"
            alt="Facial Wash"
            width={300}
            height={300}
            className="rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-[#DE8C9C]">Facial Wash</h3>
          <p className="text-gray-700 text-sm mb-2">A gentle cleanser designed to hydrate and refresh dry skin.</p>
        </div>

        {/* Moisturizer */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/images/moisturizer.png"
            alt="Moisturizer"
            width={300}
            height={300}
            className="rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-[#DE8C9C]">Moisturizer</h3>
          <p className="text-gray-700 text-sm mb-2">Locks in moisture to keep your skin hydrated all day.</p>
        </div>

        {/* Sunscreen */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/images/sunscreen.png"
            alt="Sunscreen"
            width={300}
            height={300}
            className="rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-[#DE8C9C]">Sunscreen</h3>
          <p className="text-gray-700 text-sm mb-2">Protects your skin from harmful UV rays while keeping it hydrated.</p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

