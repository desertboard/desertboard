
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

    // useEffect(()=>{
    //     if(selectedValue!=="Select Topic"){
    //         setTopicChanged(true)
    //     }
    // },[selectedValue,setTopicChanged])

    return (
        <>
            <div className='border-b-[2px] pb-5 border-[#1515151A]'>
                <h3 className='nuber-next-bold text-2xl'>Select Topic<span className='text-orange'>.</span></h3>
            </div>
            <div>

                {!isMobile && topicSelection.map((topic, index) => (
                    <div className={`group border-b-[2px] border-[#1515151A] flex justify-between py-6 ${activeTopic == index ? "helvetica-bold" : "helvetica"} cursor-pointer`} key={index} onClick={() => setActiveTopic(index)}>

                        <h4>{topic.title}</h4>


                        <div className="transition-all duration-300 group-hover:translate-x-1">
                            <svg width="14" height="14" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke={`${activeTopic == index ? "#FF671F" : "#000000"}`} strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>

                    </div>
                ))}

                {isMobile &&
                    <>
                    <div className={` px-4 group border-b-[2px] border-[#1515151A] flex justify-between py-6 helvetica-bold cursor-pointer`} onClick={()=>setDropDownOpen((prev)=>!prev)}>

                        <h4>{selectedValue}</h4>

                        <div className="transition-all duration-300 group-hover:translate-y-1 rotate-90">
                            <svg width="14" height="14" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>

                    </div>

                    {dropDownOpen && <div>
                       {topicSelection.map((topic,index)=>(
                            
                            <div className={`border-b-[2px] border-[#1515151A] flex justify-between py-6 helvetica pl-4 cursor-pointer hover:text-orange`} onClick={()=>handleSelection(topic.title,index)} key={index}>

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