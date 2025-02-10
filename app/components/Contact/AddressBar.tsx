"use client"

import React, { useEffect, useState } from 'react'
import contactPhone from '@/public/assets/images/contact-phone.svg'
import contactEmail from '@/public/assets/images/contact-email.svg'
import contactLocation from '@/public/assets/images/contact-location.svg'
import Image from 'next/image'
import accordianArrow from '@/public/assets/images/accordian-arrow.svg'

const AddressBar = () => {

    const [activeAccordian, setActiveAccordian] = useState(0)

    const toggleAccordion = (accordianNumber: number) => {
        setActiveAccordian(accordianNumber)
        console.log(accordianNumber)
    }

    useEffect(()=>{
        setActiveAccordian(1)
    },[])

    const [addressBarIndex,setAddressBarIndex] = useState(0)

    const menu = [
        {
            title:"Middle East",
            items:[
                {
                    id: 1,
                    question: "United Arab Emirates",
                    answer: "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components."
                },
                {
                    id: 2,
                    question: "Kingdom Of Saudi Arabia",
                    answer: "You can use Material Tailwind by importing its components into your Tailwind CSS project."
                }
            ]
        },
        {
            title:"Asia",
            items:[
                {
                    id: 1,
                    question: "India",
                    answer: "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components."
                },
                {
                    id: 2,
                    question: "Example",
                    answer: "You can use Material Tailwind by importing its components into your Tailwind CSS project."
                }
            ]
        }
]

    return (
        <div className='w-full'>
            <div>
                <ul className='flex  text-black text-font28'>
                    {menu.map((item,index)=>(
                        <div   key={index} onClick={() => setAddressBarIndex(index)} className={`${addressBarIndex == index ? "bg-[#E3DED9] " : ""} px-4 py-3 md:px-8 md:py-5 cursor-pointer `}>
                            <li className='flex'><p className={`${addressBarIndex == index ? "bg-[#E3DED9] nubernext28heavy text-Darkgreen" : "nubernext28heavy clr15op50"}  `}>{item.title}</p><div   className={` nubernext28heavy text-[#FF671F] `}>.</div></li></div>
                    ))}
                </ul>
            </div>

            <div className='p-3 md:p-10 bg-[#E3DED9]'>
            {menu[addressBarIndex].items.map(({ id, question },index) => (
                <div key={id} className='mnspo' >
                    <button
                        onClick={() => toggleAccordion(id)}
                        className={`w-full flex justify-between items-center py-4 mt-4 md:py-8 md:mt-8 nuber-next-heavy text-Darkgreen text-font20 ${index !==0 ? "border-t border-[#15151510]" : "" }  `}
                    >
                        <div className='nuber-next-bold'><span className='nuber-next-heavy  text-Darkgreen text-font20'>{question}</span><span className='text-[#FF671F]'>.</span></div>
                        <span id="icon-1" className="text-slate-800 transition-transform duration-300">
                            {id === activeAccordian ? <Image src={accordianArrow} alt='arrow'/> : <Image src={accordianArrow} alt='arrow' className='rotate-180'/>}

                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeAccordian === id ? "max-h-96 opacity-100 pt-2" : "max-h-0 opacity-0"
                            }`}
                    >

                        <div className='text-black'>
                            <div className='grid grid-cols-1 w-1/2'>


                                <div className='col-span-1 flex flex-col gap-5'>
                                    <div className='flex gap-3 font-helvetica text-bold text-font20 leading-[1.2] clr15op75'><Image src={contactPhone} alt='contact-phone'/>+971 6 5610999</div>
                                    <div className='flex gap-3 font-helvetica text-bold text-font20 leading-[1.2] clr15op75'><Image src={contactEmail} alt='contact-email'/>info@desertboard.ae</div>
                                    <div className='flex items-start gap-3 font-helvetica text-bold text-font20 leading-[1.2] clr15op75'><Image src={contactLocation} alt='contact-location' />
                                        <p>Khalifa Economical <br></br>Zone (KEZAD)
                                        Abu <br></br>Dhabi, UAE<br></br>
                                        P.O. Box 45154</p></div>
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