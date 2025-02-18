import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "@/app/components/about/accr-slider.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import LightSectionContainer from "../Common/LightSectionContainer";



import { AboutType } from "@/types/AboutType";
// import parse from 'html-react-parser'



const AccrediationSlider = ({data}:{
  data:AboutType
}) => {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Simulate next slide transition after initialization
      setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slideNext(0); // Instant transition (0ms duration)
        }
      }, 100);
    }
  }, []);


  const formatText = (text: string) => {
    return text.replace(/®/g, "<sup>®</sup>");
  };
  return (
    <LightSectionContainer>
      <div className="container mb-7 lg:mb-20">
        <h2 className="heavydark mb-5 xl:mb-10">
          Our Accreditation Partners<span className="text-[#FF671F] leading-[1]">.</span>
        </h2>
        {/* <div className="text-lightBlack text-font20 leading-[1.3] opacity-75">
                  {data && data.about[0] && parse(data.about[0].partners.description)}
                </div> */}
        <p className="text-lightBlack text-font20 leading-[1.3] opacity-75" dangerouslySetInnerHTML={{ __html: formatText(" DesertBoard&apos;s Palm Strand Board (PSB®) is accredited by leading national and international regulatory bodies, holding over 30 global, regional, and local certifications, reflecting our commitment to excellence and quality. This positions us as a trusted partner for clients across the MENA region, Asia, and beyond. By providing clients with a high-quality, certified product, we empower them to confidently deliver sustainable and innovative construction projects that meet the highest industry standards.") }} />
      </div>
      <div className="container mb-[50px] xxl:mb-[50px] !overflow-visible relative">
        <Swiper
          ref={swiperRef}
          className="accr__slider !overflow-visible"
          modules={[Navigation, Pagination]}
          observer={true}
  observeParents={true}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slideToClickedSlide={true}
          spaceBetween={40}
          slidesPerView="auto"
          // Number of slides to duplicate
          // loopedSlides={4}
          // loopAdditionalSlides={3}
          // initialSlide={4}
          onInit={(swiper) => {
            // Force re-calculate sizes
            swiper.updateSlides();
            swiper.updateSlidesClasses();
          }}
          // Slower speed for smoother transitions
          speed={600}
          // Reduce touch sensitivity for more controlled movements
          touchRatio={1}
          // Increase resistance for more controlled sliding
          resistanceRatio={0.95}
          // Enable smooth scroll simulation
          simulateTouch={true}
          // Enable hardware acceleration
          watchSlidesProgress={true}
          // Add smoother touch movement
          touchStartPreventDefault={false}
          touchMoveStopPropagation={true}
          // Prevent unwanted slides movement
          allowTouchMove={true}
          threshold={5}
          // Smooth autoplay
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
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
          // Add smooth transition timing function
          cssMode={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween:10
            },
            600: {
              slidesPerView: 1.3,
              spaceBetween:20
            },
            768: {
              slidesPerView:1.5,
              spaceBetween: 20

            },
            991:{
              slidesPerView:2.2,
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 2.1,
              spaceBetween: 30
            },
            1400: {
              slidesPerView: 3.2,
              spaceBetween: 40

            },
            1789: {
              slidesPerView: 3.2,
            },
          }}>
      {data && data.about[0] && [...Array(3)].map((_, repeatIndex) => (
  data.about[0].partners.partners.map((accr, index) => (
    <SwiperSlide className="accr__slide h-40 text-white" key={`${repeatIndex}-${index}`}>
      <div className="accr-crd p-6 xl:p-[40px] bg-Darkgreen h-full flex items-center">
        <div>
          <div className="accr__img bg-white mb-7 p-2 w-[70px] h-[70px] flex items-center justify-center">
            <Image src={accr.image} alt="" width={70} height={70} className="object-contain" />
          </div>
          <h3 className="accr__title text-white leading-[1] nuber-next-heavy mb-7">
            {accr.name}<span className="text-[#FF671F]">.</span>
          </h3>
          <p className="accr__desc text-white opacity-75 leading-[1.2] nuber-next-heavy">{accr.description}</p>
        </div>
      </div>
    </SwiperSlide>
  ))
))}

        </Swiper>

        <div className="absolute w-full h-full right-0 bottom-[-50px]">
          <div className="absolute bottom-0 right-0 flex gap-4 z-10">
            <button className="custom-prev cursor-pointer hover:opacity-80 transition-opacity p-2">
              <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M17.9879 2L2.98787 17L17.9879 32M22.9939 7.00392L12.9978 17L22.9939 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </button>
            <button className="custom-next cursor-pointer hover:opacity-80 transition-opacity p-2">
              <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </LightSectionContainer>
  );
};

export default AccrediationSlider;