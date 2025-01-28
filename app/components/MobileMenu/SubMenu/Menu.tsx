import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './Link';
import Curve from './Curve';

const navItems = [
  {
    title: "Product 1",
    href: "/",
  },
  {
    title: "Product 2",
    href: "/",
  },

]

export default function index({setSubMenuActive,setIsActive}:{
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

       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    
                    {
                      navItems.map( (data, index) => {
                        return <Link 
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
            <Curve setIsActive={setIsActive} setSubMenuActive={setSubMenuActive}/>
        </div>
    </motion.div>
  )
}