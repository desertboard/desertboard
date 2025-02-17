import React from "react";
import CustomClrSection from "../Common/CustomClrSection"; 
import "@/app/components/NewsEvents/instagram.scss";
import Link from "next/link";


interface InstagramData {
  id: number;
  imgPost: string;
}

interface InstagramDataProps {
  instagramData: InstagramData[];
}
const InstagramBlock: React.FC<InstagramDataProps> = ({ }) => {
  return (
    <>
      <CustomClrSection bgClr="ola-white bg-primary border-t-[6px] border-b-[6px] border-secondary">
        <div className="container">
          <div className="flex justify-between items-start relative flex-wrap gap-x-5 mb-5 lg:mb-10">
            <h2 className="text-font48 text-white mb-2 xl:mb-10">Are you following us on Instagram?</h2>
            <Link href="https://www.instagram.com/desertboard/" target="_blank" className="text-[#FF671F] w-fit pb-1 flex items-center justify-between border-[#FF671F] border-b-[2px] text-font18 font-bold group font-nuber-next">
            Visit Instagram
        <span className="ml-2">
          <svg width="11" height="16" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round"></path>
          </svg>
        </span>
      </Link>
          </div>
{/*           <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"> */}
          <div className="">
       
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div className="elfsight-app-e9d9658e-5096-45db-893d-5486f2112f13" data-elfsight-app-lazy></div>
            {/* {instagramData.map((post) => (
              <div key={post.id}>
                <Image src={post.imgPost} alt="Instagram Image" className="w-full" width={200} height={200} objectFit="cover" quality={100} priority unoptimized />
              </div>
            ))} */}
          </div>
        </div>
      </CustomClrSection>
    </>
  );
};

export default InstagramBlock;
