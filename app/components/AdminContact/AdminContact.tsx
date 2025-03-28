"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


const AdminContact = () => {


    const [region, setRegion] = useState("")
    const [contacts, setContacts] = useState<{ id: string, regionName: string }[]>([])
    const [refetch, setRefetch] = useState(false)
    // const [regions,setRegions] = useState([])
    const { register, setValue, getValues } = useForm();

    const handleSaveRegion = async () => {

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
                setRefetch((prev) => !prev)
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

                        console.log(data.regions)
                        setContacts(data.regions)
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
        handleFetchMeta()
    }, [refetch])


    const handleEditRegion = async (id: string) => {
        console.log("id", id)
        const formData = new FormData();
        formData.append("regionName", region);
        try {
            const url = `/api/admin/contact?id=${id}`;
            const method = "PATCH";
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev) => !prev)
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to edit region");
            }

        } catch (error) {
            console.error("Error editing region:", error);
            alert("Failed to edit region. Please try again.");
        }
    }

    const handleSetEditItem = (regionName: string) => {
        setRegion(regionName)
    }

    const handleDeleteRegion = async (id: string) => {

        try {
            const url = `/api/admin/contact?id=${id}`;
            const method = "DELETE";
            const response = await fetch(url, {
                method: method,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev) => !prev)
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to remove region");
            }

        } catch (error) {
            console.error("Error removing region:", error);
            alert("Failed to remove region. Please try again.");
        }
    }

    const handleSaveMeta = async () => {
        try {
            const formData = new FormData();
            formData.append("metaTitle", getValues("metaTitle"));
            formData.append("metaDescription", getValues("metaDescription"));
            const response = await fetch("/api/admin/contact/meta", {
                method: "POST",
                body: formData,
            });
            if(response.ok){
                const data = await response.json();
                alert(data.message);
            }else{
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error("Error saving meta:", error);
            alert("Failed to save meta. Please try again.");
        }
    }

    const handleFetchMeta = async () => {
        try {
            const response = await fetch("/api/admin/contact/meta");
            if(response.ok){
                const data = await response.json();
                setValue("metaTitle", data.data[0].metaTitle);
                setValue("metaDescription", data.data[0].metaDescription);
            }else{
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error("Error fetching meta:", error);
        }
    }

    return (
        <div>
            <form className='flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <div className='text-3xl font-bold'>Contact</div>
                </div>
                <div className="flex flex-col gap-5">

                    <div className="flex gap-2 flex-col border-dashed border-2 border-gray-300 p-4 rounded-lg">
                        <div className="flex justify-between">
                            <h3>Meta Section</h3>
                            <Button className="bg-blue-500 text-white w-fit" type="button" onClick={handleSaveMeta}>Save</Button>
                        </div>
                        <div>
                            <Label htmlFor="metaTitle">Meta Title</Label>
                            <Input {...register("metaTitle")} />
                        </div>
                        <div>
                            <Label htmlFor="metaDescription">Meta Description</Label>
                            <Input {...register("metaDescription")} />
                        </div>
                    </div>

                    <div className='flex gap-4 flex-col'>
                        <div className='flex justify-end'>
                    <Sheet>
                        <SheetTrigger className="w-fit border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button">Add Region</SheetTrigger>
                        <SheetContent className="gap-4 flex flex-col">

                            <SheetHeader>
                                <SheetTitle>Add the item</SheetTitle>
                            </SheetHeader>

                            <div className="flex justify-center flex-col gap-3">
                                <Label htmlFor="question">Region Name</Label>
                                <Input value={region} onChange={(e) => setRegion(e.target.value)} />
                                <SheetClose className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleSaveRegion}>Save</SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 flex flex-col w-full gap-2 h-96 border p-2 overflow-y-scroll">
                            {contacts && contacts.map((item) => (
                                <div className="border-b w-full p-6 bg-blue-50 flex justify-between" key={item.id}>
                                    <div>
                                        <div>{item.regionName}</div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Sheet>
                                            <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white min-h-10" type="button" onClick={() => handleSetEditItem(item.regionName)}>Edit</SheetTrigger>
                                            <SheetContent className="gap-4 flex flex-col">

                                                <SheetHeader>
                                                    <SheetTitle>Edit the item</SheetTitle>
                                                </SheetHeader>

                                                <div className="flex justify-center flex-col gap-3">
                                                    <Label htmlFor="question">Region Name</Label>
                                                    <Input value={region} onChange={(e) => setRegion(e.target.value)} />
                                                    <SheetClose className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => handleEditRegion(item.id)}>Save</SheetClose>
                                                </div>

                                            </SheetContent>
                                        </Sheet>

                                        <Button className='bg-blue-500' onClick={() => handleDeleteRegion(item.id)}>Delete</Button>

                                        <Link href={`/admin/contact/${item.regionName.replace(/\s+/g, "-")}`}><Button>Modify contacts</Button></Link>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    </div>
                </div>
            </form>

            <div className='mt-5'>
                <div className='text-3xl font-bold'>
                    Enquiries
                </div>
                <div className='border h-fit p-2 mt-2 flex flex-col gap-1'>
                    <div className="border-b w-full p-6 bg-blue-50 flex justify-between h-10 items-center">
                        <div>
                            <div>Sales</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Link href={`/admin/contact/enquiries/sales`}><Button>View enquiries</Button></Link>
                        </div>
                    </div>
                    <div className="border-b w-full p-6 bg-blue-50 flex justify-between h-10 items-center">
                        <div>
                            <div>Marketing</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Link href={`/admin/contact/enquiries/marketing`}><Button>View enquiries</Button></Link>
                        </div>
                    </div>
                    <div className="border-b w-full p-6 bg-blue-50 flex justify-between h-10 items-center">
                        <div>
                            <div>Careers</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Link href={`/admin/contact/enquiries/careers`}><Button>View enquiries</Button></Link>
                        </div>
                    </div>
                    <div className="border-b w-full p-6 bg-blue-50 flex justify-between h-10 items-center">
                        <div>
                            <div>General</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Link href={`/admin/contact/enquiries/general`}><Button>View enquiries</Button></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default AdminContact