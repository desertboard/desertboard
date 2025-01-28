'use client';
import React from 'react'
import Usp from './Usp'
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
interface UspsProps {
  secTitle: string;
}

export default function UspList({ secTitle }: UspsProps) {
  const [activeOrder, setActiveOrder] = useState<string | null>(null);
  return (
    <section className="md:py-20 py-10 relative bg-primary text-white overflow-hidden">
      <div className="ola ola-right absolute top-5 right-[-10%] w-[40em]">
        <Image className="absolute" src={ola} alt="Description of the image"></Image>
      </div>
      <div className="ola ola-right absolute bottom-0 left-[-10%] w-[40em] rotate-180">
        <Image className="absolute" src={ola} alt="Description of the image"></Image>
      </div>
      <div className="container ">
        <h2 className="text-3xl font-bold text-font48 mb-10 leading-[1]">
          {secTitle}
          <span className="text-[#FF671F]">.</span>
        </h2>
        <div className={`usp__list ${activeOrder ? "active-" + activeOrder : ""}`}>
          <UspItem uspTitle="Deforestation Free" onMouseEnter={() => setActiveOrder("1")} uspIcon={uspI1} uspDesc="100% sustainable boards made from the UAE’s annually regenerated palm frond biomass, eliminating the need to cut down trees, and reducing reliance on imported wood." order="1" mainImg={uspImg1} />
          <UspItem uspTitle="Zero Formaldehyde" onMouseEnter={() => setActiveOrder("2")} uspIcon={uspI2} order="2" uspDesc="Designed for a healthier, eco-friendly indoorenvironment with zero formaldehyde emission. " mainImg={uspImg2} />
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
        </div>
      </div>
    </section>
  );
}
