import React from "react";
import CustomClrSection from "../Common/CustomClrSection";
import PrimaryArrowBtn from "../Common/PrimaryArrowBtn";
import "@/app/components/NewsEvents/instagram.scss";
import Image from "next/image";

interface InstagramData {
  id: number;
  imgPost: string;
}

interface InstagramDataProps {
  instagramData: InstagramData[];
}
const InstagramBlock: React.FC<InstagramDataProps> = ({ instagramData }) => {
  return (
    <>
      <CustomClrSection bgClr="ola-white bg-primary border-t-[6px] border-b-[6px] border-secondary">
        <div className="container">
          <div className="flex justify-between items-center relative z-50">
            <h2 className="text-font48 heavydark text-white mb-2 xl:mb-10">
              Are you following us on LinkedIn?<span className="text-[#FF671F] leading-[1]">.</span>
            </h2>
            <PrimaryArrowBtn btntitle={"Visit LinkedIn"} btnLink="#" />
          </div>
          <div className="grid grid-flow-row grid-cols-5">
            {instagramData.map((post) => (
              <div key={post.id}>
                <Image src={post.imgPost} alt="Instagram Image" className="w-full" width={200} height={200} objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
      </CustomClrSection>
    </>
  );
};

export default InstagramBlock;
