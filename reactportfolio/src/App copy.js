import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';

// Import Components
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
        <Route exact path="/ReactPortfolio" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
