import React from 'react'
import Image from 'next/image'
import resultImage from '@/public/assets/images/downloads/resultImage.jpg'
import downloadIcon from '@/public/assets/images/downloadicon.svg'

const ResultSelection = ({activeResult}:{
    activeResult:{
            title:string;
            image:string;
    }[]
}) => {
  return (
    <>
        <div className='border-b-[2px] border-[#1515151A] pb-5'>
                            <div className='nuber-next-bold text-2xl flex gap-2'>
                                <h3>Result<span className='text-orange'>.</span></h3>
                                <div className='text-[#15151580]'>{activeResult.length}</div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-8 mt-6'>
                            
                            {activeResult && activeResult.length > 0 ? activeResult.map((result,index)=>(
                                <div className='flex flex-col gap-3' key={index}>
                                <div>
                                    <Image src={resultImage} alt='result-image'/>
                                </div>

                                <div className='flex justify-between'>
                                    <h5 className='nuber-next-bold'>{result.title}</h5>
                                    <Image src={downloadIcon} alt='download' className='w-5 h-5'/>
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