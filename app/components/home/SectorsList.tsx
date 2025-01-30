'use client'
import React from 'react'
import CardFlow from '../Common/cardflow'
import { Homecarlsldata } from '@/app/data/homecarlsl'
import { motion } from "framer-motion";

const SectorsList = () => {
  return (
    <>
           <section className="  py-10 lg:py-20   insp-mn relative inspbg">
        <div className="container m-auto">
          <div className="text-left mb-5 lg:mb-10">
            <motion.h2 className="text-Darkgreen mb-4 text-[28px] md:text-[48px] leading-[1]  nuber-next"
            initial={{ opacity: 0, x: -30 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -30 }, 
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.3 },
              }, 
            }}>
              Sectors<span className="text-[#FF671F]">.</span>
            </motion.h2>

            <motion.p className="text-font20 text-litetext opacity-[75%]  max-w-[75ch]"  initial={{ opacity: 0, x: -30 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -30 }, 
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              }, 
            }}>PSB® boards diverse product lineup is used in everything from house building, furniture, and interior design to mass timber structures, fire-rated doors, building facades, and flooring.</motion.p>

          </div>

          <CardFlow data={Homecarlsldata.data} />
        </div>
      </section>   
    </>
  )
}

export default SectorsList