
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
import twx from "@/public/assets/images/home/twx.svg";

const navItems = [
  {
    title: "Engineering & Construction",
    href: "/sector-details/Engineering & Construction",
  },
  {
    title: "Landscape",
    href: "/sector-details/Landscape",
  },
  {
    title: "Interior Design",
    href: "/sector-details/Interior Design",
  },
  {
    title: "Events & Exhibitions",
    href: "/sector-details/Events & Exhibitions",
  },
  {
    title: "View All",
    href: "/sectors",
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
        {<div onClick={() => setSubMenuActive(false)} className={styles.backbutton}>
                <div className={`${styles.backbutton}`}></div>
              </div>}

      <div className={` ${styles.body}`} >
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={`mnsubss ${styles.nav}`}  >

                    {
                      navItems.map( (data, index) => {
                        return <Link setIsActive={setIsActive}
                        setSubMenuActive={setSubMenuActive}
                        key={index}
                        data={{...data, index}}
                        isActive={selectedIndicator == data.href}
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
            </div>
            <div className={styles.footer}>
            <div className='flex items-center gap-5'>
              <a href="https://www.facebook.com/atb.desertboard" target="_blank" className="group">
              <Image
                            src={fb}
                            alt="Facebook"
                            className="group-hover:brightness-2 brightness-0 invert group-hover:invert-0 h-4"
              />
            </a>
                <a href="https://www.linkedin.com/company/desertboard/" target="_blank" >  <Image
                            src={lin}
                            alt="LinkedIn"
                            className="group-hover:brightness-2 brightness-0 invert group-hover:invert-0 h-4"
                          /></a>
                <a href="https://www.instagram.com/desertboard/" target="_blank" >  <Image
                            src={insta}
                            alt="Instagram"
                            className="group-hover:brightness-2 brightness-0 invert group-hover:invert-0 h-4"
            /></a>
            <a href="https://x.com/desertboard_ae" target="_blank"  >  <Image
                            src={twx}
                            alt="X"
                            className="group-hover:brightness-2 brightness-0 invert group-hover:invert-0 h-4"
                          /></a>
                <a href="https://www.youtube.com/@DesertBoard" target="_blank">  <Image
                            src={youtube}
                            alt="youtube"
                            className="group-hover:brightness-2 brightness-0 invert group-hover:invert-0 h-4"
                          /></a>
               </div>
            </div>
            <Curve setIsActive={setIsActive} setSubMenuActive={setSubMenuActive}/>
        </div>
    </motion.div>
  )
}