import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesBottom = ({ styles }) => {
  const ServicesInfo = [
    {
      num: "01",
      title: "AI-Powered CRM",
      details:
        "Autonomous sales agents, ERP integration, predictive analytics, RAG-powered knowledge retrieval, and workflow automation.",
    },
    {
      num: "02",
      title: "Education Technology",
      details:
        "AI campus management, intelligent LMS platforms, admin agents, assessment intelligence, and personalized learning systems.",
    },
    {
      num: "03",
      title: "Hospitality Systems",
      details:
        "AI reservation agents, smart restaurant management, hotel operations AI, delivery optimization, and sentiment monitoring.",
    },
    {
      num: "04",
      title: "AI Agent Integration",
      details:
        "AI layers for existing software, MCP server development, RAG pipelines, multi-agent orchestration, and observability.",
    },
    {
      num: "05",
      title: "Enterprise Security",
      details:
        "ISO 27001-aligned practices, prompt injection defense, privilege separation, audit trails, and measurable ROI tracking.",
    },
  ];

  return (
    <section className={styles.servicesBottom}>
      <div className={styles.container}>
        <p className={styles.heading2}>vyxis.ai can help you with...</p>

        <div className={`${styles.allServices} ${styles.grid} ${styles.sb}`}>
          {ServicesInfo.map((service) => (
            <ServiceCard key={service.num} service={service} styles={styles} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBottom;
