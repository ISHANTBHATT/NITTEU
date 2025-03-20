import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Programs from "./Programs";
import WhyUs from "./WhyUs";
import About from "./About";
import Mission from "./Mission";
import Page from "./Page";
import Page2 from "./Page2";

function HomePage() {
  return (
    <div>
      {/* <Navbar />
      <Hero />
      <div className="flex justify-center">
        <Features />
      </div>

      <Mission />
      <About />
      <WhyUs />
      <Programs /> */}
      <Page />
      {/* <Page2 /> */}
    </div>
  );
}

export default HomePage;
