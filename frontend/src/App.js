import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOutsideClick = (event) => {
    if (menuOpen && !event.target.closest(".sidebar")) {
      setMenuOpen(false);
    }
  };

  return (
    <Router>
      <div className="app" onClick={handleOutsideClick}>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`sidebar ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productName" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
