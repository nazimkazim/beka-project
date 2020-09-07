import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/WhyUs";
import { Helmet } from "react-helmet";

//import Banner from "../components/Banner";
//import { Link } from "react-router-dom";
//import Services from "../components/Services";
//import FeaturedFlowers from "../components/FeaturedFlowers";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="description" content="dfgfdgfdgdfg" />
        <title>ertertert</title>
      </Helmet>
      <Hero />
      <AboutUs />
      <WhyUs />
    </>
  );
};

export default Home;
