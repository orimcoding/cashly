import React from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <div className="flex items-center justify-center min-h-[60vh] p-6">
        <div className="bg-white shadow p-8 rounded max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
          <form 
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Here you would normally send the signup data to the backend.
              // For now, we just navigate the user to the login page after "signup".
              navigate('/login');
            }}
          >
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
            <input type="password" placeholder="Password" className="w-full border p-2 rounded" required />
            <input type="password" placeholder="Confirm Password" className="w-full border p-2 rounded" required />
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span className="text-sm text-gray-600">I agree to the terms & conditions</span>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Create My Account</button>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Log in</a></p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default SignUpPage
