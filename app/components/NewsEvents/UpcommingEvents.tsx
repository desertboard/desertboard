import React from "react";
import PrimaryArrowBtn from "../Common/PrimaryArrowBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import '@/app/components/NewsEvents/upc-events.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LightSectionContainer from "../Common/LightSectionContainer";
import { EventType } from "@/types/EventType";

interface upCommingEventsProps {
  commingEvents: EventType
}

const UpcommingEvents: React.FC<upCommingEventsProps> = ({ commingEvents }) => {
  return (
    <>
      <LightSectionContainer>
        <div className="container">
          <div className="relative z-50 ">
            <h2 className="text-font48 heavydark mb-5 lg:mb-10">
              Upcoming Events<span className="text-[#FF671F] leading-[1]">.</span>
            </h2>
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
            spaceBetween={0}
            slidesPerView={2}
            // onInit={(swiper) => {
            //   swiper.updateSlides();
            //   swiper.updateSlidesClasses();
            // }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 2.6,
              },
              1400: {
                slidesPerView: 3.3,
              },
              1600: {
                slidesPerView: 4.2,
              },
            }}>
            {commingEvents && commingEvents.data.map((event) => (
              <SwiperSlide className="upc-event__slide  border-r border-r-gray-300 px-6 xxl:px-8" key={event._id}>
                <div className="upc-event-crd flex flex-col gap-4">
                  <div className="upc-event-crd__head bg-white flex items-center justify-center min-h-28">
                    <Image src={event.image} className="object-contain" width={150} height={42} alt={event.title}></Image>
                  </div>
                  <div className="upc-event-crd__body">
                    <h3 className="text-Darkgreen nuber-next-heavy text-font24 leading-[1.3]">{event.title}</h3>
                    <ul className="upc-event__info flex flex-col gap-4 pt-6">
                      <li className="flex items-center gap-3 text-black opacity-75 font-bold text-font16 leading-normal">
                        <span className="flex">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M0 10.2293C0 11.2028 0.744453 11.9473 1.71797 11.9473H9.73516C10.7087 11.9473 11.4531 11.2028 11.4531 10.2293V5.64805H0V10.2293ZM9.73516 1.63945H8.58984V1.0668C8.58984 0.723203 8.36078 0.494141 8.01719 0.494141C7.67359 0.494141 7.44453 0.723203 7.44453 1.0668V1.63945H4.00859V1.0668C4.00859 0.723203 3.77953 0.494141 3.43594 0.494141C3.09234 0.494141 2.86328 0.723203 2.86328 1.0668V1.63945H1.71797C0.744453 1.63945 0 2.38391 0 3.35742V4.50273H11.4531V3.35742C11.4531 2.38391 10.7087 1.63945 9.73516 1.63945Z"
                              fill="#FF671F"
                            />
                          </svg>
                        </span>
                        <p className="uppercase helvetica font-bold text-font16">{event.date}</p>
                      </li>
                      <li className="flex items-center gap-3 text-black opacity-75 font-bold text-font16 leading-normal">
                        <span className="flex">
                          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6 0.220703C7.5913 0.220703 9.11742 0.852844 10.2426 1.97806C11.3679 3.10328 12 4.6294 12 6.2207C12 7.812 11.3679 9.33813 10.2426 10.4633C9.11742 11.5886 7.5913 12.2207 6 12.2207C4.4087 12.2207 2.88258 11.5886 1.75736 10.4633C0.632141 9.33813 0 7.812 0 6.2207C0 4.6294 0.632141 3.10328 1.75736 1.97806C2.88258 0.852844 4.4087 0.220703 6 0.220703ZM5.4375 3.0332V6.2207C5.4375 6.4082 5.53125 6.58398 5.68828 6.68945L7.93828 8.18945C8.19609 8.36289 8.54531 8.29258 8.71875 8.03242C8.89219 7.77227 8.82187 7.42539 8.56172 7.25195L6.5625 5.9207V3.0332C6.5625 2.72148 6.31172 2.4707 6 2.4707C5.68828 2.4707 5.4375 2.72148 5.4375 3.0332Z"
                              fill="#FF671F"
                            />
                          </svg>
                        </span>
                        <p className="Uppercase helvetica font-bold text-font16">{event.time}</p>
                      </li>
                      <li className="flex items-center gap-3 text-black opacity-75 font-bold text-font16 leading-normal">
                        <span className="flex">
                          <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.62208 13.5394C4.62208 13.5394 0 9.64671 0 5.81641C0 4.46598 0.536456 3.17086 1.49135 2.21596C2.44625 1.26107 3.74137 0.724609 5.0918 0.724609C6.44223 0.724609 7.73734 1.26107 8.69224 2.21596C9.64714 3.17086 10.1836 4.46598 10.1836 5.81641C10.1836 9.64671 5.56151 13.5394 5.56151 13.5394C5.30438 13.7762 4.88112 13.7736 4.62208 13.5394ZM5.0918 8.04407C5.38434 8.04407 5.67401 7.98645 5.94429 7.8745C6.21456 7.76255 6.46013 7.59846 6.66699 7.3916C6.87385 7.18474 7.03794 6.93917 7.14989 6.6689C7.26184 6.39862 7.31946 6.10895 7.31946 5.81641C7.31946 5.52387 7.26184 5.23419 7.14989 4.96392C7.03794 4.69364 6.87385 4.44807 6.66699 4.24121C6.46013 4.03435 6.21456 3.87027 5.94429 3.75832C5.67401 3.64637 5.38434 3.58875 5.0918 3.58875C4.50098 3.58875 3.93437 3.82344 3.5166 4.24121C3.09884 4.65898 2.86414 5.22559 2.86414 5.81641C2.86414 6.40722 3.09884 6.97383 3.5166 7.3916C3.93437 7.80937 4.50098 8.04407 5.0918 8.04407Z"
                              fill="#FF671F"
                            />
                          </svg>
                        </span>
                        <p className="uppercase helvetica font-bold text-font16">{event.location}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="upc-event-crd__footer mt-auto flex gap-6 pt-6">
                    <PrimaryArrowBtn btntitle={"Tickets"} btnLink={"#"} />
                    <PrimaryArrowBtn btntitle={"Website"} btnLink={"#"} />
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
      </LightSectionContainer>
    </>
  );
};

export default UpcommingEvents;
