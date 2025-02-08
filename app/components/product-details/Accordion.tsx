import { useState } from "react";
import Image from "next/image";

import arrow from "@/public/assets/images/applications/arrowdown.svg";
import { assets } from "@/public/assets/images/assets";

interface HeroSectionProps {
  title: string;
  content: string;
  bg: string;
  bullet: boolean;
}
type AccordionProps = {

  bg: string;
  bullet: boolean;
  accordionData: {

    title: string;

    content: string;

  }[];

};

const AccordionItem: React.FC<HeroSectionProps> = ({ title, bg,bullet ,content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
       <div className={`mb-3 md:mb-5 ${bg}`}>
      {/* Accordion Header */}
      <div
        className="flex justify-between cursor-pointer items-center   p-3 md:p-5 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-3 md:gap-[16px] items-start">
        {bullet && <Image src={assets.accic} alt="icon" />}
          <p className="texthelvetica20bold clr15op75">{title}</p>
        </div>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >

       <Image src={arrow} alt="arrow" />
        </div>
      </div>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pl-8 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="helvetica text-font20   clr15op75 px-5">{content}</p>
      </div>
    </div>
  );
};

const Accordion : React.FC<AccordionProps> = ({ accordionData, bg, bullet}) => {
  return (
    <div className="w-full relative z-[1] ">
      {accordionData && accordionData.map((item, index) => (
        <AccordionItem key={index} bg={bg} bullet={bullet} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
