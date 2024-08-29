import React from "react";
import { Gutter } from "../Gutter";
import Image from "next/image";
import style from "./index.module.scss";
import { Icons } from "../Icons";
import Link from "next/link";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Terms & Conditions", path: "/terms-conditions" },
  { title: "FAQ", path: "/faq" },
  { title: "Help Center", path: "/help-center" },
  { title: "Careers", path: "/careers" },
  { title: "Press", path: "/press" },
  { title: "Affiliate Program", path: "/affiliate-program" },
  { title: "Press Releases", path: "/press-releases" },
];

const services = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const images = [
  { src: "/assets/interor.png", alt: "image1" },
  { src: "/assets/3d-model-house-building.jpg", alt: "image2" },
  { src: "/assets/interor.png", alt: "image3" },
  { src: "/assets/HeroHome.png", alt: "image4" },
  { src: "/assets/interor.png", alt: "image5" },
  { src: "/assets/interor.png", alt: "image6" },
];

export const Footer = () => {
  return (
    <Gutter className={style.main}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.logo}>
            <Image
              className={style.image}
              width={100}
              height={100}
              src="/assets/white-logo.png"
              alt=""
            />
            <p>
              It is a long established fact that a reader will be distracted
            </p>
            <div className={style.socials}>
              <Icons.FaceBook size={20} />
              <Icons.Youtube size={20} />
              <Icons.Instagram size={20} />
              <Icons.LinkedIn size={20} />
            </div>
          </div>
          <div className={style.link}>
            <h2>Useful Links</h2>
            {links.map((link) => (
              <div className={style.links} key={link.title}>
                <Icons.Forward size={15} />
                <Link className={style.for} href={link.path}>
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
          <div className={style.services}>
            <h2>Useful Links</h2>
            {services.map((link) => (
              <div className={style.links} key={link.title}>
                <Icons.Forward size={15} />
                <Link className={style.for} href={link.path}>
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
          <div className={style.gallery}>
            <h2>Our Gallery</h2>
            <div className={style.galleryItem}>
              {images.map((img) => (
                <div className={style.gallery_img} key={img.alt}>
                  <div className={style.hoverIcon}>
                    <Icons.Instagram size={20} />
                  </div>
                  <Image
                    className={style.galleryImage}
                    width={50}
                    height={50}
                    src={img.src}
                    alt={img.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.line}></div>

        <div className={style.foot}>
          <div className={style.copyright}>
            <p>&copy; CityScape 2024. | All rights reserved.</p>
          </div>
          <div className={style.terms}>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Help Center</p>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
