import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PokeAPIProvider } from "../src/components/PokeAPIContext";
import HomePage from "../src/components/HomePage";
import SecondPage from "../src/components/SecondPage";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Halaman Pertama</Link>
          </li>
          <li>
            <Link to="/second">Halaman Kedua</Link>
          </li>
        </ul>
      </nav>
      <PokeAPIProvider>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/second" exact element={<SecondPage />} />
        </Routes>
      </PokeAPIProvider>
    </Router>
  );
};

export default App;
