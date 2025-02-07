import React from "react";
import Image, { StaticImageData } from "next/image";


interface FrameworkItem {
  id: number;
  title: string;
  image: StaticImageData;
}

interface HeroSectionProps {

  data: FrameworkItem[];
}
const SuggestedProduct: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <>
      {data.map((framework) => (
        <div className="flex mb-7 md:mb-[60px] bg-[#E3DED9] justify-between flex-col md:flex-row" key={framework.id}>
          <div className="flex p-6  gap-[32px]">
            <div className=" ">
              <p className="texthelvetica20 clr15op75">
                Product Suggested:
              </p>
            </div>
            <div className="  ">
              <p className=" helvetica-bold text-font28 leading-[1] text-Darkgreen " dangerouslySetInnerHTML={{ __html: framework.title }}>
              </p>
            </div>
          </div>
          <div className="  ">
            <figure className=" relative h-[60px] md:h-full  w-full  ">
                          <Image className="w-full   object-cover h-full" src={framework.image} width={320}  alt="" />
                        </figure>
            {/* <Image src={framework.image} alt="" className="h-full" /> */}
          </div>
        </div>
       ))}
    </>
  );
};

export default SuggestedProduct;
