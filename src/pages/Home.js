import React from "react";
import Hero from "../components/Hero";
import DownloadPresentationComp from '../components/DownloadPresentationComp'
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/WhyUs";
//import Banner from "../components/Banner";
//import { Link } from "react-router-dom";
//import Services from "../components/Services";
//import FeaturedFlowers from "../components/FeaturedFlowers";

const Home = () => {
  return (
      <>
        <Hero />
        <DownloadPresentationComp/>
        <AboutUs/>
        <WhyUs/>
      </>
  );
};

export default Home;
