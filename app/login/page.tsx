// pages/login.tsx
export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

