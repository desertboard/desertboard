"use client"

import React, { useState } from 'react'
import SalesForm from './SalesForm'
import MarketingForm from './MarketingForm'
import Careers from './Careers'
import General from './General'

const Forms = () => {

    const [menuIndex,setMenuIndex] = useState(0)

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
        <div className='w-full '>
            <div>
                <ul className='flex text-black text-lg'>
                    {menu.map((item,index)=>(
                        <div key={index} className={`px-7 py-2 ${menuIndex == index ? "bg-[#E3DED9]" : ""} cursor-pointer nuber-next nuber-next-bold`} onClick={()=>setMenuIndex(index)}><li>{item.title}</li></div>
                    ))}
                    
                </ul>
            </div>

            {activeComponent}

        </div>
    )
}

export default Forms