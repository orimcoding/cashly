import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// Toggle this variable to switch between mock authentication and actual authentication
const USE_MOCK_AUTH = false;

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(USE_MOCK_AUTH); // Mock starts logged in if true
  const [user, setUser] = useState(
    USE_MOCK_AUTH
      ? { name: 'Test User', email: 'test@example.com' } // Mock user data
      : null
  );

  // Actual login function
  async function actualLogin(email, password) {
    console.log('Attempting to log in:', email, password); // Debugging

    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorText = await res.text(); // Get detailed error message
        console.error(`API error response: ${errorText}`); // Debugging
        throw new Error(`Login failed with status ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      console.log('Login successful:', data); // Debugging
      setIsLoggedIn(true);
      setUser(data);
    } catch (err) {
      console.error('Login failed:', err.message); // Debugging
      throw err;
    }
  }

  // Mock login function
  async function mockLogin(email, password) {
    console.log('Bypassing login. Simulating successful login with:', email, password); // Debugging
    setIsLoggedIn(true);
    setUser({ name: 'Test User', email });
  }

  // Actual logout function
  async function actualLogout() {
    await fetch('http://localhost:4000/api/logout', { method: 'POST' });
    setIsLoggedIn(false);
    setUser(null);
  }

  // Mock logout function
  async function mockLogout() {
    console.log('Bypassing logout. Simulating successful logout.'); // Debugging
    setIsLoggedIn(false);
    setUser(null);
  }

  // Use appropriate functions based on `USE_MOCK_AUTH`
  const login = USE_MOCK_AUTH ? mockLogin : actualLogin;
  const logout = USE_MOCK_AUTH ? mockLogout : actualLogout;

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
