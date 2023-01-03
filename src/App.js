import "./App.css";
import HeroSection from "./components/HeroSection";
import React from "react";
import ContentDetails from "./components/ContentDetails";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="tbh-web-app">
      <Navbar />
      <HeroSection />
      <ContentDetails />
    </div>
  );
}

export default App;
