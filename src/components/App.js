import React from 'react';
import Header from './Header';
import MemoryControl from './MemoryControl';
import Signin from "./Signin";
import Signup from './Signup';
import Logout from './Logout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/" element={<MemoryControl />} />
      </Routes>
    </Router>
  );
}

export default App;
