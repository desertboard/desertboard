"use client"

import React, { useState } from 'react'
import styles from './style.module.scss'
import { AnimatePresence } from 'motion/react';
import Menu from './Menu';

const MobileMenu = () => {

    const [isActive, setIsActive] = useState(false);


    return (

        <>
    
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
    
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>

        </div>

        <AnimatePresence mode='wait'>

           {isActive && <Menu/>}

       </AnimatePresence>
    
        </>
    
      )
}

export default MobileMenu