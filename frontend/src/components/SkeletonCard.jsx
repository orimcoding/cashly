import React from 'react'

function SkeletonCard() {
  return (
    <div className="bg-background p-6 rounded shadow-lg animate-pulse">
      {/* Placeholder for title */}
      <div className="h-6 bg-gradient-to-r from-gradientFrom to-gradientTo rounded w-2/3 mb-4"></div>
      {/* Placeholder for subtitle */}
      <div className="h-4 bg-gradient-to-r from-gradientFrom to-gradientTo rounded w-1/2 mb-4"></div>
      {/* Placeholder for content */}
      <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-4/6"></div>
    </div>
  )
}

export default SkeletonCard
