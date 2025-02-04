import React from 'react'
import Image from 'next/image';

const ApplicationSelector = ({ activeApplications }: {
    activeApplications: {
        title: string;
        image: string;
    }[]
}) => {
    return (
        <>
            <div className='border-b-[2px] pb-5 border-[#1515151A]'>
                <h3 className='nuber-next-bold text-font28'>Select Application<span className='text-orange'>.</span></h3>
            </div>

            <div className="grid lg:grid-cols-3 lg:gap-6 gap-3 grid-cols-2">
                {activeApplications.map((application, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                        <div className="relative md:h-96 h-48 w-full">
                            <Image src={application.image} alt="image" fill />
                        </div>
                        <div>
                            <h4 className="text-font20 nuber-next-bold">{application.title}</h4>
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}

export default ApplicationSelector