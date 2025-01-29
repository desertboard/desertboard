import React from 'react'
import bannerImg from "@/public/assets/contactbanner.jpg";
import PageBanner from '../Common/PageBanner';
import Arrow from "@/public/assets/brdcrbs.svg";
import AddressBar from './AddressBar';
import Forms from './Forms';

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

            <section className='p-10 h-fit'>
                <div className='grid grid-cols-5 container m-auto mt-[40px] bg-orange-200 h-full p-10 gap-5'>
                    
                    <div className='col-span-2 text-black flex flex-col gap-6'>
                        <h2 className='text-4xl'>Get in Touch</h2>
                        <p>We’d love to hear from you! Whether you have questions, need assistance, or want to explore how we can work together, 
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