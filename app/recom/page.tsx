'use client';

import { useState } from 'react';

export default function Home() {
  const [category, setCategory] = useState('');
  const [skinType, setSkinType] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`/api/products?category=${category}&skinType=${skinType}`);
    const data = await res.json();

    if (res.ok) {
      setResults(data.products); // Menyimpan hasil ke state
    } else {
      console.error(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-extrabold text-[#DE8C9C] mb-6 text-center">
          Skincare Recommendations
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-2"
            >
              Category:
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#DE8C9C]"
            >
              <option value="">Select</option>
              <option value="face wash">Face Wash</option>
              <option value="moisturizer">Moisturizer</option>
              <option value="sunscreen">Sunscreen</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="skinType"
              className="block text-gray-700 font-medium mb-2"
            >
              Skin Type:
            </label>
            <select
              id="skinType"
              value={skinType}
              onChange={(e) => setSkinType(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#DE8C9C]"
            >
              <option value="">Select</option>
              <option value="dry skin">Dry Skin</option>
              <option value="oily">Oily</option>
              <option value="sensitive skin">Sensitive Skin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#DE8C9C] text-white py-2 rounded-full hover:bg-[#C97D87] font-semibold shadow-md"
          >
            Get Recommendations
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Recommendations:
          </h2>
          {results.length === 0 && (
            <p className="text-gray-500 text-center">No recommendations yet.</p>
          )}
          <div className="grid grid-cols-3 gap-4">
            {results.map((product: any) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                {/* Foto Produk */}
                <img
                  src={product.photoProduct}
                  alt={product.productName}
                  className="w-32 h-32 object-cover rounded-lg mb-2"
                />
                {/* Nama produk */}
                <p className="text-lg font-bold text-[#DE8C9C]">
                  {product.productName}
                </p>
                {/* Brand produk */}
                <p className="text-gray-700">
                  <strong>Brand:</strong> {product.brand}
                </p>
                {/* Kategori produk */}
                <p className="text-gray-700">
                  <strong>Category:</strong> {product.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
