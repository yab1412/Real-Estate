"use client";


import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "../Icons";
import { debounce } from "lodash";

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MenuItem {
  title: string;
  path: string;
}

interface HeaderProps {
  menu: MenuItem[];
  logo: Logo;
}

const Header = ({ menu, logo }: HeaderProps) => {
  const [isSticky, setSticky] = useState(false);

 useEffect(() => {
   const handleScroll = debounce(() => {
     setSticky(window.scrollY >= 550);
   }, 100);

   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, []);

  return (
    <div className={`${styles.container} ${isSticky ? styles.sticky : ""}`}>
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
            <div className={styles.humberger} />
            <ul className={styles.menu}>
              {menu.map((menuItem, index) => (
                <li key={index} className={styles.menus}>
                  <Link className={styles.menuitems} href={menuItem.path}>
                    {menuItem.title}
                  </Link>
                </li>
              ))}
              <li className={styles.menus}>
                <button className={styles.button}>
                  ADD LISTING <Icons.Arrow size={30} color="#fff" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;