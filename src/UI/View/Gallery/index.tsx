"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import style from "./index.module.scss";
import { Gutter } from "@/UI/Components/Gutter";
import Counter from "./Counter";

/* */

const Card = ({
  id,
  src,
  active,
  length,
}: {
  id: number | string;
  src: string;
  active: number;
  length: number;
}) => {
  function reorder(order: number) {
    const prev = active - 1 == 0 ? length : active - 1;
    const next = active == length ? 1 : active + 1;
    switch (order) {
      case prev:
        return style.prevCard;
      case active:
        return style.active;
      case next:
        return style.nextCard;
      default:
        return style.otherCard;
    }
  }
  return (
    <div className={`${style.card} ${reorder(Number(id))}`}>
      <div className={style.content}>
        <Image
          width={300}
          height={400}
          className={style.images}
          src={src}
          alt={"image"}
        />
      </div>
    </div>
  );
};

/* */

export const Gallery = () => {
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

  const data = {
    1: {
      src: "/assets/3d-model-house-building.jpg",
    },
    2: {
      src: "/assets/floor-plan.png",
    },
    3: {
      src: "/assets/HeroHome.png",
    },
    4: {
      src: "/assets/interor.png",
    },
    5: {
      src: "/assets/HeroHome.png",
    },
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const [selected, setSelected] = useState(0);
  function handleClick(item: number) {
    setSelected(item);
  }
  function getItem() {
    switch (selected) {
      case 1:
        return data[1];
      case 2:
        return data[2];
      case 3:
        return data[3];
      case 4:
        return data[4];
      case 5:
        return data[5];
      default:
        return data[1];
    }
  }

  const Item = getItem();
  return (
    <Gutter className={style.gallery}>
      <div id="gallery" className={style.main}>
        <div className={style.head}>
          <div className={style.title}>
            <h2>OUR GALLERY</h2>
            <h1>Unlocking the Door to your new Home</h1>
          </div>
        </div>

        <div className={style.container}>
            {Object.entries(data).map(([key, item]) => (
              <div key={key} className={style.item}>
                <Image
                  width={400}
                  height={300}
                  className={selected == 0 ? style.image : style.hide_image}
                  src={item.src}
                  alt="image"
                />
                <div
                  className={style.iconHover}
                  onClick={() => handleClick(Number(key))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                    cursor="pointer"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </div>
              </div>
            ))}
            <div className={selected != 0 ? style.content : style.hide}>
              <svg
                onClick={() => handleClick(0)}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#f3b52e"
                cursor="pointer"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
              <div className={style.modal}>
                <div className={style.frame}>
                  <div className={style.slider}>
                    {Object.entries(data).map(([key, index]) => (
                      <Card
                        key={key}
                        {...index}
                        // src={Item.src}
                        id={key}
                        active={activeIndex}
                        length={Object.keys(data).length}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={style.buttons}
                onClick={() => {
                  // clear();
                  setActiveIndex(
                    activeIndex < Object.keys(data).length ? activeIndex - 1 : 1
                  );
                }}
              >
                <button> &#8647; </button>
              </div>

              <div
                className={style.buttonss}
                onClick={() => {
                  // clear();
                  setActiveIndex(
                    activeIndex < Object.keys(data).length ? activeIndex + 1 : 1
                  );
                }}
              >
                <button> &#8649; </button>
              </div>
            </div>
          </div>

        <div
          ref={view}
          className={[
            style.count,
            isVisible ? style.counterView : null,
          ].join("")}
        >
          <div className={style.counters}>
            <Counter title="Team Member" maxCount={200} />
            <Counter title="Winnning Award" maxCount={20} />
            <Counter title="Complete Project" maxCount={10000} />
            <Counter title="Client Review" maxCount={900} />
          </div>
        </div>
      </div>
    </Gutter>
  );
};
