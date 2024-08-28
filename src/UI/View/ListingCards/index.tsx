"use client";

import { Gutter } from "@/UI/Components/Gutter";
import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";
import Link from "next/link";
import { Icons } from "@/UI/Components/Icons";

const Card = [
  {
    title: "Swift Home Sales",
    icon: Icons.Sofa,
    content: "256 Listings",
  },
  {
    title: "Prime Investment",
    icon: Icons.House,
    content: "256 Listings",
  },
  {
    title: "Prestige Management",
    icon: Icons.Manage,
    content: "256 Listings",
  },
];

export const Cards = () => {
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

    return () => {
      if (currentView) {
        observer.unobserve(currentView);
      }
    };
  });

  return (
    <Gutter className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          {Card.map((card, index) => (
            <div key={index} className={style.item}>
              {/* <div> */}
                <div
                  ref={view}
                  className={[
                    style.icon,
                    isVisible ? style.contentView : null,
                  ].join("")}
                >
                  <card.icon />
                </div>
              {/* </div> */}

              <div
                ref={view}
                className={[
                  style.discription,
                  isVisible ? style.discriptionView : null,
                ].join("")}
              >
                <h2>{card.title}</h2>
                <p>{card.content}</p>
                <Link className={style.link} href={""}>
                  More About <Icons.Arrow size={30} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Gutter>
  );
};
