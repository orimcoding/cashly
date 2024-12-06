import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import AnimatedTransition from './components/AnimatedTransition'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <AnimatedTransition />
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
