
import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Curve from './Curve';
import Image from 'next/image';
import fb from "@/public/assets/images/home/fb.svg";
import lin from "@/public/assets/images/home/lin.svg";
import insta from "@/public/assets/images/home/inst.svg";
import youtube from "@/public/assets/images/home/youtube.svg";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Sectors",
    href: "#",
    children:[
      {
        title: "Engineering & Construction",
        href: "#",
      },
      {
        title: "Landscape",
        href: "#",
      },
      {
        title: "Interior Design",
        href: "#",
      },
      {
        title: "Events & Exhibitions",
        href: "#",
      },
    ]
  },
  {
    title: "Products",
    href: "/sustainability",
  },
  {
    title: "Sustainability",
    href: "#",
  },
  {
    title: "Downloads",
    href: "#",
  },
  {
    title: "News & Events",
    href: "#",
  },
  {
    title: "Faqs",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
]

export default function Menu({setSubMenuActive,setIsActive}:{
  setSubMenuActive:Dispatch<SetStateAction<boolean>>
  setIsActive:Dispatch<SetStateAction<boolean>>
}) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>

                    {
                      navItems.map( (data, index) => {
                        return <Link setSubMenuActive={setSubMenuActive} setIsActive={setIsActive}
                        key={index}
                        data={{...data, index}}
                        isActive={selectedIndicator == data.title}
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
            </div>
            <div className={styles.footer}>
              <div className='flex items-center gap-5'>
                <a>  <Image
                            src={fb}
                            alt="Facebook"
                            className="group-hover:brightness-2 brightness-0 invert group-hover:invert-0 h-4"
                          /></a>
                <a>  <Image
                            src={lin}
                            alt="Facebook"
                            className="group-hover:brightness-2 brightness-0 invert group-hover:invert-0 h-4"
                          /></a>
                <a>  <Image
                            src={insta}
                            alt="Facebook"
                            className="group-hover:brightness-2 brightness-0 invert group-hover:invert-0 h-4"
                          /></a>
                <a>  <Image
                            src={youtube}
                            alt="Facebook"
                            className="group-hover:brightness-2 brightness-0 invert group-hover:invert-0 h-4"
                          /></a>
               </div>
            </div>
            <Curve setIsActive={setIsActive}/>
        </div>
    </motion.div>
  )
}