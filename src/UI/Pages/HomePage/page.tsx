import React from "react";
import styles from "./index.module.scss";
import { Hero } from "../../View/Hero";
import { Cards } from "../../View/ListingCards";
import { About } from "../../View/About Us";
import { FloorPlan } from "../../View/Floor Plan";
import { Gallery } from "@/UI/View/Gallery";
import { AvailableApartments } from "@/UI/View/Available Apartments";
import { Contact_Us } from "@/UI/View/Contact Us";
import { Blog } from "@/UI/View/Blog";
import { ParallaxSection } from "@/UI/View/Paralex";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className={styles.section}>
        <Cards />
      </div>
      <div className={styles.section}>
        <About />
      </div>
      <div className={styles.section}>
        <FloorPlan />
      </div>
      <div className={styles.section}>
        <Gallery />
      </div>
      <div className={styles.section}>
        <AvailableApartments />
      </div>
      <div className={styles.section}>
        <ParallaxSection />
      </div>
      <div className={styles.section}>
      <Contact_Us />
      </div>
      <div className={styles.section}>
        <Blog />
      </div>

    </div>
  );
};
