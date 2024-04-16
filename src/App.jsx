import React from "react";
import Home from "./pages/Home.jsx";
import Forum from "./pages/Forum.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
