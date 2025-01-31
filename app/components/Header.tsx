"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import flogo from "@/public/assets/images/home/flogo.png";
import { Menu, MenuItem, ProductItem, ProductItemL } from "./ui/navbar-menu";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
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


  if(isMobile){
    return <MobileMenu/>
  }

  return (
    <header className="bg-transparent text-white absolute w-full top-0 z-40">
      <div className="container   ">
    <div className="py-5 z-10 border-b flex items-center justify-between">
        <div className="flex items-center">
          <Image src={flogo} alt="Logo" width={311}  height={60}  className="logos"/>
        </div>

        <nav>
          <ul className="flex space-x-6 uppercase text-sm tracking-widest">
            <Menu setActive={setActive}>

              <MenuItem item="Home" setActive={setActive} active={active} noMenu>
                <div className="p-4">
                  <Link href="/">Home</Link>
                </div>
              </MenuItem>

              <MenuItem item="About" setActive={setActive} active={active} noMenu>
                <div className="p-4">
                  <Link href="/">About</Link>
                </div>
              </MenuItem>


              <MenuItem setActive={setActive} active={active} item="Sectors" noMenu>
                <div className="grid grid-cols-2 gap-4 p-4">
                  <ProductItem
                    title="Engineering & Construction"
                    description=" "
                    href="#"
                    src={"/assets/images/gd-im1.jpg"}
                  />
                  <ProductItem
                    title="Landscape"
                    description=""
                    href="#"
                    src="/assets/images/gd-im2.jpg"
                  />
                  <ProductItem
                    title="Interior Design"
                    description=""
                    href="#"
                    src="/assets/images/gd-im3.jpg"
                  />
                  <ProductItem
                    title="Events & Exhibitions"
                    description=""
                    href="#"
                    src="/assets/images/gd-im4.jpg"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products" noMenu>
                <div className="grid grid-cols-1 gap-2">
                  <ProductItemL
                    title="Engineering & Construction"
                     href="#"
                  />
                  <ProductItemL
                    title="Engineering & Construction"
                     href="#"
                  />
                  <ProductItemL
                    title="Engineering & Construction"
                     href="#"
                  />
                  <ProductItemL
                    title="Engineering & Construction"
                     href="#"
                  />
                
                </div>
              </MenuItem>

              <MenuItem item="Sustainability" setActive={setActive} active={active} noMenu>
                <div className="p-4">
                  <Link href="/">Sustainability</Link>
                </div>
              </MenuItem>

              <MenuItem item="Downloads" setActive={setActive} active={active} noMenu>
                <div className="p-4">
                  <Link href="/">Downloads</Link>
                </div>
              </MenuItem>

              <MenuItem item="News & Events" setActive={setActive} active={active} noMenu>
                <div className="p-4">
                  <Link href="/">News & Events</Link>
                </div>
              </MenuItem>

              <MenuItem item="FAQS" setActive={setActive} active={active} noMenu>
                <div className="p-4">
                  <Link href="/">FAQS</Link>
                </div>
              </MenuItem>

              <MenuItem item="Contact" setActive={setActive} active={active} noMenu>
                <div className="p-4">
                  <Link href="/">Contact</Link>
                </div>
              </MenuItem>
            </Menu>
            {/* <li>
              <Link href="#home">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="#sectors">
                <span>Sectors</span>
              </Link>
            </li>
            <li>
              <Link href="#sustainability">
                <span>Sustainability</span>
              </Link>
            </li>
            <li>
              <Link href="#downloads">
                <span>Downloads</span>
              </Link>
            </li>
            <li>
              <Link href="#news-events">
                <span>News & Events</span>
              </Link>
            </li>
            <li>
              <Link href="#faqs">
                <span>FAQs</span>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <span>Contact</span>
              </Link>
            </li> */}
          </ul>
          </nav>
          </div>
      </div>
    </header>
  );
};

export default Header;
