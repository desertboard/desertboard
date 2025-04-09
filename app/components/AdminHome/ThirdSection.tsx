"use client"

import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


import "react-quill/dist/quill.snow.css";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ImageUploader } from '../ui/image-uploader'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'


type FormData = {
    heading: string;
    logo: string;
    image: string;
    title: string;
    description: string;
    imageAlt: string;
    logoAlt: string;
};

const ThirdSection = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        watch,
    } = useForm<FormData>();


    const [submitting, setIsSubmitting] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const [items, setItems] = useState([])

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("heading", data.heading);
        try {

            const url = `/api/admin/home/third`;
            const method = "PATCH";
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev) => !prev)
            } else {
                throw new Error("Failed to save content");
            }

            return;


        } catch (error) {
            console.error("Error saving content at home:", error);
            alert("Failed to edit home. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSetAddItem = () => {
        setValue("title", "")
        setValue("description", "")
        setValue("image", "")
        setValue("logo", "")
        setValue("imageAlt", "")
        setValue("logoAlt", "")
    }


    const handleAddItem = async () => {
        const formData = new FormData();
        formData.append("title", getValues("title"));
        formData.append("description", getValues("description"));
        formData.append("logo", getValues("logo"));
        formData.append("image", getValues("image"));
        formData.append("imageAlt", getValues("imageAlt"));
        formData.append("logoAlt", getValues("logoAlt"));
        try {

            const url = `/api/admin/home/third/content`;
            const method = "POST";
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev) => !prev)
            } else {
                throw new Error("Failed to save content");
            }

            return;


        } catch (error) {
            console.error("Error saving content at home:", error);
            alert("Failed to edit home. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/admin/home/second`);
                if (response.ok) {

                    const data = await response.json();
                    if (data) {
                        setValue("heading", data.home[0].thirdSection.heading)
                        setItems(data.home[0].thirdSection.contents)
                    }
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData()
    }, [setValue, refetch])


    const handleDeleteItem = async (itemId: string) => {
        try {
            const url = `/api/admin/home/third/content?id=${itemId}`;
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
                throw new Error("Failed to delete item");
            }

        } catch (error) {
            console.error("Error deleting item:", error);
            alert("Failed to delete item. Please try again.");
        }
    }

    const handleSetEditItem = (title: string, description: string, image: string, logo: string, imageAlt: string, logoAlt: string) => {
        setValue("image", image)
        setValue("title", title)
        setValue("description", description)
        setValue("logo", logo)
        setValue("imageAlt", imageAlt)
        setValue("logoAlt", logoAlt)
    }


    const handleEditItem = async (id: string) => {
        try {
            const formData = new FormData()
            formData.append("title", getValues("title"))
            formData.append("description", getValues("description"))
            formData.append("image", getValues("image"))
            formData.append("logo", getValues("logo"))
            formData.append("imageAlt", getValues("imageAlt"))
            formData.append("logoAlt", getValues("logoAlt"))
            const url = `/api/admin/home/third/content?id=${id}`;
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
                throw new Error("Failed to update item");
            }

        } catch (error) {
            console.error("Error editing item:", error);
            alert("Failed to edit home. Please try again.");
        } finally {

            setRefetch((prev) => !prev)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='text-3xl flex justify-between'>
                    <h3>Home / ThirdSection</h3>
                    <Button type="submit">Save</Button>
                </div>
                <div className='mt-5'>
                    <Label htmlFor="title">Title</Label>
                    <Input {...register("heading", { required: "Heading is required" })} />
                    {errors.heading && <span className='text-red-500'>{errors.heading.message}</span>}
                </div>
            </form>

            <div className='flex justify-end mt-5'>
                <Dialog>
                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={handleSetAddItem}>Add Item</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add an item</DialogTitle>

                            <div className='flex flex-col gap-2'>

                                <Label>Image</Label>
                                <ImageUploader value={watch("image")} onChange={(url) => setValue("image", url)} />

                                <Label>Image Alt</Label>
                                <Input {...register("imageAlt")}></Input>

                                <Label>Logo</Label>
                                <ImageUploader value={watch("logo")} onChange={(url) => setValue("logo", url)} />

                                <Label>Logo Alt</Label>
                                <Input {...register("logoAlt")}></Input>

                                <Label>Title</Label>
                                <Input {...register("title")}></Input>

                                <Label>Description</Label>
                                <Textarea {...register("description")}></Textarea>

                                <DialogClose disabled={submitting} className='bg-black text-white p-3' type='button' onClick={handleAddItem}>Save</DialogClose>
                            </div>


                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>


            <div className='mt-5 flex flex-col gap-5'>
                {items && items.length > 0 ? items.map((item: { _id: string, image: string, logo: string, title: string, description: string, imageAlt: string, logoAlt: string }) => (
                    <div className='h-96 w-full border border-neutral-200 flex p-2  flex-col gap-5 rounded-xl' key={item._id}>
                        <div className='grid grid-cols-2 h-full w-full rounded-xl  border-neutral-200 gap-5'>

                            <div className='col-span-1'>
                                <div className='flex flex-col gap-5 col-span-1 bg-blue-500 h-3/4 w-full relative'>
                                    <div className='w-full h-full'>
                                        {item.image !== "" ? <Image src={item.image} alt='role-image' fill className='absolute object-cover' /> : <span>No image</span>}
                                    </div>
                                </div>
                                <div>
                                    <Label>Image Alt</Label>
                                    <Input placeholder='Image Alt' value={item.imageAlt} readOnly />
                                </div>
                            </div>

                            <div className='flex flex-col h-full px-4 gap-5'>
                                <div className='flex flex-col'>

                                    <Input placeholder='Title' value={item.title} readOnly />
                                </div>
                                <div className='flex items-center justify-between h-3/4'>
                                    <div>
                                        {item.logo !== "" ? <Image src={item.logo} alt='role-image' width={100} height={100} /> : <span>No logo</span>}
                                    </div>
                                    <div>
                                        <Label>Logo Alt</Label>
                                        <Input placeholder='Logo Alt' value={item.logoAlt} readOnly />
                                    </div>

                                    <div>
                                        <Textarea value={item.description} readOnly></Textarea>

                                    </div>
                                </div>
                                <div className='flex justify-end items-end h-1/3 gap-2'>
                                    {/* <Button onClick={()=>handleEditRole(role._id)}>Save</Button> */}
                                    <Dialog>
                                        <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={() => handleSetEditItem(item.title, item.description, item.image, item.logo, item.imageAlt, item.logoAlt)}>Edit</DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Edit the item</DialogTitle>

                                                <form className='flex flex-col gap-2 overflow-y-scroll h-[600px]'>

                                                    <Label>Image</Label>
                                                    <ImageUploader value={watch("image")} onChange={(url) => setValue("image", url)} />

                                                    <Label>Image Alt</Label>
                                                    <Input {...register("imageAlt")}></Input>

                                                    <Label>Logo</Label>
                                                    <ImageUploader value={watch("logo")} onChange={(url) => setValue("logo", url)} />

                                                    <Label>Logo Alt</Label>
                                                    <Input {...register("logoAlt")}></Input>

                                                    <Label>Title</Label>
                                                    <Input {...register("title")}></Input>

                                                    <Label>Description</Label>
                                                    <Textarea {...register("description")}></Textarea>

                                                    <DialogClose className="bg-black text-white p-3" disabled={submitting} onClick={() => handleEditItem(item._id)} type='button'>Save</DialogClose>
                                                </form>


                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                    <Button onClick={() => handleDeleteItem(item._id)} className='h-10'>Delete</Button>
                                </div>
                            </div>

                        </div>


                    </div>
                ))

                    :
                    <div>No data exists</div>
                }

            </div>

        </div>
    )
}

export default ThirdSection