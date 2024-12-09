import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuth";
import AnimatedPage from "../components/AnimatedPage";
import HomepageImage from "../assets/sai_homepage.jpg";

function HomePage() {
  const { isLoggedIn } = useAuthContext();

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}
      >
        <div className="max-w-5xl mx-auto px-6">
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white"
        >
          Master Your Finances with <span style={{ color: "#0BDB00" }}>Cashly</span>
        </h1>
          <p className="text-lg md:text-xl mb-10" style={{ color: "#B0B0B0" }}>
            Track expenses, set goals, get AI insights, and earn rewards—all in
            one place.
          </p>
          <Link
            to={isLoggedIn ? "/dashboard" : "/signup"}
            className="font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundColor: "#0BDB00",
              color: "#1C1C1E",
            }}
          >
            {isLoggedIn ? "Go to Dashboard" : "Get Started for Free"}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "#262626", color: "#E0E0E0" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Features Built for Your Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Track Expenses",
                description: "Real-time expense tracking to keep you on budget.",
                icon: "📊",
              },
              {
                title: "Set Goals",
                description: "Set and achieve personalized savings goals.",
                icon: "🎯",
              },
              {
                title: "AI Insights",
                description: "Get tailored recommendations to optimize spending.",
                icon: "🤖",
              },
              {
                title: "Earn Rewards",
                description: "Be rewarded for reaching your financial milestones.",
                icon: "🎉",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}
              >
                <div
                  className="text-4xl mb-4"
                  style={{ color: "#0BDB00" }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p style={{ color: "#B0B0B0" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cashly Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}
      >
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Cashly?
          </h2>
          <p className="text-lg mb-10" style={{ color: "#B0B0B0" }}>
            Leverage AI to make budgeting simpler, smarter, and stress-free.
          </p>
          <img
            src={HomepageImage}
            alt="Smart AI Insights"
            className="mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full max-w-4xl"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "#262626", color: "#E0E0E0" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Cashly completely transformed how I manage my budget. Highly recommend!",
                name: "Tomasz S.",
              },
              {
                quote:
                  "The AI insights are a game-changer. I've saved so much money!",
                name: "Ori M.",
              },
              {
                quote:
                  "The rewards system keeps me motivated to hit my financial goals.",
                name: "Dan B.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
                style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}
              >
                <p
                  className="italic mb-4"
                  style={{ color: "#B0B0B0" }}
                >
                  "{testimonial.quote}"
                </p>
                <h4 className="font-bold" style={{ color: "#0BDB00" }}>
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#B0B0B0" }}>
            Join thousands of users who are taking charge of their money with
            Cashly.
          </p>
          <Link
            to={isLoggedIn ? "/dashboard" : "/signup"}
            className="font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundColor: "#0BDB00",
              color: "#1C1C1E",
            }}
          >
            {isLoggedIn ? "Go to Dashboard" : "Get Started Now"}
          </Link>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default HomePage;
