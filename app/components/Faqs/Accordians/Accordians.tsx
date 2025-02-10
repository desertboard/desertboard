import React, { useState } from 'react'
import Link from 'next/link'
import { accordionData } from '../data'
import Faqaccordian from './Faqaccordian'


const Accordians = () => {


    const [addressBarIndex,setAddressBarIndex] = useState(0)

    const menu = [
      {
          title:"General",
          component:""
      },
      {
          title:"Product",
          component:<Faqaccordian accordionData={accordionData.data} bg={"bg-[#E3DED9]"} bullet={false} />
      },
    //   {
    //     title:"Glossary",
    //     component:""
    // }
]

const ActiveAccordian = menu[addressBarIndex].component


  return (
    <div className='w-full'>
            <div className='border-b-2 border-[#15151510]'>
                <ul className='flex  text-black text-lg justify-between  lg:w-[30%] text-font24 gap-x-5'>
                    {menu.map((item,index)=>(
                            <li key={index} className={`${ addressBarIndex == index ? "border-b-2 border-orange nuber-next-heavy text-Darkgreen" : " text-[#00000050]"} relative top-[2px] py-2 cursor-pointer nuber-next-heavy flex transition-all duration-500 hover:text-Darkgreen`} onClick={()=>setAddressBarIndex(index)}>{item.title}</li>
                    ))}
                    <li><Link href={'/glossary'} className='py-2 cursor-pointer nuber-next-heavy flex items-center gap-2 text-[#00000050]  hover:text-Darkgreen transition-all duration-500'>
                        Glossary
                        <svg width="20" height="20" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        </Link>
                    </li>
                </ul>
            </div>

            {ActiveAccordian}

        </div>
  )
}

export default Accordians