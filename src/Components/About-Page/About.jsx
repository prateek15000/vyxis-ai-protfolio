import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import Footer from "../Home-Page/Footer-Section/Footer";
import styles from "./AboutPage.module.css";
import AboutTop from "./AboutTop";
import AboutMiddle from "./AboutMiddle";
import AboutBottom from "./AboutBottom";
import AboutAnime from "./AboutAnime";

const About = () => {
  const blackRef = useRef(null);
  const helloRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/Work" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <Helmet>
        <title>About - Prateek Mittal</title>
        <link rel="canonical" href="https://vyxis-ai.vercel.app/about" />
      </Helmet>
      <Header navLinks={navLinks} isDark={true} />
      <main>
        <AboutTop blackRef={blackRef} helloRef={helloRef} styles={styles} />
        <AboutMiddle styles={styles} />
        <AboutBottom styles={styles} />
      </main>
      <Footer />
      <AboutAnime blackRef={blackRef} helloRef={helloRef} />
    </>
  );
};

export default About;
