import React from 'react'

function Footer() {
  return (
    <footer className="bg-primary text-background py-6 mt-8 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-bold">Cashly</span>. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 text-sm mt-4">
        <a href="#" className="hover:text-accent transition-colors">About</a>
        <a href="#" className="hover:text-accent transition-colors">FAQ</a>
        <a href="#" className="hover:text-accent transition-colors">Terms</a>
        <a href="#" className="hover:text-accent transition-colors">Privacy</a>
      </div>
    </footer>
  )
}

export default Footer
