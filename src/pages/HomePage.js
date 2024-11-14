import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex flex-col items-center justify-center text-white">
            <header className="absolute top-0 w-full p-5 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Cashly</h1>
                <nav>
                    <a href="/login" className="mr-5 hover:underline">Login</a>
                    <a href="/dashboard" className="hover:underline">Dashboard</a>
                </nav>
            </header>
            <main className="text-center">
                <h1 className="text-5xl font-extrabold mb-4">Simplify Your Spending</h1>
                <p className="text-xl mb-8">Track expenses, set goals, and unlock AI-powered insights.</p>
                <a
                    href="/signup"
                    className="bg-white text-indigo-500 font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-110"
                >
                    Get Started
                </a>
            </main>
        </div>
    );
};

export default HomePage;
