import Head from "next/head";

export default function SkincareRoutine() {
  const routines = [
    {
      skinType: "Dry Skin",
      steps: [
        { step: "Step 1: Facial Wash", image: "/images/ceravefacialwash.png" },
        { step: "Step 2: Moisturizer", image: "/images/ceravemoisturizer.png" },
        { step: "Step 3: Sunscreen", image: "/images/ceravesunscreen.png" },
      ],
    },
    {
      skinType: "Oily Skin",
      steps: [
        { step: "Step 1: Facial Wash", image: "/images/larocheposayfacialwash.png" },
        { step: "Step 2: Moisturizer", image: "/images/larocheposaymoisturizer.png" },
        { step: "Step 3: Sunscreen", image: "/images/larocheposaysunscreen.png" },
      ],
    },
    {
      skinType: "Sensitive Skin",
      steps: [
        { step: "Step 1: Facial Wash", image: "/images/cetaphilfacialwash.png" },
        { step: "Step 2: Moisturizer", image: "/images/cetaphilmoisturizer.png" },
        { step: "Step 3: Sunscreen", image: "/images/cetaphilsunscreen.png" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Skincare Routine | GlowGuide</title>
        <meta name="description" content="Skincare routine guide for different skin types." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
            Skincare Routine
          </h1>

          <div className="space-y-10">
            {routines.map((routine) => (
              <div
                key={routine.skinType}
                className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-300"
              >
                <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center">
                  {routine.skinType}
                </h2>
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6">
                  {routine.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-pink-50 rounded-lg p-4 shadow-md w-full sm:w-1/3"
                    >
                      <img
                        src={step.image}
                        alt={step.step}
                        className="w-28 h-28 object-contain rounded-lg mb-4 border border-gray-200"
                      />
                      <p className="text-center text-gray-700 font-medium">{step.step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
