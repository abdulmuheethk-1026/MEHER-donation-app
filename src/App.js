import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Causes from "./components/Causes";
import Quotes from "./components/Quotes";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Causes />
      <Quotes />
      <Stories />
      <Footer />
    </>
  );
}

export default App;
