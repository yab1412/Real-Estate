"use client";

import { Gutter } from "@/UI/Components/Gutter";
import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import ButtonGroup from "./buttonGroup";

const buttons = ["1", "2", "3", "4", "5"];

const Check = ({ index }: { index: any }) => {
  switch (index) {
    case 0:
      return (
        <>
          <div>
            <div className={style.active}>
              <h2>Rooms</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Bathroom</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Area SQ.M</h2>
              <p>15,000</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Parking</h2>
              <p>07</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Price</h2>
              <p>$2504.8</p>
            </div>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <div>
            <div className={style.active}>
              <h2>Rooms</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Bathroom</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Area SQ.M</h2>
              <p>15,000</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Parking</h2>
              <p>07</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Price</h2>
              <p>$2504.8</p>
            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div>
            <div className={style.active}>
              <h2>Rooms</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Bathroom</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Area SQ.M</h2>
              <p>15,000</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Parking</h2>
              <p>07</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Price</h2>
              <p>$2504.8</p>
            </div>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div>
            <div className={style.active}>
              <h2>Rooms</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Bathroom</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Area SQ.M</h2>
              <p>15,000</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Parking</h2>
              <p>07</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Price</h2>
              <p>$2504.8</p>
            </div>
          </div>
        </>
      );
    default:
      return (
        <>
          <div>
            <div className={style.active}>
              <h2>Rooms</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Bathroom</h2>
              <p>06</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Area SQ.M</h2>
              <p>15,000</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Parking</h2>
              <p>07</p>
            </div>
            <div className={style.line}></div>
          </div>
          <div>
            <div className={style.active}>
              <h2>Total Price</h2>
              <p>$2504.8</p>
            </div>
          </div>
        </>
      );
  }
};

export const FloorPlan = () => {
  const [isSelected, setIsSelected] = useState(0);
  useEffect(() => {}, []);

  return (
    <Gutter className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>FLOOR PLANS</h2>
          <h1>Unlocking the door to your new Home</h1>
        </div>
        <div className={style.content}>
          <div className={style.image}>
            <Image
              className={style.image}
              width={400}
              height={100}
              src={"/assets/floor-plan.png"}
              alt="image"
            />
          </div>
          <div className={style.description}>
            <ButtonGroup
              buttons={buttons.map((button) => button)}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
            <div className={style.line}></div>
            <Check index={isSelected} />
            <div className={style.plan}>
              <p>
                *Real estate is a lucrative industry that involves the buying
                selling and renting of properties. It encompasses
              </p>
            </div>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
