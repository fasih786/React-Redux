import React from 'react'
import { Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    
  );
}

export default App;



