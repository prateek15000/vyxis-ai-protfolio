import { useRef, useEffect } from "react";
import Stacks from "../../../assets/Images/Work/stacks-mockup.webp";
import NexaWave from "../../../assets/Images/Work/nexa-mockup.webp";
import Aurum from "../../../assets/Images/Work/aurum-mockup.webp";
import Elena from "../../../assets/Images/Work/elena-mockup.webp";
import styles from "./work.module.css";
import gsap from "gsap";

const projects = [
  {
    title: "AI CRM",
    alt: "AI-powered CRM system preview",
    type: "95% Triage Reduction",
    link: "https://vyxis-ai.vercel.app/",
    image: Stacks,
    date: "2026",
  },
  {
    title: "EdTech AI",
    alt: "Education technology AI platform preview",
    type: "60% Admin Reduction",
    link: "https://vyxis-ai.vercel.app/",
    image: NexaWave,
    date: "2026",
  },
  {
    title: "Hospitality",
    alt: "Hospitality AI operations system preview",
    type: "42% Direct Bookings",
    link: "https://vyxis-ai.vercel.app/",
    image: Aurum,
    date: "2026",
  },
  {
    title: "AI Agents",
    alt: "AI agent integration system preview",
    type: "MCP, RAG, LangGraph",
    link: "https://vyxis-ai.vercel.app/",
    image: Elena,
    date: "2026",
  },
];

export default function WorkPreview() {
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = imageWrapperRef.current;
    const moveMouse = (e) => {
      if (window.innerWidth > 1024) {
        gsap.to(wrapper, {
          x: e.clientX - 200,
          y: e.clientY - 150,
          duration: 1,
          ease: "power3.out",
        });
      }
    };
    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  const handleHover = (index) => {
    gsap.to(".preview-track", {
      y: `-${index * 25}%`,
      duration: 0.3,
      ease: "power3.inOut",
    });

    gsap.to(imageWrapperRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    });
  };

  const hidePreview = () => {
    gsap.to(imageWrapperRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
    });
  };

  return (
    <section id="Work" className={styles.workPreview}>
      <div className={styles.container}>
        <div className={styles.workContainer}>
          {/* Desktop Layout */}
          <div className={styles.desktopProjects}>
            {projects.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`${styles.projectRow} ${styles.flex} ${styles.sb} ${styles.ac}`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={hidePreview}
                >
                  <h2>{item.title}</h2>
                  <p>{item.type}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Tablet + Mobile Layout */}
          <div className={styles.mobileProjects}>
            {projects.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileCard}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
                <h2>{item.title}</h2>

                <div className={`${styles.itemAndDate} ${styles.flex} ${styles.ac} ${styles.sb}`}>
                  <p>{item.type}</p>
                  <p>{item.date}</p>
                </div>
              </a>
            ))}
          </div>

          <div className={`${styles.workCta} ${styles.flex} ${styles.ac} ${styles.jc}`}>
            <button className={styles.fancyBtn}>
              More Systems <sup>08</sup>
            </button>
          </div>

          {/* Hover Preview */}
          <div className={styles.imagePreview} ref={imageWrapperRef}>
            <div className={`${styles.previewTrack} preview-track`}>
              {projects.map((item, index) => (
                <div className={styles.previewImage} key={index}>
                  <img src={item.image} alt={item.alt} loading="lazy" />

                  <div className={`${styles.viewCursor} ${styles.flex} ${styles.ac} ${styles.jc}`}>
                    <p>View</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
