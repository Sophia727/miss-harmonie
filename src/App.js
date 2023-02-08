import './App.css';
import React from 'react';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Apropos/>
      <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
