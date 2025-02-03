"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import BackGround from '@/public/assets/images/Background.jpg'
import { topicSelection } from '../selectionData'
import TopicSelection from './TopicSelection'
import TypeSelection from './TypeSelection'
import ResultSelection from './ResultSelection'


const Selections = () => {
   
    const [activeTopic,setActiveTopic] = useState(0)
    const activeTypes = topicSelection[activeTopic].types
    const [activeType,setActiveType] = useState(0)
    // let activeResult = topicSelection[activeTopic].types[activeType].result
    const [isMobile,setIsMobile] = useState(false)


    console.log("activeTypes",activeTypes)

    const [activeResult,setActiveResult] = useState<{ title: string; image: string; }[]>([])

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


    
    useEffect(() => {
        const currentTopic = topicSelection[activeTopic];
        if (!currentTopic || !currentTopic.types || !currentTopic.types[activeType]) {
            return;
        }
    
        const currentType = currentTopic.types[activeType];
    
        if (currentType.result === undefined) {
            setActiveType(0);
            setActiveResult(currentTopic.types[0]?.result || []);
        } else {
            setActiveResult(currentType.result);
        }

    }, [activeType,activeTopic]);

    
    
    // useEffect(()=>{
    //     if(!isMobile){
    //         populateResults()
    //     }

    //     if(!topicChanged){
    //         setActiveResult([])
    //     }

    //     if(!typeChanged){
    //         setActiveResult([])
    //     }

    // },[topicChanged,typeChanged,isMobile])



    return (
        <>
        <div className='px-6 relative py-20'>
            <Image src={BackGround} alt='background' className='absolute left-0 top-0 -z-10 inset-0 h-full w-full object-cover' />
            <div className='container h-fit text-black'>
                <div className='grid md:grid-cols-3 gap-3'>

                    <div className={`col-span-1 pr-8 ${!isMobile ? "border-r-2" : ""}`}>
                        <TopicSelection activeTopic={activeTopic} setActiveTopic={setActiveTopic} isMobile={isMobile}/>
                    </div>

                    <div className={`col-span-1 pr-8 ${!isMobile ? "pl-4 border-r-2" : "mt-5"}`}>
                        <TypeSelection activeTypes={activeTypes} activeType={activeType} setActiveType={setActiveType} isMobile={isMobile}/>
                    </div>

                    <div className={`col-span-1 ${!isMobile ? "pl-4" : "mt-5 pr-8"}`}>
                        <ResultSelection activeResult={activeResult}/>
                    </div>

                </div>
            </div>
        </div>

        </>
    )
}

export default Selections