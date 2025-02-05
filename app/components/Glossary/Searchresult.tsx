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
      <div className="bg-grayE3D p-10 pb-[8px] dst mb-10 md-mb-20 ">
                  <div>
                    <p className="heavydark leading-[1] pb-8 border-b-2 border-[#15151510]">
                      {itemdata.alphabet}<span className="text-orange">.</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap mt-8">
                    {itemdata.items.map((item, index) => (
                      <div className="w-full md:w-1/3 mb-4 md:mb-8 " key={index}>
                        <div className="flex items-center gap-5 justify-between md:justify-normal">
                          <p className="nuber-next-heavy text-font20 leading-[1] text-Darkgreen">
                            {item.name}
                          </p>
                          <Image
                            src={grarrow}
                            alt=" "
                            className="relative top-[2px]"
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
