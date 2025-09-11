import Card from "./card";
import styles from "./carousel.module.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Carousel({ projects }) {
  const width = 800;
  const n = projects.length;
  const [slide, setSlide] = useState(0);

  function next() {
    setSlide((slide - 1) % n);
  }

  function prev() {
    setSlide(slide + 1 > 0 ? -n + 1 : slide + 1);
  }

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
          <div className={styles.slides} style={{ left: slide * width + "px" }}>
            {projects.map((e, i) => {
              return <Card info={e} key={i}></Card>;
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
