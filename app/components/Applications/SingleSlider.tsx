"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useSearchParams } from "next/navigation";
// import { assets } from "@/public/assets/images/assets";
import Image from "next/image";
import { IndiApplication } from "@/types/ApplicationType";
import { IndiSectorType } from "@/types/IndiSector";
const SectionTwo = ({data,sectorData}:{
  data:IndiApplication
  sectorData?:IndiSectorType
}) => {

  const searchParams = useSearchParams()
  const application = searchParams.get("application")
  const [galleryImages,setGalleryImage] = useState<string[]>([])

  useEffect(()=>{
    if(sectorData && data){
      const filteredApp = sectorData.data.applications.filter((item)=>(
        item.title == application
      ))
      
      setGalleryImage(filteredApp[0].gallery)
      
    }
    
  },[sectorData,data])


  return (
    <>
      <div className="slidefix">
        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView="auto"
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          scrollbar={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
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
              slidesPerView: 1,
            },
          }}

        >
          {/* Slide 1 */}
          {data && data.data && galleryImages.length == 0 && data.data.images.map((item,index)=>(
            <SwiperSlide key={index}>
            <div>

            <figure className=" relative w-full h-[300px] md:h-[360px] lg:h-[85dvh] overflow-hidden  ">
              <Image
                className="w-full h-full"
                src={item}
                fill
                objectFit="cover"
                alt=""
              />
              </figure>
              </div>
            </SwiperSlide>
          ))}

{data && data.data && galleryImages.length > 0 && galleryImages.map((item,index)=>(
            <SwiperSlide key={index}>
            <div>

            <figure className=" relative w-full h-[300px] md:h-[360px] lg:h-[85dvh] overflow-hidden  ">
              <Image
                className="w-full h-full"
                src={item}
                fill
                objectFit="cover"
                alt=""
              />
              </figure>
              </div>
            </SwiperSlide>
          ))}
          
          {/* <SwiperSlide>
            <div>
              <figure className=" relative w-full h-[300px] md:h-[360px] lg:h-[85dvh] overflow-hidden  ">
                <Image
                  className="w-full h-full"
                  src={assets.sec1}
                  fill
                  objectFit="cover"
                  alt=""
                />
              </figure>
            </div>
          </SwiperSlide> */}


        </Swiper>
      </div>
    </>
  );
};

export default SectionTwo;
