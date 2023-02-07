import './App.css';
import React from 'react';
import Navbar from './commponents/Navbar'
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Footer from './commponents/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';

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
