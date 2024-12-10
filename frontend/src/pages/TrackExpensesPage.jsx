import React, { useState, useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Sidebar from "../components/Sidebar";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import SpendingInsights from "../components/SpendingInsights";

function TrackExpensesPage() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem("categories");
    return savedCategories
      ? JSON.parse(savedCategories)
      : [
          "Alcohol & Bars",
          "Automotive",
          "Charity",
          "Childcare",
          "Clothing",
          "Dining",
          "Education",
          "Entertainment",
          "Fitness",
          "Gaming",
          "Gas",
          "Groceries",
          "Healthcare",
          "Hobbies",
          "Home Improvement",
          "Insurance",
          "Investments",
          "Medical",
          "Online Shopping",
          "Pets",
          "Public Transport",
          "Rent",
          "Savings",
          "Shopping",
          "Streaming Services",
          "Subscriptions",
          "Technology",
          "Travel",
          "Utilities",
          "Vacation",
        ];
  });

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    category: "",
    amount: "",
  });

  const [customCategory, setCustomCategory] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [editingTransactionId, setEditingTransactionId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.category === "custom" && customCategory.trim()) {
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
      setFormData({ name: "", date: "", category: "", amount: "" });
      setCustomCategory("");
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleEditStart = (transaction) => {
    setEditingTransactionId(transaction.id);
    setEditFormData({
      name: transaction.name,
      date: transaction.date,
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
      alert("Please fill out all fields!");
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
    const newOrder = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newOrder);

    const sortedTransactions = [...transactions].sort((a, b) => {
      if (field === "amount") {
        return newOrder === "asc" ? a.amount - b.amount : b.amount - a.amount;
      } else if (field === "date") {
        return newOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else {
        return newOrder === "asc"
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
        <div className="flex-grow p-6" style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}>
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-6" style={{ color: "#0BDB00" }}>Track Expenses</h1>
          <p className="mb-8" style={{ color: "#B0B0B0" }}>
            Add, edit, and review all your transactions. Coming soon: AI-powered category suggestions.
          </p>

          {/* Add New Expense Form */}
          <div className="bg-[#262626] p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#E0E0E0" }}>Add New Expense</h2>
            <form className="flex flex-wrap gap-4 items-end" onSubmit={handleSubmit}>
              <div className="flex-1">
                <label className="block text-sm mb-1" style={{ color: "#B0B0B0" }}>Purchase Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Coffee"
                  className="w-full p-2 rounded border"
                  style={{
                    backgroundColor: "#1C1C1E",
                    color: "#E0E0E0",
                    border: "1px solid #B0B0B0",
                  }}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1" style={{ color: "#B0B0B0" }}>Category</label>
                <input
                  list="categories"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Select or type a category"
                  className="w-full p-2 rounded border"
                  style={{
                    backgroundColor: "#1C1C1E",
                    color: "#E0E0E0",
                    border: "1px solid #B0B0B0",
                  }}
                />
                <datalist id="categories">
                  {categories.map((category, index) => (
                    <option key={index} value={category} />
                  ))}
                </datalist>
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1" style={{ color: "#B0B0B0" }}>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 rounded border"
                  style={{
                    backgroundColor: "#1C1C1E",
                    color: "#E0E0E0",
                    border: "1px solid #B0B0B0",
                  }}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1" style={{ color: "#B0B0B0" }}>Amount</label>
                <input
                  type="number"
                  name="amount"
                  placeholder="e.g., 100"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full p-2 rounded border"
                  style={{
                    backgroundColor: "#1C1C1E",
                    color: "#E0E0E0",
                    border: "1px solid #B0B0B0",
                  }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-2 rounded font-bold"
                  style={{
                    backgroundColor: "#0BDB00",
                    color: "#1C1C1E",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Add Expense
                </button>
              </div>
            </form>
          </div>

          {/* Spending Insights */}
          <div className="bg-[#262626] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#E0E0E0" }}>Spending Insights</h2>
              <p className="mb-8" style={{ color: "#B0B0B0" }}>
                See insights into your spending habbits.
              </p>
                <SpendingInsights transactions={transactions} />
          </div>
          <div className="mb-8"></div>

          {/* Transaction List */}
          <div className="bg-[#262626] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#E0E0E0" }}>Transaction List</h2>
            {transactions.length > 0 ? (
              <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="border-b pb-2 text-left"
                    style={{ color: "#B0B0B0", cursor: "pointer" }}
                    onClick={() => sortTransactions("name")}
                  >
                    Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="border-b pb-2 text-left"
                    style={{ color: "#B0B0B0" }}
                    onClick={() => sortTransactions("category")}
                  >
                    Category {sortField === "category" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="border-b pb-2 text-left"
                    style={{ color: "#B0B0B0" }}
                    onClick={() => sortTransactions("date")}
                  >
                    Date {sortField === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    className="border-b pb-2 text-left"
                    style={{ color: "#B0B0B0" }}
                    onClick={() => sortTransactions("amount")}
                  >
                    Amount {sortField === "amount" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th className="border-b pb-2 text-center" style={{ color: "#B0B0B0" }}>
                    Actions
                  </th>
                </tr>
              </thead>
                <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-[#333333] transition"
                    style={{ height: "48px" }} // Uniform row height
                  >
                    {/* Name Column */}
                    <td className="py-2 align-middle">
                      {editingTransactionId === transaction.id ? (
                        <input
                          type="text"
                          name="name"
                          value={editFormData.name}
                          onChange={handleEditChange}
                          className="w-full rounded border px-2"
                          style={{
                            height: "36px", // Matches button height
                            width: "200px",
                            backgroundColor: "#1C1C1E",
                            color: "#E0E0E0",
                            border: "1px solid #B0B0B0",
                          }}
                        />
                      ) : (
                        <span style={{ lineHeight: "36px" }}>{transaction.name}</span>
                      )}
                    </td>

                    {/* Category Column */}
                    <td className="py-2 align-middle">
                      {editingTransactionId === transaction.id ? (
                        <input
                          list="categories"
                          name="category"
                          value={editFormData.category}
                          onChange={handleEditChange}
                          className="w-full rounded border px-2"
                          style={{
                            height: "36px",
                            width: "200px",
                            backgroundColor: "#1C1C1E",
                            color: "#E0E0E0",
                            border: "1px solid #B0B0B0",
                          }}
                        />
                      ) : (
                        <span style={{ lineHeight: "36px" }}>{transaction.category}</span>
                      )}
                    </td>

                    {/* Date Column */}
                    <td className="py-2 align-middle">
                      {editingTransactionId === transaction.id ? (
                        <input
                          type="date"
                          name="date"
                          value={editFormData.date}
                          onChange={handleEditChange}
                          className="rounded border px-2"
                          style={{
                            height: "36px",
                            backgroundColor: "#1C1C1E",
                            color: "#E0E0E0",
                            border: "1px solid #B0B0B0",
                          }}
                        />
                      ) : (
                        <span style={{ lineHeight: "36px" }}>{transaction.date}</span>
                      )}
                    </td>

                    {/* Amount Column */}
                    <td className="py-2 align-middle">
                      {editingTransactionId === transaction.id ? (
                        <input
                          type="number"
                          name="amount"
                          value={editFormData.amount}
                          onChange={handleEditChange}
                          className="rounded border px-2 text-right"
                          style={{
                            width: "80px", // Consistent width
                            height: "36px", // Matches button height
                            backgroundColor: "#1C1C1E",
                            color: "#E0E0E0",
                            border: "1px solid #B0B0B0",
                          }}
                        />
                      ) : (
                        <span style={{ lineHeight: "36px" }}>
                          ${parseFloat(transaction.amount).toFixed(2)}
                        </span>
                      )}
                    </td>

                    {/* Actions Column */}
                    <td className="py-2 flex gap-2 justify-center items-center">
                      {editingTransactionId === transaction.id ? (
                        <>
                          {/* Save Button */}
                          <button
                            className="p-2 rounded-full flex items-center justify-center"
                            onClick={handleEditSave}
                            style={{
                              backgroundColor: "#21FF05",
                              color: "#FFFFFF",
                              height: "36px",
                              width: "36px",
                            }}
                            title="Save"
                          >
                            <FaCheck className="text-white" size={16} />
                          </button>
                          {/* Cancel Button */}
                          <button
                            className="p-2 rounded-full flex items-center justify-center"
                            onClick={handleEditCancel}
                            style={{
                              backgroundColor: "#FF4C4C",
                              color: "#FFFFFF",
                              height: "36px",
                              width: "36px",
                            }}
                            title="Cancel"
                          >
                            <FaTimes className="text-white" size={16} />
                          </button>
                        </>
                      ) : (
                        <>
                          {/* Edit Button */}
                          <button
                            className="p-2 rounded-full flex items-center justify-center"
                            onClick={() => handleEditStart(transaction)}
                            style={{
                              backgroundColor: "#007BFF",
                              color: "#FFFFFF",
                              height: "36px",
                              width: "36px",
                            }}
                            title="Edit"
                          >
                            <FaEdit className="text-white" size={16} />
                          </button>
                          {/* Delete Button */}
                          <button
                            className="p-2 rounded-full flex items-center justify-center"
                            onClick={() => handleDelete(transaction.id)}
                            style={{
                              backgroundColor: "#FF4C4C",
                              color: "#FFFFFF",
                              height: "36px",
                              width: "36px",
                            }}
                            title="Delete"
                          >
                            <FaTrash className="text-white" size={16} />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>                                   
            ) : (
              <p style={{ color: "#B0B0B0" }}>No transactions added yet.</p>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default TrackExpensesPage;
