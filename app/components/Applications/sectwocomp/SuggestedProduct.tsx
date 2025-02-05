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
        <div className="flex bg-[#E3DED9] justify-between" key={framework.id}>
          <div className="flex p-10 ] gap-[32px]">
            <div className=" ">
              <p className="texthelvetica20 clr15op75">
                Product Suggested :
              </p>
            </div>
            <div className="  ">
              <p className=" helvetica-bold text-font28 leading-[1] text-Darkgreen " dangerouslySetInnerHTML={{ __html: framework.title }}>
              </p>
            </div>
          </div>
          <div className="  ">
            <Image src={framework.image} alt="" className="h-full" />
          </div>
        </div>
       ))}
    </>
  );
};

export default SuggestedProduct;
