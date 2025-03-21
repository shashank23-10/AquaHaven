import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">HydroSanctuary</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/fishes" onClick={() => setMenuOpen(false)}>
              Fishes
            </Link>
          </li>
          <li>
            <Link to="/plants" onClick={() => setMenuOpen(false)}>
              Plants
            </Link>
          </li>
          <li>
            <Link to="/woods" onClick={() => setMenuOpen(false)}>
              Woods
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to HydroSanctuary</h1>
          <p>
            Your ultimate one-stop resource for aquarium care, creative ideas,
            and expert guidance.
          </p>
          <Link className="cta-button" to="/fishes">
            Explore Now
          </Link>
        </div>
      </header>

      {/* Description Section */}
      <section className="description-section">
        <div className="description-card">
          <h2>Fishes</h2>
          <p>
            Explore detailed profiles, care guides, and compatibility charts for
            various fish species.
          </p>
          <Link className="learn-more" to="/fishes">
            Learn More
          </Link>
        </div>
        <div className="description-card">
          <h2>Plants</h2>
          <p>
            Discover the best aquatic plants along with care tips and
            maintenance guides.
          </p>
          <Link className="learn-more" to="/plants">
            Learn More
          </Link>
        </div>
        <div className="description-card">
          <h2>Woods</h2>
          <p>
            Find out which types of wood are safe for your tank and how to use
            them in aquascaping.
          </p>
          <Link className="learn-more" to="/woods">
            Learn More
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 HydroSanctuary. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
