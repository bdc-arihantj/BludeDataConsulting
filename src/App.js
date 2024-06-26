import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Contact/Team";
import Tech from "./pages/Tech/Tech";
import Scaling from "./pages/Scaling/Scaling";
import Analytics from "./pages/Analytics/Analytics";
import Article1 from "./pages/Article/Article1";
import Article2 from "./pages/Article/Article2";
import Article3 from "./pages/Article/Article3";
import Carrer from "./pages/Career/Carrer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/techconsulting" element={<Tech />} />
          <Route path="/scaling" element={<Scaling />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
          <Route path="/career" element={<Carrer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
