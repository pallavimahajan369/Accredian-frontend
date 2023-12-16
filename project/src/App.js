import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
   
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
      </div>
    // </Router>
  );
}

export default App;
