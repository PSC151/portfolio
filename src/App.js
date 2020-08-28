import React from 'react';
import './App.css';
import MainNavbar from "./Component/Navbar.js";
import About from "./Component/About.js";
import Contact from "./Component/Contact.js";
import Portfolio from "./Component/Portfolio.js";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./Component/Footer.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <MainNavbar />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
