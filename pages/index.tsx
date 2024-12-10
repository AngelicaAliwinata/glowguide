// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../public/images/hero.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>GlowGuide</title>
        <meta name="description" content="GlowGuide - Your Skincare Companion" />
      </Head>

      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-pink-500 font-bold text-2xl">GlowGuide</h1>

          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-pink-500 text-gray-700 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product-knowledge" className="hover:text-pink-500 text-gray-700 font-medium">
                  Product Knowledge
                </Link>
              </li>
              <li>
                <Link href="/skincare-routine" className="hover:text-pink-500 text-gray-700 font-medium">
                  Skincare Routine
                </Link>
              </li>
              <li>
                <Link href="/skin-edu" className="hover:text-pink-500 text-gray-700 font-medium">
                  Skin-Edu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-500 text-gray-700 font-medium">
                  About GlowGuide
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-pink-500 text-gray-700 font-medium">
                  Your Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="bg-pink-50 pt-20">
        <section className="relative">
          <div className="w-full">
            <Image
              src={Hero}
              alt="Hero Image"
              style={{ objectFit: "contain" }}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-4xl font-bold mb-4">More About GlowGuide!</h2>
              <Link
                href="/auth-options"
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Skincare Brands</h3>
          <div className="flex justify-center space-x-8">
            <Image src="/images/laroche-posay.png" alt="La Roche-Posay" width={100} height={50} />
            <Image src="/images/cerave.png" alt="CeraVe" width={100} height={50} />
            <Image src="/images/cetaphil.png" alt="Cetaphil" width={100} height={50} />
          </div>
        </section>
      </main>

      <footer className="bg-pink-500 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>No Tests On Animals | No Animal-Derived Ingredients | No Gluten | Recyclable Packaging</p>
        </div>
      </footer>
    </>
  );
}
