import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Plants.css";
import amazon from "../images/plants/amazon.jpg"
import anubias from "../images/plants/anubias.jpg"
import bacopa from "../images/plants/bacopa.jpg"
import brazilian from "../images/plants/brazilian.webp"
import bolbitis from "../images/plants/bolbitis.jpg"
import duckweed from "../images/plants/duckweed.jpeg"
import hornwort from "../images/plants/hornwort.webp"
import hygrophilia from "../images/plants/hygrophilia.webp"
import java from "../images/plants/java.jpg"
import javamoss from "../images/plants/javamoss.webp"
import ludwigia from "../images/plants/ludwigia.jpeg"
import marimo from "../images/plants/marimo.png"
import parva from "../images/plants/parva.jpeg"
import pogostomon from "../images/plants/pogostomon.webp"
import rotala from "../images/plants/rotala.jpeg"
import sagittaria from "../images/plants/sagittaria.webp"
import sprite from "../images/plants/sprite.jpg"
import vallisneria from "../images/plants/vallisneria.jpg"
import visteria from "../images/plants/visteria.jpg"
import wendtii from "../images/plants/wendtii.webp"

// Reusable PlantCard Component
function PlantCard({ plant }) {
  const [imagePreview, setImagePreview] = useState(
    plant.image || "../images/plants/wendtii.webp"
  );


  return (
    <div className="plant-card">
      <div className="plant-image">
        <img src={imagePreview} alt={plant.name} />
      </div>
      <div className="plant-details">
        <h3>{plant.name}</h3>
        <ul>
          <li>
            <strong>Scientific Name:</strong> {plant.scientificName}
          </li>
          <li>
            <strong>Light:</strong> {plant.light}
          </li>
          <li>
            <strong>Temperature:</strong> {plant.temperature}
          </li>
          <li>
            <strong>pH Range:</strong> {plant.pH}
          </li>
          <li>
            <strong>Growth Rate:</strong> {plant.growth}
          </li>
          <li>
            <strong>Difficulty:</strong> {plant.difficulty}
          </li>
          <li>
            <strong>Ideal Tank:</strong> {plant.idealTank}
          </li>
          <li>
            <strong>Notes:</strong> {plant.notes}
          </li>
        </ul>
      </div>
    </div>
  );
}

