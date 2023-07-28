"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Login = () => {
  const [username, setUsername] = useState("syedtaha@gmail.com");
  const [password, setPassword] = useState("hellotaha");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const payload = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "https://dev-apis.explorebtk.com/api/v1/auth/login",
        payload
      );

      console.log(response.data);
      setSuccess(true);
      setError("");

      // Store the access token in localStorage
      localStorage.setItem("accessToken", response.data.access_token);
    } catch (error) {
      console.error("An error occurred:", error);
      setError("Invalid username or password.");
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md p-8">
        {success ? (
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">Login successful!</div>
            <div className="text-blue-500">
              Go to <Link href="/profile">Profile Page</Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-3xl font-bold mb-4 text-center">Login</div>
            <form onSubmit={handleSubmit} className="space-y-4 mt-12">
              <div className="flex flex-col">
              <label className="text-gray-600 mb-2">User Name</label>
                <input
                  type="text"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <Link href="#" className="text-blue-500">
                  Forgot password?
                </Link>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Login
                </button>
              </div>
              <div className="text-center">
                Not a member?
                <Link href="/register" className="ml-2 text-blue-500">
                  SignUp now
                </Link>
              </div>
              {error && (
                <div className="text-red-500 text-center">{error}</div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
