import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SavingsGoals from './pages/SavingsGoals';
import TrackExpenses from './pages/TrackExpenses';
import AIInsights from './pages/AIInsights';
import Rewards from './pages/Rewards';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/goals" element={<SavingsGoals />} />
                <Route path="/expenses" element={<TrackExpenses />} />
                <Route path="/insights" element={<AIInsights />} />
                <Route path="/rewards" element={<Rewards />} />
            </Routes>
        </Router>
    );
};

export default App;