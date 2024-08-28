"use client";

import { Gutter } from "@/UI/Components/Gutter";
import React, { useState, useEffect, useRef } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import { Icons } from "@/UI/Components/Icons";

const Blogs = {
  1: {
    src: "/assets/interor.png",
    title: "Title of the Blog",
    date: "23 DEC",
    discription:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur libero ut lacinia vulputate. Sed scelerisque, ex vel bibendum commodo, nunc urna sodales ipsum, vitae consectetur neque ex ac lectus.",
  },
  2: {
    src: "/assets/interor.png",
    title: "Title of the Blog",
    date: "October 19, 2024",
    discription:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur libero ut lacinia vulputate. Sed scelerisque, ex vel bibendum commodo, nunc urna sodales ipsum, vitae consectetur neque ex ac lectus.",
  },
  3: {
    src: "/assets/interor.png",
    title: "Title of the Blog",
    date: "October 19, 2024",
    discription:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur libero ut lacinia vulputate. Sed scelerisque, ex vel bibendum commodo, nunc urna sodales ipsum, vitae consectetur neque ex ac lectus.",
  },
};

export const Blog = () => {
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

  return (
    <Gutter className={style.main}>
      <div
        ref={view}
        className={[style.container, isVisible ? style.allView : null].join("")}
      >
        <div className={style.content}>
          <div
            ref={view}
            className={[style.head, isVisible ? style.titleView : null].join(
              ""
            )}
          >
            <div className={style.title}>
              <h2>LATEST BLOG AND NEWS</h2>
              <h1>Investing in estate made lot easy</h1>
            </div>
          </div>
          <div
            ref={view}
            className={[
              style.explors,
              isVisible ? style.buttonView : null,
            ].join("")}
          >
            <div className={style.explor}>
              <a href="#" className={style.button}>
                EXPLORE MORE <Icons.Arrow color="#fff" />
              </a>
            </div>
          </div>
        </div>

        <div className={style.card}>
          {Object.values(Blogs).map((blog, index) => (
            <div
              key={index}
              ref={view}
              className={[style.cards, isVisible ? style.cardView : null].join(
                ""
              )}
            >
              <div className={style.cardItem}>
                <div className={style.card_img}>
                  <Image
                    width={400}
                    height={300}
                    className={style.image}
                    src={blog.src}
                    alt="image"
                  />
                </div>
                <div className={style.icons}>
                  <div className={style.icon1}>
                    <h2>By admin</h2>
                  </div>
                  <div className={style.icon2}>
                    <h2>Comments (07)</h2>
                  </div>
                </div>

                <div className={style.card_info}>
                  <h2>{blog.title}</h2>
                  <p className={style.date}>{blog.date}</p>
                  {/* <p>{blog.discription}</p> */}
                  <a href="#" className={style.readmore}>
                    READ MORE <Icons.Arrow color="#fff" size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Gutter>
  );
};
