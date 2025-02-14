'use client';
import React from 'react'
import ola from "@/public/assets/images/home/ola.svg";
import uspImg1 from "@/public/assets/images/home/usps/usp-img1.jpg";
import uspImg2 from "@/public/assets/images/home/usps/usp-img2.jpg";
import uspImg3 from "@/public/assets/images/home/usps/usp-img3.jpg";
import uspImg4 from "@/public/assets/images/home/usps/usp-img4.jpg";
import uspImg5 from "@/public/assets/images/home/usps/usp-img5.jpg";
import uspImg6 from "@/public/assets/images/home/usps/usp-img6.jpg";
import uspImg7 from "@/public/assets/images/home/usps/usp-img7.jpg";
import uspI1 from "@/public/assets/images/home/usps/usp-i1.svg";
import uspI2 from "@/public/assets/images/home/usps/usp-i2.svg";
import uspI3 from "@/public/assets/images/home/usps/usp-i3.svg";
import uspI4 from "@/public/assets/images/home/usps/usp-i4.svg";
import uspI5 from "@/public/assets/images/home/usps/usp-i5.svg";
import uspI6 from "@/public/assets/images/home/usps/usp-i6.svg";
import uspI7 from "@/public/assets/images/home/usps/usp-i7.svg";
import { useState } from 'react';
import Image from 'next/image';
import UspItem from './UspItem';
import { motion } from "framer-motion";
import "@/app/components/home/usps.scss";

interface UspsProps {
  secTitle: string;
}

export default function UspList({ secTitle }: UspsProps) {
  const [activeOrder, setActiveOrder] = useState<string | null>("1");
  return (
    <section className=" py-10 lg:py-20  relative bg-primary text-white overflow-hidden border-t-[5px] border-b-[5px] border-secondary">
      <motion.div className="ola ola-right absolute top-5 right-[-20%] md:right-[-10%] w-[20em] md:w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image className="absolute" src={ola} alt="Description of the image"></Image>
      </motion.div>

      <div className="ola ola-right absolute bottom-0 left-[-25%] md:left-[-10%] w-[20em] md:w-[40em] rotate-180">
        <Image className="absolute" src={ola} alt="Description of the image"></Image>
      </div>
      <div className="container ">
        <motion.h2 className="text-3xl nuber-next-heavy text-font48 mb-5 lg:mb-10"
        initial={{ opacity: 0, x: -30 }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 50% visible
        variants={{
          hidden: { opacity: 0, x: -30 }, // Start below and invisible
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.3 },
          }, // Slide up and fade in
        }}>
          {secTitle}
          <span className="text-[#FF671F]">.</span>
        </motion.h2>
        <motion.div className={`usp__list ${activeOrder ? "active-" + activeOrder : ""}`}
          initial={{ opacity: 0, y: -30 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: -30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.5 },
                },
              }}>
          <UspItem uspTitle="Deforestation Free" onMouseEnter={() => setActiveOrder("1")} uspIcon={uspI1} uspDesc="100% sustainable boards made from the UAE’s annually regenerated palm frond biomass, eliminating the need to cut down trees, and reducing reliance on imported wood." order="1" mainImg={uspImg1} />
          <UspItem uspTitle="Zero Formaldehyde" onMouseEnter={() => setActiveOrder("2")} uspIcon={uspI2} order="2" uspDesc="Designed for a healthier, eco-friendly indoor environment with zero formaldehyde emission." mainImg={uspImg2} />
          <UspItem
            uspTitle="Carbon Sink"
            onMouseEnter={() => setActiveOrder("3")}
            uspIcon={uspI3}
            order="3"
            uspDesc="PSB® boards act as an artificial carbon sink as they can store the carbon within their structure which would have otherwise been released to the atmosphere or incinerated, helping to mitigate climate change by reducing atmospheric CO₂ levels."
            mainImg={uspImg3}
          />
          <UspItem uspTitle="Spearheading the Circular Economy" onMouseEnter={() => setActiveOrder("4")} uspIcon={uspI4} order="4" uspDesc="PSB® boards are 100% reusable and recyclable, enabling a closed-loop lifecycle that minimizes waste and maximizes sustainability." mainImg={uspImg4} />
          <UspItem uspTitle="Versatile" onMouseEnter={() => setActiveOrder("5")} uspIcon={uspI5} order="5" uspDesc="Highly customizable boards with a variety of finishes, designed to meet the diverse needs of the construction & allied industries." mainImg={uspImg5} />
          <UspItem uspTitle="Production Facility" onMouseEnter={() => setActiveOrder("6")} uspIcon={uspI6} order="6" uspDesc="Capable of producing 6,200 sustainable PSB® boards per day, accommodating 16 (20-foot containers) daily." mainImg={uspImg6} />
          <UspItem uspTitle="Bi-Economical" onMouseEnter={() => setActiveOrder("7")} uspIcon={uspI7} order="7" uspDesc="An eco-friendly, cost-efficient alternative to traditional materials, PSB® Conform boards can be reused over 40 times vertically, saving both cost and time in the construction industry." mainImg={uspImg7} />
        </motion.div>
      </div>
    </section>
  );
}
