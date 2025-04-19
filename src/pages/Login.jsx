import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">or login with</p>

        <div className="flex justify-center gap-4 mt-3">
          <FaGoogle className="w-6 h-6 cursor-pointer text-red-500" />
          <FaGithub className="w-6 h-6 cursor-pointer text-gray-800" />
        </div>
      </div>
    </div>
  );
}
