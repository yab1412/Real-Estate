import React from "react";
import { Hero } from "../../View/Hero";
import { Cards } from "../../View/ListingCards";
import { About } from "../../View/About Us";
import { FloorPlan } from "../../View/Floor Plan";
import { Gallery } from "@/UI/View/Gallery";
import { Available_Apartments} from "@/UI/View/Available Apartments"
import { Contact_Us } from "@/UI/View/Contact Us";
import { Blog } from "@/UI/View/Blog";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <About />
      <FloorPlan />
      <Gallery />
      <Available_Apartments />
      <Contact_Us />
      <Blog />
    </div>
  );
};
