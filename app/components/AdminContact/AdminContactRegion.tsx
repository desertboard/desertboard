"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Label } from '@radix-ui/react-label'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'


type FormData = {
    area: string;
    phone: string;
    email: string;
    address: string;
};


const AdminContactRegion = () => {

    const { regionName } = useParams()
    const [refetch,setRefetch] = useState(false)

    const {
        register,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<FormData>();

    const [contacts, setContacts] = useState<{area:string,phone:string,email:string,address:string,_id:string}[]>([])
    // const [regions,setRegions] = useState([])

    const handleSaveArea = async () => {

        const formData = new FormData();
        formData.append("regionName", regionName?.toString().replace(/-/g, " ") || "");
        formData.append("area", getValues("area"))
        formData.append("phone", getValues("phone"))
        formData.append("email", getValues("email"))
        formData.append("address", getValues("address"))
        try {
            const url = `/api/admin/contact/region`;
            const method = "POST";
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev)=>!prev)
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
                const response = await fetch(`/api/admin/contact?region=${regionName?.toString().replace(/-/g, " ")}`);
                if (response.ok) {

                    const data = await response.json();

                    if (data.contents) {

                        console.log(data.contents)
                        setContacts(data.contents)
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
    }, [refetch])

    const handleSetEditItem = (area:string,phone:string,email:string,address:string) =>{
        setValue("area",area)
        setValue("phone",phone)
        setValue("email",email)
        setValue("address",address)
    }

    const handleEditContent = async(id:string) =>{
        const formData = new FormData();
        formData.append("regionName", regionName?.toString().replace(/-/g, " ") || "");
        formData.append("area", getValues("area"))
        formData.append("phone", getValues("phone"))
        formData.append("email", getValues("email"))
        formData.append("address", getValues("address"))
        try {
            const url = `/api/admin/contact/region?id=${id}`;
            const method = "PATCH";
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev)=>!prev)
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to save content");
            }

        } catch (error) {
            console.error("Error saving content:", error);
            alert("Failed to save content. Please try again.");
        }
    }


    const handleDeleteContent = async(id:string) =>{
        try {
            const url = `/api/admin/contact/region?region=${regionName?.toString().replace(/-/g, " ")}&id=${id}`;
            const method = "DELETE";
            const response = await fetch(url, {
                method: method,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev)=>!prev)
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to save content");
            }

        } catch (error) {
            console.error("Error deleting content:", error);
            alert("Failed to delete content. Please try again.");
        }
    }

    const handleAddContent = () =>{
        setValue("area","")
        setValue("phone","")
        setValue("email","")
        setValue("address","")
    }

    return (

        <form className='flex flex-col gap-5'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>Contact</div>
                <Sheet>
                    <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button" onClick={handleAddContent}>Add Content</SheetTrigger>
                    <SheetContent className="gap-4 flex flex-col">

                        <SheetHeader>
                            <SheetTitle>Add the item</SheetTitle>
                        </SheetHeader>

                        <div className="flex justify-center flex-col gap-3">
                            <div>
                                <Label htmlFor="area">Area</Label>
                                <Input {...register("area", { required: "Area name is required" })} />
                                {errors.area && <span>{errors.area?.message}</span>}
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone</Label>
                                <Input {...register("phone", { required: "Phone is required" })} />
                                {errors.phone && <span>{errors.phone?.message}</span>}
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input {...register("email", { required: "Email is required" })} />
                                {errors.email && <span>{errors.email?.message}</span>}
                            </div>
                            <div>
                                <Label htmlFor="address">Address</Label>
                                <Textarea {...register("address", { required: "Address is required" })} />
                                {errors.address && <span>{errors.address?.message}</span>}
                            </div>
                            <SheetClose className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleSaveArea}>Save</SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="flex flex-col gap-5">

                <div className="grid grid-cols-1">
                    <div className="col-span-1 flex flex-col w-full gap-2 h-screen">
                        {contacts && contacts.length > 0 ? contacts.map((item) => (
                            <div className="border-b w-full p-6 bg-blue-50 flex justify-between" key={item._id}>
                                <div className='flex flex-col gap-2'>
                                    <div>Area: {item.area}</div>
                                    <div>Phone: {item.phone}</div>
                                    <div>Email: {item.email}</div>
                                    <div>Address: {item.address}</div>
                                </div>

                                <div className='flex gap-2'>
                                    <Sheet>
                                        <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white max-h-10" type="button" onClick={()=>handleSetEditItem(item.area,item.phone,item.email,item.address)}>Edit</SheetTrigger>
                                        <SheetContent className="gap-4 flex flex-col">

                                            <SheetHeader>
                                                <SheetTitle>Edit the item</SheetTitle>
                                            </SheetHeader>

                                            <div className="flex justify-center flex-col gap-3">
                                                <div>
                                                    <Label htmlFor="area">Area</Label>
                                                    <Input {...register("area", { required: "Area name is required" })} />
                                                    {errors.area && <span>{errors.area?.message}</span>}
                                                </div>
                                                <div>
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <Input {...register("phone", { required: "Phone is required" })} />
                                                    {errors.phone && <span>{errors.phone?.message}</span>}
                                                </div>
                                                <div>
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input {...register("email", { required: "Email is required" })} />
                                                    {errors.email && <span>{errors.email?.message}</span>}
                                                </div>
                                                <div>
                                                    <Label htmlFor="address">Address</Label>
                                                    <Textarea {...register("address", { required: "Address is required" })} />
                                                    {errors.address && <span>{errors.address?.message}</span>}
                                                </div>
                                                <SheetClose className="bg-blue-500 text-white p-2 rounded-lg" onClick={()=>handleEditContent(item._id)}>Save Changes</SheetClose>
                                            </div>
                                        </SheetContent>
                                    </Sheet>


                                    <Button onClick={()=>handleDeleteContent(item._id)}>Delete</Button>
                                </div>
                            </div>
                        ))

                            :

                            <div>No contents available, try adding one</div>

                        }

                    </div>
                </div>
            </div>
        </form>

    )
}

export default AdminContactRegion