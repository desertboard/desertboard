"use client";
import React,{ useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import { assets } from "@/public/assets/images/assets";
import accordianArrow from '@/public/assets/images/accordian-arrow.svg'

interface MenuItem {
  id: number;
  title: string;
  description: string;
}

interface AlphabetMenuProps {
  itemdata: {
    alphabet: string;
    items: MenuItem[];
  };
}

const Searchresult: React.FC<AlphabetMenuProps> = ({ itemdata }) => {


  console.log(itemdata?.items?.map((item)=>(item)))

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleVisibility = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className="bg-grayE3D p-5 md:p-10 md:pb-[8px] dst mb-10 md-mb-20 ">
                  <div>
                    <p className="heavydark leading-[1] pb-8 border-b-2 border-[#15151510]">
                      {itemdata.alphabet}<span className="text-orange">.</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap mt-8">
                    {itemdata?.items?.map((item, index) => (
                      <div className="w-full md:w-1/3 mb-4 md:mb-8 " key={index}>

<div>
      {/* Clickable Section */}
      <div
        className="flex items-center gap-5 mb-3 cursor-pointer"
        onClick={() => toggleVisibility(index)}
      >
        <p className="nuber-next-heavy text-font20 leading-[1] text-Darkgreen">
          {item.title}
        </p>
        <Image src={accordianArrow} alt='arrow' className={`${activeIndex !== index ? "hidden":"block"}`} width={16} height={16}/>
             <Image src={accordianArrow} alt='arrow' className={`rotate-180 ${activeIndex == index ? "hidden":"block"}`} width={16} height={16}/>
      </div>

      {/* Hidden Paragraph (Only Affects Next Sibling) */}
      <div className="overflow-hidden transition-all duration-300">
            <p
              className={`texthelvetica20 clr15op75 transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }`}
            >{item.description}
        </p>
      </div>
    </div>


                      </div>
                    ))}
        </div>

                </div>
    </>
  );
};

export default Searchresult;
