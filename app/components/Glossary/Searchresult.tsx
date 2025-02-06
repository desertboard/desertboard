"use client";
import React from "react";
import Image from "next/image";
import grarrow from "@/public/assets/images/icons/greenarrow.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface MenuItem {
  id: number;
  name: string;
}

interface AlphabetMenuProps {
  itemdata: {
    alphabet: string;
    items: MenuItem[];
  };
}

const Searchresult: React.FC<AlphabetMenuProps> = ({ itemdata }) => {


  return (
    <>
      <div className="bg-grayE3D p-5 md:p-10 md:pb-[8px] dst mb-10 md-mb-20 ">
                  <div>
                    <p className="heavydark leading-[1] pb-8 border-b-2 border-[#15151510]">
                      {itemdata.alphabet}<span className="text-orange">.</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap mt-8">
                    {itemdata.items.map((item, index) => (
                      <div className="w-full md:w-1/3 mb-4 md:mb-8 " key={index}>

                        <div className="relative w-fit">
                          <select id="country" name="country" autoComplete="country-name" className="appearance-none bg-transparent py-1.5 pr-8 pl-3   outline-none rounded-none text-font20 nuber-next-heavy   leading-[1] text-Darkgreen">
                            <option className="text-font20 text-black opacity-75">{item.name} </option>
                            <option className="text-font20 text-black opacity-75">Sector 1</option>
                            <option className="text-font20 text-black opacity-75">Sector 2</option>
                            <option className="text-font20 text-black opacity-75">Sector 3</option>
                          </select>
                          <Image
                            src={grarrow}
                            alt=" "
                            className="    absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
                            width={16}
                            height={8}
                          ></Image>
                        </div>

                      </div>
                    ))}
        </div>

                </div>
    </>
  );
};

export default Searchresult;
