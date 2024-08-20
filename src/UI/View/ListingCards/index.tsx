import { Gutter } from "@/UI/Components/Gutter";
import React from "react";
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
  return (
    <Gutter className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          {Card.map((card, index) => (
            <div key={index} className={style.item}>
                <div className={style.icon}>
                  <card.icon />
                </div>
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
