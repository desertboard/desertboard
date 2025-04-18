import React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "@/app/components/about/mivi.scss";
import lfbef from "@/public/assets/images/home/leaf.svg";
import { AboutType } from "@/types/AboutType";
import parse from 'html-react-parser'
export default function MisionVision({data}:{
  data:AboutType
}) {
  const [activeClass, setActiveClass] = useState("mivi__mibig");

  const handleMiClick = () => {
    setActiveClass("mivi__mibig");
  };
  const handleViClick = () => {
    setActiveClass("mivi__vibig");
  };

  // Ref for the next container (HTMLDivElement type)
  const nextContainerRef = useRef<HTMLDivElement | null>(null);
  const [divWidth, setDivWidth] = useState("100%");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const updateDivWidth = () => {
      if (nextContainerRef.current) {
        // Get the bounding rectangle of the next container
        const containerRect = nextContainerRef.current.getBoundingClientRect();

        // Get the computed style of the next container to retrieve margin values
        const computedStyle = window.getComputedStyle(nextContainerRef.current);

        // Calculate the total width including margins (left + width + right)
        const marginLeft = parseFloat(computedStyle.marginLeft);
        const totalWidth = containerRect.width + marginLeft - 15;

        setDivWidth(`${totalWidth}px`);
      }
    };
    // Initial width calculation
    updateDivWidth();

    // Recalculate on window resize
    window.addEventListener("resize", updateDivWidth);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDivWidth);
    };
  }, []);

  const checkWidth = () => {
    if (window.innerWidth < 992) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  // Run on mount and on resize
  useEffect(() => {
    checkWidth(); // Check width on initial render
    window.addEventListener("resize", checkWidth); // Add event listener

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section className="mivi bg-themebg">
      <div className="container d-none" ref={nextContainerRef}></div>

      <div className={`mivi__wrapper ${activeClass}`}>
        <div className="mivi__mi pt-8 pb-8 md:pt-[60px] md:pb-[124px]" onClick={handleMiClick} style={isSmallScreen ? {} : ({ "--miviwidth": divWidth } as React.CSSProperties)}>
          {/* <div className="mivi__mi pt-5 pb-8 lg:pt-[60px] lg:pb-[124px]" onClick={handleMiClick} style={{ "--miviwidth": divWidth } as React.CSSProperties}> */}
          <div className="ola absolute top-[-10%] right-[-10%] w-[20em] md:w-[40em]">
            <Image src={lfbef} width={150} height={150} className="lg:w-full lg:h-full" alt=""></Image>
          </div>
          <div className="mivi__head" style={{ "--containerWidth": divWidth } as React.CSSProperties}>
            <div className="mivi__icon mb-4 md:mb-5 lg:mb-3">
              <Image src="assets/images/about/mi-icon.svg" className="xl:mb-[60px]" alt="Mission Icon" width={50} height={50} />
            </div>
            <h3 className="mivi__title text-font48 text-Darkgreen leading-[1] nuber-next-heavy mb-0 md:mb-[30px] lg:mb-[60px]">
              Mission<span className="text-[#FF671F]">.</span>
            </h3>
          </div>
          <div className="container px-0">
          <div className="mivi__desc text-black opacity-75 leading-[1.3] text-18 lg:text-font20 text-black/75" style={{ "--containerWidth": divWidth } as React.CSSProperties} >
              {data && data.about[0] && parse(data.about[0].mission)}
            </div>
            </div>
        </div>
        <div className="mivi__vi pt-8 pb-8 lg:pt-[60px] lg:pb-[124px]" onClick={handleViClick} style={isSmallScreen ? {} : ({ "--miviwidth": divWidth } as React.CSSProperties)}>
          {/* <div className="mivi__vi pt-5 pb-10 lg:pt-[60px] lg:pb-[124px]" onClick={handleViClick} style={{ "--miviwidth": divWidth } as React.CSSProperties}> */}
          <div className="ola absolute top-[-30%] right-[-12.5%] z-0">
            <Image src={lfbef} width={150} height={150} className="w-full h-full" alt=""></Image>
          </div>
          <div className="mivi__head" style={{ "--containerWidth": divWidth } as React.CSSProperties}>
            <div className="mivi__icon mb-4 md:mb-5 lg:mb-3 relative z-10">
              <Image src="assets/images/about/vi-icon.svg" className="mb-0 xl:mb-[60px]" alt="Mission Icon" width={50} height={50} />
            </div>
            <h3 className="mivi__title text-font48 text-Darkgreen leading-[1] nuber-next-heavy mb-0 md:mb-[30px] lg:mb-[60px]">
              Vision<span className="text-[#FF671F]">.</span>
            </h3>
          </div>
          <div className="container px-0">
          <div className="mivi__desc text-black opacity-75 leading-[1.3] text-18 lg:text-font20" style={{ "--containerWidth": divWidth } as React.CSSProperties} >
             {data && data.about[0] && parse(data.about[0].vision)}
            </div>
            </div>
        </div>
        </div>
    </section>
  );
}
