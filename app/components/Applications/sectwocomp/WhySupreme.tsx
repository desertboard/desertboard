import React from "react";
import parse from 'html-react-parser'
import Image from "next/image";
import { IndiApplication } from "@/types/ApplicationType";


// Component to display the data
const WhySupreme = ({ data,pageName }:{
  data:IndiApplication
  pageName:string;
}) => {
  const formatText = (text: string) => {
    return text.replace(/®/g, "<sup>®</sup>");
  };
  // console.log(data && data.data)
  return (
    <>

        <div className="pb-7 md:pb-[60px] ">
        <div>
           {pageName === "products" ? <p className=" helvetica-bold text-font28   text-Darkgreen mb-4 md:mb-8">Key Information</p> : <p className=" helvetica-bold text-font28   text-Darkgreen mb-4 md:mb-8" dangerouslySetInnerHTML={{ __html: formatText(`Why ${data && data.data.title}`) }} />}


        </div>
        <div   className="sts">
        {data && data.data && data.data.subSections && data.data.subSections.map((framework) => (
        <div key={framework._id}  className="sser" >
          <div className="flex gap-3 md:gap-[18px] items-start mb-4 strs">
            <Image src={framework.icon} alt="icon-image" width={30} height={40} className="imgwd"/>

              {/* <span className="texthelvetica20bold opacity-[1] text-black">
              {framework.boldtest}:
              </span> */}
              {/* <span className="texthelvetica20 clr15op75"> {parse(framework.description)}</span> */}
              <p className="texthelvetica20 clr15op75" dangerouslySetInnerHTML={{ __html: formatText(framework.description) }} />

              {/* <div className="texthelvetica20 clr15op75">{framework.description}</div> */}

          </div>
        </div>
        ))}
          </div>
      </div>
    </>
  );
};

export default WhySupreme;
