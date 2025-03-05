"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import BackGround from '@/public/assets/images/Background.jpg'
import TopicSelection from './TopicSelection'
import TypeSelection from './TypeSelection'
import ResultSelection from './ResultSelection'
import { motion } from 'framer-motion'
import { assets } from '@/public/assets/images/assets'
import useSWR from 'swr'
import { Downloads } from '@/types/Downloads'


const Selections = () => {

    const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

    const { data,isLoading }: { data: Downloads, error: Error | undefined, isLoading: boolean } = useSWR('/api/admin/files', fetcher)
  
    useEffect(()=>{
      console.log("files",data);
    },[data])


    const [activeTopic,setActiveTopic] = useState(0)
    const activeTypes = data && data.data[activeTopic].types
    const [activeType,setActiveType] = useState(0)
    const [isMobile,setIsMobile] = useState(false)
    const [selectedValue, setSelectedValue] = useState(data && data.data && data.data[0].types[0].title)

    

    const [activeResult,setActiveResult] = useState<{ file: string; name: string; thumbnail: string; _id: string; }[] | []>([])

    useEffect(()=>{

        const handleScreenChange = (screenWidth:number)=>{
            if(screenWidth<1021){
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
        const currentTopic = data && data.data[activeTopic];
        if (!data?.data) {
            if(!data?.data[activeTopic] || !data?.data[activeTopic]?.types){
                return;
            }  
            
            
        }else if(data && data.data && data.data[activeTopic].types[activeType] == undefined){
            
            setActiveType(data && data.data[activeTopic] && data.data[activeTopic].types.findIndex((item)=>item.title == data.data[activeTopic].types[0].title))
            const currentType = data.data[activeTopic].types[0];
            setSelectedValue(data.data[activeTopic].types[0].title)
            console.log(data.data[activeTopic].types[0].title)
            if (currentType.files === undefined) {
                setActiveType(0);
                setActiveResult(currentTopic.types[0]?.files || []);
            } else {
                setActiveResult(currentType.files);
            }

        }else{

            const currentType = data && data.data && data.data[activeTopic]?.types[activeType];

            if (data && data.data && currentType.files === undefined) {
                setActiveType(0);
                setActiveResult(currentTopic.types[0]?.files || []);
                setSelectedValue(data.data[activeTopic].types[0].title)
            } else {
                setActiveResult(data && data.data && currentType.files);
                setSelectedValue(data.data[activeTopic].types[activeType].title)
            }
        }

    }, [activeType,activeTopic,data]);


    if(isLoading){
        return null
    }

    return (
        <>
        <section className='  relative py-10 lg:py-20'>
                <Image src={BackGround} alt='background' className='absolute left-0 top-0 -z-10 inset-0 h-full w-full object-cover' />
                <motion.div
        className="ola ola-right absolute top-0 right-[-25%] md:right-[-10%] w-[20em] md:w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          className="absolute"
          src={assets.leaf}
          alt="Description of the image"
        />
      </motion.div>
      <motion.div
        className="ola ola-right absolute bottom-[43%] left-[-25%] md:left-[-15%] w-[20em] md:w-[40em]"
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="absolute" src={assets.lfbt} alt="Description of the image" />
      </motion.div>
            <div className='container h-fit text-black'>
                <div className='grid lg:grid-cols-3 gap-3 relative'>

                    <div className={`col-span-1 pr-8 border-[#00000010] ${!isMobile ? "border-r-2" : ""}`}>
                        <TopicSelection activeTopic={activeTopic} setActiveTopic={setActiveTopic} isMobile={isMobile} data={data}/>
                    </div>

                    <div className={`col-span-1 pr-8 border-[#00000010] ${!isMobile ? "pl-4 border-r-2" : "mt-5"}`}>
                        <TypeSelection selectedValue={selectedValue} setSelectedValue={setSelectedValue} activeTopic={activeTopic} activeTypes={activeTypes} activeType={activeType} setActiveType={setActiveType} isMobile={isMobile} data={data}/>
                    </div>

                    <div className={`col-span-1 ${!isMobile ? "pl-4" : "mt-5 pr-8"}`}>
                        <ResultSelection activeResult={activeResult}/>
                    </div>

                </div>
            </div>
        </section>

        </>
    )
}

export default Selections