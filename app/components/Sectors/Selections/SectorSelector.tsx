import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { menuItem } from '../data'
import Image from "next/image";
import { assets } from '@/public/assets/images/assets';

const SectorSelector = ({ setActiveSector, activeSector }: {
    setActiveSector: Dispatch<SetStateAction<number>>;
    activeSector: number;
}) => {

    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

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

    const [selectedValue,setSelectedValue] = useState(menuItem[activeSector].title)


    const handleSelection = (index:number,title:string) =>{
        setSelectedValue(title)
        setActiveSector(index)
        setIsOpen(false)
    }


    return (
        <>
            <div className='border-b-[2px] pb-5 border-[#00000010]'>
                <h3 className='nuber-next-heavy text-font28 text-Darkgreen'>Select Sector<span className='text-orange'>.</span></h3>
            </div>

            {
                isMobile &&
                <>
                    <div className={`text-font28 nuber-next-bold group border-b-[2px] border-[#00000010] flex justify-between py-6 lg:py-8 cursor-pointer`} onClick={()=>setIsOpen(true)}>

                        <h4 className='leading-[1]'>{selectedValue}</h4>
                        <Image src={assets.grarrow} alt="" />

                    </div>

                    { isOpen && menuItem.map((item, index) => (
                        <div className={`text-font28 nuber-next-bold group border-b-[2px] border-[#00000010] flex justify-between py-6 lg:py-8 cursor-pointer ${activeSector == index ? "text-orange" : "text-[#151515BF]"}`} key={index} onClick={() => handleSelection(index,item.title)}>

                            <h4 className='leading-[1]'>{item.title}</h4>

                        </div>
                    ))}
                </>

            }

            {!isMobile &&

            menuItem.map((item, index) => (
                <div className={`text-font28 nuber-next-bold group border-b-[2px] border-[#00000010] flex justify-between py-6 lg:py-8 cursor-pointer ${activeSector == index ? "text-orange" : "text-[#151515BF]"}`} key={index} onClick={() => setActiveSector(index)}>

                    <h4 className='leading-[1]'>{item.title}</h4>

                </div>
            ))

            }

        </>

    )
}

export default SectorSelector