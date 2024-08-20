import React from "react";
import { Gutter } from "@/UI/Components/Gutter";
import style from "./index.module.scss";

const Table = [
  {
    tableHead: {
      floorNo: "Floor",
      bathroom: "Bathroom",
      rooms: "Rooms",
      totalArea: "Total Area",
      price: "Price",
      link: "",
    },
    table: {
      1: {
        floorNo: "1",
        bathroom: "02",
        rooms: "3",
        totalArea: "250",
        price: "250000",
        link: {
          href: "/floor-plan/1",
          text: "More About",
        },
      },
      2: {
        floorNo: "2",
        bathroom: "03",
        rooms: "4",
        totalArea: "300",
        price: "300000",
        link: {
          href: "/floor-plan/1",
          text: "More About",
        },
      },
      3: {
        floorNo: "3",
        bathroom: "04",
        rooms: "5",
        totalArea: "350",
        price: "350000",
        link: {
          href: "/floor-plan/1",
          text: "More About",
        },
      },
      4: {
        floorNo: "4",
        bathroom: "05",
        rooms: "6",
        totalArea: "400",
        price: "400000",
        link: {
          href: "/floor-plan/1",
          text: "More About",
        },
      },
    },
  },
];

export const Available_Apartments = () => {
  return (
    <Gutter className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.head}>
            <div className={style.title}>
              <h2>Available Apartments</h2>
              <h1>Unlocking the Door to your new Home</h1>
            </div>
            <div className={style.discription}>
              <h3>
                Real estate is a lucrative industry that involves the buying
                selling and renting of properties. It encompasses residential
                commercial
              </h3>
            </div>
          </div>

          <div className={style.tables}>
            <table className={style.table}>
              {Table.map((index, rowIndex) => {
                return (
                  <thead key={rowIndex}>
                    <tr>
                      {Object.keys(index.tableHead).map((key, colIndex) => {
                        return <th key={colIndex}>{index.tableHead[key]}</th>;
                      })}
                    </tr>
                  </thead>
                );
              })}
              
              {Table.map((index, rowIndex) => {
                return (
                  <tbody key={rowIndex}>
                    {Object.keys(index.table).map((key, colIndex) => {
                      const data = index.table[key];
                      return (
                        <tr key={colIndex}>
                          <td>{data.floorNo}</td>
                          <td>{data.bathroom}</td>
                          <td>{data.rooms}</td>
                          <td>{data.totalArea}</td>
                          <td>{data.price}</td>
                          <td className={style.link}>
                            <a href={data.link.href}>{data.link.text}</a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                );
              })}

            </table>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
