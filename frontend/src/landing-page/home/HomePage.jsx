import React from 'react';
import HeroSection from "./HeroSection";
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from "../Footer";
import TopNav from "../TopNav";

function HomePage() {
  return (
    <div>
        <HeroSection/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
    </div>
  );
}

export default HomePage;