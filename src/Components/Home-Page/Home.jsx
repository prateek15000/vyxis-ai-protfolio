import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header-Section/header";
import Hero from "./Hero-Section/hero";
import AboutPrev from "./AboutPrev-Section/AboutPrev";
import WorkPreview from "./Work-Section/WorkPrev";
import Footer from "./Footer-Section/Footer";
import WebVid from "./Videos-Section/WebVid";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Prateek Mittal | Founder of vyxis.ai - AI-Native Software Engineering</title>
        <link
          rel="canonical"
          href="https://vyxis-ai.vercel.app/"
        />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <AboutPrev />
        <WorkPreview />
        <WebVid />
      </main>
      <Footer />
    </>
  );
};

export default Home;
