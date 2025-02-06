"use client"

import React from 'react'
// import { useParams } from 'next/navigation'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const IndiGlossary = () => {

    // const { alphabet } = useParams()

    return (
        <div className='flex flex-col gap-4'>
            <div className='text-3xl font-bold'>Contents</div>
            
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className='bg-blue-50 px-3'>
                    <AccordionTrigger className='flex justify-between'>
                        <div>Is it accessible?</div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default IndiGlossary