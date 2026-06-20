import React from "react";

const ServicesTop = ({ blackRef, helloRef, styles }) => {
  return (
    <section className={styles.servicesSec}>
      <div
        ref={blackRef}
        className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}
      >
        <h2 ref={helloRef} className={styles.helloText}>
          • Services
        </h2>
      </div>

      <div className="container">
        <div className={`${styles.servicesTop} ${styles.flex} ${styles.fClmn}`}>
          <p className={styles.heading}>
            AI-native solutions <br className={styles.mobileBr} /> for every
            industry
          </p>
          <div
            className={`${styles.circle} ${styles.flex} ${styles.ac} ${styles.jc}`}
          >
            AI-Native
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTop;
