import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  async function login(email, password) {
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
  
  

  async function logout() {
    await fetch('http://localhost:4000/api/logout', { method: 'POST' })
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{isLoggedIn, user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
