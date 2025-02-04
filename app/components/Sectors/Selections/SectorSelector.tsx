import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { menuItem } from '../data'

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
            <div className='border-b-[2px] pb-5 border-[#1515151A]'>
                <h3 className='nuber-next-bold text-font28'>Select Sector<span className='text-orange'>.</span></h3>
            </div>

            {
                isMobile &&
                <>
                    <div className={`text-font28 nuber-next-bold group border-b-[2px] border-[#1515151A] flex justify-between py-6 cursor-pointer`} onClick={()=>setIsOpen(true)}>

                        <h4>{selectedValue}</h4>

                    </div>

                    { isOpen && menuItem.map((item, index) => (
                        <div className={`text-font28 nuber-next-bold group border-b-[2px] border-[#1515151A] flex justify-between py-6 cursor-pointer ${activeSector == index ? "text-orange" : "text-[#151515BF]"}`} key={index} onClick={() => handleSelection(index,item.title)}>

                            <h4>{item.title}</h4>

                        </div>
                    ))}
                </>

            }

            {!isMobile && 
            
            menuItem.map((item, index) => (
                <div className={`text-font28 nuber-next-bold group border-b-[2px] border-[#1515151A] flex justify-between py-6 cursor-pointer ${activeSector == index ? "text-orange" : "text-[#151515BF]"}`} key={index} onClick={() => setActiveSector(index)}>

                    <h4>{item.title}</h4>

                </div>
            ))
            
            }

        </>

    )
}

export default SectorSelector