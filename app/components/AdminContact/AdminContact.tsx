"use client"

import { Input } from '@/components/ui/input'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Label } from '@radix-ui/react-label'
import React, { useEffect, useState } from 'react'


const AdminContact = () => {

    
    const [region,setRegion] = useState("")
    // const [regions,setRegions] = useState([])

    const handleSaveRegion = async() =>{
        
        const formData = new FormData();
        formData.append("regionName", region);
        try {
            const url = `/api/admin/contact`;
            const method = "POST";
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to save region");
            }

        } catch (error) {
            console.error("Error adding region:", error);
            alert("Failed to add region. Please try again.");
        }
    }

        
    useEffect(() => {
            const fetchContactData = async () => {
                try {
                    const response = await fetch(`/api/admin/contact`);
                    if (response.ok) {
    
                        const data = await response.json();
    
                        if (data.regions) {
    
                            console.log(data.faqs)
                            // setRegions(data.regions)
                        }
    
                    } else {
                        console.error("Failed to fetch contact data");
                    }
                } catch (error) {
                    console.error("Error fetching contact data:", error);
                }
            }
    
            fetchContactData()
        }, [])

    return (

        <form className='flex flex-col gap-5'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>Contact</div>
                <Sheet>
                    <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button">Add Region</SheetTrigger>
                    <SheetContent className="gap-4 flex flex-col">

                        <SheetHeader>
                            <SheetTitle>Edit the item</SheetTitle>
                        </SheetHeader>

                        <div className="flex justify-center flex-col gap-3">
                            <Label htmlFor="question">Region Name</Label>
                            <Input value={region} onChange={(e)=>setRegion(e.target.value)}/>
                            <SheetClose className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleSaveRegion}>Save</SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1">
                    <div className="col-span-1 flex flex-col w-full gap-2 h-screen">


                        <div className="border-b w-full p-6 bg-blue-50">
                            Item
                        </div>


                    </div>
                </div>
            </div>
        </form>

    )
}

export default AdminContact