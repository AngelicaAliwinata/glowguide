import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const LoginHandler = () => {

  }
  return (
    <div className="min-h-screen bg-pink-50 flex">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-pink-100 items-center justify-center">
        <Image
          src="/images/skincare-illustration.png" // Ganti dengan ilustrasi yang sesuai
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
            Welcome Back!
          </h1>
          <form onSubmit={LoginHandler}>
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
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#DE8C9C]"
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
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#DE8C9C]"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <Link
                href="/forgot-password"
                className="text-sm text-[#DE8C9C] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#DE8C9C] text-white py-2 rounded-full hover:bg-[#C97D87] font-semibold shadow-md"

            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-700 text-sm">
              Don’t have an account?{' '}
              <Link href="/signup" className="text-sm text-[#DE8C9C] hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}