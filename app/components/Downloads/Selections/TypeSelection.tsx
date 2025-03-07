import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Downloads } from '@/types/Downloads';

const TypeSelection = ({selectedValue,setSelectedValue,activeTypes, setActiveType, activeType, isMobile ,data }: {
    activeTypes: { title: string; _id: string; files: { file: string; name: string; thumbnail: string; _id: string; }[]; }[]
    activeType: number,
    activeTopic: number,
    setActiveType: Dispatch<SetStateAction<number>>
    isMobile: boolean
    data:Downloads
    selectedValue:string;
    setSelectedValue:Dispatch<SetStateAction<string>>
}) => {


    const [dropDownOpen, setDropDownOpen] = useState(false)
    // const [selectedValue, setSelectedValue] = useState(data && data.data && data.data[0].types[0].title)

    const handleSelection = (title: string, index: number) => {
        setSelectedValue(title)
        setDropDownOpen(false)
        setActiveType(index)
    }

useEffect(()=>{
    setSelectedValue(data && data.data && data.data[0].types[0].title)
},[data])

// useEffect(()=>{
//     if(activeType==0){
//         setSelectedValue(data && data.data && data.data[activeTopic].types[activeType].title)
//         console.log("work")
//     }
// },[activeType])

    return (
        <>
            <div className='border-b-[2px] pb-5 md:pb-8 border-[#1515151A]  '>
                <h3 className='nuber-next-heavy text-font28 text-Darkgreen'>Select Type<span className='text-orange'>.</span></h3>
            </div>
            {!isMobile && data && data.data && activeTypes.map((type, index) => (
                <div key={index} className='group cursor-pointer' onClick={() => setActiveType(index)}>
                    <div className={`border-b-[2px] border-[#1515151A] flex justify-between py-5 md:py-8  `}>

                        <h4 className={`${activeType == index ? "font-helvetica font-bold" : "texthelvetica20 clr15op75"} text-font20 leading-[1.1]`}>{type.title}</h4>


                        <div className="transition-all duration-300 group-hover:translate-x-1">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33394 1L12.3339 9L4.33394 17M1.66406 3.66876L6.9953 8.99999L1.66406 14.3312" stroke={`${activeType == index ? "#FF671F" : "#151515"}`} strokeOpacity={`${activeType == index ? "1" : "0.5"}`} strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>


                    </div>
                </div>
            ))}

            {isMobile &&
                <>
                    <div className={` group border-b-[2px] border-[#1515151A] flex justify-between py-5 md:py-8   cursor-pointer`} onClick={() => setDropDownOpen((prev) => !prev)}>

                        <h4 className='text-font24 lg:text-font28 lg:nuber-next-bold leading-[1]'>{selectedValue}</h4>

                        <div className="transition-all duration-300 group-hover:translate-y-1 rotate-90">
                            <svg width="14" height="14" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>

                    </div>

                    {dropDownOpen && <div>
                        {data && data.data && activeTypes.map((type, index) => (

                            type.title == selectedValue ? null

                                :

                                <div className={`text-font21 md:text-font28 nuber-next-bold group border-b-[1px] md:border-b-[2px] border-[#00000010] flex justify-between py-3 md:py-6 lg:py-8 cursor-pointer text-[#151515BF] hover:text-orange`} onClick={() => handleSelection(type.title, index)} key={index}>

                                    <h4>{type.title}</h4>

                                </div>

                        ))}
                    </div>}

                </>
            }
        </>
    )
}

export default TypeSelection