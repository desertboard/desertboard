"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import flogo from "@/public/assets/images/home/flogo.png";
import logo from "@/public/assets/images/home/sticky-logo.png";
import MobileMenu from "./MobileMenu/MobileMenu";
import Link from "next/link";

const Header = () => {

  const [isHovered, setIsHovered] = useState(false);





  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 998);
    };

    // Set initial value
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isMobile) {
    return <MobileMenu />;
  }

  return (
    <header
      className={`w-full ${
        isSticky
          ? "fixed bg-white text-primary header"
          : "absolute bg-transparent text-white"
      } top-0 z-40`}
    >
      <div className="container">
        <div className="py-5 z-10 border-b flex items-center justify-between">
          <div className="flex items-center">
            <Link href={"/"}>
              {" "}
              <Image
                src={isSticky ? logo : flogo}
                alt="Logo"
                width={311}
                height={60}
                className={`logos`}
              />
            </Link>
          </div>

          <div className="nav ">
              {/* Main Menu */}
            <div className="flex gap-6">
            <div
                className={`lione firstmenu relative  ${isHovered ? "afic " : "  "}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <a href="#">Sectors</a>
            </div>
            <div>
            <a href="#">dsdsd</a>
            </div>

              </div>

              {/* Submenu */}
          </div>
        </div>
      </div>
      <div
        className={`firstitem  transition-all duration-500  translate-y-[0px]  ${
          isHovered
            ? "opacity-100 visible translate-y-[-20px]"
            : "opacity-0 invisible "
          }`}

          onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container relative bg-white p-4  ">
          <div className="grid   md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-3">
  <div className="font-bold text-black text-[14px] xxl:text-[16px] mb-4 tracking-normal">
    Engineering & Construction
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Facade Cladding</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Wall Cladding</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Partitional Walls</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Sub-Flooring</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Roofing</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Concrete Forming</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Site Hoarding</a>
  </div>
</div>

<div className="flex flex-col gap-3">
  <div className="font-bold text-black text-[14px] xxl:text-[16px] mb-4 tracking-normal">
    Landscape
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Exterior Pergolas</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Fencing</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Outdoor Furniture</a>
  </div>
</div>

<div className="flex flex-col gap-3">
  <div className="font-bold text-black text-[14px] xxl:text-[16px] mb-4 tracking-normal">
    Interior Design
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Fire-Rated Door Cores</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Flooring Parquet</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Furniture & Fixed Furniture</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Interior Decoration</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Commercial Displays</a>
  </div>
</div>

<div className="flex flex-col gap-3">
  <div className="font-bold text-black text-[14px] xxl:text-[16px] mb-4 tracking-normal">
    Events & Exhibitions
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Stands & Booths</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Prefabricated Structures</a>
  </div>
  <div>
    <a className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300
       text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
       href="#">Totems & Signages</a>
  </div>
</div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
