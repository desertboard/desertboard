import { useState } from "react";
import Image from "next/image";

import wh2 from "@/public/assets/images/applications/wh2.svg";
import arrow from "@/public/assets/images/applications/arrowdown.svg";
const accordionData = [
  {
    title: "Coating for Durability",
    content:
      "For fastening, it is recommended to use screws, nails, or staples with a length at least 2.5 times the thickness of the board, but not less than 50-75 mm. Fastening should be carried out at intervals of 150-300 mm on intermediate supports (depending on roof pitch), 150 mm along board joints, and 100 mm along roof edges.",
  },
  {
    title: "Edge Coating After Resizing",
    content:
      "For fastening, it is recommended to use screws, nails, or staples with a length at least 2.5 times the thickness of the board, but not less than 50-75 mm. Fastening should be carried out at intervals of 150-300 mm on intermediate supports (depending on roof pitch), 150 mm along board joints, and 100 mm along roof edges.",
  },
  {
    title: "Pre-Drilling for Fastening",
    content:
      "For fastening, it is recommended to use screws, nails, or staples with a length at least 2.5 times the thickness of the board, but not less than 50-75 mm. Fastening should be carried out at intervals of 150-300 mm on intermediate supports (depending on roof pitch), 150 mm along board joints, and 100 mm along roof edges.",
  },
  {
    title: "Storage and Transportation Protection",
    content:
      "For fastening, it is recommended to use screws, nails, or staples with a length at least 2.5 times the thickness of the board, but not less than 50-75 mm. Fastening should be carried out at intervals of 150-300 mm on intermediate supports (depending on roof pitch), 150 mm along board joints, and 100 mm along roof edges.",
  },
  {
    title: "Fastening Guidelines",
    content:
      "For fastening, it is recommended to use screws, nails, or staples with a length at least 2.5 times the thickness of the board, but not less than 50-75 mm. Fastening should be carried out at intervals of 150-300 mm on intermediate supports (depending on roof pitch), 150 mm along board joints, and 100 mm along roof edges.",
  },
  {
    title: "Avoid Direct Decorative Applications",
    content:
      "For fastening, it is recommended to use screws, nails, or staples with a length at least 2.5 times the thickness of the board, but not less than 50-75 mm. Fastening should be carried out at intervals of 150-300 mm on intermediate supports (depending on roof pitch), 150 mm along board joints, and 100 mm along roof edges.",
  },
];
interface HeroSectionProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<HeroSectionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-[#E3DED9] mb-3 md:mb-5">
      {/* Accordion Header */}
      <div
        className="flex justify-between cursor-pointer items-center   p-3 md:p-5 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-3 md:gap-[16px] items-start">
          <Image src={wh2} alt="icon" />
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
        <p className="helvetica text-font20 font-[500] clr15op75 px-5">{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="w-full  ">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
