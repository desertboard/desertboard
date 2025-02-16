"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import flogo from "@/public/assets/images/home/flogo.png";
import logo from "@/public/assets/images/home/sticky-logo.png";
import MobileMenu from "./MobileMenu/MobileMenu";
import Link from "next/link";
import { menuItems } from "../(user)/data/menuItems";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  let timeoutId: NodeJS.Timeout | null = null;

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  const { data: productData } = useSWR(`/api/admin/products`, fetcher);
  const [products, setProducts] = useState([]);

  const { data: sectorData } = useSWR(`/api/admin/sector`, fetcher);
  const [sectors, setSectors] = useState<{ title: string; applications: { title: string; product: string }[] }[]>([]);


  useEffect(() => {
    setProducts(productData?.data || []);
    setSectors(sectorData?.data || []);
  }, [productData, sectorData]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 998);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuItem: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setHoveredMenuItem(menuItem);
    setSubmenuVisible(true);
  };
  
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setHoveredMenuItem(null);
      setSubmenuVisible(false);
    }, 200);
  };
  
  const handleMenuItemClick = () => {
    setHoveredMenuItem(null);
    setSubmenuVisible(false);
  };
  if (isMobile) return <MobileMenu />;

  const formatText = (text: string) => {
    return text.replace(/®/g, "<sup>®</sup>");
  };

  return (
    <header
      className={`w-full ${
        isSticky ? "fixed bg-white text-primary header" : "absolute bg-transparent text-white"
      } top-0 z-40`}
    >
      <div className="container">
        <div className="py-5 z-10 border-b flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src={isSticky ? logo : flogo} alt="Logo" width={311} height={60} className="logos" />
            </Link>
          </div>
          <div className="nav">
            <div className="flex gap-6">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onClick={handleMenuItemClick} 
                    className="cursor-pointer hover:text-gray-500 text-[12px] xl:text-[14px] xxl:text-font18 mitm nuber-next-bold tracking-normal py-[38px] uppercase"
                  >
                    {item.title}
                  </Link>

                  {/* Product Submenu */}
                  {hoveredMenuItem === "Products" && item.title === "Products" && submenuVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full right-0 left-0 mx-auto bg-white shadow-lg mt-[27px] xxl:mt-[36px] py-2 w-60 rounded-none"
                    >
                      {products.map((product: { title: string }, index) => (
                        <Link
                        onClick={handleMenuItemClick} 
                          className="block px-4 py-2 text-black/75 hover:text-black/40 transition-all ease-linear duration-300 text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
                          href={`/product-details/${product.title}`}
                          key={index}
                        >
                          <motion.span
            whileHover={{ scale: 1.1, color: "#000" }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
             <span
                          dangerouslySetInnerHTML={{ __html: formatText(product.title) }}
                        />
          </motion.span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sectors Mega Menu */}
      <AnimatePresence>
        {hoveredMenuItem === "Sectors" && submenuVisible && (
          <motion.div
            onMouseEnter={() => handleMouseEnter("Sectors")}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full z-20 bg-white py-6 shadow-lg shadow-lg"
          >
            <div className="container">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sectors.map((sector, index) => (
                  <div className="flex flex-col gap-3" key={index}>
                    <div className="font-bold text-black text-[14px] xxl:text-[16px] mb-2 tracking-normal uppercase">
                      {sector.title}
                    </div>
                    {sector.applications.map((application, appIndex) => (
                      <Link
                      onClick={handleMenuItemClick} 
                        className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300 text-[12px] xl:text-[14px] xxl:text-[16px] tracking-normal"
                        href={`/applications/${application.product}?application=${application.title}&sector=${encodeURIComponent(sector.title.replace(/\s+/g, "-"))}`}
                        key={appIndex}
                      >
                         <motion.span
            whileHover={{ scale: 1.1, color: "#000" }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {application.title}
          </motion.span>
                      
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
