"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import flogo from "@/public/assets/images/home/flogo.png";
import logo from "@/public/assets/images/home/sticky-logo.png";
import { Menu, MenuItem } from "./ui/navbar-menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { menuItems } from "../(user)/data/menuItems";
import useSWR from "swr";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {

  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

  const { data: productData } = useSWR(`/api/admin/products`, fetcher)
  const [products, setProducts] = useState([])

  const { data: sectorData } = useSWR(`/api/admin/sector`, fetcher)
  const [sectors, setSectors] = useState([])

  useEffect(() => {
    console.log(productData && productData.data)
    console.log(sectorData && sectorData.data)

    setProducts(productData && productData.data)
    setSectors(sectorData && sectorData.data)
  }, [productData, sectorData])


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

  const [isSticky, setIsSticky] = useState(false);
  const formatText = (text: string) => {
    return text.replace(/®/g, "<sup>®</sup>");
  };
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
    <header className={`w-full ${isSticky ? "fixed bg-white text-primary header" : "absolute bg-transparent text-white"} top-0 z-40`}>
      <div className="container">
        <div className="py-5 z-10 border-b flex items-center justify-between">
          <div className="flex items-center">
            <Link href={'/'} > <Image src={isSticky ? logo : flogo} alt="Logo" width={311} height={60} className={`logos`} /></Link>
          </div>

          <nav>
            <ul className="flex space-x-5 3xl:space-x-6 uppercase text-sm tracking-widest group">
              <Menu setActive={setActive}>
                {menuItems.map((item, index) => (
                  <MenuItem item={item.title} href={item.href} setActive={setActive} active={active} key={index} noMenu={item.title !== "Products" && item.title !== "Sectors"}>
                    {item.title == "Products" &&
                      <div className="flex flex-col gap-3">
                        {products && products.map((item: { title: string }, index) => (
                          <Link className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300 text-[12px] xl:text-[14px]  xxl:text-[16px] tracking-normal" href={`/product-details/${item.title}`} key={index}>
                              <motion.span
            whileHover={{ scale: 1.1, color: "#000" }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
             <span
                          dangerouslySetInnerHTML={{ __html: formatText(item.title) }}
                        />
          </motion.span>
                           </Link>
                        ))}
                      </div>
                    }

                    {item.title == "Sectors" &&
                      <div className="flex space-x-5 gap-8" key={index}>
                        {sectors && sectors.map((item: { title: string,applications:{title:string,product:string}[] }, index) => (

                            <div className="flex flex-col gap-3" key={index} >
                              <Link href={`/sector-details/${item.title}`}><div className="font-bold text-black text-[14px] xxl:text-[16px] mb-4 tracking-normal">{item.title}</div></Link>
                              {item.applications.map((application,index)=>(

                                  <div  key={index}>
                                    <Link className="text-black/75 hover:text-black/40 transition-all ease-linear duration-300 text-[12px] xl:text-[14px]  xxl:text-[16px] tracking-normal" href={`/applications/${application.product}?application=${encodeURIComponent(application.title)}&sector=${encodeURIComponent(item.title.replace(/\s+/g, "-"))}`} key={index}>        <motion.span
            whileHover={{ scale: 1.1, color: "#000" }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {application.title}
          </motion.span></Link>
                                  </div>


                              ))}
                            </div>

                        ))}
                      </div>
                    }

                  </MenuItem>
                ))}

                {/* <MenuItem item="About" setActive={setActive} active={active} noMenu>
                <div className="p-4">
                  <Link href="/">About</Link>
                </div>
              </MenuItem> */}

                {/* <MenuItem setActive={setActive} active={active} item="Sectors" noMenu>
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
              </MenuItem> */}
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
