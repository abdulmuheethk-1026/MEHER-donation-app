import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">

      {/* Left two circles */}
      <div className="circle-group left-group">
        <div className="circle-box">
          <img src="/iamges/education1.jpg" alt="Education" />
          <p>Education</p>
        </div>

        <div className="circle-box">
          <img src="/images/poverty.jpg" alt="Poverty" />
          <p>Poverty</p>
        </div>
      </div>

      {/* Center logo */}
      <div className="hero-center">
        <img
          src="/images/meher-logo.png"
          alt="Meher Logo"
          className="meher-logo"
        />
      </div>

      {/* Right two circles */}
      <div className="circle-group right-group">
        <div className="circle-box">
          <img src="/images/medical.jpg" alt="Medical" />
          <p>Medical</p>
        </div>

        <div className="circle-box">
          <img src="/images/orphanage.jpg" alt="Orphanage" />
          <p>Orphanage</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
