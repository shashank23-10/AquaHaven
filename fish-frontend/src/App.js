import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Fishes from "./components/Fishes";
import Plants from "./components/Plants";
import Woods from "./components/Woods";
import Decors from "./components/Decors";
import DIYs from "./components/DIYs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fishes" element={<Fishes />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/woods" element={<Woods />} />
        <Route path="/decors" element={<Decors />} />
        <Route path="/diy" element={<DIYs />} />
      </Routes>
    </Router>
  );
}

export default App;
