import React from 'react'

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-gradientFrom border-t-gradientTo border-t-transparent rounded-full animate-spin"></div>
      {/* Loading Message */}
      <p className="mt-4 text-primary text-sm font-medium">Loading, please wait...</p>
    </div>
  )
}

export default LoadingSpinner
