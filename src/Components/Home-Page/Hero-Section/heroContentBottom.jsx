import React from "react";

const HeroContentBottom = ({ styles, surnameRef, shortDescRef }) => {
  return (
    <div className={`${styles.lName} ${styles.flex} ${styles.fClmn}`}>
      <div className={styles.smallIntro}>
        <p ref={shortDescRef} >Founder & CEO <br /> vyxis.ai </p>
      </div>
      <h1 ref={surnameRef}>MITTAL</h1>
    </div>
  );
};

export default HeroContentBottom;
