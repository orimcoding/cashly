import React, { useState } from "react";

function GoalEditModal({ goal, onSave, onClose }) {
  const [formData, setFormData] = useState({ ...goal });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSavedChange = (increment) => {
    setFormData((prev) => ({
      ...prev,
      saved: Math.max(0, parseFloat(prev.saved || 0) + increment), // Prevent negative values
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.target || !formData.date) {
      alert("Please fill out all fields!");
      return;
    }

    const targetAsNumber = parseFloat(formData.target);
    if (isNaN(targetAsNumber) || targetAsNumber <= 0) {
      alert("Please enter a valid target amount!");
      return;
    }

    onSave({
      ...formData,
      target: targetAsNumber,
      saved: parseFloat(formData.saved || 0),
    });
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#262626] rounded-lg shadow-lg p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Edit Goal</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Goal Name */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Goal Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              style={{
                backgroundColor: "#1C1C1E",
                color: "#E0E0E0",
                borderColor: "#B0B0B0",
              }}
            />
          </div>

          {/* Target Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Target Amount
            </label>
            <input
              type="number"
              name="target"
              value={formData.target}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              style={{
                backgroundColor: "#1C1C1E",
                color: "#E0E0E0",
                borderColor: "#B0B0B0",
              }}
            />
          </div>

          {/* Saved Amount Adjustments */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Saved Amount
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleSavedChange(-10)} // Decrease by 10
                className="px-3 py-1 rounded font-bold text-white"
                style={{ backgroundColor: "#FF4C4C" }}
              >
                -
              </button>
              <input
                type="number"
                name="saved"
                value={formData.saved || 0}
                onChange={(e) =>
                  setFormData({ ...formData, saved: Math.max(0, e.target.value) })
                }
                className="w-full p-2 rounded border text-center"
                style={{
                  backgroundColor: "#1C1C1E",
                  color: "#E0E0E0",
                  borderColor: "#B0B0B0",
                }}
              />
              <button
                type="button"
                onClick={() => handleSavedChange(10)} // Increase by 10
                className="px-3 py-1 rounded font-bold text-white"
                style={{ backgroundColor: "#0BDB00" }}
              >
                +
              </button>
            </div>
          </div>

          {/* Target Date */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Target Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              style={{
                backgroundColor: "#1C1C1E",
                color: "#E0E0E0",
                borderColor: "#B0B0B0",
              }}
            />
          </div>

          {/* Color Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Goal Color
            </label>
            <input
              type="color"
              name="color"
              value={formData.color || "#0BDB00"}
              onChange={handleChange}
              className="w-12 h-8 p-1 rounded border"
              style={{
                borderColor: "#B0B0B0",
                backgroundColor: "#1C1C1E",
              }}
            />
          </div>

          {/* Modal Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 rounded font-bold text-white"
              style={{ backgroundColor: "#FF4C4C" }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded font-bold text-white"
              style={{ backgroundColor: "#0BDB00" }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GoalEditModal;
