import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Add your authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-500 p-5">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-10 animate-[slideIn_0.4s_ease-out]">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <svg
              className="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7V17C2 19.2 9.2 22 12 22C14.8 22 22 19.2 22 17V7L12 2Z"
                fill="#1e3a8a"
                stroke="#1e3a8a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12Z"
                fill="white"
              />
              <path
                d="M9 15C9 13.9 10.3 13 12 13C13.7 13 15 13.9 15 15V17H9V15Z"
                fill="white"
              />
            </svg>
            <h1 className="text-4xl font-bold text-blue-900 tracking-tight">
              SecureBank
            </h1>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            Online Banking Portal
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Username or Account Number
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder-gray-400"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder-gray-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-blue-500"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <a
              href="#"
              className="text-blue-500 font-semibold hover:text-blue-800 hover:underline transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-lg text-base font-semibold shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 active:translate-y-0 transition-all duration-300"
          >
            Sign In
          </button>

          <div className="flex items-center text-center my-6">
            <div className="flex-1 border-b border-gray-200"></div>
            <span className="px-4 text-gray-400 text-sm font-medium">or</span>
            <div className="flex-1 border-b border-gray-200"></div>
          </div>

          <button
            type="button"
            className="w-full py-3.5 bg-white text-blue-500 border-2 border-blue-500 rounded-lg text-base font-semibold hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0 transition-all duration-300"
          >
            Create New Account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-green-500 text-xs font-semibold mb-4">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                stroke="#10b981"
                strokeWidth="2"
              />
              <path
                d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                stroke="#10b981"
                strokeWidth="2"
              />
            </svg>
            <span>Secure 256-bit SSL Encrypted Connection</span>
          </div>
          <p className="text-center text-xs text-gray-500">
            <a
              href="#"
              className="hover:text-blue-900 hover:underline transition-colors"
            >
              Privacy Policy
            </a>{" "}
            •{" "}
            <a
              href="#"
              className="hover:text-blue-900 hover:underline transition-colors"
            >
              Terms of Service
            </a>{" "}
            •{" "}
            <a
              href="#"
              className="hover:text-blue-900 hover:underline transition-colors"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
