import Image from "next/image";
import '@/app/components/Common/MainDescBox.scss';
import React, { useRef, useState } from "react";

interface MainDescBoxProps {
  secTitle: string;
  subTitle: string;
  desc: string;
  desc2?: string;
  mainImg?: string;
  mainVdo?: string;
  vdoPoster?: string;
}

const MainDescBOx: React.FC<MainDescBoxProps> = ({ secTitle, subTitle, desc, desc2, mainImg, mainVdo, vdoPoster }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Type the ref for HTMLVideoElement
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } else {
      console.error("Video element not found");
    }
  };
  return (
    <section className="pt-10 lg:pt-20   pb-10 lg:pb-[100px]   insp-mn relative inspbg">
      <div className="container m-auto ">
        <div className="lg:flex flex-col lg:flex-row items-center justify-between adst relative xl:pr-[10em] xxl:pr-[20em]">
          <div className="lg:w-1/2 text-left pr-5 pl-5 lg:pl-6 xl:pl-16 py-5 lg:py-20 xl:py-28 opacity-[99%] mb-2 lg:mb-0">
            <h2 className="  text-Darkgreen mb-4 text-[28px] md:text-[48px] font-black nuber-next leading-[1] overflow-hidden">
              {secTitle}
              <span className="text-[#FF671F]">.</span>
            </h2>
            <p className=" nuber-next   mb-5 lg:mb-10 text-litetext font-black opacity-[50%] text-font24 leading-[1]">{subTitle}</p>
            <p className="text-font20 text-litetext opacity-[75%] max-w-[100%] md:max-w-[88%] leading-[1.3] mb-3 lg:mb-4">{desc}</p>

            <p className="text-font20 text-litetext opacity-[75%] max-w-[100%] md:max-w-[88%] leading-[1.3]">{desc2}</p>
          </div>

          <div className="flex lg:absolute lg:w-1/2 xl:w-[58%] lg:right-0 lg:top-5 h-full">
            {/* <div className="relative"> */}
            {mainImg && <Image src={mainImg} width={1080} height={640} className="h-auto lg:h-[640px] w-auto lg:w-580px]" alt="Picture of the author" />}
            {/* <div className="relative"> */}
            {/* Video element */}
            {mainVdo && (
              <>
                <div className="relative h-full">
                  <video ref={videoRef} className="h-full object-cover" src={mainVdo} poster={vdoPoster} controls={false} width={1080} height={740} playsInline onEnded={() => setIsPlaying(false)} />
                  {/* Play/Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {!isPlaying && ( // Show the button only if video is paused
                      <button className="bg-white bg-opacity-20 rounded-sm px-6 py-3 md:px-10 md:py-6 transition duration-300 hover:bg-opacity-50" onClick={togglePlay}>
                        <svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.0114746 0.469116V33.5308L25.9885 17L0.0114746 0.469116Z" fill="white" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDescBOx;
