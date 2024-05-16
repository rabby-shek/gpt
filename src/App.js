import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGpt,
  Header,
} from "./containers";
import { Brand, Navbar, CTA } from "./components";
const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
