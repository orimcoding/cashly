import React, { useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const SpendingInsights = ({ transactions }) => {
  const [viewMode, setViewMode] = useState("Day");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

  // Helper to calculate category data
  const getCategoryData = (transactions) => {
    const categoryTotals = transactions.reduce((acc, transaction) => {
      acc[transaction.category] =
        (acc[transaction.category] || 0) + parseFloat(transaction.amount);
      return acc;
    }, {});

    const totalAmount = Object.values(categoryTotals).reduce((a, b) => a + b, 0);

    return {
      labels: Object.keys(categoryTotals),
      datasets: [
        {
          data: Object.values(categoryTotals),
          backgroundColor: [
            "#4CAF50",
            "#2196F3",
            "#FFC107",
            "#F44336",
            "#9C27B0",
            "#FF9800",
          ],
        },
      ],
      totalAmount, // For percentage calculation
    };
  };

  // Helper to calculate spending over time data
  const getSpendingOverTimeData = (transactions, viewMode) => {
    const filteredTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const startDate = dateRange.startDate ? new Date(dateRange.startDate) : null;
      const endDate = dateRange.endDate ? new Date(dateRange.endDate) : null;

      return (
        (!startDate || transactionDate >= startDate) &&
        (!endDate || transactionDate <= endDate)
      );
    });

    const spendingByPeriod = filteredTransactions.reduce((acc, transaction) => {
      const date = new Date(transaction.date);
      let key;

      switch (viewMode) {
        case "Week":
          key = `${date.getFullYear()}-W${Math.ceil(
            (date.getDate() - date.getDay() + 7) / 7
          )}`;
          break;
        case "Month":
          key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
            2,
            "0"
          )}`;
          break;
        case "Year":
          key = `${date.getFullYear()}`;
          break;
        default:
          key = date.toLocaleDateString("en-US");
      }

      acc[key] = (acc[key] || 0) + parseFloat(transaction.amount);
      return acc;
    }, {});

    const sortedKeys = Object.keys(spendingByPeriod).sort(
      (a, b) => new Date(a) - new Date(b)
    );

    return {
      labels: sortedKeys,
      datasets: [
        {
          label: `Spending by ${viewMode}`,
          data: sortedKeys.map((key) => spendingByPeriod[key]),
          borderColor: "#00FF85",
          backgroundColor: "rgba(0, 255, 133, 0.2)",
          pointBackgroundColor: "#00FF85",
          pointBorderColor: "#FFFFFF",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
      ],
    };
  };

  const categoryData = getCategoryData(transactions);
  const spendingOverTimeData = getSpendingOverTimeData(transactions, viewMode);

  return (
    <div className="bg-transparent p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-green-500 text-center mb-8">
        Spending Insights
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Pie Chart Section */}
        <div className="flex-1 min-w-[300px] max-w-[400px]">
          <h3 className="text-lg font-semibold text-gray-300 mb-4 text-center">
            Spending by Category
          </h3>
          <Pie data={categoryData} />

          <div
            className="mt-4 bg-[#1C1C1E] text-gray-300 p-4 rounded shadow-lg max-h-[200px] overflow-y-auto"
            style={{ maxHeight: "200px" }} // Maximum height for the scroll box
          >
            <h4 className="text-md font-semibold mb-2 text-center">
              Category Breakdown
            </h4>
            <ul className="text-sm">
              {categoryData.labels
                .map((category, index) => ({
                  category,
                  amount: categoryData.datasets[0].data[index],
                }))
                .sort((a, b) => b.amount - a.amount) // Sort categories by amount in descending order
                .map(({ category, amount }, index) => (
                  <li key={index} className="flex justify-between py-1">
                    <span>{category}</span>
                    <span>
                      ${amount.toFixed(2)} (
                      {(
                        (amount /
                          categoryData.datasets[0].data.reduce((a, b) => a + b, 0)) *
                        100
                      ).toFixed(1)}
                      %)
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Line Chart Section */}
        <div className="flex-1 min-w-[300px] max-w-[600px]">
          <h3 className="text-lg font-semibold text-gray-300 mb-4 text-center">
            Spending Over Time
          </h3>

          {/* View Mode Selector */}
          <div className="flex items-center gap-4 mb-4 justify-center">
            <label className="text-gray-300">View By:</label>
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
              className="p-2 rounded bg-[#1C1C1E] text-gray-200 border border-gray-500"
            >
              <option value="Day">Day</option>
              <option value="Week">Week</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>

          {/* Line Chart */}
          <div className="w-full h-[400px] bg-[#1C1C1E] p-4 rounded-lg shadow-lg">
            <Line data={spendingOverTimeData} />
          </div>

          {/* Date Filters */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={dateRange.startDate}
                onChange={(e) =>
                  setDateRange({ ...dateRange, startDate: e.target.value })
                }
                className="p-2 rounded bg-[#1C1C1E] text-gray-200 border border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={dateRange.endDate}
                onChange={(e) =>
                  setDateRange({ ...dateRange, endDate: e.target.value })
                }
                className="p-2 rounded bg-[#1C1C1E] text-gray-200 border border-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingInsights;
