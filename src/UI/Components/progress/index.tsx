"use client";

import { useEffect, useState } from "react";
import style from "./index.module.scss";
import Link from "next/link";

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const newProgress = (scrollTop / (scrollHeight - windowHeight)) * 100;
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
};

export const ProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div
      className={style.progress_circle}
      style={{
        opacity: progress === 0 ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Link href={"/"}>
        <svg width="40" height="40">
          <circle
            cx="20"
            cy="20"
            r="15"
            fill="none"
            strokeDashoffset={100 - progress}
          />
          <path
            transform="translate(8, 8)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
            fill="hwb(36 0% 0% / 0.7)"
          />
        </svg>
      </Link>
    </div>
  );
};
