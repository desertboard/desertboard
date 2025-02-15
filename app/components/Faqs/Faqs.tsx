"use client"

import React from 'react'
import bannerImg from "@/public/assets/faqsbanner.jpg";
import PageBanner from '../Common/PageBanner';
import Arrow from "@/public/assets/brdcrbs.svg";
import Image from 'next/image';
import Accordians from './Accordians/Accordians';
import { motion } from 'framer-motion';
import { assets } from '@/public/assets/images/assets';
import Link from 'next/link';


const Faqs = () => {

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "FAQs", href: "" },
    ];




    return (
        <>
            <PageBanner
                bannerSrc={bannerImg} // Corrected image import here
                arrowSrc={Arrow}
                // desc="Upcycling annually regenerated palm biomass into sustainable building solutions "
                title="FAQs"
                breadcrumbs={breadcrumbs}
                bnrHeight="90dvh"
            />

            <section className='h-fit py-10 md:py-20  relative insp-mn   inspbg'>

                    <motion.div
                     className="ola ola-right absolute top-0 right-[-25%] md:right-[-10%] w-[20em] md:w-[40em]"
                     animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   >
                     <Image
                       className="absolute"
                       src={assets.leaf}
                       alt="Description of the image"
                     />
                   </motion.div>
                   <motion.div
                     className="ola ola-right absolute bottom-[43%] left-[-25%] md:left-[-15%] w-[20em] md:w-[40em]"
                     animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   >
                     <Image className="absolute" src={assets.lfbt} alt="Description of the image" />
                   </motion.div>
                <div className='grid lg:grid-cols-7 grid-cols-1 container m-auto h-full z-10 relative z-1'>

                    <div className='lg:col-span-2 col-span-1 pr-0 md-pr-7 lg:pr-20 text-black flex flex-col gap-6 lg:border-r-2 border-[#E3DED9] nuber-next-bold'>
                        <h2 className='heavydark leading-[1.2] '>Frequently
                            Asked Questions<span className='text-orange'>.</span></h2>
                    </div>

                    <div className='lg:col-span-4 w-full flex flex-col  mt-3 md:mt-8 lg:mt-0 pl-0 md-pl-7 lg:pl-20'>
                        <Accordians />
                        <div className='   '>
                            <h4 className='font-helvetica font-[700] text-font20 text-black'>Still Have Questions?</h4>
                            <p className='font-helvetica font-[400] text-font18 clr15op50'>We’re here to help! If you didn’t find the answers you were looking for, feel free to reach out to us directly.</p>
                          <Link href="contact">  <button
                                type="submit"
                                className="mt-3 md:mt-6     group items-center hover:border-b-2  border-[#FF671F] text-[#FF671F] pb-1 h-6 flex gap-1 nuber-next-heavy"
                            >
                                Contact Us <div className="transition-all duration-300 group-hover:translate-x-1">
                                    <svg width="20" height="15" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='relative top-[2px]'>
                                        <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </button>
                                </Link>
                        </div>
                    </div>

                </div>
            </section>




        </>
    )
}

export default Faqs