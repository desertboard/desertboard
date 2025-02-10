"use client"

import React, { useEffect, useState } from 'react'
import SalesForm from './SalesForm'
import MarketingForm from './MarketingForm'
import Careers from './Careers'
import General from './General'
import Image from 'next/image'
import accordianArrow from '@/public/assets/images/accordian-arrow.svg'

const Forms = () => {

    const [menuIndex,setMenuIndex] = useState(0)
    const [isMobile,setIsMobile] = useState(false)

    useEffect(()=>{

        const handleScreenChange = (screenWidth:number)=>{
            if(screenWidth<798){
                setIsMobile(true)
            }else{
                setIsMobile(false)
            }
        }

        const handleResize = () => handleScreenChange(window.innerWidth);

        handleResize();

        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize',handleResize)

    },[])


    const menu = [
        {
            title:"Sales",
            component:<SalesForm/>
        },
        {
            title:"Marketing & Press",
            component:<MarketingForm/>
        },
        {
            title:"Careers",
            component:<Careers/>
        },
        {
            title:"General Enquiries",
            component:<General/>
        }
    ]


    const activeComponent = menu[menuIndex].component

    return (
        <div className='w-full'>
            {!isMobile && <div>
                <ul className='flex text-black text-font24'>
                    {menu.map((item,index)=>(
                        <div key={index} className={`xxl:px-8 px-4 py-5 ${menuIndex == index ? "bg-[#E3DED9] text-Darkgreen opacity-100" : "clr15op50"} cursor-pointer  nuber-next-heavy  text-font24 leading-[1.3]`} onClick={()=>setMenuIndex(index)}><li>{item.title}</li></div>
                    ))}

                </ul>
            </div>}

                    {isMobile && <div>
                        {menu.map((item,index)=>(
                            <div key={index}>
                            <button
                            className={`w-full flex justify-between items-center  text-slate-800 py-3 md:py-4 px-3 md:px-6 bg-[#E3DED9] `}
                            onClick={()=>setMenuIndex(index)}
                        >
                            <div className='helvetica-bold'>{item.title}</div>
                            <span id="icon-1" className="text-slate-800 transition-transform duration-300">
                            {index === menuIndex ? <Image src={accordianArrow} alt='arrow'/> : <Image src={accordianArrow} alt='arrow' className='rotate-180'/>}

                            </span>
                            </button>


                        <div
                            className={`overflow-hidden transition-all duration-300 pb-3 px-3 md:px-4 ${menuIndex === index ? "max-h-fit opacity-100 bg-[#E3DED9] mb-3" : "max-h-0 opacity-0"
                                }`}
                        >

                            {activeComponent}

                        </div>

                        </div>
                        ))}
                    </div>}

            {!isMobile && activeComponent}

        </div>
    )
}

export default Forms