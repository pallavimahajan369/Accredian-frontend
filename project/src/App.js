import React from 'react';
import { HashRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
   
      <div className="App">
       <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </HashRouter>
      </div>
    // </Router>
  );
}

export default App;
