import { Gutter } from '@/UI/Components/Gutter'
import React from 'react'
import Image from 'next/image'
import style from "./index.module.scss"


export const Hero = () => {
  return (
    <Gutter>
      <div className={style.main}>
        <div className={style.container}>
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
                <p>Need help?</p>
                <p> (251)123-4567</p>
              </div>
            </div>
          </div>

          <div className={style.media}>
            <Image className={style.image} width= {500} height={100} src='/assets/HeroHome.png' alt= 'image' />
          </div>
        </div>
      </div>
    </Gutter>
  );
}
