import React from "react";

const HeroContentTop = ({ styles, fnameRef }) => {
  return (
    <div className={`${styles.fName} ${styles.flex}`}>
      <h1 ref={fnameRef} >PRATEEK</h1>
    </div>
  );
};

export default HeroContentTop;
