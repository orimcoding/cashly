import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuth";
import AnimatedPage from "../components/AnimatedPage";

function LoginPage() {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || "Invalid email or password");
    }
  };

  return (
    <AnimatedPage>
      <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "#1C1C1E" }}>
        <div className="bg-[#262626] shadow-lg p-8 rounded-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Log In</h2>
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
            <button
              className="w-full py-3 rounded font-bold"
              style={{
                backgroundColor: "#0BDB00",
                color: "#1C1C1E",
                transition: "background-color 0.3s ease",
              }}
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-500 underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default LoginPage;
