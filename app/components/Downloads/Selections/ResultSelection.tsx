import React from 'react'
import Image from 'next/image'
import resultImage from '@/public/assets/images/downloads/resultImage.jpg'
import downloadIcon from '@/public/assets/images/downloadicon.svg'
import { assets } from '@/public/assets/images/assets'

const ResultSelection = ({activeResult}:{
    activeResult:{
            title:string;
            image:string;
    }[]
}) => {
  return (
    <>
        <div className='border-b-[2px] border-[#1515151A] pb-5 md:pb-8'>
                            <div className='nuber-next-heavy text-font28 text-Darkgreen flex gap-2'>
                                <h3>Result<span className='text-orange'>.</span></h3>
                                <div className='text-[#15151580]'>{activeResult.length}</div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-8 mt-5 md:mt-8 '>

                            {activeResult && activeResult.length > 0 ? activeResult.map((result,index)=>(
                                <div className='flex flex-col gap-3 md:gap-5 group' key={index}>
                                <div className='relative'>
                                        <Image src={resultImage} alt='result-image' />
                                        <div className=' absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                                        <div className='w-20 h-20 bg-[#ff671f7a]  flex  top-0 left-0  cursor-pointer items-center justify-center dnld opacity-0 group-hover:opacity-[1] transition-all duration-500'>
                                        <Image src={assets.downorange} alt='download' className='w-5 h-5  '/>
                                        </div>
                                        </div>
                                </div>

                                <div className='flex justify-between'>
                                    <h5 className='texthelvetica20bold'>{result.title}</h5>
                                    <Image src={downloadIcon} alt='download' className='w-5 h-5 opacity-[1] group-hover:opacity-0  ' />
                                    <Image src={assets.downorange} alt='download' className='w-5 h-5 hidden group-hover:block opacity-0 group-hover:opacity-[1] transition-all duration-500' />
                                </div>
                            </div>
                            ))

                        :
                            <div>No results found</div>
                        }


            </div>
    </>
  )
}

export default ResultSelection