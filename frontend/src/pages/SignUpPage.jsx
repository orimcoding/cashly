import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:4000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to sign up");
      }
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AnimatedPage>
      <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "#1C1C1E" }}>
        <div className="bg-[#262626] shadow-lg p-8 rounded-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Create Your Account</h2>
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-[#1C1C1E] border border-gray-500 text-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-[#1C1C1E] border border-gray-500 text-gray-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded bg-[#1C1C1E] border border-gray-500 text-gray-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <p className="text-sm text-gray-400 text-center">
              By signing up, you agree to our{" "}
              <Link to="/" className="text-green-500 underline">
                Privacy Policy
              </Link>
            </p>
            <button
              className="w-full py-3 rounded font-bold"
              style={{
                backgroundColor: "#0BDB00",
                color: "#1C1C1E",
                transition: "background-color 0.3s ease",
              }}
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default SignUpPage;
