// src/pages/Fishes.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Fishes.css";
import betta from '../images/fishes/betta.jpg';
import guppy from '../images/fishes/guppy.webp';
import neon from '../images/fishes/neon.jpeg';
import rumy from '../images/fishes/rumy.jpg';
import ember from '../images/fishes/ember.webp';
import skirt from '../images/fishes/skirt.jpg';
import glowlight from '../images/fishes/glowlight.jpg';
import harlequin from '../images/fishes/harlequin.jpeg';
import chili from '../images/fishes/chili.webp';
import zebra from '../images/fishes/zebra.jpg';
import cpd from '../images/fishes/cpd.jpg';
import pearl from '../images/fishes/pearl.jpeg';
import endlers from '../images/fishes/endler.webp';
import platy from '../images/fishes/platy.webp';
import molly from '../images/fishes/molly.webp';
import leopard from '../images/fishes/leopard.webp';
import white from '../images/fishes/white.jpg';
import swordtail from '../images/fishes/swordtail.jpg'
import otocinclus from '../images/fishes/otocinclus.jpg';
import corydoras from '../images/fishes/corydoras.jpg'


// ----------------- Reusable FishCard Component -----------------
function FishCard({ fish }) {
  const [imagePreview, setImagePreview] = useState(
    fish.image || "https://via.placeholder.com/300x200?text=No+Image"
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
    <div className="fish-card">
      <div className="fish-image">
        <img src={imagePreview} alt={fish.name} />
      </div>
      <div className="fish-details">
        <h3>{fish.name}</h3>
        <ul>
          <li>
            <strong>1 month:</strong> {fish.details["1 month"]}
          </li>
          <li>
            <strong>6 months:</strong> {fish.details["6 months"]}
          </li>
          <li>
            <strong>1 year:</strong> {fish.details["1 year"]}
          </li>
          <li>
            <strong>Lifespan:</strong> {fish.details.lifespan}
          </li>
          <li>
            <strong>Ideal Tank:</strong> {fish.details.idealTank}
          </li>
          <li>
            <strong>Compatibility:</strong> {fish.details.compatibility}
          </li>
          <li>
            <strong>Breeding:</strong> {fish.details.breeding}
          </li>
          <li>
            <strong>Grouping:</strong> {fish.details.grouping}
          </li>
          <li>
            <strong>Diet:</strong> {fish.details.diet}
          </li>
          <li>
            <strong>Environment:</strong> {fish.details.environment}
          </li>
        </ul>
      </div>
    </div>
  );
}

// ----------------- Data for Top 100 Aquarium Fish -----------------

