
import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Curve from './Curve';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Sectors",
    href: "#",
    children:[
      {
        title: "Engineering & Construction",
        href: "/sectors",
      },
      {
        title: "Landscape",
        href: "/sectors",
      },
      {
        title: "Interior Design",
        href: "/sectors",
      },
      {
        title: "Events & Exhibitions",
        href: "/sectors",
      },
    ]
  },
  {
    title: "Sustainability",
    href: "/sustainability",
  },
  {
    title: "Downloads",
    href: "/downloads",
  },
  {
    title: "News & Events",
    href: "/newsandevents",
  },
  {
    title: "Faqs",
    href: "/faq",
  },
  {
    title: "Contact",
    href: "/contact",
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
                        return <Link setSubMenuActive={setSubMenuActive}
                        key={index}
                        data={{...data, index}}
                        isActive={selectedIndicator == data.href}
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
            </div>
            <div className={styles.footer}>
                <a>Instagram</a>
                <a>Dribble</a>
                <a>LinkedIn</a>
            </div>
            <Curve setIsActive={setIsActive}/>
        </div>
    </motion.div>
  )
}