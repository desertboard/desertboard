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
import { accrediations } from "../about/data";


interface AccrediationsProps {
  id: number;
  accrLogo: string;
  accrTitle: string;
  accrDesc: string;
}

const Slidesig:React.FC = () => {
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
  return (


     <div className="relative">
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
          // loopAdditionalSlides={3}
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
              slidesPerView:1,
            },
            768: {
              slidesPerView: 1,
            },
            1200: {
             slidesPerView: 1,
            },
            1400: {
             slidesPerView: 1,
            },
            1789: {
              slidesPerView: 2,
            },
          }}>
          {accrediations.map((accr: AccrediationsProps) => (
            <SwiperSlide className="accr__slide h-40 text-white" key={accr.id}>
              <div className="accr-crd p-6 xl:p-[40px] bg-Darkgreen">
                <div className="accr__img bg-white mb-7 p-2 w-[70px] h-[70px] flex items-center justify-center">
                  <Image src={accr.accrLogo} alt="" width={70} height={70} className="object-contain"></Image>
                </div>
                <h3 className="accr__title text-white leading-[1] nuber-next-heavy mb-7">
                  {accr.accrTitle} <span className="text-[#FF671F]">.</span>
                </h3>
                <p className="accr__desc text-white opacity-75 leading-[1.2] nuber-next-heavy">{accr.accrDesc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
  );
};

export default Slidesig;
