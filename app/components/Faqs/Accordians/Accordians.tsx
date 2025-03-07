"use client"

import React, { useEffect, useState } from 'react'
import ProductAccordians from './ProductAccordians'
import Link from 'next/link'
import useSWR from 'swr'

const Accordians = () => {
    const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

    const { data } = useSWR('/api/admin/faqs', fetcher)

    const [sections, setSections] = useState([])
    const [activeSession, setActiveSection] = useState(null)
    const [items, setItems] = useState([])

    useEffect(() => {
        console.log(data)
        if (data && data.faqs) {
            const fetchedSections = data.faqs.map((item: { sectionName: string }) => item.sectionName);
            setSections(fetchedSections);

            // Set the first section as the active session
            if (fetchedSections.length > 0) {
                setActiveSection(fetchedSections[0]);
            }
        }
    }, [data])

    useEffect(() => {
        if (data && data.faqs) {
            const filteredSection = data.faqs.find(
                (item: { sectionName: string }) => item.sectionName === activeSession
            );

            setItems(filteredSection ? filteredSection.contents : []);
        }
    }, [activeSession, data]);



    return (
        <div className='w-full'>
            <div className='border-b-2'>
                <ul className='flex text-black text-lg justify-between lg:w-[30%] text-font24 gap-x-5'>
                    {sections && sections.map((item, index) => (
                        <li key={index} className={`${activeSession === item ? "border-b-2 border-orange nuber-next-heavy text-Darkgreen" : " text-[#00000050]"} py-2 cursor-pointer nuber-next-heavy flex transition-all duration-500 hover:text-Darkgreen`} onClick={() => setActiveSection(item)}>{item}</li>
                    ))}
                    <li>
                        <Link href={'/glossary'} className='py-2 cursor-pointer nuber-next-heavy flex items-center gap-2 text-[#00000050] hover:text-Darkgreen transition-all duration-500'>
                            Glossary
                            <svg width="20" height="20" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                                <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>

            <ProductAccordians items={items} />
        </div>
    )
}

export default Accordians
