"use client"

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/public/assets/logo.svg"
import Image from "next/image";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

const Header = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="bg-transparent text-white absolute w-full top-0 z-40">
      <div className="container mx-auto  flex items-center justify-between py-4 z-10 border-b">

        <div className="flex items-center">
          <Image src={Logo} alt="Logo" />
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
                  <HoveredLink href="/">About</HoveredLink>
                </div>
              </MenuItem>


              <MenuItem setActive={setActive} active={active} item="Sectors">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <ProductItem
                    title="Product A"
                    description="Description for Product A"
                    href="/products/a"
                    src="/images/product-a.jpg"
                  />
                  <ProductItem
                    title="Product B"
                    description="Description for Product B"
                    href="/products/b"
                    src="/images/product-b.jpg"
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
    </header>
  );
};

export default Header;
