import React from "react";
import Image, { StaticImageData } from "next/image";

import readarrow from "@/public/assets/images/read-arrow.svg";
interface FrameworkItem {
  id: number;
  title: string;
  dec: string;
  link: string;
  image: StaticImageData;
  icon: any;
}

interface FrameworkSectionProps {

  data: FrameworkItem[];
}


  const CardFlow: React.FC<FrameworkSectionProps> = ({  data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
       {data.map((framework) => (
            <div className="relative group bg-gray-800 csmn overflow-hidden " key={framework.id}>
              <Image src={framework.image}  alt= {framework.title} className="w-full h-[320px] lg:h-[552px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-blacktrans   bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute top-0 text-white w-full p-8">
                <div className="w-full ">
                  <Image src={framework.icon} alt="icn1" className="" />
                </div>
             <h3 className=" pt-5 border-t opacity-[90%] text-font28 font-bold mt-5   leading-[1.3]  transition-all duration-300 group-hover:mt-10"
               dangerouslySetInnerHTML={{ __html: framework.title }}
             >
                </h3>
             <p className="mt-5 w-full opacity-0 group-hover:opacity-75 w-[250px] group-hover:w-full transition-opacity duration-500  text-font20 leading-[1.5]">
             {framework.dec}
                </p>
                <a href="#" className="relative flex gap-2 max-w-fit top-3  opacity-0 group-hover:opacity-100 w-[250px] group-hover:w-full transition-opacity duration-300 text-font18 font-black leading-[1.5] rmbtn ">
                  Read More <Image src={readarrow} alt="icn1" className="  transition-all duration-300  " />
                </a>
              </div>
            </div>

))}

          </div>

  );
};

export default CardFlow;
