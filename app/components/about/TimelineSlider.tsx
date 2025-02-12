import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Thumbs, Mousewheel, EffectFade } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "@/app/components/about/timeline.scss";
const TimeLineSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  //   const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  const timelineData = [
    { year: "1997", subtitle: "Market Leadership", description: "Achieved market leadership in key sectors through strategic acquisitions and partnerships.", image: "/assets/images/timeline/1997.jpeg" },
    {
      year: "2009 - 2021",
      subtitle: "Resilience & Refined Visions",
      description:
        "In 2014, after years of dedicated research, the team began their experiments aimed at revolutionizing green construction materials. Despite numerous challenges over twelve years, their determination only grew stronger. Viewing each setback as a learning opportunity, they were guided by the principle of innovation and adaptation. ",
      image: "/assets/images/timeline/2009-2021.jpeg",
    },
    {
      year: "Dec-14 2021",
      subtitle: "Digital Transformation",
      description:
        "On a significant day, after years of dedicated effort and research, the team produced the world’s first palm-based board - PSB® (Palm Strand Board). This wasn't merely a manufacturing milestone; it symbolized perseverance, innovation, and a vision for eco-friendly production. PSB® boards represented the fusion of technology and sustainability, ushering in a hopeful future for sustainability.",
      image: "/assets/images/timeline/dec14-2021.jpg",
    },

    { year: "2023", subtitle: "Innovation Era", description: "Established R&D centers and launched groundbreaking products that redefined industry standards.", image: "/assets/images/timeline/2023.jpg" },
    { year: "1997", subtitle: "Market Leadership", description: "Achieved market leadership in key sectors through strategic acquisitions and partnerships.", image: "/assets/images/timeline/1997.jpeg" },
    {
      year: "2009 - 2021",
      subtitle: "Resilience & Refined Visions",
      description:
        "In 2014, after years of dedicated research, the team began their experiments aimed at revolutionizing green construction materials. Despite numerous challenges over twelve years, their determination only grew stronger. Viewing each setback as a learning opportunity, they were guided by the principle of innovation and adaptation. ",
      image: "/assets/images/timeline/2009-2021.jpeg",
    },
    {
      year: "Dec-14 2021",
      subtitle: "Digital Transformation",
      description:
        "On a significant day, after years of dedicated effort and research, the team produced the world’s first palm-based board - PSB® (Palm Strand Board). This wasn't merely a manufacturing milestone; it symbolized perseverance, innovation, and a vision for eco-friendly production. PSB® boards represented the fusion of technology and sustainability, ushering in a hopeful future for sustainability.",
      image: "/assets/images/timeline/dec14-2021.jpg",
    },

    { year: "2023", subtitle: "Innovation Era", description: "Established R&D centers and launched groundbreaking products that redefined industry standards.", image: "/assets/images/timeline/2023.jpg" },
    { year: "1997", subtitle: "Market Leadership", description: "Achieved market leadership in key sectors through strategic acquisitions and partnerships.", image: "/assets/images/timeline/1997.jpeg" },
    {
      year: "2009 - 2021",
      subtitle: "Resilience & Refined Visions",
      description:
        "In 2014, after years of dedicated research, the team began their experiments aimed at revolutionizing green construction materials. Despite numerous challenges over twelve years, their determination only grew stronger. Viewing each setback as a learning opportunity, they were guided by the principle of innovation and adaptation. ",
      image: "/assets/images/timeline/2009-2021.jpeg",
    },
    {
      year: "Dec-14 2021",
      subtitle: "Digital Transformation",
      description:
        "On a significant day, after years of dedicated effort and research, the team produced the world’s first palm-based board - PSB® (Palm Strand Board). This wasn't merely a manufacturing milestone; it symbolized perseverance, innovation, and a vision for eco-friendly production. PSB® boards represented the fusion of technology and sustainability, ushering in a hopeful future for sustainability.",
      image: "/assets/images/timeline/dec14-2021.jpg",
    },

    { year: "2023", subtitle: "Innovation Era", description: "Established R&D centers and launched groundbreaking products that redefined industry standards.", image: "/assets/images/timeline/2023.jpg" },
  ];

    // Ref for the next container (HTMLDivElement type)
    const nextContainerRef = useRef<HTMLDivElement | null>(null);
    const [divWidth, setDivWidth] = useState("100%");
    // const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const updateDivWidth = () => {
      if (nextContainerRef.current) {
        // Get the bounding rectangle of the next container
        const containerRect = nextContainerRef.current.getBoundingClientRect();

        // Get the computed style of the next container to retrieve margin values
        const computedStyle = window.getComputedStyle(nextContainerRef.current);

        // Calculate the total width including margins (left + width + right)
        const marginLeft = parseFloat(computedStyle.marginLeft);
        const totalWidth = containerRect.width + marginLeft - 15;

        setDivWidth(`${totalWidth}px`);
      }
      console.log(activeIndex)
    };

    // Initial width calculation
    updateDivWidth();

    // Recalculate on window resize
    window.addEventListener("resize", updateDivWidth);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDivWidth);
    };
  }, []);
  return (
    <section className="overflow-hidden min-h-max bg-black border-y-[6px] border-secondary timeline__sec">
      <div className="container d-none" ref={nextContainerRef}></div>
      <div className="flex flex-col md:flex-row w-full gap-6 relative h-[38em] lg:h-[90dvh] xl:h-[90dvh] xxl:h-[70dvh]">
        <h2 className="text-white z-10 text-font48 nuber-next-heavy leading-[1] absolute top-10 lg:top-20 " style={{ left: `calc(100vw - (${divWidth})` }}>
          Our History <span className="text-[#FF671F]">.</span>
        </h2>
        {/* Main content slider */}
        <div className="w-full h-full absolute top-0 left-0 z-1 ">
          <Swiper
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper;
            }}
            direction="vertical"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            modules={[FreeMode, Thumbs, EffectFade]}
            className="h-full main-swiper"
            speed={1000}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            watchSlidesProgress={true}
            allowTouchMove={true}
            mousewheel={false}
            noSwiping={true}
            noSwipingClass="swiper-slide"
            observer={true}
            observeParents={true}
            watchOverflow={true}
            // preventInteractionOnTransition={true}
              // Add these new properties
  // allowTouchMove={true}
  // touchRatio={1}
  // touchAngle={45}
  // resistance={true}
  // resistanceRatio={0.85}
  // shortSwipes={true}
  // longSwipes={true}
  // longSwipesRatio={0.5}
  // touchStartPreventDefault={false}
  // touchMoveStopPropagation={true}
  // grabCursor={true}
  // cssMode={true}
            >
            {timelineData.map((item, index) => (
              <SwiperSlide key={index} className="!h-full ">
                <div className="timeline__bg flex-grow bg-cover bg-center absolute top-0 left-0 z-1 history__bg  w-full h-full">
                  <div className="timeline__img">
                    <Image src={item.image} fill objectFit="cover" className="h-full w-full" alt="" />
                  </div>
                </div>
                <div className="rounded-lg shadow h-full flex flex-col pt-28 lg:pt-0 lg:justify-center xl:justify-end pb-10 lg:pb-20 relative z-30 xl:w-2/3 " style={{ paddingInline: `calc(100vw - (${divWidth})` }}>
                  <h3 className="text-4xl md:text-5xl lg:text-font72 helveticaBold text-white mb-10 nuber-next-heavy ">{item.year}</h3>
                  <h4 className="text-xl md:text-2xl lg:text-font28 leading-[1.2] opacity-75 nuber-next-heavy text-white mb-5">{item.subtitle}</h4>
                  <p className="text-white text-font20 leading-[1.3] opacity-75 font-normal">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail slider with navigation */}
        <div className="timeline__years w-full md:w-1/3  absolute bottom-10 xl:top-10 right-0 z-10" style={{ paddingInline: `calc(100vw - (${divWidth})` }}>
          {/* Navigation Buttons - Only visible on mobile  */}

          <Swiper
            onSwiper={setThumbsSwiper}
            direction={"horizontal"}
            slidesPerView={3}
            breakpoints={{
              768: {
                direction: "vertical",
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
            }}
            spaceBetween={10}
            loop={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, Mousewheel]}
            className="h-full thumbs-swiper"
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              thresholdDelta: 50,
            }}
            slideToClickedSlide={true}
            speed={800}
            allowTouchMove={true}
            centeredSlides={true}

            onSlideChange={(swiper) => {
              if (mainSwiperRef.current) {
                mainSwiperRef.current.slideTo(swiper.realIndex);
                setActiveIndex(swiper.realIndex);
              }
            }}>
            {timelineData.map((item, index) => (
              <SwiperSlide key={index} className="!h-16 md:!h-24 cursor-pointer timeline__thumb">
                <div className={`w-full h-full flex items-center justify-center lg:justify-end rounded transition-all duration-300`}>
                  <span className={`text-font19 lg:text-font20 text-right font-normal transition-colors duration-300 ${thumbsSwiper?.realIndex === index ? "text-accent nuber-next-bold lg:min-w-max xl:text-font32 opacity-100" : "text-white opacity-50 lg:text-font24 font-normal hover:text-gray-200"}`}>{item.year}</span>
                  <div className={`hidden lg:block lg:ml-3 h-[4px] w-[68px] transition-all ease-linear duration-300 ${thumbsSwiper?.realIndex === index ? "bg-accent opacity-100 " : "opacity-0 group-hover:opacity-50 "}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
              <button className="absolute left-6 bottom-[-18%] -translate-y-1/2 z-10 shadow md:hidden transition-colors duration-300" onClick={() => thumbsSwiper?.slidePrev()}>
            {/* <ChevronLeft className="w-6 h-6 text-white" /> */}
             <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M17.9879 2L2.98787 17L17.9879 32M22.9939 7.00392L12.9978 17L22.9939 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
          </button>
          <button className="absolute right-6 bottom-[-18%] -translate-y-1/2 z-10 rounded-full shadow md:hidden transition-colors duration-300" onClick={() => thumbsSwiper?.slideNext()}>
            {/* <ChevronRight className="w-6 h-6 text-white" /> */}
            <svg width="20" height="30" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
              </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimeLineSlider;