// Sample Data for Freshwater Plants (20 items)
const freshwaterPlants = [
  {
    name: "Anubias nana",
    scientificName: "Anubias barteri var. nana",
    light: "Low to moderate",
    temperature: "72-82°F",
    pH: "6.5-7.5",
    growth: "Slow",
    difficulty: "Easy",
    idealTank: "Shaded; attach to driftwood/rocks",
    notes: "Hardy, low maintenance",
    image: anubias,
  },
  {
    name: "Java Fern",
    scientificName: "Microsorum pteropus",
    light: "Low to moderate",
    temperature: "68-82°F",
    pH: "6.0-7.5",
    growth: "Slow to moderate",
    difficulty: "Easy",
    idealTank: "Attach to rocks/wood",
    notes: "Tolerates low light",
    image: java,
  },
  {
    name: "Amazon Sword",
    scientificName: "Echinodorus bleheri",
    light: "Moderate to high",
    temperature: "72-82°F",
    pH: "6.5-7.5",
    growth: "Fast",
    difficulty: "Moderate",
    idealTank: "Nutrient-rich substrate",
    notes: "Requires fertilization",
    image: amazon,
  },
  {
    name: "Java Moss",
    scientificName: "Taxiphyllum barbieri",
    light: "Low to moderate",
    temperature: "68-82°F",
    pH: "5.5-8.0",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Floating or attached",
    notes: "Great for shrimp tanks",
    image: javamoss,
  },
  {
    name: "Cryptocoryne wendtii",
    scientificName: "Cryptocoryne wendtii",
    light: "Low to moderate",
    temperature: "72-82°F",
    pH: "6.0-7.5",
    growth: "Slow",
    difficulty: "Moderate",
    idealTank: "Soft substrate",
    notes: "Color variations possible",
    image: wendtii,
  },
  {
    name: "Bolbitis heudelotii",
    scientificName: "Bolbitis heudelotii",
    light: "Low to moderate",
    temperature: "72-82°F",
    pH: "6.0-7.5",
    growth: "Moderate",
    difficulty: "Moderate",
    idealTank: "Attach to rocks/wood",
    notes: "Delicate fronds",
    image: bolbitis,
  },
  {
    name: "Vallisneria spiralis",
    scientificName: "Vallisneria spiralis",
    light: "Moderate to high",
    temperature: "68-82°F",
    pH: "6.5-7.5",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Deep substrate; background plant",
    notes: "Long, ribbon-like leaves",
    image: vallisneria,
  },
  {
    name: "Water Wisteria",
    scientificName: "Hygrophila difformis",
    light: "Moderate to high",
    temperature: "70-82°F",
    pH: "6.5-7.5",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Rich substrate; fertilized",
    notes: "Versatile and fast-growing",
    image: visteria,
  },
  {
    name: "Hornwort",
    scientificName: "Ceratophyllum demersum",
    light: "Moderate",
    temperature: "68-82°F",
    pH: "6.5-8.0",
    growth: "Very fast",
    difficulty: "Easy",
    idealTank: "Floating plant",
    notes: "Helps reduce algae",
    image: hornwort,
  },
  {
    name: "Duckweed",
    scientificName: "Lemna minor",
    light: "Low to moderate",
    temperature: "70-80°F",
    pH: "6.5-7.5",
    growth: "Very fast",
    difficulty: "Easy",
    idealTank: "Surface cover",
    notes: "Can be invasive",
    image: duckweed,
  },
  {
    name: "Water Sprite",
    scientificName: "Ceratopteris thalictroides",
    light: "Moderate",
    temperature: "70-82°F",
    pH: "6.0-7.5",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Floating or rooted",
    notes: "Delicate, feathery leaves",
    image: sprite,
  },
  {
    name: "Dwarf Sagittaria",
    scientificName: "Sagittaria subulata",
    light: "Moderate to high",
    temperature: "72-82°F",
    pH: "6.5-7.5",
    growth: "Moderate",
    difficulty: "Easy",
    idealTank: "Shallow substrate",
    notes: "Grass-like appearance",
    image: sagittaria,
  },
  {
    name: "Marimo Moss Ball",
    scientificName: "Aegagropila linnaei",
    light: "Low to moderate",
    temperature: "59-77°F",
    pH: "6.0-8.0",
    growth: "Slow",
    difficulty: "Very easy",
    idealTank: "Floating or in container",
    notes: "Unique spherical algae",
    image: marimo,
  },
  {
    name: "Bacopa caroliniana",
    scientificName: "Bacopa caroliniana",
    light: "Moderate",
    temperature: "72-82°F",
    pH: "6.0-7.5",
    growth: "Moderate",
    difficulty: "Easy",
    idealTank: "Rooted plant",
    notes: "May develop red hues",
    image: bacopa,
  },
  {
    name: "Rotala rotundifolia",
    scientificName: "Rotala rotundifolia",
    light: "High",
    temperature: "72-82°F",
    pH: "6.0-7.5",
    growth: "Fast",
    difficulty: "Moderate",
    idealTank: "High light tanks",
    notes: "Colorful stems and leaves",
    image: rotala,
  },
  {
    name: "Ludwigia repens",
    scientificName: "Ludwigia repens",
    light: "High",
    temperature: "72-82°F",
    pH: "6.0-7.5",
    growth: "Fast",
    difficulty: "Moderate",
    idealTank: "High nutrient substrate",
    notes: "Can appear red or green",
    image: ludwigia,
  },
  {
    name: "Brazilian Pennywort",
    scientificName: "Hydrocotyle leucocephala",
    light: "Moderate",
    temperature: "70-82°F",
    pH: "6.0-7.5",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Rooted or floating",
    notes: "Delicate, lace-like leaves",
    image: brazilian,
  },
  {
    name: "Cryptocoryne parva",
    scientificName: "Cryptocoryne parva",
    light: "Low to moderate",
    temperature: "72-80°F",
    pH: "6.0-7.5",
    growth: "Slow",
    difficulty: "Moderate",
    idealTank: "Soft substrate",
    notes: "Small, subtle foreground plant",
    image: parva,
  },
  {
    name: "Dwarf Hygrophila",
    scientificName: "Hygrophila polysperma var. angustifolia",
    light: "Moderate",
    temperature: "72-82°F",
    pH: "6.5-7.5",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Nutrient-rich substrate",
    notes: "Compact and bushy",
    image: hygrophilia,
  },
  {
    name: "Pogostemon helferi",
    scientificName: "Pogostemon helferi",
    light: "High",
    temperature: "72-82°F",
    pH: "6.0-7.5",
    growth: "Moderate",
    difficulty: "Moderate",
    idealTank: "High light with CO2 enrichment",
    notes: "Very delicate; requires stable conditions",
    image: pogostomon,
  },
];

