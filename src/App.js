import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={
          <div style={{ marginTop: '56px' }}>
            <TopNavbar />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;