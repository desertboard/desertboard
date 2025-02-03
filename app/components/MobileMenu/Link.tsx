import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from './anim';
import { Dispatch, SetStateAction } from 'react';

export default function Index({data, isActive, setSelectedIndicator,setSubMenuActive,setIsActive}:{
    data:{
        title:string;
        href:string;
        index:number
    },
    isActive:boolean;
    setSelectedIndicator:Dispatch<SetStateAction<string>>
    setSubMenuActive:Dispatch<SetStateAction<boolean>>
    setIsActive:Dispatch<SetStateAction<boolean>>
}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={`${styles.link} mb-2`} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
        <Link href={href} className='text-2xl' onClick={()=>title=="Sectors" ? setSubMenuActive(true) : setIsActive(false)}>{title}</Link>
      </motion.div>
    )
}