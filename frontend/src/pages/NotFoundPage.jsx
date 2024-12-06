import React from 'react'
import AnimatedPage from '../components/AnimatedPage'

function NotFoundPage() {
  return (
    <AnimatedPage>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600">Page Not Found</p>
      </div>
    </AnimatedPage>
  )
}

export default NotFoundPage
