"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";


const MedSectionContainer = ({children,bgClr}:{
    children:React.ReactNode
    bgClr?:string
}) => {
  return (
    <>
      <section className={`pt-10 lg:pt-20 pb-10 lg:pb-20 insp-mn relative overflow-hidden ${bgClr ? bgClr : "bg-medBg"} `}>
        <motion.div className="ola ola-right absolute top-0 right-[-10%] w-[40em] z-50" animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Image className="absolute w-full " src={lfbef} alt="Description of the image" width={300} height={300} />
        </motion.div>
        <motion.div className="ola ola-right absolute bottom-[43%] left-[-15%] w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Image className="absolute w-full" src={lfbt} alt="Description of the image" width={300} height={300} />
        </motion.div>
        {children}
      </section>
    </>
  );
};

export default MedSectionContainer;
