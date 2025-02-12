import React, { useState } from 'react'
import Image from 'next/image'
import accordianArrow from '@/public/assets/images/accordian-arrow.svg'

const ProductAccordians = ({items}:{
    items:{
        question:string;
        answer:string;
    }[]
}) => {
    const [activeAccordian, setActiveAccordian] = useState<null | number>(null)

    const toggleAccordian = (index: number) => {

        if (activeAccordian == 0) {
            setActiveAccordian(null)
            return
        }

        if (activeAccordian) {
            setActiveAccordian(null)
        } else {
            setActiveAccordian(index)
        }
    }

    console.log(items)

    // const accordianData = [
    //     {
    //         question: "How is the PSB® board's palm raw material sourced?",
    //         answer: "<p>Answer</p>"
    //     },
    //     {
    //         question: "Do the PSB® boards hold local and international certifications?",
    //         answer: "<p>Answer</p>"
    //     },
    //     {
    //         question: "Does DesertBoard produce fire-rated door cores?",
    //         answer: `<p>Yes, DesertBoard produces fire-rated door cores under its PSB® product line, certified to meet
    //         global and local fire safety standards. These door cores offer fire resistance for 90, 60, and 30 minutes, providing critical time for safe evacuation in
    //         emergencies. DesertBoard’s certifications include EN-1634-1 (European standard for fire resistance), BS-476 (British standard for fire tests on building
    //         materials and structures), and UL-10C (American standard for fire tests of door assemblies).
    //         In the UAE, local testing facilities such as Emirates Safety Laboratory prioritize EN-1634-1 and BS-476 standards, while in KSA, they prioritize the UL-10C
    //         (USA standard). DesertBoard is also actively working on obtaining certifications for regions like India to ensure compliance with their specific testing standards.
    //         This commitment to uncompromising safety ensures that DesertBoard’s fire-rated door cores meet the highest global requirements.</p>`
    //     },
    //     {
    //         question: "Can we customize the finish of the PSB® board?",
    //         answer: "<p>Answer</p>"
    //     },
    //     {
    //         question: "Is the PSB® board waterproof?",
    //         answer: "<p>Answer</p>"
    //     },
    //     {
    //         question: "Can the PSB® board be re-used several times?",
    //         answer: "<p>Answer</p>"
    //     },
    //     {
    //         question: "What makes DesertBoard’s PSB® environmentally friendly?",
    //         answer: "<p>Answer</p>"
    //     },
    //     {
    //         question: "Is DesertBoard PSB® a good value proposition for my project?",
    //         answer: "<p>Answer</p>"
    //     },
    //     {
    //         question: "Can PSB® boards be used in any type of building project?",
    //         answer: "<p>Answer</p>"
    //     },
    //     {
    //         question: "What certifications does DesertBoard hold? ",
    //         answer: "<p>Answer</p>"
    //     }
    // ]

    return (
        <div className="mt-8">
            <div className='flex flex-col gap-3'>
                {items && items.map((item, index) => (
                    <div key={index}>
                        <button onClick={() => toggleAccordian(index)}
                            className={`w-full flex justify-between items-center  text-slate-800 py-4 bg-[#E3DED9] px-4`}
                        >
                            <div className='helvetica-bold'>{item.question}</div>
                            <span id="icon-1" className="text-slate-800 transition-transform duration-300">
                                {activeAccordian == index ? <Image src={accordianArrow} alt='arrow' /> : <Image src={accordianArrow} alt='arrow' className='rotate-180' />}

                            </span>
                        </button>


                        <div
                            className={`overflow-hidden transition-all duration-300 pb-3 px-3 md:px-4 ${activeAccordian === index ? "max-h-fit opacity-100 bg-[#E3DED9]" : "max-h-0 opacity-0"
                                }`}
                        >

                            <div className='text-black'>
                                <div className='' dangerouslySetInnerHTML={{ __html: item.answer }}>
                                </div>

                            </div>

                            {/* <div>
                                <button
                                    type="submit"
                                    className="mt-6 font-semibold text-sm  group items-center hover:border-b-2  border-[#FF671F] text-[#FF671F] pb-1 h-6 flex gap-1 nuber-next"
                                >
                                    View fire-rated certifications  <div className="transition-all duration-300 group-hover:translate-x-1">
                                        <svg width="20" height="15" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </button>
                            </div> */}

                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ProductAccordians