import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../public/images/hero.jpg";

export default function Home() {
  const articles = [
    {
      id: 1,
      title: "Skincare Tips for Beginners",
      description: "Learn the basics of building your skincare routine.",
      href: "/article/skincare-tips",
      icon: "💡",
    },
    {
      id: 2,
      title: "Understanding Your Skin Type",
      description: "Discover how to identify and care for your skin type.",
      href: "/article/skin-type",
      icon: "🧴",
    },
    {
      id: 3,
      title: "The Science Behind Sunscreen",
      description: "Why SPF is essential for your daily skincare.",
      href: "/article/sunscreen-science",
      icon: "🌞",
    },
  ];

  return (
    <>
      <Head>
        <title>GlowGuide</title>
        <meta
          name="description"
          content="GlowGuide - Your Skincare Companion"
        />
      </Head>

      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-20">
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="GlowGuide Logo"
                width={120}
                height={30}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-grow">
            <ul className="flex justify-center space-x-6 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-pink-500 text-gray-700 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product-knowledge"
                  className="hover:text-pink-500 text-gray-700 font-medium"
                >
                  Product Knowledge
                </Link>
              </li>
              <li>
                <Link
                  href="/skincare-routine"
                  className="hover:text-pink-500 text-gray-700 font-medium"
                >
                  Skincare Routine
                </Link>
              </li>
              <li>
                <Link
                  href="/skinedu"
                  className="hover:text-pink-500 text-gray-700 font-medium"
                >
                  Skin-Edu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-pink-500 text-gray-700 font-medium"
                >
                  About GlowGuide
                </Link>
              </li>
            </ul>
          </nav>

          {/* Your Account */}
          <div>
            <Link
              href="/profile"
              className="hover:text-pink-500 text-gray-700 font-medium text-sm"
            >
              Your Account
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 pt-20">
        <section className="relative bg-gradient-to-r from-pink-500 via-pink-300 to-pink-500">
          <div className="w-full">
            <Image src={Hero} alt="Hero Image" className="w-full opacity-70" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl font-bold mb-6">
                Glow Up with GlowGuide
              </h2>
              <div className="flex space-x-4">
                <Link
                  href="/auth-options"
                  className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-pink-600"
                >
                  Glow Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skin-Edu Articles */}
        <section className="py-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Learn More About Skincare
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-300 hover:border-pink-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 text-pink-500 text-3xl mx-auto group-hover:bg-pink-500 group-hover:text-white">
                  {article.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-center mb-6">{article.description}</p>
                <div className="text-center">
                  <Link
                    href={article.href}
                    className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-600 hover:shadow-xl transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Skincare Brands
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <Image
                src="/images/laroche-posay.png"
                alt="La Roche-Posay"
                width={200}
                height={100}
                className="mb-4"
              />
              <p className="text-gray-700 font-medium">La Roche-Posay</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <Image
                src="/images/cerave.png"
                alt="CeraVe"
                width={200}
                height={100}
                className="mb-4"
              />
              <p className="text-gray-700 font-medium">CeraVe</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <Image
                src="/images/cetaphil.png"
                alt="Cetaphil"
                width={200}
                height={100}
                className="mb-4"
              />
              <p className="text-gray-700 font-medium">Cetaphil</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-br from-pink-500 to-pink-600 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>
            No Tests On Animals | No Animal-Derived Ingredients | No Gluten |
            Recyclable Packaging
          </p>
        </div>
      </footer>
    </>
  );
}
