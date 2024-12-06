import React from 'react'

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default LoadingSpinner