import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "../Styles/global.scss";
import Header from "@/UI/Components/Header";
import { Footer } from "@/UI/Components/Footer";
import style from "./index.module.scss";
import Link from "next/link";
import { ProgressBar } from "../UI/Components/Progress";

const inter = Jost({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yabtsega Muluneh",
  description: "Generated Template by Yabtsega",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ProgressBar /> */}
        <header>
          <Header
            menu={[
              {
                title: "About",
                path: "#about",
              },
              {
                title: "Floor Plans",
                path: "#floor_plan",
              },
              {
                title: "Gallery",
                path: "#gallery",
              },
              {
                title: "Available Apartments",
                path: "#available_apartments",
              },
              {
                title: "Contact Us",
                path: "#contact_us",
              },
              {
                title: "Blogs",
                path: "#blog",
              },
            ]}
            logo={{
              src: "/assets/white-logo.png",
              alt: "Image",
              width: 200,
              height: 50,
            }}
          />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