// Freshwater Aquarium Fish (Items 1-77)
const freshwaterFishes = [
  {
    name: "Betta Fish (Siamese Fighting Fish)",
    image: betta,
    details: {
      "1 month": "1.5 inches",
      "6 months": "2 inches",
      "1 year": "2.5 inches",
      lifespan: "3-5 years",
      idealTank: "5 Gallons",
      compatibility: "Aggressive; keep alone",
      breeding: "Bubble nester",
      grouping: "Solitary",
      diet: "Carnivorous – primarily insects",
      environment: "Planted, calm water",
    },
  },
  {
    name: "Guppy Fish",
    image: guppy,
    details: {
      "1 month": "0.4 inches",
      "6 months": "0.8 inches",
      "1 year": "1.2 inches",
      lifespan: "2-3 years",
      idealTank: "5-10 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Livebearer",
      grouping: "Small groups",
      diet: "Omnivorous – flakes, algae, brine shrimp",
      environment: "Planted, open water",
    },
  },
  {
    name: "Neon Tetra",
    image: neon,
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.5 inches",
      lifespan: "5 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg scatterer",
      grouping: "Schooling (6+)",
      diet: "Omnivorous – pellets, flakes",
      environment: "Planted, dim lighting",
    },
  },
  {
    name: "Rummy Nose Tetra",
    image: rumy,
    details: {
      "1 month": "0.6 inches",
      "6 months": "1.1 inches",
      "1 year": "1.6 inches",
      lifespan: "6-8 years",
      idealTank: "15 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg scatterer",
      grouping: "Schooling (8+)",
      diet: "Omnivorous",
      environment: "Planted, soft water",
    },
  },
  {
    name: "Ember Tetra",
    image: ember,
    details: {
      "1 month": "0.4 inches",
      "6 months": "0.8 inches",
      "1 year": "1.2 inches",
      lifespan: "4-5 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg scatterer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Planted, low light",
    },
  },
  {
    name: "Black Skirt Tetra",
    image: skirt,
    details: {
      "1 month": "0.6 inches",
      "6 months": "1.2 inches",
      "1 year": "1.8 inches",
      lifespan: "6-8 years",
      idealTank: "15 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg scatterer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Planted, moderate water flow",
    },
  },
  {
    name: "Glowlight Tetra",
    image: glowlight,
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.5 inches",
      lifespan: "5 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg scatterer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Planted, bright lighting",
    },
  },
  {
    name: "Harlequin Rasbora",
    image: harlequin,
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.5 inches",
      lifespan: "6 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg scatterer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Planted, soft water",
    },
  },
  {
    name: "Chili Rasbora",
    image: chili,
    details: {
      "1 month": "0.5 inches",
      "6 months": "0.8 inches",
      "1 year": "1 inch",
      lifespan: "4 years",
      idealTank: "5 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg layer",
      grouping: "Schooling (5+)",
      diet: "Omnivorous – small pellets, live food",
      environment: "Heavily planted, low flow",
    },
  },
  {
    name: "Celestial Pearl Danio",
    image: cpd,
    details: {
      "1 month": "0.4 inches",
      "6 months": "0.9 inches",
      "1 year": "1.3 inches",
      lifespan: "4-5 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg scatterer",
      grouping: "Small schooling",
      diet: "Omnivorous – flakes, micro worms",
      environment: "Planted, dim lighting",
    },
  },
  {
    name: "Zebra Danio",
    image: zebra,
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.5 inches",
      lifespan: "4-5 years",
      idealTank: "10 Gallons",
      compatibility: "Very active; schooling",
      breeding: "Egg scatterer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Planted, open water",
    },
  },
  {
    name: "Leopard Danio",
    image: leopard,
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.5 inches",
      lifespan: "4-5 years",
      idealTank: "10 Gallons",
      compatibility: "Active; schooling",
      breeding: "Egg scatterer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Planted, moderate flow",
    },
  },
  {
    name: "Pearl Danio",
    image: pearl,
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.5 inches",
      lifespan: "4-5 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg scatterer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Planted, clear water",
    },
  },
  {
    name: "White Cloud Mountain Minnow",
    image: white,
    details: {
      "1 month": "0.6 inches",
      "6 months": "1.2 inches",
      "1 year": "1.8 inches",
      lifespan: "5-7 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg scatterer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Cool, well-planted",
    },
  },
  {
    name: "Endler’s Livebearer",
    image: endlers,
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.5 inches",
      lifespan: "2-3 years",
      idealTank: "5 Gallons",
      compatibility: "Peaceful; can be kept in small groups",
      breeding: "Livebearer",
      grouping: "Small groups (3-5)",
      diet: "Omnivorous",
      environment: "Lightly planted",
    },
  },
  {
    name: "Platy Fish",
    image: platy,
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.5 inches",
      lifespan: "2-3 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Livebearer",
      grouping: "Small groups",
      diet: "Omnivorous",
      environment: "Planted, well-filtered",
    },
  },
  {
    name: "Molly Fish",
    image: molly,
    details: {
      "1 month": "0.7 inches",
      "6 months": "1.3 inches",
      "1 year": "1.8 inches",
      lifespan: "3-4 years",
      idealTank: "15 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Livebearer",
      grouping: "Small groups",
      diet: "Omnivorous",
      environment: "Planted, slightly brackish possible",
    },
  },
  {
    name: "Swordtail Fish",
    image: swordtail,
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.4 inches",
      "1 year": "2 inches",
      lifespan: "3-4 years",
      idealTank: "15 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Livebearer",
      grouping: "Small groups",
      diet: "Omnivorous",
      environment: "Planted, open water",
    },
  },
  {
    name: "Corydoras Catfish (Various types)",
    image: corydoras,
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.5 inches",
      lifespan: "5-7 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg layer",
      grouping: "Schooling (6+)",
      diet: "Omnivorous – sinking pellets",
      environment: "Sandy substrate, gentle flow",
    },
  },
  {
    name: "Otocinclus Catfish",
    image: otocinclus,
    details: {
      "1 month": "0.4 inches",
      "6 months": "0.8 inches",
      "1 year": "1.2 inches",
      lifespan: "3-4 years",
      idealTank: "10 Gallons",
      compatibility: "Very peaceful; excellent algae eaters",
      breeding: "Egg layer",
      grouping: "Schooling (5+)",
      diet: "Algae, biofilm",
      environment: "Planted, low flow",
    },
  },
  {
    name: "Bristlenose Pleco",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "10-12 years",
      idealTank: "20 Gallons",
      compatibility: "Peaceful; best kept alone",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous – algae wafers, vegetables",
      environment: "Planted, driftwood decor",
    },
  },
  {
    name: "Common Pleco",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "1.8 inches",
      "1 year": "2.5 inches",
      lifespan: "15-20 years",
      idealTank: "50 Gallons+",
      compatibility: "Peaceful but grows very large",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous – algae, veggies",
      environment: "Spacious, heavily planted",
    },
  },
  {
    name: "Clown Pleco",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "1.8 inches",
      "1 year": "2.5 inches",
      lifespan: "10-12 years",
      idealTank: "30 Gallons",
      compatibility: "Peaceful; best kept singly",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous – algae, sinking foods",
      environment: "Planted, dark decor",
    },
  },
  {
    name: "Rubber Lip Pleco",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "1.8 inches",
      "1 year": "2.5 inches",
      lifespan: "10-12 years",
      idealTank: "30 Gallons",
      compatibility: "Peaceful; solitary",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous",
      environment: "Planted, driftwood",
    },
  },
  {
    name: "Kuhli Loach",
    image: "",
    details: {
      "1 month": "0.4 inches",
      "6 months": "0.8 inches",
      "1 year": "1.2 inches",
      lifespan: "6-8 years",
      idealTank: "15 Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg layer",
      grouping: "Schooling (5-6)",
      diet: "Omnivorous – sinking pellets, small worms",
      environment: "Planted, sandy substrate",
    },
  },
  {
    name: "Clown Loach",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "10-15 years",
      idealTank: "30 Gallons+",
      compatibility: "Peaceful; best in groups",
      breeding: "Egg layer",
      grouping: "Small groups",
      diet: "Omnivorous – live food, pellets",
      environment: "Planted, spacious",
    },
  },
  {
    name: "Yoyo Loach",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "10-12 years",
      idealTank: "30 Gallons+",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Small groups",
      diet: "Omnivorous",
      environment: "Planted, low flow",
    },
  },
  {
    name: "Hillstream Loach",
    image: "",
    details: {
      "1 month": "0.3 inches",
      "6 months": "0.6 inches",
      "1 year": "0.8 inches",
      lifespan: "5-6 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; specialized",
      breeding: "Egg layer",
      grouping: "Small groups",
      diet: "Omnivorous – algae, biofilm",
      environment: "Cool, fast-moving water",
    },
  },
  {
    name: "Dwarf Pea Puffer",
    image: "",
    details: {
      "1 month": "0.5 inches",
      "6 months": "1 inch",
      "1 year": "1.2 inches",
      lifespan: "4-5 years",
      idealTank: "5 Gallons",
      compatibility: "Aggressive; keep alone",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous – snails, bloodworms",
      environment: "Heavily planted, with hiding places",
    },
  },
  {
    name: "Amazon Puffer",
    image: "",
    details: {
      "1 month": "0.7 inches",
      "6 months": "1.2 inches",
      "1 year": "1.6 inches",
      lifespan: "3-4 years",
      idealTank: "10 Gallons",
      compatibility: "Moderately aggressive",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Planted, spacious",
    },
  },
  {
    name: "Figure Eight Puffer",
    image: "",
    details: {
      "1 month": "0.7 inches",
      "6 months": "1.2 inches",
      "1 year": "1.6 inches",
      lifespan: "3-4 years",
      idealTank: "10 Gallons",
      compatibility: "Aggressive; solitary",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Planted, with caves",
    },
  },
  {
    name: "Green Spotted Puffer",
    image: "",
    details: {
      "1 month": "0.7 inches",
      "6 months": "1.2 inches",
      "1 year": "1.6 inches",
      lifespan: "3-4 years",
      idealTank: "10 Gallons",
      compatibility: "Aggressive; solitary",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Planted, rocky",
    },
  },
  {
    name: "African Dwarf Frog",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.2 inches",
      "1 year": "1.6 inches",
      lifespan: "5-6 years",
      idealTank: "10 Gallons",
      compatibility: "Compatible with small fish",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Planted, shallow",
    },
  },
  {
    name: "Cherry Shrimp",
    image: "",
    details: {
      "1 month": "0.3 inches",
      "6 months": "1 inch",
      "1 year": "1.2 inches",
      lifespan: "1-2 years",
      idealTank: "5 Gallons",
      compatibility: "Peaceful; best in colonies",
      breeding: "Egg layer",
      grouping: "Colony",
      diet: "Omnivorous – algae, biofilm",
      environment: "Planted, with moss",
    },
  },
  {
    name: "Amano Shrimp",
    image: "",
    details: {
      "1 month": "0.4 inches",
      "6 months": "0.9 inches",
      "1 year": "1.3 inches",
      lifespan: "2-3 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; colony",
      breeding: "Egg layer",
      grouping: "Colony",
      diet: "Omnivorous – biofilm, algae",
      environment: "Planted, clean water",
    },
  },
  {
    name: "Ghost Shrimp",
    image: "",
    details: {
      "1 month": "0.6 inches",
      "6 months": "1 inch",
      "1 year": "1.4 inches",
      lifespan: "2-3 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Small groups",
      diet: "Omnivorous",
      environment: "Planted, with hiding spots",
    },
  },
  {
    name: "Bamboo Shrimp",
    image: "",
    details: {
      "1 month": "0.7 inches",
      "6 months": "1.2 inches",
      "1 year": "1.6 inches",
      lifespan: "2-3 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Filter feeder",
      environment: "Planted, moderate flow",
    },
  },
  {
    name: "Crystal Red Shrimp",
    image: "",
    details: {
      "1 month": "0.5 inches",
      "6 months": "0.9 inches",
      "1 year": "1.3 inches",
      lifespan: "1-2 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful; colony",
      breeding: "Egg layer",
      grouping: "Colony",
      diet: "Omnivorous – algae, biofilm",
      environment: "Planted, stable water",
    },
  },
  {
    name: "Vampire Shrimp",
    image: "",
    details: {
      "1 month": "0.6 inches",
      "6 months": "1 inch",
      "1 year": "1.4 inches",
      lifespan: "2-3 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous",
      environment: "Planted, moderate flow",
    },
  },
  {
    name: "Nerite Snail",
    image: "",
    details: {
      "1 month": "0.5 inches",
      "6 months": "0.7 inches",
      "1 year": "0.9 inches",
      lifespan: "1-2 years",
      idealTank: "5 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Algae, biofilm",
      environment: "Planted, low flow",
    },
  },
  {
    name: "Mystery Snail",
    image: "",
    details: {
      "1 month": "0.6 inches",
      "6 months": "0.8 inches",
      "1 year": "1 inch",
      lifespan: "1-2 years",
      idealTank: "5 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Algae, detritus",
      environment: "Planted, clean water",
    },
  },
  {
    name: "Rabbit Snail",
    image: "",
    details: {
      "1 month": "0.6 inches",
      "6 months": "0.8 inches",
      "1 year": "1 inch",
      lifespan: "1-2 years",
      idealTank: "5 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Algae, detritus",
      environment: "Planted, gentle flow",
    },
  },
  {
    name: "Assassin Snail",
    image: "",
    details: {
      "1 month": "0.6 inches",
      "6 months": "0.8 inches",
      "1 year": "1 inch",
      lifespan: "1-2 years",
      idealTank: "5 Gallons",
      compatibility: "Peaceful; beneficial",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Small invertebrates",
      environment: "Planted, well-oxygenated",
    },
  },
  {
    name: "Apple Snail",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "2-3 years",
      idealTank: "10 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Herbivorous",
      environment: "Planted, with hiding spots",
    },
  },
  {
    name: "Angelfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10-12 years",
      idealTank: "20 Gallons",
      compatibility: "Semi-aggressive",
      breeding: "Egg layer",
      grouping: "Pair or solitary",
      diet: "Omnivorous",
      environment: "Planted, tall decor",
    },
  },
  {
    name: "Discus Fish",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2.5 inches",
      "1 year": "4 inches",
      lifespan: "10-15 years",
      idealTank: "50+ Gallons",
      compatibility: "Peaceful but sensitive",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous – specialized pellets",
      environment: "Warm, soft water",
    },
  },
  {
    name: "German Blue Ram Cichlid",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "5-7 years",
      idealTank: "20 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Planted",
    },
  },
  {
    name: "Bolivian Ram Cichlid",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "5-7 years",
      idealTank: "20 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Planted, rocky",
    },
  },
  {
    name: "Electric Blue Acara",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "7-10 years",
      idealTank: "30 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Planted",
    },
  },
  {
    name: "Kribensis Cichlid",
    image: "",
    details: {
      "1 month": "0.7 inches",
      "6 months": "1.3 inches",
      "1 year": "2 inches",
      lifespan: "6-8 years",
      idealTank: "20 Gallons",
      compatibility: "Semi-aggressive",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Planted, rocky",
    },
  },
  {
    name: "Convict Cichlid",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "5-7 years",
      idealTank: "20 Gallons",
      compatibility: "Aggressive",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Spacious, minimal decor",
    },
  },
  {
    name: "Firemouth Cichlid",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10 years",
      idealTank: "30 Gallons",
      compatibility: "Semi-aggressive",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Planted, rocky",
    },
  },
  {
    name: "Jack Dempsey Cichlid",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2.5 inches",
      "1 year": "3.5 inches",
      lifespan: "8-10 years",
      idealTank: "40+ Gallons",
      compatibility: "Aggressive",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Spacious, rocky",
    },
  },
  {
    name: "Oscar Fish",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2.5 inches",
      "1 year": "4 inches",
      lifespan: "10-15 years",
      idealTank: "75+ Gallons",
      compatibility: "Aggressive",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Large, spacious",
    },
  },
  {
    name: "Flowerhorn Cichlid",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2.5 inches",
      "1 year": "4 inches",
      lifespan: "8-10 years",
      idealTank: "75+ Gallons",
      compatibility: "Aggressive",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Large, tropical",
    },
  },
  {
    name: "Red Devil Cichlid",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2.5 inches",
      "1 year": "4 inches",
      lifespan: "8-10 years",
      idealTank: "75+ Gallons",
      compatibility: "Aggressive",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Spacious",
    },
  },
  {
    name: "Green Terror Cichlid",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2.5 inches",
      "1 year": "4 inches",
      lifespan: "10-12 years",
      idealTank: "75+ Gallons",
      compatibility: "Aggressive",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Spacious",
    },
  },
  {
    name: "Frontosa Cichlid",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2.5 inches",
      "1 year": "4 inches",
      lifespan: "15-20 years",
      idealTank: "100+ Gallons",
      compatibility: "Peaceful with similar",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Large, rocky",
    },
  },
  {
    name: "Texas Cichlid",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10 years",
      idealTank: "40+ Gallons",
      compatibility: "Aggressive",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous",
      environment: "Spacious, rocky",
    },
  },
  {
    name: "Arowana (Silver/Golden/Asian)",
    image: "",
    details: {
      "1 month": "1.5 inches",
      "6 months": "3 inches",
      "1 year": "5 inches",
      lifespan: "20-25 years",
      idealTank: "150+ Gallons",
      compatibility: "Aggressive; requires ample space",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Large, open",
    },
  },
  {
    name: "Bala Shark",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10-15 years",
      idealTank: "100+ Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg layer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Large, open",
    },
  },
  {
    name: "Rainbow Shark",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "8-10 years",
      idealTank: "75+ Gallons",
      compatibility: "Semi-aggressive",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Large, planted",
    },
  },
  {
    name: "Red Tail Shark",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "8-10 years",
      idealTank: "75+ Gallons",
      compatibility: "Aggressive",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Carnivorous",
      environment: "Large, rocky",
    },
  },
  {
    name: "Siamese Algae Eater",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "5-7 years",
      idealTank: "20+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Herbivorous",
      environment: "Planted",
    },
  },
  {
    name: "Silver Dollar Fish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10-12 years",
      idealTank: "50+ Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg layer",
      grouping: "Schooling",
      diet: "Herbivorous",
      environment: "Large, open",
    },
  },
  {
    name: "Dwarf Gourami",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "5-7 years",
      idealTank: "20+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Planted, calm",
    },
  },
  {
    name: "Paradise Fish",
    image: "",
    details: {
      "1 month": "0.7 inches",
      "6 months": "1.2 inches",
      "1 year": "1.6 inches",
      lifespan: "4-6 years",
      idealTank: "15+ Gallons",
      compatibility: "Aggressive",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Brackish",
    },
  },
  {
    name: "Archer Fish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "8-10 years",
      idealTank: "40+ Gallons",
      compatibility: "Semi-aggressive",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Carnivorous",
      environment: "Spacious, clear water",
    },
  },
  {
    name: "Rope Fish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10-12 years",
      idealTank: "50+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Carnivorous",
      environment: "Dim, planted",
    },
  },
  {
    name: "African Butterfly Fish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10 years",
      idealTank: "40+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Planted, rocky",
    },
  },
  {
    name: "Dojo Loach",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "10-15 years",
      idealTank: "30+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Small groups",
      diet: "Omnivorous",
      environment: "Planted, sandy",
    },
  },
  {
    name: "Goldfish (Comet, Fantail, Oranda, Ranchu, Ryukin)",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10-15 years",
      idealTank: "30+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous",
      environment: "Spacious, well-filtered",
    },
  },
  {
    name: "Black Moor Goldfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10-12 years",
      idealTank: "30+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous",
      environment: "Cool, spacious",
    },
  },
  {
    name: "Bubble Eye Goldfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "8-10 years",
      idealTank: "30+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous",
      environment: "Calm, cool water",
    },
  },
  {
    name: "Telescope Goldfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10-15 years",
      idealTank: "30+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous",
      environment: "Spacious, well-oxygenated",
    },
  },
  {
    name: "Telescope Goldfish (Duplicate)",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "2 inches",
      "1 year": "3 inches",
      lifespan: "10-15 years",
      idealTank: "30+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Solitary",
      diet: "Omnivorous",
      environment: "Spacious, well-oxygenated",
    },
  },
];

