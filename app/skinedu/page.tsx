import Head from "next/head";
import Link from "next/link";

export default function SkinEdu() {
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
    {
      id: 4,
      title: "Top Ingredients to Look for in Skincare",
      description: "A guide to active ingredients that make a difference.",
      href: "/article/skincare-ingredients",
      icon: "🌿",
    },
  ];

  return (
    <>
      <Head>
        <title>Skin-Edu | GlowGuide</title>
        <meta name="description" content="Learn about skincare with GlowGuide's Skin-Edu." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
            Skin-Edu: Learn About Skincare
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-300 hover:border-pink-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 text-pink-500 text-3xl mx-auto group-hover:bg-pink-500 group-hover:text-white">
                  {article.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
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
        </div>
      </main>
    </>
  );
}
