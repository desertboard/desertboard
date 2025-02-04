import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide,SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "@/app/components/about/accr-slider.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { motion } from "framer-motion";
import Image from "next/image";
import lfbef from "@/public/assets/images/home/leaf.svg";
import lfbt from "@/public/assets/images/home/lfbt.svg";

const AccrediationSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Simulate next slide transition after initialization
      setTimeout(() => {
        if(swiperRef.current){

          swiperRef.current.swiper.slideNext(0); // Instant transition (0ms duration)
        }
      }, 100);
    }
  }, []);
  return (
    <section className="pt-10 lg:pt-20 pb-10 lg:pb-[200px] insp-mn relative inspbg ">
      <motion.div className="ola ola-right absolute top-0 right-[-10%] w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image className="absolute w-full " src={lfbef} alt="Description of the image" width={300} height={300}  />
      </motion.div>
      <motion.div className="ola ola-right absolute bottom-[43%] left-[-15%] w-[40em]" animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image className="absolute w-full" src={lfbt} alt="Description of the image" width={300} height={300} />
      </motion.div>
      <div className="container mb-10">
        <h2 className="heavydark mb-2 xl:mb-10">
          Our Accreditation Partners <span className="text-[#FF671F] leading-[1]">.</span>
        </h2>
        <p className="text-lightBlack text-font20 leading-[1.3] opacity-75">
          DesertBoard&apos;s Palm Strand Board (PSB®) is accredited by leading national and international regulatory bodies, holding over 30 global, regional, and local certifications, reflecting our commitment to excellence and quality. This positions us as a trusted partner for clients across the MENA region, Asia, and beyond. By providing
          clients with a high-quality, certified product, we empower them to confidently deliver sustainable and innovative construction projects that meet the highest industry standards.
        </p>
      </div>
      <div className="container relative h-full !overflow-visible">
        <Swiper
          ref={swiperRef}
          className="accr__slider h-screen !overflow-visible"
          modules={[Navigation, Pagination]}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={40}
          slidesPerView={2}
          // Number of slides to duplicate
          // loopedSlides={4}
          // loopAdditionalSlides={6}
          // initialSlide={4}
          onInit={(swiper) => {
            // Force re-calculate sizes
            swiper.updateSlides();
            swiper.updateSlidesClasses();
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 100,
            modifier: 6,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}>
          <SwiperSlide className="accr__slide h-40 text-white">
            <div className="accr-crd p-[40px] bg-Darkgreen">
              <div className="accr__img bg-white p-5 w-fit mb-7">
                <Image src={"/assets/images/about/accr1.svg"} alt="" width={100} height={100}></Image>
              </div>
              <h3 className="accr__title text-white lh-[1] nuber-next-heavy mb-7">
                Global IMQ <span className="text-[#FF671F]">.</span>
              </h3>
              <p className="accr__desc text-white opacity-75 lh-[1.2] nuber-next-heavy">Global IMQ. Global IMQ Environmental Product Declaration (EPD) Certification</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="accr__slide h-40 text-white">
            <div className="accr-crd p-[40px] bg-Darkgreen">
              <div className="accr__img bg-white p-5 w-fit mb-7">
                <Image src={"/assets/images/about/accr1.svg"} alt="" width={100} height={100}></Image>
              </div>
              <h3 className="accr__title text-white lh-[1] nuber-next-heavy mb-7">
                Global IMQ <span className="text-[#FF671F]">.</span>
              </h3>
              <p className="accr__desc text-white opacity-75 lh-[1.2] nuber-next-heavy">Global IMQ. Global IMQ Environmental Product Declaration (EPD) Certification</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="accr__slide h-40 text-white">
            <div className="accr-crd p-[40px] bg-Darkgreen">
              <div className="accr__img bg-white p-5 w-fit mb-7">
                <Image src={"/assets/images/about/accr1.svg"} alt="" width={100} height={100}></Image>
              </div>
              <h3 className="accr__title text-white lh-[1] nuber-next-heavy mb-7">
                Global IMQ <span className="text-[#FF671F]">.</span>
              </h3>
              <p className="accr__desc text-white opacity-75 lh-[1.2] nuber-next-heavy">Global IMQ. Global IMQ Environmental Product Declaration (EPD) Certification</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="accr__slide h-40 text-white">
            <div className="accr-crd p-[40px] bg-Darkgreen">
              <div className="accr__img bg-white p-5 w-fit mb-7">
                <Image src={"/assets/images/about/accr1.svg"} alt="" width={100} height={100}></Image>
              </div>
              <h3 className="accr__title text-white lh-[1] nuber-next-heavy mb-7">
                Global IMQ <span className="text-[#FF671F]">.</span>
              </h3>
              <p className="accr__desc text-white opacity-75 lh-[1.2] nuber-next-heavy">Global IMQ. Global IMQ Environmental Product Declaration (EPD) Certification</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="accr__slide h-40 text-white">
            <div className="accr-crd p-[40px] bg-Darkgreen">
              <div className="accr__img bg-white p-5 w-fit mb-7">
                <Image src={"/assets/images/about/accr1.svg"} alt="" width={100} height={100}></Image>
              </div>
              <h3 className="accr__title text-white lh-[1] nuber-next-heavy mb-7">
                Global IMQ <span className="text-[#FF671F]">.</span>
              </h3>
              <p className="accr__desc text-white opacity-75 lh-[1.2] nuber-next-heavy">Global IMQ. Global IMQ Environmental Product Declaration (EPD) Certification</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="accr__slide h-40 text-white">
            <div className="accr-crd p-[40px] bg-Darkgreen">
              <div className="accr__img bg-white p-5 w-fit mb-7">
                <Image src={"/assets/images/about/accr1.svg"} alt="" width={100} height={100}></Image>
              </div>
              <h3 className="accr__title text-white lh-[1] nuber-next-heavy mb-7">
                Global IMQ <span className="text-[#FF671F]">.</span>
              </h3>
              <p className="accr__desc text-white opacity-75 lh-[1.2] nuber-next-heavy">Global IMQ. Global IMQ Environmental Product Declaration (EPD) Certification</p>
            </div>
          </SwiperSlide>
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
    </section>
  );
};

export default AccrediationSlider;
