import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

interface Props {
  maxCount: number;
  title: string;
}

const Counter: React.FC<Props> = ({ maxCount , title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (count < maxCount) {
      const getIncrement = () => {
        if (count <= 100) return 1;
        if (count <= 1000) return 10;
        if (count >= 10000) return 5000;
        if (count <= 100000) return 100000;
        if (count <= 1000000) return 1000000;
        return 1000000;
      };

      intervalId = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + getIncrement(), maxCount));
      }, 10); 
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count, maxCount]);

  const formatCount = () => {
    if (count < 1000) return `${count}+`;
    if (count <= 100000) return `${count / 1000}K+`;
    if (count >= 100000) return `${count / 1000000}M+`;
    return `${count / 100000}M+`;
  };


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.counter} data-count={maxCount}>
            {formatCount()}
          </h1>
          <div className={styles.disc}>
            <div className={styles.line}></div>
            <p> {title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
