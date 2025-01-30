import React from 'react'
import bannerImg from "@/public/assets/contactbanner.jpg";
import PageBanner from '../Common/PageBanner';
import Arrow from "@/public/assets/brdcrbs.svg";
import AddressBar from './AddressBar';
import Forms from './FormComponents/Forms';
import Footer from '../Common/footer';
import BackGround from '@/public/assets/images/Background.jpg'
import Image from 'next/image';

const Contact = () => {

    const breadcrumbs = [
        { label: "Home", href: "#" },
        { label: "Contact", href: "#" },
      ];


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

            <section className='h-fit p-2 relative'>
              <Image src={BackGround} alt='background' className='absolute left-0 top-0 -z-10 inset-0 h-full w-full object-cover'/>
                <div className='grid grid-cols-5 container m-auto mt-[48px] h-full gap-12 pt-[15px] mb-[48px] z-10'>
                    
                    <div className='col-span-2 text-black flex flex-col gap-6 border-r-2 border-[#E3DED9] nuber-next'>
                        <h2 className='text-4xl'>Get in Touch<span className='text-orange'>.</span></h2>
                        <p className='w-3/4'>We’d love to hear from you! Whether you have questions, need assistance, or want to explore how we can work together, 
                            our team is here to help. Reach out to us through the contact form, email, or phone, and we’ll get back to you as soon as possible. </p>
                    </div>

                    <div className='col-span-3 w-full flex flex-col gap-10'>
                        <AddressBar/>
                        <Forms/>
                    </div>

                </div>
            </section>

            
        </>
    )
}

export default Contact