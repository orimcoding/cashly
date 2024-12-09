import React, { useState, useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import Sidebar from '../components/Sidebar';
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import SpendingInsights from '../components/SpendingInsights';

function TrackExpensesPage() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories
      ? JSON.parse(savedCategories)
      : [
          'Alcohol & Bars',
          'Automotive',
          'Charity',
          'Childcare',
          'Clothing',
          'Dining',
          'Education',
          'Entertainment',
          'Fitness',
          'Gaming',
          'Gas',
          'Groceries',
          'Healthcare',
          'Hobbies',
          'Home Improvement',
          'Insurance',
          'Investments',
          'Medical',
          'Online Shopping',
          'Pets',
          'Public Transport',
          'Rent',
          'Savings',
          'Shopping',
          'Streaming Services',
          'Subscriptions',
          'Technology',
          'Travel',
          'Utilities',
          'Vacation',
        ];
  });

  const [formData, setFormData] = useState({ name: '', date: '', category: '', amount: '' });
  const [customCategory, setCustomCategory] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [editingTransactionId, setEditingTransactionId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Save categories to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Handle custom category input
    if (formData.category === 'custom' && customCategory.trim()) {
      if (!categories.includes(customCategory)) {
        setCategories([...categories, customCategory]);
      }
      formData.category = customCategory;
    }
  
    if (formData.name && formData.date && formData.category && formData.amount) {
      const formattedDate = formatDate(formData.date);
      setTransactions([
        ...transactions,
        { ...formData, date: formattedDate, id: Date.now() },
      ]);
      setFormData({ name: '', date: '', category: '', amount: '' }); // Reset the form
      setCustomCategory(''); // Reset custom category input
    } else {
      alert('Please fill out all fields!');
    }
  };

  const handleEditStart = (transaction) => {
    setEditingTransactionId(transaction.id);
    setEditFormData({
      name: transaction.name,
      date: transaction.date, // Already in the correct format
      category: transaction.category,
      amount: transaction.amount,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSave = () => {
    if (
      editFormData.name &&
      editFormData.date &&
      editFormData.category &&
      editFormData.amount
    ) {
      const formattedDate = formatDate(editFormData.date);
      setTransactions((prev) =>
        prev.map((transaction) =>
          transaction.id === editingTransactionId
            ? { ...transaction, ...editFormData, date: formattedDate }
            : transaction
        )
      );
      setEditingTransactionId(null);
      setEditFormData({});
    } else {
      alert('Please fill out all fields!');
    }
  };

  const handleEditCancel = () => {
    setEditingTransactionId(null);
    setEditFormData({});
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const sortTransactions = (field) => {
    const newOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(newOrder);

    const sortedTransactions = [...transactions].sort((a, b) => {
      if (field === 'amount') {
        return newOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
      } else if (field === 'date') {
        return newOrder === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else {
        return newOrder === 'asc'
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      }
    });

    setTransactions(sortedTransactions);
  };

  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6 text-primary">Track Expenses</h1>
          <p className="text-gray-600 mb-8">
            Add, edit, and review all your transactions. Coming soon: AI-powered category suggestions.
          </p>
  
          {/* Add New Expense Form */}
          <div className="bg-white p-6 rounded shadow mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Add New Expense</h2>
            <form className="flex flex-wrap gap-4 items-end" onSubmit={handleSubmit}>
              {/* Purchase Name */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">Purchase Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Coffee"
                  className="border p-2 rounded w-full"
                />
              </div>
  
              {/* Category */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                <input
                  list="categories"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Select or type a category"
                  className="border p-2 rounded w-full"
                />
                <datalist id="categories">
                  {categories.map((category, index) => (
                    <option key={index} value={category} />
                  ))}
                </datalist>
              </div>
  
              {/* Date */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>
  
              {/* Amount */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">Amount</label>
                <input
                  type="number"
                  name="amount"
                  placeholder="e.g., 100"
                  value={formData.amount}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                  Add Expense
                </button>
              </div>
            </form>
          </div>

          {/* Spending Insights */}
          <SpendingInsights transactions={transactions} />
  
          {/* Transaction List */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold text-primary mb-4">Transaction List</h2>
            {transactions.length > 0 ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th
                      className="border-b pb-2 text-sm font-semibold text-gray-600 cursor-pointer hover:text-primary"
                      onClick={() => sortTransactions('name')}
                    >
                      Name {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th
                      className="border-b pb-2 text-sm font-semibold text-gray-600 cursor-pointer hover:text-primary"
                      onClick={() => sortTransactions('category')}
                    >
                      Category {sortField === 'category' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th
                      className="border-b pb-2 text-sm font-semibold text-gray-600 cursor-pointer hover:text-primary"
                      onClick={() => sortTransactions('date')}
                    >
                      Date {sortField === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th
                      className="border-b pb-2 text-sm font-semibold text-gray-600 cursor-pointer hover:text-primary"
                      onClick={() => sortTransactions('amount')}
                    >
                      Amount {sortField === 'amount' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th
                      className="border-b pb-2 text-sm font-semibold text-gray-600 text-center"
                      style={{ textAlign: 'center' }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-100 transition">
                      {/* Purchase Name */}
                      <td className="py-2">
                        {editingTransactionId === transaction.id ? (
                          <input
                            type="text"
                            name="name"
                            value={editFormData.name}
                            onChange={handleEditChange}
                            className="border p-2 rounded w-full"
                            style={{ width: '100%' }}
                          />
                        ) : (
                          <span className="inline-block truncate" style={{ width: '200px', display: 'inline-block' }}>
                            {transaction.name}
                          </span>
                        )}
                      </td>
  
                      {/* Category */}
                      <td className="py-2">
                        {editingTransactionId === transaction.id ? (
                          <input
                            list="categories"
                            name="category"
                            value={editFormData.category}
                            onChange={handleEditChange}
                            className="border p-2 rounded w-full"
                            style={{ width: '100%' }}
                          />
                        ) : (
                          <span className="inline-block truncate" style={{ width: '200px', display: 'inline-block' }}>
                            {transaction.category}
                          </span>
                        )}
                        <datalist id="categories">
                          {categories.map((category, index) => (
                            <option key={index} value={category} />
                          ))}
                        </datalist>
                      </td>
  
                      {/* Date */}
                      <td className="py-2">
                        {editingTransactionId === transaction.id ? (
                          <input
                            type="date"
                            name="date"
                            value={editFormData.date}
                            onChange={handleEditChange}
                            className="border p-2 rounded w-full"
                            style={{ width: '100%' }}
                          />
                        ) : (
                          <span>{formatDate(transaction.date)}</span>
                        )}
                      </td>
  
                      {/* Amount */}
                      <td className="py-2 text-middle" style={{ width: '150px', verticalAlign: 'middle' }}>
                        {editingTransactionId === transaction.id ? (
                          <input
                            type="number"
                            name="amount"
                            value={editFormData.amount}
                            onChange={handleEditChange}
                            className="border p-2 rounded w-full"
                            style={{ textAlign: 'right', fontSize: 'inherit' }} // Consistent alignment and font
                          />
                        ) : (
                          <span className="inline-block truncate" style={{ width: '200px', display: 'inline-block' }}>
                            {`$${parseFloat(transaction.amount).toFixed(2)}`}
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td
                        className="py-2"
                        style={{
                          display: 'flex',
                          alignItems: 'center', // Centers vertically
                          justifyContent: 'center', // Centers horizontally (optional)
                          gap: '8px', // Adds spacing between buttons
                        }}
                      >
                        {editingTransactionId === transaction.id ? (
                          <>
                            {/* Save Button */}
                            <button
                              onClick={handleEditSave}
                              className="text-green-600 hover:text-green-800 p-2 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center"
                              style={{ width: '36px', height: '36px' }} // Ensures consistent size
                            >
                              <FaCheck size={16} />
                            </button>

                            {/* Cancel Button */}
                            <button
                              onClick={handleEditCancel}
                              className="text-red-600 hover:text-red-800 p-2 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center"
                              style={{ width: '36px', height: '36px' }} // Ensures consistent size
                            >
                              <FaTimes size={16} />
                            </button>
                          </>
                        ) : (
                          <>
                            {/* Edit Button */}
                            <button
                              onClick={() => handleEditStart(transaction)}
                              className="text-blue-600 hover:text-blue-800 p-2 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center"
                              style={{ width: '36px', height: '36px' }} // Ensures consistent size
                            >
                              <FaEdit size={16} />
                            </button>

                            {/* Delete Button */}
                            <button
                              onClick={() => handleDelete(transaction.id)}
                              className="text-red-600 hover:text-red-800 p-2 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center"
                              style={{ width: '36px', height: '36px' }} // Ensures consistent size
                            >
                              <FaTrash size={16} />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">No transactions added yet.</p>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default TrackExpensesPage;
