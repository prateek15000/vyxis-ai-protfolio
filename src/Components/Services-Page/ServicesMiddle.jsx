import React from "react";
import { MoveDownRight } from "lucide-react";

const ServicesMiddle = ({ styles }) => {
  return (
    <section className={styles.middleSec}>
      <div className="container">
        <div className={`${styles.servicesMiddle} ${styles.flex} ${styles.sb}`}>
          <div className={styles.midArrow}>
            <MoveDownRight sixe={32} color="#000000" />
          </div>

          <div className={`${styles.midDesc} ${styles.flex} ${styles.fClmn}`}>
            <p>
              vyxis.ai builds enterprise CRM, education technology, hospitality
              systems, and AI agent integrations with production-grade
              engineering accountability.
            </p>
            <p>Production-grade. Not demo-grade.</p>
          </div>

          <div className={styles.midImg}>
            <img
              src="https://images.pexels.com/photos/37148305/pexels-photo-37148305.jpeg?_gl=1*1quamf9*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODEzNzQ1NDckbzkkZzEkdDE3ODEzNzUwMTUkajQ1JGwwJGgw"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMiddle;
