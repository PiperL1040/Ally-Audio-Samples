import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AudioPage from "./AudioPage"; // Make sure this file exists

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/audio/:id" element={<AudioPage />} />
      </Routes>
    </Router>
  );
}
