"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./index.module.scss";

export const ParallaxSection = () => {
  const parallaxBackgroundRef = useRef<HTMLDivElement | null>(null);

  const view = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    const currentView = view.current;
    if (currentView) {
      observer.observe(currentView);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxBackground = parallaxBackgroundRef.current;

      if (parallaxBackground) {
        parallaxBackground.style.backgroundPosition = `50% ${
          scrollPosition * 0.5
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={style.parallaxSection}>
      <div ref={parallaxBackgroundRef} className={style.parallaxBackground} />
      <div
        ref={view}
        className={[style.content, isVisible ? style.seen : null].join("")}
      >
        <h2>We build it before you know it!</h2>
        <p
          className={[style.contents, isVisible ? style.typewriter : null].join(
            ""
          )}
        >
          We&apos;re dedicated to delivering your project quickly and
          professionally. Our skilled team uses advanced tools for efficient and
          effective results.
        </p>
      </div>
    </section>
  );
};
