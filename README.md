# 🚀 Cashly: AI-Powered Budget Tracker

![Node.js](https://img.shields.io/badge/Node.js-18.0.0-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

### 📖 Overview
**Cashly** is a modern, AI-powered budget tracker designed to simplify personal finance management. With features like real-time expense tracking, savings goals, AI insights, and rewards for smart spending, Cashly empowers users to achieve their financial goals effortlessly.

---

### 🌟 Features
- **Real-Time Expense Tracking**: Easily log and categorize your expenses.
- **Savings Goals**: Set and track progress toward personal savings targets.
- **AI Insights**: Get personalized recommendations based on your spending patterns.
- **Rewards System**: Earn points for achieving goals and managing your budget efficiently.
- **Secure Authentication**: Robust signup and login functionality using JWT.

---

### 🛠️ Tech Stack

#### **Frontend**:
- React.js
- React Router
- Recharts for Data Visualization

#### **Backend**:
- Node.js
- Express.js
- MongoDB with Mongoose ORM
- JWT for Authentication
- AI features using Python (Pandas, TensorFlow)

#### **DevOps**:
- Docker for Containerization
- GitHub Actions for CI/CD

---

### 📂 Folder Structure
```plaintext
cashly/
├── public/                        # Static assets
├── src/                           # Frontend source code
│   ├── assets/                    # Fonts, icons, images
│   ├── components/                # Reusable UI components
│   ├── context/                   # React context for state management
│   ├── hooks/                     # Custom React hooks
│   ├── pages/                     # Page components
│   ├── services/                  # API integration services
│   ├── styles/                    # CSS files
│   ├── App.js                     # Main React app component
│   └── index.js                   # React entry point
├── backend/                       # Backend source code
│   ├── api/                       # API routes
│   ├── controllers/               # Business logic
│   ├── models/                    # MongoDB schemas
│   ├── middlewares/               # Middleware for auth, logging, etc.
│   ├── ai/                        # Python-based AI scripts
│   ├── app.js                     # Express app setup
│   ├── server.js                  # Server entry point
├── database/                      # SQL schema and seed data
├── tests/                         # Unit, integration, and e2e tests
├── docker/                        # Docker configuration
├── .env                           # Environment variables
├── package.json                   # Node dependencies
└── README.md                      # Project documentation
