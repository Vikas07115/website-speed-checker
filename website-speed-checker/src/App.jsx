import React from "react";

// Components
import InputForm from "./components/InputForm";
import Loader from "./components/Loader";
import ResultCard from "./components/ResultCard";
import ScoreGauge from "./components/ScoreGauge";
import HistoryList from "./components/HistoryList";

// Hooks & Services
import { useState, useEffect } from "react";
import { getPageSpeed } from "./services/pageSpeedAPI";

// Pages
import Home from "./pages/Home"; 
// agar future me About, Contact, Dashboard pages honge to yaha import kar lena

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