// Sample Data for Saltwater Plants (Macroalgae, 20 items)
const saltwaterPlants = [
  {
    name: "Chaetomorpha",
    scientificName: "Chaetomorpha linum",
    light: "Moderate to high",
    temperature: "72-82°F",
    pH: "N/A (salinity based)",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Refugium or live rock",
    notes: "Excellent nutrient exporter",
    image: "",
  },
  {
    name: "Caulerpa taxifolia",
    scientificName: "Caulerpa taxifolia",
    light: "High",
    temperature: "72-82°F",
    pH: "N/A",
    growth: "Very fast (invasive)",
    difficulty: "Moderate",
    idealTank: "High light reef tanks",
    notes: "Requires careful control",
    image: "",
  },
  {
    name: "Halimeda",
    scientificName: "Halimeda opuntia",
    light: "High",
    temperature: "75-82°F",
    pH: "N/A",
    growth: "Moderate",
    difficulty: "Moderate",
    idealTank: "Stable reef tanks",
    notes: "Calcified; adds structure",
    image: "",
  },
  {
    name: "Codium",
    scientificName: "Codium fragile",
    light: "Moderate",
    temperature: "72-80°F",
    pH: "N/A",
    growth: "Moderate",
    difficulty: "Easy",
    idealTank: "Low nutrient tanks",
    notes: "Sponge-like texture",
    image: "",
  },
  {
    name: "Gracilaria",
    scientificName: "Gracilaria tikvahiae",
    light: "Moderate to high",
    temperature: "72-82°F",
    pH: "N/A",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Nutrient-rich tanks",
    notes: "Edible and decorative",
    image: "",
  },
  {
    name: "Laurencia",
    scientificName: "Laurencia obtusa",
    light: "High",
    temperature: "75-82°F",
    pH: "N/A",
    growth: "Moderate",
    difficulty: "Moderate",
    idealTank: "Reef tanks",
    notes: "Frilly, red-hued",
    image: "",
  },
  {
    name: "Sargassum",
    scientificName: "Sargassum muticum",
    light: "High",
    temperature: "70-80°F",
    pH: "N/A",
    growth: "Moderate",
    difficulty: "Moderate",
    idealTank: "Large tanks or refugiums",
    notes: "Provides hiding spots",
    image: "",
  },
  {
    name: "Ulva lactuca",
    scientificName: "Ulva lactuca",
    light: "High",
    temperature: "68-78°F",
    pH: "N/A",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Open water; nutrient export",
    notes: "Edible; oxygenates water",
    image: "",
  },
  {
    name: "Chaetomorpha aerea",
    scientificName: "Chaetomorpha aerea",
    light: "Moderate to high",
    temperature: "72-82°F",
    pH: "N/A",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Refugium or live rock",
    notes: "Similar to other Chaetomorpha species",
    image: "",
  },
  {
    name: "Caulerpa racemosa",
    scientificName: "Caulerpa racemosa",
    light: "High",
    temperature: "72-82°F",
    pH: "N/A",
    growth: "Fast",
    difficulty: "Moderate",
    idealTank: "High light tanks",
    notes: "Attractive green tints",
    image: "",
  },
  {
    name: "Chaetomorpha prolifera",
    scientificName: "Chaetomorpha prolifera",
    light: "Moderate",
    temperature: "72-82°F",
    pH: "N/A",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Refugium",
    notes: "Effective nutrient removal",
    image: "",
  },
  {
    name: "Cladophora",
    scientificName: "Cladophora vagabunda",
    light: "Moderate to high",
    temperature: "72-82°F",
    pH: "N/A",
    growth: "Fast",
    difficulty: "Moderate",
    idealTank: "Well-established reef tanks",
    notes: "Filamentous, natural look",
    image: "",
  },
  {
    name: "Padina pavonica",
    scientificName: "Padina pavonica",
    light: "High",
    temperature: "75-82°F",
    pH: "N/A",
    growth: "Slow",
    difficulty: "Moderate",
    idealTank: "Reef tanks",
    notes: "Calcified, fan-shaped",
    image: "",
  },
  {
    name: "Dictyota dichotoma",
    scientificName: "Dictyota dichotoma",
    light: "High",
    temperature: "75-82°F",
    pH: "N/A",
    growth: "Moderate",
    difficulty: "Moderate",
    idealTank: "High light tanks",
    notes: "Brownish; leather-like texture",
    image: "",
  },
  {
    name: "Turbinaria ornata",
    scientificName: "Turbinaria ornata",
    light: "High",
    temperature: "75-82°F",
    pH: "N/A",
    growth: "Slow to moderate",
    difficulty: "Moderate",
    idealTank: "Large reef tanks",
    notes: "Fan-like; robust holdfasts",
    image: "",
  },
  {
    name: "Caulerpa sertularioides",
    scientificName: "Caulerpa sertularioides",
    light: "High",
    temperature: "72-82°F",
    pH: "N/A",
    growth: "Fast",
    difficulty: "Moderate",
    idealTank: "High nutrient, high light tanks",
    notes: "Fine, feathery appearance",
    image: "",
  },
  {
    name: "Hypnea musciformis",
    scientificName: "Hypnea musciformis",
    light: "Moderate to high",
    temperature: "72-82°F",
    pH: "N/A",
    growth: "Moderate",
    difficulty: "Moderate",
    idealTank: "Reef tanks with moderate nutrients",
    notes: "Reddish-brown; branching",
    image: "",
  },
  {
    name: "Acanthophora spicifera",
    scientificName: "Acanthophora spicifera",
    light: "Moderate",
    temperature: "72-80°F",
    pH: "N/A",
    growth: "Fast",
    difficulty: "Easy",
    idealTank: "Nutrient-rich tanks",
    notes: "Bushy, fine-textured",
    image: "",
  },
  {
    name: "Gelidium amansii",
    scientificName: "Gelidium amansii",
    light: "High",
    temperature: "68-78°F",
    pH: "N/A",
    growth: "Moderate",
    difficulty: "Moderate",
    idealTank: "Cooler reef tanks",
    notes: "Red algae; used in agar production",
    image: "",
  },
  {
    name: "Caulerpa lentillifera",
    scientificName: "Caulerpa lentillifera",
    light: "High",
    temperature: "72-82°F",
    pH: "N/A",
    growth: "Fast",
    difficulty: "Moderate",
    idealTank: "Nutrient-rich tanks",
    notes: "Sea grapes; edible",
    image: "",
  },
];

