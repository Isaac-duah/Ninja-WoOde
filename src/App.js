import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Dummy pages
const Page = ({ title }) => <div className="p-6 text-2xl">{title}</div>;

function App() {
  return (
    <Router>
      <Navbar />
      {/*    <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/coach" element={<Page title="Coach" />} />
        <Route path="/student" element={<Page title="Student" />} />
        <Route path="/business" element={<Page title="Business" />} />
        <Route path="/sports-wear" element={<Page title="Sports Wear" />} />
        <Route path="/about" element={<Page title="About" />} />
      </Routes> */}
      <Homepage />
    </Router>
  );
}

export default App;
