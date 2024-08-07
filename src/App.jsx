import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HeroCards from "./components/herocard";
import HeroIcons from "./components/heroIcons";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroCards />
      <HeroIcons />
    </div>
  );
};

export default App;
