import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Faskes from "../components/sections/Faskes";
import Vaccine from "../components/sections/Vaccine";
import Footer from "../components/sections/Footer";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Faskes />
      <Vaccine />
      <Footer />
    </Layout>
  );
};

export default Home;