// Saltwater Aquarium Fish (Items 78-100)
const saltwaterFishes = [
  {
    name: "Ocellaris Clownfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "6-10 years",
      idealTank: "20 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Percula Clownfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "6-10 years",
      idealTank: "20 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Maroon Clownfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "6-10 years",
      idealTank: "20 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Tomato Clownfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "6-10 years",
      idealTank: "20 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Banggai Cardinalfish",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.2 inches",
      "1 year": "1.5 inches",
      lifespan: "5-7 years",
      idealTank: "30 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Pajama Cardinalfish",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.2 inches",
      "1 year": "1.5 inches",
      lifespan: "5-7 years",
      idealTank: "30 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Royal Gramma",
    image: "",
    details: {
      "1 month": "0.9 inches",
      "6 months": "1.4 inches",
      "1 year": "1.8 inches",
      lifespan: "6-8 years",
      idealTank: "30 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Firefish Goby",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.3 inches",
      "1 year": "1.7 inches",
      lifespan: "5-7 years",
      idealTank: "20 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Yellow Watchman Goby",
    image: "",
    details: {
      "1 month": "0.8 inches",
      "6 months": "1.3 inches",
      "1 year": "1.7 inches",
      lifespan: "5-7 years",
      idealTank: "20 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Mandarin Goby",
    image: "",
    details: {
      "1 month": "0.9 inches",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "6-8 years",
      idealTank: "30 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Clown Goby",
    image: "",
    details: {
      "1 month": "0.9 inches",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "6-8 years",
      idealTank: "30 Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Blue Tang (Regal Tang)",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2 inches",
      "1 year": "2.5 inches",
      lifespan: "8-10 years",
      idealTank: "75+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg scatterer",
      grouping: "Pair",
      diet: "Herbivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Yellow Tang",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2 inches",
      "1 year": "2.5 inches",
      lifespan: "8-10 years",
      idealTank: "75+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg scatterer",
      grouping: "Pair",
      diet: "Herbivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Kole Tang",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2 inches",
      "1 year": "2.5 inches",
      lifespan: "8-10 years",
      idealTank: "75+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg scatterer",
      grouping: "Pair",
      diet: "Herbivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Powder Blue Tang",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2 inches",
      "1 year": "2.5 inches",
      lifespan: "8-10 years",
      idealTank: "75+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg scatterer",
      grouping: "Pair",
      diet: "Herbivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Flame Angel",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.7 inches",
      "1 year": "2.3 inches",
      lifespan: "6-8 years",
      idealTank: "40+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Coral Beauty Angel",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.7 inches",
      "1 year": "2.3 inches",
      lifespan: "6-8 years",
      idealTank: "40+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Emperor Angelfish",
    image: "",
    details: {
      "1 month": "1.2 inches",
      "6 months": "2 inches",
      "1 year": "2.8 inches",
      lifespan: "8-10 years",
      idealTank: "75+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Large reef tank",
    },
  },
  {
    name: "Copperband Butterflyfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.8 inches",
      "1 year": "2.5 inches",
      lifespan: "6-8 years",
      idealTank: "40+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Bannerfish (Heniochus)",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.8 inches",
      "1 year": "2.5 inches",
      lifespan: "6-8 years",
      idealTank: "40+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Small group",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Foxface Rabbitfish",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.8 inches",
      "1 year": "2.5 inches",
      lifespan: "8-10 years",
      idealTank: "40+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Pair",
      diet: "Herbivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Six Line Wrasse",
    image: "",
    details: {
      "1 month": "1 inch",
      "6 months": "1.7 inches",
      "1 year": "2.3 inches",
      lifespan: "6-8 years",
      idealTank: "40+ Gallons",
      compatibility: "Peaceful",
      breeding: "Egg layer",
      grouping: "Small group",
      diet: "Carnivorous",
      environment: "Reef tank",
    },
  },
  {
    name: "Green Chromis",
    image: "",
    details: {
      "1 month": "0.9 inches",
      "6 months": "1.5 inches",
      "1 year": "2 inches",
      lifespan: "6-8 years",
      idealTank: "40+ Gallons",
      compatibility: "Peaceful; schooling",
      breeding: "Egg layer",
      grouping: "Schooling",
      diet: "Omnivorous",
      environment: "Reef tank",
    },
  },
];

// ----------------- Fishes Page Component -----------------
function Fishes() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen((prevState) => !prevState);
    };

  // Dropdown state for Freshwater and Saltwater
  const [freshwaterOpen, setFreshwaterOpen] = useState(true);
  const [saltwaterOpen, setSaltwaterOpen] = useState(true);

  // Dropdown state for individual tank size groups
  const [freshwaterTankOpen, setFreshwaterTankOpen] = useState({});
  const [saltwaterTankOpen, setSaltwaterTankOpen] = useState({});

  // For this example, we group fishes by category:
  // Let’s assume freshwater fishes are grouped into 4 tank sizes:
  const freshwaterSizes = ["Small Tank (≤10 Gallons)", "Medium Tank (10-20 Gallons)", "Large Tank (20-40 Gallons)", "Extra Large Tank (40+ Gallons)"];
  // We'll split the 77 freshwater fish roughly among these groups:
  const freshwaterGroups = {
    "Small Tank (≤10 Gallons)": freshwaterFishes.slice(0, 20),
    "Medium Tank (10-20 Gallons)": freshwaterFishes.slice(20, 45),
    "Large Tank (20-40 Gallons)": freshwaterFishes.slice(45, 65),
    "Extra Large Tank (40+ Gallons)": freshwaterFishes.slice(65),
  };

  // Saltwater fishes grouped into 4 tank sizes:
  const saltwaterSizes = ["Nano Tank (≤10 Gallons)", "Small Reef Tank (10-30 Gallons)", "Medium Reef Tank (30-60 Gallons)", "Large Reef Tank (60+ Gallons)"];
  // We'll split the 23 saltwater fish roughly among these groups:
  const saltwaterGroups = {
    "Nano Tank (≤10 Gallons)": saltwaterFishes.slice(0, 5),
    "Small Reef Tank (10-30 Gallons)": saltwaterFishes.slice(5, 12),
    "Medium Reef Tank (30-60 Gallons)": saltwaterFishes.slice(12, 18),
    "Large Reef Tank (60+ Gallons)": saltwaterFishes.slice(18),
  };

  const toggleFreshwaterGroup = (group) => {
    setFreshwaterTankOpen((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  const toggleSaltwaterGroup = (group) => {
    setSaltwaterTankOpen((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  return (
    <div className="fishes-page">
      {/* Header */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">AquaHaven</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
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
      <main className="fishes-content">
        <h1>Top 100 Aquarium Fish for Pets</h1>

        {/* Freshwater Section */}
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => setFreshwaterOpen(!freshwaterOpen)}
          >
            Freshwater Aquarium Fish
            <span className="dropdown-icon">
              {freshwaterOpen ? "-" : "+"}
            </span>
          </div>
          {freshwaterOpen &&
            Object.keys(freshwaterGroups).map((group) => (
              <div key={group} className="tank-size-section">
                <div
                  className="tank-size-header"
                  onClick={() => toggleFreshwaterGroup(group)}
                >
                  {group}
                  <span className="dropdown-icon">
                    {freshwaterTankOpen[group] ? "-" : "+"}
                  </span>
                </div>
                {freshwaterTankOpen[group] && (
                  <div className="tank-size-content">
                    <ul className="fish-list">
                      {freshwaterGroups[group].map((fish, idx) => (
                        <li key={idx}>
                          <FishCard fish={fish} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Saltwater Section */}
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => setSaltwaterOpen(!saltwaterOpen)}
          >
            Saltwater Aquarium Fish
            <span className="dropdown-icon">
              {saltwaterOpen ? "-" : "+"}
            </span>
          </div>
          {saltwaterOpen &&
            Object.keys(saltwaterGroups).map((group) => (
              <div key={group} className="tank-size-section">
                <div
                  className="tank-size-header"
                  onClick={() => toggleSaltwaterGroup(group)}
                >
                  {group}
                  <span className="dropdown-icon">
                    {saltwaterTankOpen[group] ? "-" : "+"}
                  </span>
                </div>
                {saltwaterTankOpen[group] && (
                  <div className="tank-size-content">
                    <ul className="fish-list">
                      {saltwaterGroups[group].map((fish, idx) => (
                        <li key={idx}>
                          <FishCard fish={fish} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Aquarium Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Fishes;
