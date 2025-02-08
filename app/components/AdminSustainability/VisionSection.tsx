"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'

type FormData = {
    title: string;
    image: string;
    region:string;
    description:string;
}

const VisionSection = () => {

    const [isOpen,setIsOpen] = useState(false)
    const [visions, setVisions] = useState([])
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [region,setRegion] = useState("")
    const [refetch, setRefetch] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

        const {
            handleSubmit,
            register,
            setValue,
        } = useForm<FormData>();

        const handleAddRole = () =>{
            setValue("title","")
            setValue("image","")
            setValue("region","")
            setValue("description","")
        }

            useEffect(() => {
                const fetchRoleData = async () => {
                    try {
                        const response = await fetch(`/api/admin/sustainability/vision`);
                        if (response.ok) {
        
                            const data = await response.json();
        
                            if (data.vision) {
        
                                console.log(data.vision)
                                setVisions(data.vision)
                            }
        
                        } else {
                            console.error("Failed to fetch vision data");
                        }
                    } catch (error) {
                        console.error("Error fetching vision data:", error);
                    }
                }
        
                fetchRoleData()
            }, [refetch])


            const onSubmit = async (data: FormData) => {
                setIsSubmitting(true);
                const formData = new FormData();
                formData.append("title", data.title);
                formData.append("description", data.description);
                formData.append("region", data.region);
                formData.append("image", "image");
        
                try {
                    const url = `/api/admin/sustainability/vision`;
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
                        throw new Error("Failed to add vision");
                    }
        
                } catch (error) {
                    console.error("Error adding vision:", error);
                    alert("Failed to add vision. Please try again.");
                } finally {
                    setIsSubmitting(false);
                    setRefetch((prev)=>!prev)
                    setIsOpen(false)
                }
        
            };
        

        const handleEditVison = async(id:string) =>{
            try {
                const formData = new FormData()
                formData.append("title",title)
                formData.append("description",description)
                formData.append("region",region)
                const url = `/api/admin/sustainability/vision?id=${id}`;
                const method = "PATCH";
                const response = await fetch(url, {
                    method: method,
                    body: formData,
                });
    
                if (response.ok) {
                    const data = await response.json()
                    alert(data.message)
                    // router.push('/admin/about')
                } else {
                    throw new Error("Failed to update vision");
                }
    
            } catch (error) {
                console.error("Error editing vision:", error);
                alert("Failed to edit vision. Please try again.");
            }finally{
                setRefetch((prev)=>!prev)
            }
        }

        const handleDeleteVision = async(id:string) =>{
            try {
                const url = `/api/admin/sustainability/vision?id=${id}`;
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
                    throw new Error("Failed to delete vison");
                }
    
            } catch (error) {
                console.error("Error deleting vision:", error);
                alert("Failed to delete vision. Please try again.");
            }
        }

  return (
    <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <div className='text-2xl font-bold'>Sustainability / VisionSection</div>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4'onClick={handleAddRole}>Add Item</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add an item</DialogTitle>

                            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>

                                <Label>Image</Label>
                                <Input {...register("image")}></Input>


                                <Label>Region</Label>
                                <Input {...register("region")}></Input>

                                <Label>Title</Label>
                                <Input {...register("title")}></Input>

                                <Label>Descripiton</Label>
                                <Input {...register("description")}></Input>

                                <Button disabled={isSubmitting}>Save</Button>
                            </form>


                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            {visions && visions.length > 0 ? visions.map((vision:{_id:string,image:string,description:string,title:string,region:string}) => (
                <div className='h-80 w-full border border-neutral-200 flex p-2  flex-col gap-5 rounded-xl' key={vision._id}>
                    <div className='grid grid-cols-2 h-full w-full rounded-xl  border-neutral-200 gap-5'>

                        <div className='flex items-center justify-center col-span-1 bg-blue-50'>
                            {vision.image}
                        </div>

                        <div className='flex flex-col h-full px-4 gap-5'>
                            <div className='flex flex-col'>

                                <Input placeholder='Title' defaultValue={vision.title} onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                            <div className='flex flex-col'>

                                <Input placeholder='Description' defaultValue={vision.description} onChange={(e)=>setDescription(e.target.value)}/>
                            </div>
                            <div className='flex flex-col'>

                                <Input placeholder='Description' defaultValue={vision.region} onChange={(e)=>setRegion(e.target.value)}/>
                            </div>
                            <div className='flex justify-end items-end h-1/3 gap-2'>
                                <Button onClick={()=>handleEditVison(vision._id)}>Save</Button>
                                <Button onClick={()=>handleDeleteVision(vision._id)}>Delete</Button>
                            </div>
                        </div>

                    </div>


                </div>
            ))

                :
                <div>No data exists</div>
            }



        </div>
  )
}

export default VisionSection