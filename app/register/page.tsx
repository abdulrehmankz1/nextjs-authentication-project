"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const SignUp = () => {
  const [name, setName] = useState("syed taha");
  const [email, setEmail] = useState("syedtaha@gmail.com");
  const [phone, setMobileNumber] = useState("034538153535");
  const [password, setPassword] = useState("hellotaha");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      phone: phone || "", // Set a default value if phoneNumber is empty
      password,
    };

    try {
      const response = await axios.post(
        "https://dev-apis.explorebtk.com/api/v1/auth/signup",
        payload
      );

      console.log(response.data);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.error("An error occurred:", error);
      setError("Error occurred during sign up.");
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md p-8">
        {success ? (
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">Sign up successful!</div>
            <div className="text-blue-500">
              Go to <Link href="/login">LogIn Form</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Name</label>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setMobileNumber(e.target.value)}
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </button>
            <div className="flex justify-center">
              Go to
              <Link href="/login" className="ml-2 text-blue-500">
                LogIn Form
              </Link>
            </div>
            {error && (
              <div className="text-red-500 text-center">{error}</div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
