
import { Gutter } from "@/UI/Components/Gutter";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import style from "./index.module.scss";
import { Icons } from "@/UI/Components/Icons";
import Link from "next/link";

export const Hero = () => {

  return (
    <Gutter>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.media}>
            <Image
              className={style.image}
              width={500}
              height={500}
              src="/assets/HeroHome.png"
              alt="image"
            />
          </div>
          <div className={style.content}>
            <div className={style.title}>
              <h2>Every Corner Holds</h2>
              <h1>Possibilities To Be Your Home</h1>
            </div>
            <div className={style.description}>
              <p>
                Unlock the Power of Real Estate Making Your Real Estate Dreams a
                Reality Real Estate here Unlock the Power of Real Estate
              </p>
              <div className={style.help}>
                <div className={style.shake}>

                <Icons.Call size={70}/>
                </div>
                <div className={style.cta}>
                  <p>Get Intouch</p>
                  <Link href="tel:+251123-4567" className={style.call}>
                    (251)123-4567
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
