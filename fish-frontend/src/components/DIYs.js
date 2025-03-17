// src/pages/DIYs.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DIYs.css";

// Reusable DIYCard Component
function DIYCard({ project }) {
  const [imagePreview, setImagePreview] = useState(
    project.image || "https://via.placeholder.com/300x200?text=No+Image"
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
    <div className="diy-card">
      <div className="diy-image">
        <img src={imagePreview} alt={project.name} />
      </div>
      <div className="diy-details">
        <h3>{project.name}</h3>
        <ul>
          <li>
            <strong>Materials:</strong> {project.materials}
          </li>
          <li>
            <strong>Estimated Cost:</strong> {project.cost}
          </li>
          <li>
            <strong>Steps:</strong> {project.steps}
          </li>
          <li>
            <strong>Description:</strong> {project.description}
          </li>
        </ul>
        <div className="upload-section">
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      </div>
    </div>
  );
}

// Sample DIYs Data (20 items)
const diysData = [
  {
    name: "DIY Aquarium Stand",
    materials: "Wood, screws, brackets, paint",
    cost: "$50-$100",
    steps:
      "Measure tank dimensions, design stand, cut wood, assemble, sand, and paint.",
    description:
      "A sturdy, custom-made stand that fits your aquarium perfectly.",
    image: "",
  },
  {
    name: "DIY LED Aquarium Lighting",
    materials: "LED strips, power supply, waterproof casing, wiring",
    cost: "$40-$80",
    steps:
      "Design layout, solder connections, mount LED strips, waterproof connections, test.",
    description:
      "Energy-efficient lighting that enhances plant growth and tank aesthetics.",
    image: "",
  },
  {
    name: "DIY CO2 System",
    materials: "CO2 tank, regulator, tubing, diffuser",
    cost: "$100-$150",
    steps:
      "Connect regulator to CO2 tank, run tubing to diffuser, place diffuser in tank, adjust flow.",
    description:
      "Boost plant growth with a homemade CO2 injection system.",
    image: "",
  },
  {
    name: "DIY Aquascape Rocks",
    materials: "Cement, rocks, water, molds",
    cost: "$20-$50",
    steps:
      "Mix cement with water, press into molds with rocks, let cure, remove from molds.",
    description: "Create natural-looking rocks for your aquascape.",
    image: "",
  },
  {
    name: "DIY Driftwood Decoration",
    materials: "Driftwood, epoxy, sandpaper",
    cost: "$30-$60",
    steps:
      "Collect and clean driftwood, sand smooth, attach epoxy for stability, decorate tank.",
    description:
      "Transform driftwood into a centerpiece for your aquarium.",
    image: "",
  },
  {
    name: "DIY Aquarium Filter Upgrade",
    materials: "Filter media, tubing, powerhead, PVC pipes",
    cost: "$40-$70",
    steps:
      "Design layout, cut PVC pipes, install filter media, connect tubing, test flow.",
    description:
      "Improve water quality with a custom-designed filter system.",
    image: "",
  },
  {
    name: "DIY Undergravel Filter",
    materials: "Gravel, uplift tubes, air pump, plastic mesh",
    cost: "$30-$50",
    steps:
      "Lay gravel over mesh, install uplift tubes connected to air pump, test circulation.",
    description:
      "A simple and effective filtration system using undergravel technology.",
    image: "",
  },
  {
    name: "DIY Aquarium Background",
    materials: "Foam board, acrylic paint, adhesive",
    cost: "$20-$40",
    steps:
      "Cut foam board to tank dimensions, paint desired scenery, adhere to tank back.",
    description:
      "Create a custom background to enhance the visual depth of your aquarium.",
    image: "",
  },
  {
    name: "DIY Automatic Fish Feeder",
    materials: "Arduino, servo motor, container, wiring",
    cost: "$50-$80",
    steps:
      "Assemble Arduino with servo, program feeding schedule, mount feeder on tank.",
    description:
      "Ensure your fish are fed on schedule with a custom-built feeder.",
    image: "",
  },
  {
    name: "DIY Algae Scrubber",
    materials: "Plastic screen, PVC frame, water pump",
    cost: "$30-$60",
    steps:
      "Build frame, attach plastic screen, connect water pump to circulate water.",
    description:
      "Control algae growth with an effective algae scrubber.",
    image: "",
  },
  {
    name: "DIY Plant Fertilizer System",
    materials: "Liquid fertilizers, dosing pump, tubing, timer",
    cost: "$40-$70",
    steps:
      "Connect dosing pump to fertilizer reservoir, program timer, deliver nutrients.",
    description:
      "Automate nutrient delivery for optimal plant growth.",
    image: "",
  },
  {
    name: "DIY Glass Aquarium Cleaner",
    materials: "Magnetic cleaner, microfiber cloth",
    cost: "$15-$30",
    steps:
      "Attach cloth to magnetic cleaner, clean tank glass from outside.",
    description:
      "Clean aquarium glass without disturbing tank inhabitants.",
    image: "",
  },
  {
    name: "DIY Aquarium Heater Controller",
    materials: "Thermostat, heater, wiring, waterproof housing",
    cost: "$40-$70",
    steps:
      "Install thermostat, connect to heater, calibrate temperature settings.",
    description:
      "Maintain a stable temperature in your aquarium with DIY control.",
    image: "",
  },
  {
    name: "DIY Substrate Vacuum",
    materials: "Siphon tube, plastic bottle, tubing",
    cost: "$10-$20",
    steps:
      "Connect tube to bottle, create siphon, vacuum substrate during water change.",
    description:
      "Keep substrate clean with a homemade siphon vacuum.",
    image: "",
  },
  {
    name: "DIY LED Grow Box",
    materials: "LED strips, reflective material, box, power supply",
    cost: "$50-$100",
    steps:
      "Line box with reflective material, install LED strips, connect power supply.",
    description:
      "Grow plants or sprouts using a controlled DIY LED grow box.",
    image: "",
  },
  {
    name: "DIY Aquarium CO2 Diffuser",
    materials: "Ceramic diffuser, tubing, CO2 tank, regulator",
    cost: "$30-$60",
    steps:
      "Connect tubing from CO2 tank to diffuser, place diffuser in tank, adjust flow.",
    description:
      "Enhance plant growth with an efficient CO2 diffusion system.",
    image: "",
  },
  {
    name: "DIY Hidden Storage Aquarium Stand",
    materials: "Wood, hinges, screws, paint",
    cost: "$80-$150",
    steps:
      "Design storage compartments, build stand with hidden doors, finish with paint.",
    description:
      "Create an aquarium stand with concealed storage for equipment.",
    image: "",
  },
  {
    name: "DIY Aquarium LED Timer",
    materials: "Arduino, relay module, LED lights, wiring",
    cost: "$40-$60",
    steps:
      "Program Arduino to control relay, connect LED lights, set timing schedule.",
    description:
      "Automate your aquarium lighting schedule with a DIY timer.",
    image: "",
  },
  {
    name: "DIY Recycled Aquarium Decor",
    materials: "Recycled plastic, paint, sealant",
    cost: "$20-$40",
    steps:
      "Collect recycled materials, design decor pieces, paint and seal for water resistance.",
    description:
      "Create unique decor items from recycled materials for an eco-friendly touch.",
    image: "",
  },
  {
    name: "DIY Aquarium Plant Propagation System",
    materials: "Mesh, containers, tubing, water pump",
    cost: "$30-$50",
    steps:
      "Design propagation setup, attach mesh over containers, use pump for circulation.",
    description:
      "Propagate aquarium plants efficiently using a custom DIY system.",
    image: "",
  },
];

// DIYs Page Component
function DIYs() {
  const [diyOpen, setDiyOpen] = useState(false);

  return (
    <div className="diy-page">
      {/* Header */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Aquarium Hub</Link>
        </div>
        <div className="hamburger">&#9776;</div>
        <ul className="nav-links">
          <li>
            <Link to="/diy">DIYs</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/fishes">Fishes</Link>
          </li>
          <li>
            <Link to="/decors">Decors</Link>
          </li>
          <li>
            <Link to="/woods">Woods</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="diy-content">
        <h1>DIY Projects</h1>
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => setDiyOpen(!diyOpen)}
          >
            Explore DIY Projects
            <span className="dropdown-icon">{diyOpen ? "-" : "+"}</span>
          </div>
          {diyOpen && (
            <div className="dropdown-content">
              <ul className="diy-list">
                {diysData.map((project, idx) => (
                  <li key={idx}>
                    <DIYCard project={project} />
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

export default DIYs;
