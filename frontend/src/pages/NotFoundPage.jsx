import React from "react";
import AnimatedPage from "../components/AnimatedPage";

function NotFoundPage() {
  return (
    <AnimatedPage>
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}
      >
        <h1 className="text-6xl font-bold mb-4" style={{ color: "#FF4C4C" }}>
          404 Page Not Found
        </h1>
        <p className="text-lg mb-8" style={{ color: "#B0B0B0" }}>
          Oops! The page you're looking for doesn't exist :(
        </p>
        <a
          href="/"
          className="px-6 py-2 rounded font-bold text-black"
          style={{
            backgroundColor: "#0BDB00",
            color: "#1C1C1E",
            transition: "background-color 0.3s ease",
          }}
        >
          Back to Home
        </a>
      </div>
    </AnimatedPage>
  );
}

export default NotFoundPage;
