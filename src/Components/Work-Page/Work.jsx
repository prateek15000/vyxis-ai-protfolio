import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Home-Page/Header-Section/header";
import WorkPreview from "../Home-Page/Work-Section/WorkPrev";
import Footer from "../Home-Page/Footer-Section/Footer";

const Work = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <Helmet>
        <title>Work - vyxis.ai</title>
        <link rel="canonical" href="https://vyxis-ai.vercel.app/Work" />
      </Helmet>
      <Header navLinks={navLinks} isDark={true} />
      <main>
        <WorkPreview />
      </main>
      <Footer />
    </>
  );
};

export default Work;
