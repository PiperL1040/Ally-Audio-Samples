import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AudioPage from "./AudioPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/audio/:id" element={<AudioPage />} />
      </Routes>
    </Router>
  );
}
