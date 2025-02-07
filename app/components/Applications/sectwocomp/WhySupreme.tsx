import React from "react";
import Image, { StaticImageData } from "next/image";


interface WhySupremeProps {
  sectitle: string;
  data: {
    id: number;
    title: string;
    icon: StaticImageData
    boldtest: string;
    description: string;
  }[];
}

// Component to display the data
const WhySupreme: React.FC<WhySupremeProps> = ({ sectitle, data }) => {
  return (
    <>

        <div className="pb-7 md:pb-[60px] ">
        <div>
          <p className=" helvetica-bold text-font28 leading-[1] text-Darkgreen mb-8" dangerouslySetInnerHTML={{ __html:   sectitle }}>

          </p>
        </div>
        <div   className="sts">
        {data.map((framework) => (
        <div key={framework.id}  className="sser" >
          <div className="flex gap-3 md:gap-[18px] items-start mb-4 strs  ">
            <Image src={framework.icon} alt="" />
            <p className="texthelvetica20 clr15op75">
              <span className="texthelvetica20bold opacity-[1] text-black">
              {framework.boldtest}:
              </span>
                <span  > {framework.description}</span>
            </p>
          </div>
        </div>
        ))}
          </div>
      </div>
    </>
  );
};

export default WhySupreme;
