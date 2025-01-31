"use client"

import React from 'react'
import bannerImg from "@/public/assets/faqsbanner.jpg";
import PageBanner from '../Common/PageBanner';
import Arrow from "@/public/assets/brdcrbs.svg";
import BackGround from '@/public/assets/images/Background.jpg'
import Image from 'next/image';
import Accordians from './Accordians/Accordians';

const Faqs = () => {

    const breadcrumbs = [
        { label: "Home", href: "#" },
        { label: "FAQS", href: "#" },
    ];




    return (
        <>
            <PageBanner
                bannerSrc={bannerImg} // Corrected image import here
                arrowSrc={Arrow}
                // desc="Upcycling annually regenerated palm biomass into sustainable building solutions "
                title="FAQS"
                breadcrumbs={breadcrumbs}
                bnrHeight="90dvh"
            />

            <section className='h-fit p-2 relative'>
                <Image src={BackGround} alt='background' className='absolute left-0 top-0 -z-10 inset-0 h-full w-full object-cover' />
                <div className='grid grid-cols-5 container m-auto mt-[48px] h-full gap-12 pt-[15px] mb-[48px] z-10'>

                    <div className='col-span-2 text-black flex flex-col gap-6 border-r-2 border-[#E3DED9] nuber-next'>
                        <h2 className='text-4xl'>Frequently
                            Asked Questions<span className='text-orange'>.</span></h2>
                    </div>

                    <div className='col-span-3 w-full flex flex-col gap-10'>
                        <Accordians />
                        <div className='px-6 text-black nuber-next'>
                            <h4 className='text-2xl'>Still Have Questions?</h4>
                            <p>We’re here to help! If you didn’t find the answers you were looking for, feel free to reach out to us directly.</p>
                            <button
                                type="submit"
                                className="mt-6 font-semibold text-sm  group items-center hover:border-b-2  border-[#FF671F] text-[#FF671F] pb-1 h-6 flex gap-1 nuber-next"
                            >
                                Contact Us <div className="transition-all duration-300 group-hover:translate-x-1">
                                    <svg width="20" height="15" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </section>




        </>
    )
}

export default Faqs