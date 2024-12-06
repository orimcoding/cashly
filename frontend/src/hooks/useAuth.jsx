import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export function AuthProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  async function login(email, password) {
    const res = await fetch('http://localhost:4000/api/login', { /* ... */ });
    const data = await res.json();
    if (data.token) {
      setIsLoggedIn(true);
      setUser(data);
      navigate('/dashboard'); // redirects after login
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
