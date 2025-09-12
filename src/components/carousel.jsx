import Card from "./card";
import styles from "./carousel.module.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Carousel({ projects }) {
  const n = projects.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % n);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + n) % n);
  };

  return (
    <>
      <div className={styles.carousel}>
        <button
          onClick={prev}
          className={styles.button}
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>
        <div className={styles.container}>
          <div
            className={styles.slides}
            style={{
              transform: `translateX(${-currentSlide * 100}%)`,
            }}
          >
            {projects.map((e, i) => {
              return (
                <div key={i} className={styles.slide}>
                  <Card info={e} />
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={next}
          className={styles.button}
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}
