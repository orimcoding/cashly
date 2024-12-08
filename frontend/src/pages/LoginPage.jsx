import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuth';
import AnimatedPage from '../components/AnimatedPage';

function LoginPage() {
  const { login } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <AnimatedPage>
      <div className="flex items-center justify-center min-h-[60vh] p-6">
        <div className="bg-white shadow p-8 rounded max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Log In
            </button>
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default LoginPage;
