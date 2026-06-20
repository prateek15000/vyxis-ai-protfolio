import React from "react";

const AboutBottom = ({ styles }) => {
  const aboutCards = [
    {
      num: "01",
      title: "Founder Vision",
      details:
        "Prateek leads vyxis.ai with a clear belief: AI should operate as a teammate inside modern business systems.",
    },
    {
      num: "02",
      title: "AI-Native Engineering",
      details:
        "The company combines full-stack software delivery with RAG, MCP, agent orchestration, and production observability.",
    },
    {
      num: "03",
      title: "Enterprise Focus",
      details:
        "vyxis.ai builds CRM, EdTech, hospitality, and integration systems for teams that need secure, scalable outcomes.",
    },
  ];

  return (
    <section className={styles.aboutBottom}>
      <div className={styles.container}>
        <p className={styles.heading2}>About Prateek Mittal</p>

        <div className={`${styles.allCards} ${styles.grid} ${styles.sb}`}>
          {aboutCards.map((card) => (
            <div
              key={card.num}
              className={`${styles.card} ${styles.flex} ${styles.fClmn}`}
            >
              <div className={styles.numbering}>
                <p>{card.num}</p>
              </div>
              <div className={styles.title}>
                <p>{card.title}</p>
              </div>
              <div className={styles.description}>
                <p>{card.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBottom;
