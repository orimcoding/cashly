import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuth'
import AnimatedPage from '../components/AnimatedPage'

function LoginPage() {
  const { login } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AnimatedPage>
      <div className="flex items-center justify-center min-h-[60vh] p-6">
        <div className="bg-white shadow p-8 rounded max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault()
            login(email, password)
          }}>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border p-2 rounded"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full border p-2 rounded"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Log In</button>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">Don’t have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a></p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default LoginPage
