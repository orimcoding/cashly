import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-8 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-bold text-lime-400">Cashly</span>. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 text-sm mt-4">
        <a href="#" className="hover:text-lime-400 transition-colors">About</a>
        <a href="#" className="hover:text-lime-400 transition-colors">FAQ</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Terms</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Privacy</a>
      </div>
    </footer>
  );
}

export default Footer;
