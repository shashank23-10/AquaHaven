// src/pages/Woods.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Woods.css";
import bogwood from '../images/woods/bogwood.webp'
import driftwood from '../images/woods/driftwood.webp'
import manzantia from '../images/woods/manzantia.jpg'
import mopani from '../images/woods/mopani.webp'
import redmangrove from '../images/woods/redmangrove.jpg'
import rosewood from '../images/woods/rosewood.jpeg'
import teakwood from '../images/woods/teakwood.jpg'

// ----------------- Reusable WoodCard Component -----------------
function WoodCard({ wood }) {
  const [imagePreview, setImagePreview] = useState(
    wood.image || "https://via.placeholder.com/300x200?text=No+Image"
  );


  return (
    <div className="wood-card">
      <div className="wood-image">
        <img src={imagePreview} alt={wood.name} />
      </div>
      <div className="wood-details">
        <h3>{wood.name}</h3>
        <ul>
          <li>
            <strong>Origin:</strong> {wood.origin}
          </li>
          <li>
            <strong>Ideal For:</strong> {wood.idealTank}
          </li>
          <li>
            <strong>Treatment:</strong> {wood.treatment}
          </li>
          <li>
            <strong>Appearance:</strong> {wood.appearance}
          </li>
          <li>
            <strong>Notes:</strong> {wood.notes}
          </li>
        </ul>
      </div>
    </div>
  );
}

// ----------------- Sample Woods Data -----------------
const woodsData = [
  {
    name: "Malaysian Driftwood",
    origin: "Southeast Asia",
    idealTank: "Freshwater",
    treatment: "Boil for 2 hours and soak until water runs clear",
    appearance: "Dark brown with rough texture",
    notes: "Provides a natural look and slowly leaches tannins",
    image: driftwood,
  },
  {
    name: "Manzanita Wood",
    origin: "California",
    idealTank: "Freshwater",
    treatment: "Soak for 2-3 weeks (boiling recommended)",
    appearance: "Deep brown with twisted branches",
    notes: "Popular for aquascaping; creates natural caves",
    image: manzantia,
  },
  {
    name: "Mopani Wood",
    origin: "Southern Africa",
    idealTank: "Freshwater",
    treatment: "Boil and soak for 1-2 weeks",
    appearance: "Reddish-brown with unique grain patterns",
    notes: "Adds warmth and character to the aquarium",
    image: mopani,
  },
  {
    name: "Bogwood",
    origin: "Southeast Asia",
    idealTank: "Freshwater",
    treatment: "Soak for several weeks until tannins leach out",
    appearance: "Ancient, gnarled, with a dark, weathered look",
    notes: "Creates a mysterious, aged appearance",
    image: bogwood,
  },
  {
    name: "Red Mangrove Root",
    origin: "Tropical Mangroves",
    idealTank: "Brackish/Freshwater",
    treatment: "Thorough cleaning and extended soaking",
    appearance: "Reddish with intricate, twisted roots",
    notes: "Adds natural complexity and surfaces for biofilm",
    image: redmangrove,
  },
  {
    name: "Teak Wood",
    origin: "Southeast Asia",
    idealTank: "Freshwater",
    treatment: "Boil for several hours; use with caution",
    appearance: "Rich, dark brown with smooth texture",
    notes: "Rarely used in aquariums; can affect water chemistry",
    image: teakwood,
  },
  {
    name: "Rosewood",
    origin: "Tropical Regions",
    idealTank: "Freshwater",
    treatment: "Proper cleaning and drying required",
    appearance: "Reddish-brown with fine grain",
    notes: "Very decorative, though expensive",
    image: rosewood,
  },
];

// ----------------- Woods Page Component -----------------
function Woods() {
  // Dropdown state for the woods list
  const [woodsOpen, setWoodsOpen] = useState(true);

  return (
    <div className="woods-page">
      {/* Header */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Aquarium Hub</Link>
        </div>
        <div className="hamburger">&#9776;</div>
        <ul className="nav-links">
          <li>
            <Link to="/fishes">Fishes</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/woods">Woods</Link>
          </li>
          <li>
            <Link to="/decors">Artificial Decors</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="woods-content">
        <h1>Aquarium Woods & Driftwoods</h1>
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => setWoodsOpen(!woodsOpen)}
          >
            Top Aquarium Woods
            <span className="dropdown-icon">{woodsOpen ? "-" : "+"}</span>
          </div>
          {woodsOpen && (
            <div className="dropdown-content">
              <ul className="wood-list">
                {woodsData.map((wood, idx) => (
                  <li key={idx}>
                    <WoodCard wood={wood} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Aquarium Hub. All rights reserved.</p>
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Woods;
