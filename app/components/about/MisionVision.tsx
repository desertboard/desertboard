import React from "react";
import { useState } from "react";
import Image from "next/image";
import "@/app/components/about/mivi.scss";
export default function MisionVision() {
  const [activeClass, setActiveClass] = useState("mivi__mibig");

  const handleMiClick = () => {
    setActiveClass("mivi__mibig");
  };
  const handleViClick = () => {
    setActiveClass("mivi__vibig");
  };

  return (
    <section className="mivi bg-themebg">
      <div className="container">
        <div className={`mivi__wrapper ${activeClass}`}>
          <div className="mivi__mi" onClick={handleMiClick}>
            <div className="ola absolute top-[-10%] right-[-10%]">
              <Image src="assets/images/ola.svg" width={150} height={150} className="w-full h-full" alt=""></Image>
            </div>
            <div className="mivi__icon">
              <Image src="assets/images/about/mi-icon.svg" className="mb-10  xl:mb-[60px]" alt="Mission Icon" width={50} height={50} />
            </div>
            <h3 className="mivi__title text-font48 text-primary lh-[1] nuber-next-heavy mb-10  xl:mb-[60px]">
              MIssion <span className="text-[#FF671F]">.</span>
            </h3>
            <p className="mivi__desc text-lightBlack">
              Our mission is to leverage the UAE&apos;s rich heritage of palm fronds to create high-strength, zero-emission structural panels. By transforming local materials into sustainable building solutions, we aim to enhance indoor air quality, reduce carbon footprints, and contribute to the local bio-economy. As the first industrial plant in
              the UAE dedicated to this innovation, we support the nation&apos;s industrial growth while promoting environmental sustainability.
            </p>
          </div>
          <div className="mivi__vi" onClick={handleViClick}>
            <div className="ola absolute top-[-10%] right-[-10%]">
              <Image src="assets/images/ola.svg" width={150} height={150} className="w-full h-full" alt=""></Image>
            </div>
            <div className="mivi__icon">
              <Image src="assets/images/about/vi-icon.svg" className="mb-10  xl:mb-[60px]" alt="Mission Icon" width={50} height={50} />
            </div>
            <h3 className="mivi__title text-font48 text-primary lh-[1] nuber-next-heavy mb-10  xl:mb-[60px]">
              Vision <span className="text-[#FF671F]">.</span>
            </h3>
            <p className="mivi__desc text-lightBlack">To make the built environment more sustainable by providing locally produced engineered solutions, driving the circular economy forward, and setting new standards for eco-friendly, high-performance materials across sectors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
