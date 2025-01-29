"use client"

import React, { useState } from 'react'
import { accordianData } from './data'
import contactPhone from '@/public/assets/images/contact-phone.svg'
import contactEmail from '@/public/assets/images/contact-email.svg'
import contactLocation from '@/public/assets/images/contact-location.svg'
import Image from 'next/image'

const AddressBar = () => {

    const [activeAccordian, setActiveAccordian] = useState(0)

    const toggleAccordion = (accordianNumber: number) => {
        setActiveAccordian(accordianNumber)
        console.log(accordianNumber)
    }



    return (
        <div className='w-full'>
            <div>
                <ul className='flex gap-5 text-black text-lg'>
                    <div className='bg-[#E3DED9] px-8 py-2'><li className=''>Middle East</li></div>
                    <li>Asia</li>
                </ul>
            </div>


            {accordianData.map(({ id, question, answer }) => (
                <div key={id} className="border-b border-slate-200 bg-[#E3DED9] p-8">
                    <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full flex justify-between items-center pb-4 text-slate-800"
                    >
                        <span>{question}</span>
                        <span id="icon-1" className="text-slate-800 transition-transform duration-300">
                            {id === activeAccordian ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                            </svg>}

                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeAccordian === id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        {/* <div className="pb-5 text-sm text-slate-500">{answer}</div> */}
                        <div className='text-black'>
                            <div className='grid grid-cols-1 w-1/2'>
                                

                                <div className='col-span-1 flex flex-col gap-4'>
                                    <div className='flex gap-3'><Image src={contactPhone} alt='contact-phone'/>+971 6 5610999</div>
                                    <div className='flex gap-3'><Image src={contactEmail} alt='contact-email'/>info@desertboard.ae</div>
                                    <div className='flex gap-3'><Image src={contactLocation} alt='contact-location'/>Khalifa Economical Zone (KEZAD)
                                        Abu Dhabi, UAE
                                        P.O. Box 45154</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default AddressBar