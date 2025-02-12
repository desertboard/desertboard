
import React, { Dispatch, SetStateAction, useState } from 'react'
import { topicSelection } from '../selectionData'

const TopicSelection = ({ activeTopic, setActiveTopic, isMobile }: {
    activeTopic: number,
    setActiveTopic: Dispatch<SetStateAction<number>>
    isMobile: boolean
}) => {

    const [dropDownOpen,setDropDownOpen] = useState(false)
    const [selectedValue,setSelectedValue] = useState(topicSelection[0].title)

    const handleSelection = (title:string,index:number) =>{
        setSelectedValue(title)
        setDropDownOpen(false)
        setActiveTopic(index)
    }


    return (
        <>
            <div className='border-b-[2px] pb-5 md:pb-8 border-[#1515151A]'>
                <h3 className='nuber-next-heavy text-font28 text-Darkgreen'>Select Topic<span className='text-orange'>.</span></h3>
            </div>
            <div>

                {!isMobile && topicSelection.map((topic, index) => (
                    <div className={`group border-b-[2px] border-[#1515151A] flex justify-between py-5 md:py-8 cursor-pointer`} key={index} onClick={() => setActiveTopic(index)}>

                        <h4 className={`${activeTopic == index ? "font-helvetica font-bold" : "texthelvetica20 clr15op75"} text-font20 leading-[1.1]`}>{topic.title}</h4>


                        <div className="transition-all duration-300 group-hover:translate-x-1">

                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33394 1L12.3339 9L4.33394 17M1.66406 3.66876L6.9953 8.99999L1.66406 14.3312" stroke={`${activeTopic == index ? "#FF671F" : "#151515"}`} stroke-opacity={`${activeTopic == index ? "1" : "0.5"}`} strokeWidth="2" strokeLinecap="round"/>
                            </svg>

                        </div>

                    </div>
                ))}

                {isMobile &&
                    <>
                    <div className={` group border-b-[2px] border-[#1515151A] flex justify-between py-5 md:py-8 helvetica-bold cursor-pointer`} onClick={()=>setDropDownOpen((prev)=>!prev)}>

                        <h4>{selectedValue}</h4>

                        <div className="transition-all duration-300 group-hover:translate-y-1 rotate-90">
                            <svg width="14" height="14" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>

                    </div>

                    {dropDownOpen && <div>
                       {topicSelection.map((topic,index)=>(

                            topic.title == selectedValue ? null

                            :

                            <div className={`border-b-[2px] border-[#1515151A] flex justify-between py-6 helvetica cursor-pointer hover:text-orange`} onClick={()=>handleSelection(topic.title,index)} key={index}>

                            <h4>{topic.title}</h4>

                            </div>

                       ))}
                    </div>}

                    </>
                    }

            </div>
        </>
    )
}

export default TopicSelection