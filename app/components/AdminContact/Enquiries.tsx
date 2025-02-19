"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { FaFilePdf } from "react-icons/fa6";


const Enquiries = () => {

    const { department } = useParams()
    const [items,setItems] = useState<{_id:string;name:string;email:string,phone:string,message:string,resume:string}[]>([])
    const [refetch,setRefetch] = useState(false)

    useEffect(()=>{
        const fetchItems = async() =>{
            try {
                const url = `/api/admin/contact/enquiries?department=${department}`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json()
                    console.log(data)
                    if(data){
                        setItems(data.enquiries.enquiry)
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
            const url = `/api/admin/contact/enquiries?id=${id}&department=${department}`;
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
                    <h3>Enquiries</h3>
                </div>

                <div className='flex flex-col gap-2'>
                    {items && items.map((item,index)=>(
                        <Accordion type="single" collapsible key={index}>
                        <AccordionItem value="item-1" className='bg-blue-50 px-3'>
                            <AccordionTrigger className='flex justify-between'>
                                <div>Message from : {item.name}</div>
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-3'>
                                <div>
                                    Name : {item.name}
                                </div>
                                <div>
                                    Email : {item.email}
                                </div>
                                <div>
                                    Phone : {item.phone}
                                </div>
                                <div>
                                    Message : {item.message}
                                </div>
                                <div className='flex gap-2 items-center'>
                                    Resume : {item.resume !== "" && <Link href={item.resume} target='_blank'><FaFilePdf className='text-xl'/></Link>}
                                </div>
                                <div className='flex gap-2 justify-end w-full'>
                                    {/* <Link href={`/admin/faqs/${sectionId}/edit/${item._id}`}><Button>Edit</Button></Link> */}
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

export default Enquiries