import React from "react";

const AboutTop = ({ styles, helloRef, blackRef }) => {
  return (
    <section className={styles.aboutSec}>
      <div
        ref={blackRef}
        className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}
      >
        <h2 ref={helloRef} className={styles.helloText}>
          About
        </h2>
      </div>

      <div className="container">
        <div className={`${styles.aboutTop} ${styles.flex} ${styles.fClmn}`}>
          <p className={styles.heading}>
            Architecting autonomous <br className={styles.mobileBr} /> business
            ecosystems
          </p>
          <div
            className={`${styles.circle} ${styles.flex} ${styles.ac} ${styles.jc}`}
          >
            Founder & CEO
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTop;
