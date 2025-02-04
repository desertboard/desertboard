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
    const [isMobile,setIsMobile] = useState(false)



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
        console.log(currentTopic.types[activeType])
        
        if (!currentTopic || !currentTopic.types) {
            return;
        
        }else if(currentTopic.types[activeType] == undefined){
            setActiveType(currentTopic.types.findIndex((item)=>item.title == currentTopic.types[0].title))
            const currentType: {result:{ title: string; image: string; }[]} = currentTopic.types[0];
            console.log(currentType.result)
            if (currentType.result === undefined) {
                setActiveType(0);
                setActiveResult(currentTopic.types[0]?.result || []);
            } else {
                setActiveResult(currentType.result);
            }
        
        }else{
            const currentType =currentTopic.types[activeType];
            if (currentType.result === undefined) {
                setActiveType(0);
                setActiveResult(currentTopic.types[0]?.result || []);
            } else {
                setActiveResult(currentType.result);
            }
        }


    }, [activeType,activeTopic]);

    

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
                        <TypeSelection activeTypes={activeTypes} activeType={activeType} setActiveType={setActiveType} isMobile={isMobile} activeTopic={activeTopic}/>
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