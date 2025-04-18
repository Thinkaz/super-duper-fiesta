// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Vision from "./pages/Vision";
import Engagements from "./pages/Engagements";
import Video from "./pages/Video";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800">
        {/* Header flottant moderne avec effet glassmorphism */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 shadow-sm"
        >
          <div className="container mx-auto flex justify-between items-center p-4">
            <Link to="/" className="text-lg font-bold text-blue-900">
              Éric Fournier
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Accueil
              </Link>
              <Link to="/cv" className="hover:text-blue-600 transition-colors">
                Parcours
              </Link>
              <Link
                to="/vision"
                className="hover:text-blue-600 transition-colors"
              >
                Vision
              </Link>
              <Link
                to="/engagements"
                className="hover:text-blue-600 transition-colors"
              >
                Engagements
              </Link>
              <Link
                to="/video"
                className="hover:text-blue-600 transition-colors"
              >
                Média
              </Link>
            </nav>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </motion.header>

        {/* Menu mobile */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Contenu principal */}
        <div className="pt-16">
          {" "}
          {/* Pour compenser le header fixe */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/engagements" element={<Engagements />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </div>

        {/* Footer modernisé */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
