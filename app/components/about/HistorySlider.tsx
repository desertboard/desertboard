import React, { useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";

import '@/app/components/about/history.scss';


interface TimelineItem {
  year: string;
  subtitle: string;
  description: string;
  image: string;
}

const timelineData: TimelineItem[] = [
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

interface HistorySliderProps {
  className?: string;
}

const HistorySlider: React.FC<HistorySliderProps> = ({ className = "" }) => {
  const [activeYear, setActiveYear] = useState<string>(timelineData[0].year);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  // Pre-sort timeline data in descending order
  const sortedTimelineData = useMemo(() => {
    return [...timelineData].sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }, []);

  // Handle slide changes
  const handleSlideChange = useCallback(
    (swiperInstance: SwiperType) => {
      const realIndex = swiperInstance.realIndex;
      setActiveYear(sortedTimelineData[realIndex].year);
    },
    [sortedTimelineData]
  );

  // Handle year clicks
  const handleYearClick = useCallback(
    (year: string) => {
      if (!swiper) return;

      const targetIndex = sortedTimelineData.findIndex((item) => item.year === year.toString());
      if (targetIndex === -1) return;

      setActiveYear(year.toString());
      swiper.slideToLoop(targetIndex, 800);
    },
    [swiper, sortedTimelineData]
  );

  const activeContent = sortedTimelineData.find((item) => item.year === activeYear);

  if (!activeContent) return null;

  return (
    <section className={`border-y-[6px] border-secondary flex h-auto max-h-[800px] history pb-20 relative ${className}`}>
      {/* Content Section */}
      <div
        className="flex-grow bg-cover bg-center absolute w-full h-full z-0 history__bg"
        style={{
          backgroundImage: `url(${activeContent.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container">
        <h2 className="relative text-white z-10 text-font48 nuber-next-heavy pt-20 leading-[1]">
          Our History <span className="text-[#FF671F]">.</span>
        </h2>
        <div className="flex relative z-10">
          <div className="flex-grow flex items-end relative overflow-hidden history__content">
            <div className="absolute inset-0 flex items-center transition-transform duration-500">
              <div className="max-w-2xl">
                <h3 className="text-4xl md:text-5xl lg:text-6xl helveticaBold text-white mb-10 nuber-next-heavy text-font72">
                  {activeYear} <span className="text-[#FF671F]">.</span>
                </h3>
                <h4 className="text-xl md:text-2xl lg:text-font28 leading-[1.3] opacity-75 font-semibold text-white mb-5">{activeContent.subtitle}</h4>
                <p className="text-white text-font20 leading-[1.3] opacity-75 font-[400]">{activeContent.description}</p>
              </div>
            </div>
          </div>

          {/* Year Navigation */}
          <div className="w-max lg:w-[20%] h-full relative flex flex-col justify-center ">
            <div className="absolute inset-0 z-10 pointer-events-none " />
            <Swiper
              direction="vertical"
              slidesPerView={4}
              loop={true}
              mousewheel={{
                sensitivity: 1,
                thresholdDelta: 30,
              }}
              modules={[Mousewheel, Controller]}
              className="h-full "
              onSwiper={setSwiper}
              onSlideChange={handleSlideChange}
              centeredSlides={true}
              speed={800}
              initialSlide={1}
              watchSlidesProgress={true}
              observer={true}
              observeParents={true}
              breakpoints={{
                1024: {
                  slidesPerView: 5,
                },
              }}>
              {sortedTimelineData.map((item) => (
                <SwiperSlide key={item.year} className="!h-[100px] flex items-center justify-center">
                  <button
                    onClick={() => handleYearClick(item.year)}
                    className={`w-full h-full flex items-center text-right justify-end gap-1 relative group transition-all ease-linear duration-300 text-font24
                  // ${activeYear === item.year ? "text-accent font-[400] z-20 text-font32 ease-linear" : "text-gray-100 font-bold hover:text-gray-200"}`}>
                    <span className="relative z-10 transition-all ease-linear duration-300 helvetica">{item.year}</span>
                    <div className={`w-8 h-[2px] transition-all ease-linear duration-300 ${activeYear === item.year ? "bg-accent opacity-100 " : "opacity-0 group-hover:opacity-50 "}`} />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* <style jsx global>{`

      `}</style> */}
    </section>
  );
};

export default HistorySlider;
