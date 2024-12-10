import React, { useState, useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Sidebar from "../components/Sidebar";

function ProfileSettingsPage() {
  const [profile, setProfile] = useState({
    username: "User123",
    email: "user@example.com",
    theme: "light",
    notifications: true,
  });

  const [editingField, setEditingField] = useState(null);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  // Load profile data from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
      setTempProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Save profile data to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  const handleSave = () => {
    setProfile({ ...tempProfile });
    setEditingField(null);
  };

  const handleCancel = () => {
    setTempProfile({ ...profile });
    setEditingField(null);
  };

  const handleInputChange = (field, value) => {
    setTempProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div
          className="flex-grow p-6"
          style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}
        >
          <h1 className="text-4xl font-bold mb-6" style={{ color: "#0BDB00" }}>
            Profile & Settings
          </h1>

          {/* Profile Section */}
          <div className="bg-[#262626] p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#E0E0E0" }}>
              Profile Information
            </h2>
            <div className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-sm mb-1" style={{ color: "#B0B0B0" }}>
                  Username
                </label>
                {editingField === "username" ? (
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={tempProfile.username}
                      onChange={(e) =>
                        handleInputChange("username", e.target.value)
                      }
                      className="w-full p-2 rounded border"
                      style={{
                        backgroundColor: "#1C1C1E",
                        color: "#E0E0E0",
                        border: "1px solid #B0B0B0",
                      }}
                    />
                    <button
                      className="px-4 py-2 rounded bg-green-500 text-black font-bold"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="px-4 py-2 rounded bg-red-500 text-white font-bold"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <span>{profile.username}</span>
                    <button
                      className="px-4 py-2 rounded bg-blue-500 text-white font-bold"
                      onClick={() => setEditingField("username")}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-1" style={{ color: "#B0B0B0" }}>
                  Email
                </label>
                {editingField === "email" ? (
                  <div className="flex gap-4">
                    <input
                      type="email"
                      value={tempProfile.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full p-2 rounded border"
                      style={{
                        backgroundColor: "#1C1C1E",
                        color: "#E0E0E0",
                        border: "1px solid #B0B0B0",
                      }}
                    />
                    <button
                      className="px-4 py-2 rounded bg-green-500 text-black font-bold"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="px-4 py-2 rounded bg-red-500 text-white font-bold"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <span>{profile.email}</span>
                    <button
                      className="px-4 py-2 rounded bg-blue-500 text-white font-bold"
                      onClick={() => setEditingField("email")}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* General Settings Section */}
          <div className="bg-[#262626] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#E0E0E0" }}>
              General Settings
            </h2>
            <div className="space-y-4">
              {/* Theme */}
              {/* <div>
                <label className="block text-sm mb-1" style={{ color: "#B0B0B0" }}>
                  Theme
                </label>
                <select
                  value={tempProfile.theme}
                  onChange={(e) => handleInputChange("theme", e.target.value)}
                  className="w-full p-2 rounded border"
                  style={{
                    backgroundColor: "#1C1C1E",
                    color: "#E0E0E0",
                    border: "1px solid #B0B0B0",
                  }}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div> */}

              {/* Notifications */}
              {/* <div className="flex items-center justify-between">
                <label
                  className="block text-sm mb-1"
                  style={{ color: "#B0B0B0" }}
                >
                  Enable Notifications
                </label>
                <input
                  type="checkbox"
                  checked={tempProfile.notifications}
                  onChange={(e) =>
                    handleInputChange("notifications", e.target.checked)
                  }
                  className="w-5 h-5"
                  style={{ accentColor: "#0BDB00" }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default ProfileSettingsPage;
