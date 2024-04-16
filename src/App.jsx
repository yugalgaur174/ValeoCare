import React from "react";
import Home from "./pages/Home.jsx";

import Resources from "./pages/Resources.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/forum" element={<Forum />} /> */}
          <Route path="/Resources" element={<Resources/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
