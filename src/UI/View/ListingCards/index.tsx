import { Gutter } from "@/UI/Components/Gutter";
import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

const Card = [
  {
    title: "Card 1",
    icon: "icon1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card 2",
    icon: "icon2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card 3",
    icon: "icon3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const Cards = () => {
  return (
    <Gutter className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          {Card.map((card, index) => (
            <div key={index} className={style.item}>
                <div className={style.icon}>{card.icon}</div>
                <h2>{card.title}</h2>
                <p>{card.content}</p>
                <Link className={style.link} href={""}>
                  More About
                </Link>
  
            </div>
          ))}

          
        </div>
      </div>
    </Gutter>
  );
};
