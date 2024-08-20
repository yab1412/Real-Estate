"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

interface Menu {
  title: string;
  path: string;
}

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface HeaderProps {
  menu: Menu[];
  logo: Logo;
}

const Header = ({ menu, logo }: HeaderProps) => {

  const  [isSticky, setSticky] = useState (false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    }, []);

  return (
    <>
      <div>
        <h2>We build It before You Know It</h2>
      </div>
      <div className={`${styles.container} ${isSticky ? styles.sticky : ""} `}>
        <div className={styles.main}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                className={styles.images}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </Link>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.navigation}>
              <input type="checkbox" className={styles.toggle} />
              <div className={styles.humberger}> </div>
              <ul className={styles.menu}>
                <Image
                  className={styles.image}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
                {Object.keys(menu).map((key) => {
                  const index = Number(key);
                  return (
                    <li key={index} className={styles.menus}>
                      <Link
                        className={styles.menuitems}
                        href={menu[index].path}
                      >
                        {menu[index].title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.contact}>
                <button className={styles.button}>ADD LISTING</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;