// Plants Page Component
function Plants() {
  const [freshwaterOpen, setFreshwaterOpen] = useState(false);
  const [saltwaterOpen, setSaltwaterOpen] = useState(false);

  return (
    <div className="plants-page">
      {/* Header */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">AquaHaven</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
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
        </ul>
      </nav>

      {/* Main Content */}
      <main className="plants-content">
        <h1>Top Aquarium Plants</h1>

        {/* Freshwater Plants Section */}
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => setFreshwaterOpen(!freshwaterOpen)}
          >
            Freshwater Plants
            <span className="dropdown-icon">
              {freshwaterOpen ? "-" : "+"}
            </span>
          </div>
          {freshwaterOpen && (
            <div className="dropdown-content">
              <ul className="plant-list">
                {freshwaterPlants.map((plant, idx) => (
                  <li key={idx}>
                    <PlantCard plant={plant} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Saltwater Plants Section */}
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => setSaltwaterOpen(!saltwaterOpen)}
          >
            Saltwater Plants (Macroalgae)
            <span className="dropdown-icon">
              {saltwaterOpen ? "-" : "+"}
            </span>
          </div>
          {saltwaterOpen && (
            <div className="dropdown-content">
              <ul className="plant-list">
                {saltwaterPlants.map((plant, idx) => (
                  <li key={idx}>
                    <PlantCard plant={plant} />
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
      </footer>
    </div>
  );
}

export default Plants;
