"use client"

import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import { AnimatePresence } from 'framer-motion'
import Menu from './Menu';
// import SubMenu from './SubMenu/SubMenu';
import flogo from "@/public/assets/images/home/flogo.png";
import Image from 'next/image';
import Link from 'next/link';
// import SubMenu from './SubMenu/SubMenu';

const MobileMenu = () => {

  const [isActive, setIsActive] = useState(false);
  const [isSubMenuActive, setSubMenuActive] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsActive(false);
        setSubMenuActive(false);
      }
    };

    // Attach event listener when menu is active
    if (isActive || isSubMenuActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener when menu closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, isSubMenuActive]);



  return (

    <div ref={menuRef}>

      <div className='absolute z-20 left-5 top-6'>
      <Link href="/"><Image src={flogo} alt="Logo" width={200}  height={60} /></Link>
      </div>


      {/* {isSubMenuActive && <div onClick={() => { setIsActive(!isActive && !isSubMenuActive ? true : isSubMenuActive && isActive && true); setSubMenuActive(false) }} className={styles.backbutton}>

        <div className={`${styles.backbutton} ${isActive || isSubMenuActive ? "" : ""}`}></div>

      </div>} */}

      <div onClick={() => { setIsActive(!isActive); setSubMenuActive(false) }} className={styles.button}>

        <div className={`${styles.burger} ${isActive || isSubMenuActive ? styles.burgerActive : ""}`}></div>

      </div>



        <div>
      <AnimatePresence mode='sync'>

        {isActive && <Menu key={"menu"} setSubMenuActive={setSubMenuActive} setIsActive={setIsActive}/>}
        {isSubMenuActive && <SubMenu setSubMenuActive={setSubMenuActive} setIsActive={setIsActive}/>}

      </AnimatePresence>
      </div>

    </div>

  )
}

export default MobileMenu