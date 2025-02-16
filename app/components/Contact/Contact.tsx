"use client"
import React, { useEffect } from 'react'
import bannerImg from "@/public/assets/contactbanner.jpg";
import PageBanner from '../Common/PageBanner';
import Arrow from "@/public/assets/brdcrbs.svg";
import AddressBar from './AddressBar';
import Forms from './FormComponents/Forms';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '@/public/assets/images/assets';
import useSWR from 'swr';
import { ContactDataType } from '@/types/ContactDataType';

const Contact = () => {

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Contact", href: "" },
      ];

      const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

      const { data }: { data: ContactDataType, error: Error | undefined, isLoading: boolean } = useSWR('/api/admin/contact', fetcher)
    
    
    
      useEffect(()=>{
        console.log(data);
        console.log('sdsdsds');
      },[data])


    return (
        <>
            <PageBanner
                bannerSrc={bannerImg} // Corrected image import here
                arrowSrc={Arrow}
                // desc="Upcycling annually regenerated palm biomass into sustainable building solutions "
                title="Contact"
                breadcrumbs={breadcrumbs}
                bnrHeight="90dvh"
            />

            <section className='h-fit py-10 md:py-20  relative insp-mn   inspbg'>


                   <motion.div
                     className="ola ola-right absolute bottom-[43%] left-[-25%] md:left-[-15%] w-[20em] md:w-[40em]"
                     animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   >
                     <Image className="absolute" src={assets.lfbt} alt="Description of the image" />
                   </motion.div>
                <div className='grid lg:grid-cols-9 grid-cols-1  container m-auto  h-full  gap-y-6 relative  z-1'>

                    <div className='lg:col-span-3 col-span-1 pr-0 md-pr-7 lg:pr-20 text-black flex flex-col gap-6 lg:border-r-2 border-[#15151510] nuber-next-bold'>
                        <h2 className='heavydark leading-[1.2]'>Get in Touch<span className='text-orange'>.</span></h2>
                        <p className=' texthelvetica20'>We’d love to hear from you! Whether you have questions, need assistance, or want to explore how we can work together,
                            our team is here to help. Reach out to us through the contact form, email, or phone, and we’ll get back to you as soon as possible. </p>
                    </div>

                    <div className='lg:col-span-6 w-full flex flex-col gap-8 mt-3 md:mt-8 lg:mt-0 pl-0 md-pl-7 lg:pl-20'>
                        <AddressBar data={data}/>
                        <Forms/>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Contact