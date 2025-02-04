import React from "react";
import CustomClrSection from "../Common/CustomClrSection";
import PrimaryArrowBtn from "../Common/PrimaryArrowBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

// Images
import LInkedInLogo from "@/public/assets/images/desert-board-linkedin-logo.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface LinkedInSliderProps {
  data: {
    id: number;
    timePosted: string;
    desc: string;
    imageSrc: string;
    likes: string;
  }[];
}

const LinkedInSlider: React.FC<LinkedInSliderProps> = ({ data }) => {
  return (
    <>
      <CustomClrSection>
        <div className="container">
          <div className="flex justify-between items-center relative z-50">
            <h2 className="text-font48 heavydark mb-2 xl:mb-10">
              Are you following us on LinkedIn?<span className="text-[#FF671F] leading-[1]">.</span>
            </h2>
            <PrimaryArrowBtn btntitle={"Visit LinkedIn"} btnLink="#" />
          </div>
        </div>
        <div className="container pb-[100px] !overflow-visible">
          <Swiper
            className="linkedin-slider !overflow-visible"
            modules={[Navigation, Pagination]}
            loop={true}
            centeredSlides={false}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={30}
            slidesPerView={2}
            // onInit={(swiper) => {
            //   swiper.updateSlides();
            //   swiper.updateSlidesClasses();
            // }}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 4.4,
              },
            }}>
            {data.map((post) => (
              <SwiperSlide className="linkedin-slider__slide" key={post.id}>
                <div className="linkedIn-crd bg-[#F9F3EE]">
                  <div className="linkediIn-crd__head flex gap-2 flex-wrap p-6">
                    <Image src={LInkedInLogo} alt="LinkedIn Logo" width={50} height={50} />
                    <div>
                      <h3 className="text-primary font-bold nuber-next-heavy text-font20 leading-[1.3]">Deseart Board</h3>
                      <p className="text-black opacity-75 leading-[1.61]">{post.timePosted}</p>
                    </div>
                  </div>
                  <div className="linkedIn-crd__body px-6 pb-10">
                    <p className="text-black opacity-75 leading-[1.3] text-font20">{post.desc}</p>
                  </div>
                  <div className="linkedIn-crd__footer">
                    <div className="linkedIn-crd__img">
                      <Image src={post.imageSrc} alt="LinkedIn Logo" className="w-full h-[216px] object-cover" width={350} height={217} />
                    </div>
                    <div className="flex justify-between items-center p-6">
                      <div className="flex items-center gap-1 opacity-75">
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8653 0.0707461C14.3399 0.156759 12.8995 0.801473 11.8191 1.88184L11.4082 2.29272L10.9959 1.88184C9.82323 0.748175 8.2521 0.120623 6.62109 0.134417C4.99009 0.148212 3.4298 0.802249 2.27647 1.95558C1.12313 3.10892 0.469096 4.66921 0.455301 6.30021C0.441506 7.93121 1.06906 9.50234 2.20272 10.675L10.7905 19.2628C10.9544 19.4265 11.1766 19.5184 11.4082 19.5184C11.6399 19.5184 11.8621 19.4265 12.026 19.2628L20.6123 10.675C21.4822 9.80561 22.0746 8.69775 22.3147 7.49158C22.5549 6.28541 22.4319 5.03512 21.9613 3.89887C21.4907 2.76261 20.6937 1.79144 19.6711 1.10821C18.6485 0.424984 17.4463 0.0603881 16.2164 0.0605469L15.8653 0.0707461ZM16.215 1.80898C16.8022 1.8086 17.3837 1.92395 17.9263 2.14845C18.4689 2.37294 18.962 2.70217 19.3772 3.11732C19.7925 3.53248 20.1219 4.0254 20.3466 4.56793C20.5713 5.11046 20.6868 5.69195 20.6866 6.27916L20.6764 6.57348C20.605 7.65479 20.1431 8.67332 19.3767 9.43946L11.4082 17.408L3.43828 9.43946C2.61653 8.59772 2.1597 7.46599 2.16683 6.28966C2.17396 5.11333 2.64449 3.98723 3.47639 3.15552C4.3083 2.32381 5.43451 1.85354 6.61084 1.84668C7.78717 1.83981 8.91879 2.29691 9.76034 3.11886L10.7905 4.14752C10.9544 4.31123 11.1766 4.40319 11.4082 4.40319C11.6399 4.40319 11.8621 4.31123 12.026 4.14752L13.0561 3.11886C13.8938 2.28069 15.03 1.80952 16.215 1.80898Z"
                            fill="#111111"
                          />
                        </svg>
                        <p className="text-black leading-[1.3] text-font20 mb-0">{post.likes}</p>
                      </div>
                      <div className="flex gap-1 opacity-75">
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.4923 1.33597C13.2964 1.57794 13.1894 1.87986 13.1893 2.19125V4.68277L12.7973 4.70317C5.08528 5.17525 0.5 10.0505 0.5 19.4192C0.5 20.4071 1.84484 20.611 2.18141 19.7601L2.22658 19.6173C2.25281 19.5081 2.34314 19.2589 2.53256 18.918C2.9214 18.2338 3.43312 17.6272 4.04204 17.1287L4.2912 16.9277C6.16348 15.4706 8.98284 14.541 12.9518 14.3953L13.1893 14.3881V17.4056C13.1892 17.5857 13.2447 17.7614 13.3482 17.9087C13.4517 18.0561 13.5983 18.1679 13.7677 18.2288L13.9003 18.2652C14.03 18.29 14.3462 18.3934 14.4831 18.4022L14.5487 18.4051C14.8182 18.4051 15.0732 18.2973 15.2626 18.1049L22.8931 10.3171C23.0507 10.1561 23.1401 9.9404 23.1425 9.71508C23.145 9.48975 23.0603 9.27219 22.9062 9.10777L15.5409 1.2602C15.4188 1.12976 15.2721 1.02468 15.1092 0.950993C14.9464 0.877305 14.7706 0.83645 14.592 0.830766C14.4133 0.825082 14.2353 0.854681 14.0682 0.917868C13.901 0.981055 13.7479 1.07659 13.6177 1.19901L13.4923 1.33597ZM14.9377 3.17329L21.0558 9.69204L14.9377 15.9369V13.5022C14.9377 13.2703 14.8456 13.048 14.6817 12.884C14.5177 12.7201 14.2954 12.628 14.0635 12.628C8.92018 12.628 5.28198 13.8009 2.91721 15.7912L2.63164 16.0389L2.46408 16.1948L2.50779 15.9005C3.54228 9.43852 7.61468 6.41372 14.0635 6.41372C14.2954 6.41372 14.5177 6.32162 14.6817 6.15767C14.8456 5.99372 14.9377 5.77136 14.9377 5.5395V3.17329Z"
                            fill="#111111"
                          />
                        </svg>
                        <a href="#" className="text-black ">
                          Share
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative top-24">
            <div className="absolute bottom-0 right-0 flex gap-4 z-10">
              <button className="custom-next cursor-pointer hover:opacity-80 transition-opacity p-2">
                <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M17.9879 2L2.98787 17L17.9879 32M22.9939 7.00392L12.9978 17L22.9939 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </button>
              <button className="custom-prev cursor-pointer hover:opacity-80 transition-opacity p-2">
                <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </CustomClrSection>
    </>
  );
};

export default LinkedInSlider;
