
import React, { Dispatch, SetStateAction,    useEffect,    useState } from 'react'
import { topicSelection } from '../selectionData'
import { Downloads } from '@/types/Downloads'

const TopicSelection = ({ activeTopic, setActiveTopic, isMobile,data }: {
    activeTopic: number,
    setActiveTopic: Dispatch<SetStateAction<number>>
    isMobile: boolean
    data:Downloads
}) => {

    const [selectedValue,setSelectedValue] = useState(data && topicSelection[0].title)

    const handleSelection = (title:string,index:number) =>{
        setSelectedValue(title)
        setActiveTopic(index)
    }

    useEffect(() => {
        if (data?.data?.length > 0) {
          setSelectedValue(data.data[0].title);
        }
      }, [data]);



    return (
        <>
            <div className='border-b-[2px] pb-5 md:pb-8 border-[#1515151A]'>
                <h3 className='nuber-next-heavy text-font28 text-Darkgreen'>Select Topic<span className='text-orange'>.</span></h3>
            </div>
            <div>

                {!isMobile && data && data.data.map((topic, index) => (
                    <div className={`group border-b-[2px] border-[#1515151A] flex justify-between py-5 md:py-8 cursor-pointer`} key={index} onClick={() => setActiveTopic(index)}>

                        <h4 className={`${activeTopic == index ? "font-helvetica font-bold" : "texthelvetica20 clr15op75"} text-font20 leading-[1.1]`}>{topic.title}</h4>


                        <div className="transition-all duration-300 group-hover:translate-x-1">

                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33394 1L12.3339 9L4.33394 17M1.66406 3.66876L6.9953 8.99999L1.66406 14.3312" stroke={`${activeTopic == index ? "#FF671F" : "#151515"}`} strokeOpacity={`${activeTopic == index ? "1" : "0.5"}`} strokeWidth="2" strokeLinecap="round"/>
                            </svg>

                        </div>

                    </div>
                ))}

                {isMobile &&
                    <>
                    <div>
                       {data && data.data.map((topic,index)=>(



                            <div className={`text-font21 md:text-font28 nuber-next-bold group border-b-[1px] md:border-b-[2px] border-[#00000010] flex justify-between py-3 md:py-6 lg:py-8 cursor-pointer   hover:text-orange ${selectedValue == topic.title  ? "text-orange" : "text-[#151515BF]"} `} onClick={()=>handleSelection(topic.title,index)} key={index}>

                            <h4>{topic.title}</h4>

                            </div>

                       ))}
                    </div>
                    {/* <div className={` group border-b-[2px] border-[#1515151A] flex justify-between py-5 md:py-8   cursor-pointer`} onClick={()=>setDropDownOpen((prev)=>!prev)}>

                        <h4 className='text-font24 lg:text-font28 lg:nuber-next-bold leading-[1]'>{selectedValue}</h4>

                        <div className="transition-all duration-300 group-hover:translate-y-1 rotate-90">
                            <svg width="14" height="14" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>

                    </div>

                    {dropDownOpen && <div>
                       {data && data.data.map((topic,index)=>(

                            topic.title == selectedValue ? null

                            :

                            <div className={`text-font21 md:text-font28 nuber-next-bold group border-b-[1px] md:border-b-[2px] border-[#00000010] flex justify-between py-3 md:py-6 lg:py-8 cursor-pointer text-[#151515BF] hover:text-orange `} onClick={()=>handleSelection(topic.title,index)} key={index}>

                            <h4>{topic.title}</h4>

                            </div>

                       ))}
                    </div>} */}

                    </>
                    }

            </div>
        </>
    )
}

export default TopicSelection