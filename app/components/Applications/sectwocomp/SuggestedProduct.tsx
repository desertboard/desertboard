import React from "react";
import Image from "next/image";
import { IndiApplication } from "@/types/ApplicationType";



interface HeroSectionProps {

  data: IndiApplication;
}
const formatText = (text: string) => {
  return text.replace(/®/g, "<sup>®</sup>");
};
const SuggestedProduct: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <>
      
        <div className="flex mb-7 md:mb-[60px] bg-[#E3DED9] justify-between flex-col md:flex-row" key={data && data.data._id}>
          <div className="flex p-6  gap-[32px]">
            <div className=" ">
              <p className="texthelvetica20 clr15op75">
                Product Suggested:
              </p>
            </div>
            <div className="  ">

              <p className=" helvetica-bold text-font28 leading-[1] text-Darkgreen " dangerouslySetInnerHTML={{ __html: formatText(data && data.data.title) }} />
            </div>
          </div>
          <div className="  ">
            <figure className=" relative h-[50px] md:h-full  w-full">
                          {data && data.data && data.data.images[0] !=="" && <Image className="w-full object-cover h-full" src={data && data.data && data.data.images[0]} width={50} height={60} alt="" />}
                        </figure>
            {/* <Image src={framework.image} alt="" className="h-full" /> */}
          </div>
        </div>
      
    </>
  );
};

export default SuggestedProduct;
