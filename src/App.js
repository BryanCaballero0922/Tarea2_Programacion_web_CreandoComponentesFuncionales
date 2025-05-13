import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;