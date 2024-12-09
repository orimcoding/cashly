import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaWallet, FaBullseye, FaLightbulb, FaGift, FaUser } from "react-icons/fa";

function Sidebar() {
  return (
    <aside
      className="bg-[#1C1C1E] text-[#E0E0E0] shadow-lg w-64 p-6 hidden lg:block"
      style={{
        position: "sticky", // Keeps the sidebar fixed
        top: 0, // Sticks to the top
        height: "100vh", // Full viewport height
      }}
    >
      {/* Branding */}
      <div className="text-2xl font-bold mb-10" style={{ color: "#FFFFFF" }}>
        Menu
      </div>

      {/* Navigation */}
      <nav className="space-y-4">
        <SidebarLink to="/dashboard" icon={<FaHome />} label="Dashboard" />
        <SidebarLink to="/track-expenses" icon={<FaWallet />} label="Track Expenses" />
        <SidebarLink to="/goals" icon={<FaBullseye />} label="Manage Goals" />
        <SidebarLink to="/insights" icon={<FaLightbulb />} label="AI Insights" />
        <SidebarLink to="/rewards" icon={<FaGift />} label="Rewards" />
        <SidebarLink to="/profile" icon={<FaUser />} label="Profile Settings" />
      </nav>
    </aside>
  );
}

function SidebarLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-4 p-3 rounded transition-all"
      style={{
        color: "#B0B0B0", // Default muted color
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#0BDB00"; // Bright green on hover
        e.currentTarget.style.color = "#1C1C1E"; // Dark text for contrast
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent"; // Reset background
        e.currentTarget.style.color = "#B0B0B0"; // Reset text color
      }}
    >
      <div className="text-xl">{icon}</div>
      <span className="text-base font-medium">{label}</span>
    </Link>
  );
}

export default Sidebar;
