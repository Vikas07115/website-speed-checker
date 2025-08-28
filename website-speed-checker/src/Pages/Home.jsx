import React, { useState, useEffect } from "react";
import InputForm from "../components/InputForm";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";
import ScoreGauge from "../components/ScoreGauge";
import HistoryList from "../components/HistoryList";
import { getPageSpeed } from "../services/pageSpeedAPI";
import "../styles/App.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleCheckSpeed = async (url) => {
    if (!url) {
      alert("⚠️ Please enter a valid URL");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await getPageSpeed(url);
      if (!data) {
        alert("❌ Failed to fetch results. Try again.");
        return;
      }

      setResult(data);

      // Save history (max 5 entries)
      const newHistory = [url, ...history.filter((h) => h !== url)].slice(0, 5);
      setHistory(newHistory);
      localStorage.setItem("history", JSON.stringify(newHistory));
    } catch (err) {
      alert("❌ Error fetching data. Please check the URL or API Key.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  return (
    <div className="home">
      {/* Header */}
      <header className="header fade-in">
        <h1 className="title">🚀 Website Speed Checker</h1>
        <p className="subtitle">
          Enter a website URL to analyze performance using Google PageSpeed Insights API.
        </p>
      </header>

      {/* Input Form */}
      <div className="form-wrapper bounce-in">
        <InputForm onSubmit={handleCheckSpeed} />
      </div>

      {/* Loader */}
      {loading && (
        <div className="loader-container pulse">
          <Loader />
          <p className="loading-text">⏳ Analyzing website speed...</p>
        </div>
      )}

      {/* Results */}
      {!loading && result && (
        <section className="results fade-in-up">
          <h2 className="section-title">📊 Performance Report</h2>
          <div className="results-grid">
            <ScoreGauge
              score={result.lighthouseResult.categories.performance.score * 100}
            />
            <ResultCard
              title="First Contentful Paint"
              value={result.lighthouseResult.audits["first-contentful-paint"].displayValue}
            />
            <ResultCard
              title="Largest Contentful Paint"
              value={result.lighthouseResult.audits["largest-contentful-paint"].displayValue}
            />
            <ResultCard
              title="Cumulative Layout Shift"
              value={result.lighthouseResult.audits["cumulative-layout-shift"].displayValue}
            />
            <ResultCard
              title="Speed Index"
              value={result.lighthouseResult.audits["speed-index"].displayValue}
            />
            <ResultCard
              title="Time to Interactive"
              value={result.lighthouseResult.audits["interactive"].displayValue}
            />
          </div>
        </section>
      )}

     

      {/* Footer */}
      <footer className="footer slide-up">
        <p>© 2025 Website Speed Checker | Built with React ⚛</p>
      </footer>
    </div>
  );
};

export default Home;
