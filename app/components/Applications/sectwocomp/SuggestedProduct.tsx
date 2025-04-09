import React from "react";
import Image from "next/image";
import { IndiApplication } from "@/types/ApplicationType";



interface HeroSectionProps {

  data: IndiApplication;
}
const formatText = (text: string) => {
  if(!text){
    return "";
  }
  return text.replace(/®/g, "<sup>®</sup>");
};
const SuggestedProduct: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <>

        <div className="grid grid-cols-1 md:grid-cols-10 mb-7 md:mb-[60px] bg-[#E3DED9] justify-between " key={data && data?.data?._id}>
          <div className="col-span-7 flex p-4 md:p-6  px-3 md:p-x-6  gap-[8px] md:gap-[32px] justify-center md:justify-start ">
            <div className=" ">
              <p className="text-font18 texthelvetica20 clr15op75 leading-[1]">
                Product Suggested:
              </p>
            </div>
            <div className="flex items-center ">

              <p className=" helvetica-bold text-font22  md:text-font28 leading-[1] text-Darkgreen " dangerouslySetInnerHTML={{ __html: formatText(data && data.data && data.data.title || "") }} />
            </div>
          </div>
          <div className="col-span-3  h-full ">
            <figure className=" relative h-[50px] md:h-full  w-full">
                          {data && data.data && data?.data?.images &&  data?.data?.images[0] !=="" && <Image className="w-full object-cover h-full absolute object-center" src={data && data.data && data.data.images[0]} width={400} height={200} alt={data?.data.imageAlt} />}
                        </figure>
            {/* <Image src={framework.image} alt="" className="h-full" /> */}
          </div>
        </div>

    </>
  );
};

export default SuggestedProduct;
