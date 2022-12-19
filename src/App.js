import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";
import Footer from "./components/Footer";
import './styles.css';

function App() {
  return (
    <div className="container-main">
      <div className="App">
          <Navbar />
          <main className="container">
            <About />
            <Techstack />
            <Projects />
            <Contact />
          </main>
          <Footer />
      </div>
    </div>
  );
}

export default App;
