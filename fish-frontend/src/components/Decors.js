// src/pages/Decors.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Decors.css";

// Reusable DecorCard Component
function DecorCard({ decor }) {
  const [imagePreview, setImagePreview] = useState(
    decor.image || "https://via.placeholder.com/300x200?text=No+Image"
  );

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="decor-card">
      <div className="decor-image">
        <img src={imagePreview} alt={decor.name} />
      </div>
      <div className="decor-details">
        <h3>{decor.name}</h3>
        <ul>
          <li>
            <strong>Material:</strong> {decor.material}
          </li>
          <li>
            <strong>Dimensions:</strong> {decor.dimensions}
          </li>
          <li>
            <strong>Description:</strong> {decor.description}
          </li>
          <li>
            <strong>Ideal For:</strong> {decor.ideal}
          </li>
        </ul>
        <div className="upload-section">
          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      </div>
    </div>
  );
}

// Sample Data for Decors (20+ items)
const decorsData = [
  {
    name: "Artificial Rock Formation",
    material: "Resin, stone powder",
    dimensions: "20x15x10 cm",
    description:
      "A realistic rock formation providing natural hiding spots and enhancing tank aesthetics.",
    ideal: "Freshwater & Saltwater",
    image: "",
  },
  {
    name: "Driftwood Log",
    material: "Polyresin",
    dimensions: "30x10x10 cm",
    description:
      "A lifelike driftwood log that adds a touch of nature and elegance to your aquarium.",
    ideal: "Freshwater",
    image: "",
  },
  {
    name: "Submarine Ruins",
    material: "Ceramic, resin",
    dimensions: "25x20x15 cm",
    description:
      "Intricately designed ruins that evoke a mysterious underwater past.",
    ideal: "Saltwater",
    image: "",
  },
  {
    name: "Coral Reef Sculpture",
    material: "Resin, fiberglass",
    dimensions: "30x25x20 cm",
    description:
      "A detailed sculpture mimicking natural coral formations for a vibrant reef setup.",
    ideal: "Saltwater",
    image: "",
  },
  {
    name: "Ancient Temple",
    material: "Ceramic, resin",
    dimensions: "35x30x25 cm",
    description:
      "A majestic temple decor offering an archaeological vibe and hidden nooks.",
    ideal: "Freshwater & Saltwater",
    image: "",
  },
  {
    name: "Sunken Shipwreck",
    material: "Resin, fiberglass",
    dimensions: "40x30x25 cm",
    description:
      "A realistic shipwreck centerpiece that creates intrigue and shelter for fish.",
    ideal: "Saltwater",
    image: "",
  },
  {
    name: "Artificial Coral Branch",
    material: "Silicone, resin",
    dimensions: "15x10x10 cm",
    description:
      "A vibrant coral branch adding dynamic color and texture to reef tanks.",
    ideal: "Saltwater",
    image: "",
  },
  {
    name: "Underwater Castle",
    material: "Resin, stone powder",
    dimensions: "45x35x30 cm",
    description:
      "A fairy-tale castle with intricate details, providing ample hiding spots.",
    ideal: "Freshwater & Saltwater",
    image: "",
  },
  {
    name: "Mossy Log",
    material: "Resin, moss",
    dimensions: "25x15x10 cm",
    description:
      "A log overgrown with realistic moss, perfect for a natural aquascape.",
    ideal: "Freshwater",
    image: "",
  },
  {
    name: "Artificial Kelp Forest",
    material: "Polyester fiber, resin",
    dimensions: "Cluster; varies",
    description:
      "A decorative kelp forest that simulates natural underwater vegetation.",
    ideal: "Saltwater",
    image: "",
  },
  {
    name: "Modern Minimalist Rock",
    material: "Resin, polished stone",
    dimensions: "20x20x15 cm",
    description:
      "A sleek, modern rock decoration ideal for contemporary tank designs.",
    ideal: "Freshwater & Saltwater",
    image: "",
  },
  {
    name: "Reef Boulder",
    material: "Fiberglass, resin",
    dimensions: "35x25x20 cm",
    description:
      "A large boulder mimicking natural reef structures with hiding places.",
    ideal: "Saltwater",
    image: "",
  },
  {
    name: "Underwater Bridge",
    material: "Resin, metal accents",
    dimensions: "30x10x10 cm",
    description:
      "A decorative bridge that creates an arch and connects tank areas.",
    ideal: "Freshwater & Saltwater",
    image: "",
  },
  {
    name: "Fossil Replica",
    material: "Ceramic, resin",
    dimensions: "20x15x10 cm",
    description:
      "A fossil replica adding an ancient, archaeological element to your aquarium.",
    ideal: "Freshwater",
    image: "",
  },
  {
    name: "Sunken Treasure Chest",
    material: "Resin, metal accents",
    dimensions: "25x20x15 cm",
    description:
      "A treasure chest decor that inspires tales of sunken riches and adventure.",
    ideal: "Saltwater",
    image: "",
  },
  {
    name: "Artificial Sea Anemone",
    material: "Silicone, resin",
    dimensions: "15x10x10 cm",
    description:
      "A realistic sea anemone adding texture and vibrant color to reef tanks.",
    ideal: "Saltwater",
    image: "",
  },
  {
    name: "Decorative Waterfall Feature",
    material: "Resin, integrated LED lights",
    dimensions: "30x25x20 cm",
    description:
      "A miniature waterfall creating a soothing ambiance while oxygenating water.",
    ideal: "Freshwater",
    image: "",
  },
  {
    name: "Underwater Cave",
    material: "Resin, stone powder",
    dimensions: "40x30x25 cm",
    description:
      "A large cave structure that offers shelter and a mysterious atmosphere.",
    ideal: "Freshwater & Saltwater",
    image: "",
  },
  {
    name: "Artificial Mangrove Roots",
    material: "Resin, fiberglass",
    dimensions: "Varies",
    description:
      "Intricately designed roots that mimic natural mangroves for added complexity.",
    ideal: "Brackish, Freshwater",
    image: "",
  },
  {
    name: "Contemporary Sculpture",
    material: "Metal, resin",
    dimensions: "25x20x15 cm",
    description:
      "A modern art sculpture serving as a striking focal point in your tank.",
    ideal: "Freshwater & Saltwater",
    image: "",
  },
  {
    name: "Artificial Algae Mat",
    material: "Polyester, resin",
    dimensions: "Varies",
    description:
      "A textured algae mat that enhances the natural aesthetic of your aquarium.",
    ideal: "Freshwater",
    image: "",
  },
  {
    name: "Submerged Tree Branch",
    material: "Resin, wood",
    dimensions: "30x10x10 cm",
    description:
      "A tree branch decor adding a rustic, natural element to your tank.",
    ideal: "Freshwater",
    image: "",
  },
];

// Decors Page Component
function Decors() {
  const [decorOpen, setDecorOpen] = useState(false);

  return (
    <div className="decors-page">
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
      <main className="decors-content">
        <h1>Aquarium Decors</h1>
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => setDecorOpen(!decorOpen)}
          >
            Explore Our Decors
            <span className="dropdown-icon">{decorOpen ? "-" : "+"}</span>
          </div>
          {decorOpen && (
            <div className="dropdown-content">
              <ul className="decor-list">
                {decorsData.map((decor, idx) => (
                  <li key={idx}>
                    <DecorCard decor={decor} />
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Decors;
