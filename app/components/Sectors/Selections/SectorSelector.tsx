import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { SectorType } from '@/types/SectorType';

const SectorSelector = ({ setActiveSector, activeSector,data,setSectorName,page }: {
    setActiveSector: Dispatch<SetStateAction<number>>;
    activeSector: number;
    data:SectorType
    setSectorName:Dispatch<SetStateAction<string>>
    page?:string
}) => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {

        const handleScreenChange = (screenWidth: number) => {
            if (screenWidth < 798) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        const handleResize = () => handleScreenChange(window.innerWidth);

        handleResize();

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)

    }, [])



    const handleSelection = (index:number,title:string) =>{
        console.log(title)
        setSectorName(title)
        setActiveSector(index)
    }

    useEffect(()=>{
        console.log(data && data.data[0].title)

    },[data])





    return (
        <>
            <div className='border-b-[2px] pb-5 border-[#00000010]'>
                <h3 className='nuber-next-heavy text-font28 text-Darkgreen'>Select {page == "product" ? "Product":"Sector"}<span className='text-orange'>.</span></h3>
            </div>

            {
                isMobile &&
                <>
                       {   data && data.data && data.data.map((item, index) => (
                        <div className={`text-font20 md:text-font24 nuber-next-bold group border-b-[1px] md:border-b-[2px] border-[#00000010] flex justify-between py-3 md:py-6 lg:py-8 cursor-pointer ${activeSector == index ? "text-orange" : "text-[#151515BF]"}`} key={index} onClick={() => handleSelection(index,item.title)} >

                            <h4 className='leading-[1]'>{item.title}</h4>

                        </div>
                    ))}




                </>

            }

            {!isMobile &&

            data && data.data && data.data.map((item, index) => (
                <div className={`text-font20 md:text-font24  nuber-next-bold group border-b-[1px] md:border-b-[2px] border-[#00000010] flex justify-between py-3 md:py-6 lg:py-8 cursor-pointer ${activeSector == index ? "text-orange" : "text-[#151515BF]"}`} key={index} onClick={() => {setActiveSector(index);setSectorName(item.title)}}>

                    <h4 className='leading-[1]'>{item.title}</h4>

                </div>
            ))

            }

        </>

    )
}

export default SectorSelector