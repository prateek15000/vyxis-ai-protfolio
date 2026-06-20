import React from "react";
import { MoveDownRight } from "lucide-react";

const AboutMiddle = ({ styles }) => {
  return (
    <section className={styles.middleSec}>
      <div className="container">
        <div className={`${styles.aboutMiddle} ${styles.flex} ${styles.sb}`}>
          <div className={styles.midArrow}>
            <MoveDownRight size={32} color="#000000" />
          </div>

          <div className={`${styles.midDesc} ${styles.flex} ${styles.fClmn}`}>
            <p>
              Prateek Mittal is the founder and CEO of vyxis.ai, an AI-native
              software engineering company built at the intersection of
              enterprise-grade systems and intelligent AI agents.
            </p>
            <p>We do not just build software. We build systems that learn.</p>
          </div>

          <div className={styles.midImg}>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="AI-native software engineering workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMiddle;
