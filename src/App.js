// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";
import Team from "./components/Team";

function App() {
  return (
    <div className="main-wrapper">
      {/* 1. Rename: Maniratnam Developers */}
      <Navbar />
      <Hero />
      <Projects />
      <div className="gold-divider"></div>
      <About />
      {/* <Team /> */}
      <div className="gold-divider"></div>
      <Contact />
      <Footer />

      {/* <footer className="py-5 text-center border-top border-dark bg-black text-secondary">
        <small>© 2026 Maniratnam Developers | Redefining real estate</small>
      </footer> */}
    </div>
  );
}

export default App;