"use client";

import { Gutter } from "@/UI/Components/Gutter";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import style from "./index.module.scss";
import { Icons } from "@/UI/Components/Icons";

export const About = () => {
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
          <div className={style.article}>
            <div
              ref={view}
              className={[
                style.header,
                isVisible ? style.contentView : null,
              ].join("")}
            >
              <div className={style.know}>
                <h2>KNOW ABOUT US</h2>
              </div>

              <div className={style.description}>
                <h2>Making Your Real Estate Dreams a Reality</h2>
              </div>
            </div>
            <div className={style.list}>
              <ul className={style.listItem}>
                <li>Prestige Property Management Your Dream Home Awaits</li>
                <li>
                  Real Estate is a vast industry that deals with the buying,
                  selling
                </li>
                <li>Real estate investing is a rewarding career</li>
                <li>We help you find the perfect investment opportunity</li>
                <li>We provide guidance and support throughout the process</li>
              </ul>
            </div>
            <div className={style.lable}>
              <button className={style.button}>
                Add Listing <Icons.Arrow color="#fff" size={30} />
              </button>
            </div>
          </div>
          <div
            ref={view}
            className={[style.header, isVisible ? style.ImageView : null].join(
              ""
            )}
          >
            <div className={style.image}>
              <Image
                className={style.interor}
                src="/assets/interor.png"
                alt="About"
                width={700}
                height={500}
              />
              <div className={style.about}>
                <h2>Property Managment</h2>
                <p>October 19, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
