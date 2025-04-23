import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clubs from "./pages/Clubs";
import Arbitres from "./pages/Arbitres";
import Buteurs from "./pages/Buteurs";
import Passeurs from "./pages/Passeurs";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
        <Link to="/clubs">Clubs</Link>
        <Link to="/arbitres">Arbitres</Link>
        <Link to="/buteurs">Buteurs</Link>
        <Link to="/passeurs">Passeurs</Link>
      </nav>
      <Routes>
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/arbitres" element={<Arbitres />} />
        <Route path="/buteurs" element={<Buteurs />} />
        <Route path="/passeurs" element={<Passeurs />} />
      </Routes>
    </Router>
  );
}