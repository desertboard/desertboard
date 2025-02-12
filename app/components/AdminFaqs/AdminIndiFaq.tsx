"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import parse from 'html-react-parser'

const AdminIndiFaq = () => {

    const { sectionId } = useParams()
    const [items,setItems] = useState<{_id:string;question:string;answer:string}[]>([])
    const [refetch,setRefetch] = useState(false)

    useEffect(()=>{
        const fetchItems = async() =>{
            try {
                const url = `/api/admin/faqs/section?id=${sectionId}`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json()
                    console.log(data)
                    if(data){
                        setItems(data)
                    }
                    // router.push('/admin/about')
                } else {
                    throw new Error("Failed to get items");
                }
    
            } catch (error) {
                console.error("Error getting items:", error);
                alert("Failed to get items. Please try again.");
            }

        }

        fetchItems()

    },[refetch])


    const handleDelete = async(id:string) =>{
        try {
            const url = `/api/admin/faqs/section/content?sectionid=${sectionId}&contentid=${id}`;
            const response = await fetch(url,{
                method:"DELETE"
            });
            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev)=>!prev)
                
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to delete items");
            }

        } catch (error) {
            console.error("Error deleting items:", error);
            alert("Failed to delete items. Please try again.");
        }
    }

    return (
        <div className="flex flex-col w-full gap-2 h-screen px-2">
                <div className='flex justify-between'>
                    <h3>Items</h3>
                    <Link href={`/admin/faqs/${sectionId}/add`}><Button>Add Item</Button></Link>
                </div>

                <div className='flex flex-col gap-2'>
                    {items && items.map((item,index)=>(
                        <Accordion type="single" collapsible key={index}>
                        <AccordionItem value="item-1" className='bg-blue-50 px-3'>
                            <AccordionTrigger className='flex justify-between'>
                                <div>{item.question}</div>
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-3'>
                                <div>
                                    {parse(item.answer)}
                                </div>
                                <div className='flex gap-2'>
                                    <Link href={`/admin/faqs/${sectionId}/edit/${item._id}`}><Button>Edit</Button></Link>
                                    <Button onClick={()=>handleDelete(item._id)}>Delete</Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    ))}
                    
                </div>

            </div>

    )
}

export default AdminIndiFaq