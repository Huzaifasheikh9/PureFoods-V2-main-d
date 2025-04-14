"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { Poppins, Bebas_Neue } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// const poetsenOne = Poetsen_One({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-poetsen-one",
// });

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});


export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: "ease-in-out", 
    });
  }, []);
  return (
    <html lang="en">
      <head>
       <title>Pure Foods</title>
       
      </head>
      <body
        className={`${poppins.variable} ${bebasNeue.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
