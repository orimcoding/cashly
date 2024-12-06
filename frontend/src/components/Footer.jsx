import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 p-6 mt-8 text-center">
      <p>© {new Date().getFullYear()} Cashly. All rights reserved.</p>
      <div className="flex justify-center space-x-4 text-sm mt-2">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Privacy</a>
      </div>
    </footer>
  )
}

export default Footer
