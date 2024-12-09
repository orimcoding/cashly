import React, { useState, useEffect, useRef } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

// Register required Chart.js elements
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
  const [selectedCategories, setSelectedCategories] = useState(() =>
    Array.from(new Set(transactions.map((t) => t.category)))
  );

  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange({ ...dateRange, [name]: value });
  };

  const getCategoryData = (transactions) => {
    // Aggregate category totals
    const categoryTotals = transactions.reduce((acc, transaction) => {
      if (selectedCategories.includes(transaction.category)) {
        acc[transaction.category] =
          (acc[transaction.category] || 0) + parseFloat(transaction.amount);
      }
      return acc;
    }, {});
  
    // Sort categories alphabetically
    const sortedCategories = Object.keys(categoryTotals).sort();
  
    // Calculate total spending for percentage calculation
    const totalSpending = Object.values(categoryTotals).reduce(
      (sum, value) => sum + value,
      0
    );
  
    return {
      labels: sortedCategories, // Sorted categories
      datasets: [
        {
          data: sortedCategories.map((category) => categoryTotals[category]), // Match data to sorted categories
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
          ],
        },
      ],
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = context.raw; // The raw value for the current category
                const percentage = ((value / totalSpending) * 100).toFixed(2); // Percentage of total
                return `${context.label}: $${value.toFixed(2)} (${percentage}%)`;
              },
            },
          },
        },
      },
    };
  };  

  const getSpendingOverTimeData = (transactions) => {
    // Filter transactions based on the selected date range
    const filteredTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const startDate = dateRange.startDate ? new Date(dateRange.startDate) : null;
      const endDate = dateRange.endDate ? new Date(dateRange.endDate) : null;
  
      return (
        (!startDate || transactionDate >= startDate) &&
        (!endDate || transactionDate <= endDate)
      );
    });
  
    // Group filtered transactions by day
    const spendingByDate = filteredTransactions.reduce((acc, transaction) => {
      const date = new Date(transaction.date).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      });
      acc[date] = (acc[date] || 0) + parseFloat(transaction.amount);
      return acc;
    }, {});
  
    // Ensure dates are sorted
    const sortedDates = Object.keys(spendingByDate).sort(
      (a, b) => new Date(a) - new Date(b)
    );
  
    return {
      labels: sortedDates,
      datasets: [
        {
          label: 'Spending By Day',
          data: sortedDates.map((date) => spendingByDate[date]),
          borderColor: '#10cc10',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          pointBackgroundColor: '#10cc10',
          pointBorderColor: '#ffffff',
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
      ],
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = context.raw; // The raw value for the current data point
                return `$${value.toFixed(2)}`;
              },
            },
          },
        },
      },
    };
  };

  const categoryData = getCategoryData(transactions);
  const spendingOverTimeData = getSpendingOverTimeData(transactions);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-primary mb-4">Spending Insights</h2>
  
      <div className="flex flex-wrap md:flex-nowrap items-center gap-6">
        {/* Pie Chart Section */}
        <div className="flex-1 min-w-[300px] max-w-[500px] flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-3 text-center">By Category</h3>
          <Pie data={categoryData} options={categoryData.options} />
  
          {/* Category Filter */}
          {/* <div className="mt-4 text-center">
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Filter Categories</h4>
            <div
              className="relative flex justify-center items-center"
              style={{ marginTop: '10px' }}
            >
              <button
                className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition w-auto"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Select Categories
              </button>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute z-10 bg-white border border-gray-300 rounded shadow mt-2 w-64 max-h-40 overflow-y-auto"
                >
                  <input
                    type="text"
                    placeholder="Search categories"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-b p-2 w-full"
                  />
                  <div className="p-2">
                    {Array.from(new Set(transactions.map((t) => t.category)))
                      .sort()
                      .filter((category) =>
                        category.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((category) => (
                        <label
                          key={category}
                          className="flex items-center gap-2 mb-1 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className="accent-green-600"
                          />
                          <span className="text-sm">{category}</span>
                        </label>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div> */}
        </div>
  
        {/* Line Chart Section */}
        <div className="flex-1 min-w-[300px] flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-3 text-center">By Day</h3>
          <Line data={spendingOverTimeData} options={spendingOverTimeData.options} />
  
          {/* Date Range Filter */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">Filter Date Range</h4>
            <div className="flex justify-center items-center gap-4">
              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  style={{ fontSize: '14px' }}
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={dateRange.startDate}
                  onChange={handleDateChange}
                  className="border p-2 rounded w-full text-gray-900"
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e2e8f0',
                    padding: '0.5rem',
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold text-gray-700 mb-1"
                  style={{ fontSize: '14px' }}
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={dateRange.endDate}
                  onChange={handleDateChange}
                  className="border p-2 rounded w-full text-gray-900"
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e2e8f0',
                    padding: '0.5rem',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default SpendingInsights;
