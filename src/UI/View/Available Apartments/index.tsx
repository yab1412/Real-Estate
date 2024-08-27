import React from "react";
import { Gutter } from "@/UI/Components/Gutter";
import styles from "./index.module.scss";
import { Icons } from "@/UI/Components/Icons";

interface TableHead {
  floorNo: string;
  bathroom: string;
  rooms: string;
  totalArea: string;
  price: string;
  link: string;
}

interface TableRow {
  floorNo: string;
  bathroom: string;
  rooms: string;
  totalArea: string;
  price: string;
  link: {
    href: string;
    text: string;
  };
}

interface TableData {
  tableHead: TableHead;
  table: {
    [key: string]: TableRow;
  };
}

const tableData: TableData[] = [
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

export const AvailableApartments = () => {
  return (
    <Gutter className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.head}>
            <div className={styles.title}>
              <h2>Available Apartments</h2>
              <h1>Unlocking the Door to your new Home</h1>
            </div>
            <div className={styles.discription}>
              <h3>
                Real estate is a lucrative industry that involves the buying
                selling and renting of properties. It encompasses residential
                commercial
              </h3>
            </div>
          </div>

          <div className={styles.tables}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {Object.keys(tableData[0].tableHead).map((key, index) => (
                    <th key={index}>
                      {tableData[0].tableHead[key as keyof TableHead]}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Object.keys(tableData[0].table).map((key, index) => {
                  const data = tableData[0].table[key];
                  return (
                    <tr key={index}>
                      <td>{data.floorNo}</td>
                      <td>{data.bathroom}</td>
                      <td>{data.rooms}</td>
                      <td>{data.totalArea}</td>
                      <td>{data.price}</td>
                      <td className={styles.link}>
                        <a href={data.link.href}>{data.link.text}<Icons.Arrow size={30}/></a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
