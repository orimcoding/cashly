import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import TrackExpenses from './pages/TrackExpenses';
import SavingsGoals from './pages/SavingsGoals';
import AIInsights from './pages/AIInsights';
import Rewards from './pages/Rewards';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/track-expenses" element={<TrackExpenses />} />
                <Route path="/savings-goals" element={<SavingsGoals />} />
                <Route path="/ai-insights" element={<AIInsights />} />
                <Route path="/rewards" element={<Rewards />} />
            </Routes>
        </Router>
    );
}

export default App;
