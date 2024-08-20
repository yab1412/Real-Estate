import { Gutter } from "@/UI/Components/Gutter";
import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

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
  return (
    <Gutter className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.head}>
            <div className={style.title}>
              <h2>LATEST BLOG AND NEWS</h2>
              <h1>Investing in estate made lot easy</h1>
            </div>
          </div>
          <div className={style.explor}>
            <a href="#" className={style.button}>
              EXPLORE MORE
            </a>
          </div>
        </div>

        <div className={style.card}>
          {Object.values(Blogs).map((blog, index) => (
            <div key={index} className={style.cardItem}>
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
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Gutter>
  );
};
