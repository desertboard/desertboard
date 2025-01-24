import React from "react";
import Link from "next/link";
import Logo from "@/public/assets/logo.svg"
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-transparent text-white absolute w-full top-0 z-40">
      <div className="container mx-auto  flex items-center justify-between py-4 z-10 border-b">

        <div className="flex items-center">
          <Image src={Logo} alt="Logo" />
        </div>

        <nav>
          <ul className="flex space-x-6 uppercase text-sm tracking-widest">
            <li>
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
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
