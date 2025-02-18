import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from './anim';
import { Dispatch, SetStateAction } from 'react';

export default function Index({data, isActive, setSelectedIndicator,setIsActive,setSubMenuActive}:{
    data:{
        title:string;
        href:string;
        index:number
    },
    isActive:boolean;
    setSelectedIndicator:Dispatch<SetStateAction<string>>
    setIsActive:Dispatch<SetStateAction<boolean>>
    setSubMenuActive:Dispatch<SetStateAction<boolean>>
}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={styles.link} 
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
        <Link href={href} className='text-2xl mb-3' onClick={()=>{setIsActive(false);setSubMenuActive(false)}}>{title}</Link>
      </motion.div>
    )
}