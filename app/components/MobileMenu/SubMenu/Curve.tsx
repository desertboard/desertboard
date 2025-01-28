import React, { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Curve({setIsActive,setSubMenuActive}:{
  setIsActive:Dispatch<SetStateAction<boolean>>
  setSubMenuActive?:Dispatch<SetStateAction<boolean>>
}) {

   const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`
  


  const curve = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        d: initialPath,
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
  }


  const handleCloseMenu = () =>{
    setIsActive(false) 
    if(setSubMenuActive){
      setSubMenuActive(false)
    }
  }



  return (
    <svg className={styles.svgCurve} onClick={handleCloseMenu}>
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}