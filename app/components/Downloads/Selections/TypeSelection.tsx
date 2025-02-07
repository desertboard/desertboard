import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { topicSelection } from '../selectionData';

const TypeSelection = ({ activeTypes, setActiveType, activeType, isMobile, activeTopic }: {
    activeTypes: { title: string; result: { title: string; image: string; }[]; }[]
    activeType: number,
    setActiveType: Dispatch<SetStateAction<number>>
    isMobile: boolean
    activeTopic: number
}) => {

    const [dropDownOpen, setDropDownOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(activeTypes[0].title)

    const handleSelection = (title: string, index: number) => {
        setSelectedValue(title)
        setDropDownOpen(false)
        setActiveType(index)
    }

    useEffect(() => {
        setSelectedValue(topicSelection[activeTopic].types[activeType].title)
    }, [activeType,activeTopic])


    return (
        <>
            <div className='border-b-[2px] pb-5 md:pb-8 border-[#1515151A]  '>
                <h3 className='nuber-next-heavy text-font28 text-Darkgreen'>Select Type<span className='text-orange'>.</span></h3>
            </div>
            {!isMobile && activeTypes.map((type, index) => (
                <div key={index} className='group cursor-pointer' onClick={() => setActiveType(index)}>
                    <div className={`border-b-[2px] border-[#1515151A] flex justify-between py-5 md:py-8  `}>

                        <h4 className={`${activeType == index ? "font-helvetica font-bold" : "texthelvetica20 clr15op75"} text-font20 leading-[1.1]`}>{type.title}</h4>


                        <div className="transition-all duration-300 group-hover:translate-x-1">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33394 1L12.3339 9L4.33394 17M1.66406 3.66876L6.9953 8.99999L1.66406 14.3312" stroke={`${activeType == index ? "#FF671F" : "#151515"}`} stroke-opacity={`${activeType == index ? "1" : "0.5"}`} stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>


                    </div>
                </div>
            ))}

            {isMobile &&
                <>
                    <div className={` group border-b-[2px] border-[#1515151A] flex justify-between py-5 md:py-8 helvetica-bold cursor-pointer`} onClick={() => setDropDownOpen((prev) => !prev)}>

                        <h4>{selectedValue}</h4>

                        <div className="transition-all duration-300 group-hover:translate-y-1 rotate-90">
                            <svg width="14" height="14" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>

                    </div>

                    {dropDownOpen && <div>
                        {activeTypes.map((type, index) => (

                            type.title == selectedValue ? null

                                :

                                <div className={`border-b-[2px] border-[#1515151A] flex justify-between py-6 helvetica cursor-pointer hover:text-orange`} onClick={() => handleSelection(type.title, index)} key={index}>

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