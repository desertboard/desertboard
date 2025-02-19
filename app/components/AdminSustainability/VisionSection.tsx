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
import { Controller, useForm } from 'react-hook-form'
import { ImageUploader } from '../ui/image-uploader'
import { DialogClose } from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Textarea } from '@/components/ui/textarea'
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill/dist/quill.snow.css";

type FormData = {
    title: string;
    image: string;
    region: string;
    description: string;
}

const VisionSection = () => {

    const [visions, setVisions] = useState([])
    const [refetch, setRefetch] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        handleSubmit,
        register,
        setValue,
        watch,
        control,
        getValues,
    } = useForm<FormData>();

    const handleAddRole = () => {
        setValue("title", "")
        setValue("image", "")
        setValue("region", "")
        setValue("description", "")
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
        formData.append("image", data.image);

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
            setRefetch((prev) => !prev)
        }

    };


    const handleEditVison = async (id: string) => {
        try {
            const formData = new FormData()
            formData.append("title", getValues("title"))
            formData.append("description", getValues("description"))
            formData.append("region", getValues("region"))
            formData.append("image", getValues("image"))
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
        } finally {
            setRefetch((prev) => !prev)
        }
    }

    const handleDeleteVision = async (id: string) => {
        try {
            const url = `/api/admin/sustainability/vision?id=${id}`;
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
                throw new Error("Failed to delete vison");
            }

        } catch (error) {
            console.error("Error deleting vision:", error);
            alert("Failed to delete vision. Please try again.");
        }
    }

    const handleSetEditVision = (title: string, description: string, region: string, image: string) => {
        setValue("title", title)
        setValue("description", description)
        setValue("region", region)
        setValue("image", image)
    }

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <div className='text-2xl font-bold'>Sustainability / VisionSection</div>
                <Dialog>
                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={handleAddRole}>Add Item</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add an item</DialogTitle>

                            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>

                                <Label>Image</Label>
                                <ImageUploader value={watch("image")} onChange={(url) => setValue("image", url)} />

                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='col-span-1'>
                                        <Label>Region</Label>
                                        <Input {...register("region")}></Input>
                                    </div>
                                    <div>
                                        <Label>Title</Label>
                                        <Input {...register("title")}></Input>
                                    </div>

                                </div>




                                <Label>Descripiton</Label>
                                <Textarea {...register("description")}></Textarea>

                                <DialogClose disabled={isSubmitting} className='bg-black text-white p-3' type='submit'>Save</DialogClose>
                            </form>


                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            {visions && visions.length > 0 ? visions.map((vision: { _id: string, image: string, description: string, title: string, region: string }) => (
                <div className='h-80 w-full border border-neutral-200 flex p-2  flex-col gap-5 rounded-xl' key={vision._id}>
                    <div className='grid grid-cols-2 h-full w-full rounded-xl  border-neutral-200 gap-5'>

                        <div className='flex items-center justify-center col-span-1 bg-blue-50 relative'>
                            {vision.image !== "" ? <Image src={vision.image} alt='role-image' fill className='absolute object-cover' /> : <span>No image</span>}
                        </div>

                        <div className='flex flex-col h-full px-4 gap-5'>
                            <div className='flex flex-col'>

                                <Input placeholder='Title' value={vision.title} readOnly />
                            </div>
                            <div className='flex flex-col'>

                                <Input placeholder='Description' value={vision.description} readOnly />
                            </div>
                            <div className='flex flex-col'>

                                <Input placeholder='Region' value={vision.region} readOnly />
                            </div>
                            <div className='flex justify-end items-end h-1/3 gap-2'>
                                {/* <Button onClick={()=>handleEditVison(vision._id)}>Save</Button> */}
                                <Dialog>
                                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={() => handleSetEditVision(vision.title, vision.description, vision.region, vision.image)}>Edit</DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Edit the item</DialogTitle>

                                            <form className='flex flex-col gap-2'>

                                                <Label>Image</Label>
                                                <ImageUploader value={watch("image")} onChange={(url) => setValue("image", url)} />


                                                <div className='grid grid-cols-2 gap-2'>
                                                    <div className='col-span-1'>
                                                        <Label>Region</Label>
                                                        <Input {...register("region")}></Input>
                                                    </div>
                                                    <div>
                                                        <Label>Title</Label>
                                                        <Input {...register("title")}></Input>
                                                    </div>

                                                </div>

                                                <Label>Descripiton</Label>
                                                <Controller
                                                    name="description"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1 max-h-36" />
                                                    )}
                                                />

                                                <DialogClose disabled={isSubmitting} className='bg-black text-white p-3 mt-14' onClick={() => handleEditVison(vision._id)}>Save</DialogClose>
                                            </form>


                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                                <Button onClick={() => handleDeleteVision(vision._id)}>Delete</Button>
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