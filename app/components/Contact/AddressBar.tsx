"use client"

import React, { useEffect, useState } from 'react'
import contactPhone from '@/public/assets/images/contact-phone.svg'
import contactEmail from '@/public/assets/images/contact-email.svg'
import contactLocation from '@/public/assets/images/contact-location.svg'
import Image from 'next/image'
import accordianArrow from '@/public/assets/images/accordian-arrow.svg'
import { ContactDataType } from '@/types/ContactDataType'

const AddressBar = ({data}:{data:ContactDataType}) => {

    const [activeAccordian, setActiveAccordian] = useState<string | number | null>(0);


    const toggleAccordion = (accordianNumber: string) => {
        setActiveAccordian(prev => (prev === accordianNumber ? null : accordianNumber));
    };

    useEffect(()=>{
        setActiveAccordian(0)
    },[])

    const [addressBarIndex,setAddressBarIndex] = useState(0)

    return (
        <div className='w-full'>
            <div>
                <ul className='flex  text-black text-font28'>
                    {data && data.regions.map((item,index)=>(
                        <div   key={index} onClick={() => setAddressBarIndex(index)} className={`${addressBarIndex == index ? "bg-[#E3DED9] " : ""} px-4 py-3 md:px-8 md:py-5 cursor-pointer `}>
                            <li className='flex'><p className={`${addressBarIndex == index ? "bg-[#E3DED9] nubernext28heavy text-Darkgreen" : "nubernext28heavy clr15op50"}  `}>{item.regionName}</p><div   className={` nubernext28heavy text-[#FF671F] `}>.</div></li></div>
                    ))}
                </ul>
            </div>

            <div className='p-3 md:p-10 bg-[#E3DED9]'>
            {data && data.regions[addressBarIndex].content.map((item,index) => (
                <div key={index} className='mnspo' >
                    <button
                        onClick={() => toggleAccordion(item._id)}
                        className={`w-full flex justify-between items-center py-4 mt-4 md:py-8 md:mt-8 nuber-next-heavy text-Darkgreen text-font20 ${index !==0 ? "border-t border-[#15151510]" : "" }  `}
                    >
                        <div className='nuber-next-bold'><span className='nuber-next-heavy  text-Darkgreen text-font20'>{item.area}</span><span className='text-[#FF671F]'>.</span></div>
                        <span id="icon-1" className="text-slate-800 transition-transform duration-300">
                            {item._id === activeAccordian ? <Image src={accordianArrow} className='w-[16px]' alt='arrow'/> : <Image src={accordianArrow} alt='arrow' className='rotate-180 w-[16px]'/>}

                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeAccordian === item._id ? "max-h-96 opacity-100 pt-2" : "max-h-0 opacity-0"
                            }`}
                    >

                        <div className='text-black'>
                            <div className='grid grid-cols-1 w-1/2'>


                                <div className='col-span-1 flex flex-col gap-5'>
                                    <div className='flex gap-3 font-helvetica text-bold text-font20 leading-[1.2] clr15op75'><Image src={contactPhone} alt='contact-phone'/>{item.phone}</div>
                                    <div className='flex gap-3 font-helvetica text-bold text-font20 leading-[1.2] clr15op75'><Image src={contactEmail} alt='contact-email'/>{item.email}</div>
                                    <div className='flex items-start gap-3 font-helvetica text-bold text-font20 leading-[1.2] clr15op75'><Image src={contactLocation} alt='contact-location' />
                                        {item.address}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
                </div>

        </div>
    )
}

export default AddressBar