"use client";

import { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../components/ui/navbar-menu"; // Import your menu components
import Link from "next/link";

export const NavBar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="">
        <div className="w-full fixed top-0 z-50 flex justify-end py-4  dark:bg-black border-b-white border-b-2">
      <Menu setActive={setActive}>

      <MenuItem item="Home"  setActive={setActive} active={active} noMenu>
          <div className="p-4">
            <Link href="/">Home</Link>
          </div>
        </MenuItem>

        <MenuItem item="About"  setActive={setActive} active={active} >
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

        {/* <MenuItem setActive={setActive} active={active} item="Company">
          <div className="p-4 flex gap-4">
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="p-4">
            <HoveredLink href="/contact">Contact Us</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
      </div>
    </header>
  );
};
