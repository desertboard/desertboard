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
import { ImageUploader } from '../ui/image-uploader'
import Image from 'next/image'
import { DialogClose } from '@radix-ui/react-dialog'
import { Textarea } from '@/components/ui/textarea'


type FormData = {
    title: string;
    description: string;
    image: string;
    logo: string;
    imageAlt: string;
    logoAlt: string;
}

const RoleSection = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const [roles, setRoles] = useState([])



    const {
        handleSubmit,
        register,
        setValue,
        watch,
        getValues,
    } = useForm<FormData>();


    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("image", data.image);
        formData.append("logo", data.logo);
        formData.append("imageAlt", data.imageAlt);
        formData.append("logoAlt", data.logoAlt);

        try {
            console.log("POST WORKS")
            const url = `/api/admin/sustainability/roles`;
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
                throw new Error("Failed to add role");
            }

        } catch (error) {
            console.error("Error adding roles:", error);
            alert("Failed to add role. Please try again.");
        } finally {
            setIsSubmitting(false);
            setRefetch((prev) => !prev)

        }

    };

    useEffect(() => {
        const fetchRoleData = async () => {
            try {
                const response = await fetch(`/api/admin/sustainability/roles`);
                if (response.ok) {

                    const data = await response.json();

                    if (data.roles) {

                        console.log(data.roles)
                        setRoles(data.roles)
                    }

                } else {
                    console.error("Failed to fetch roles data");
                }
            } catch (error) {
                console.error("Error fetching roles data:", error);
            }
        }

        fetchRoleData()
    }, [refetch])


    const handleEditRole = async (id: string) => {
        try {

            console.log("PATCH WORKS")
            const formData = new FormData()
            formData.append("title", getValues("title"))
            formData.append("description", getValues("description"))
            formData.append("image", getValues("image"))
            formData.append("logo", getValues("logo"))
            formData.append("imageAlt", getValues("imageAlt"))
            formData.append("logoAlt", getValues("logoAlt"))
            const url = `/api/admin/sustainability/roles?id=${id}`;
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
                throw new Error("Failed to update role");
            }

        } catch (error) {
            console.error("Error editing role:", error);
            alert("Failed to edit role. Please try again.");
        } finally {

            setRefetch((prev) => !prev)
        }
    }


    const handleDeleteRole = async (id: string) => {
        try {
            const url = `/api/admin/sustainability/roles?id=${id}`;
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
                throw new Error("Failed to delete role");
            }

        } catch (error) {
            console.error("Error deleting role:", error);
            alert("Failed to delete role. Please try again.");
        }
    }

    const handleAddRole = () => {
        setValue("title", "")
        setValue("description", "")
        setValue("image", "")
        setValue("logo", "")
        setValue("imageAlt", "")
        setValue("logoAlt", "")
    }

    const handleSetEditRole = (roleTitle: string, roleDescription: string, roleImage: string, roleLogo: string, imageAlt: string, logoAlt: string) => {
        setValue("image", roleImage)
        setValue("title", roleTitle)
        setValue("description", roleDescription)
        setValue("logo", roleLogo)
        setValue("imageAlt", imageAlt)
        setValue("logoAlt", logoAlt)
    }


    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <div className='text-2xl font-bold'>Sustainability / RoleSection</div>
                <Dialog>
                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={handleAddRole}>Add Item</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add an item</DialogTitle>

                            <form className='flex flex-col gap-2 h-[600px] overflow-y-auto' onSubmit={handleSubmit(onSubmit)}>

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

                                <DialogClose disabled={isSubmitting} className='bg-black text-white p-3' type='submit'>Save</DialogClose>
                            </form>


                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            {roles && roles.length > 0 ? roles.map((role: { _id: string, image: string, logo: string, title: string, description: string, imageAlt: string, logoAlt: string }) => (
                <div className='h-80 w-full border border-neutral-200 flex p-2  flex-col gap-5 rounded-xl' key={role._id}>
                    <div className='grid grid-cols-2 h-full w-full rounded-xl  border-neutral-200 gap-5'>

                        <div className='flex flex-col h-full w-full'>
                            <div className='flex items-center justify-center col-span-1 bg-blue-500 h-3/4 w-full relative'>
                                {role.image !== "" ? <Image src={role.image} alt='role-image' fill className='absolute object-cover' /> : <span>No image</span>}
                            </div>

                            <div>
                                <Label>Image Alt</Label>
                                <Input value={role.imageAlt} readOnly />
                            </div>

                        </div>


                        <div className='flex flex-col h-full px-4 gap-5'>
                            <div className='flex flex-col'>

                                <Input placeholder='Title' value={role.title} readOnly />
                            </div>
                            <div className='flex items-center justify-between h-3/4'>
                                <div>
                                    {role.logo !== "" ? <Image src={role.logo} alt='role-image' width={100} height={100} /> : <span>No logo</span>}
                                </div>
                                <div>
                                    <Label>Logo Alt</Label>
                                    <Input value={role.logoAlt} readOnly />
                                </div>
                                <div>
                                    <Textarea value={role.description} readOnly></Textarea>

                                </div>
                            </div>
                            <div className='flex justify-end items-end h-1/3 gap-2'>
                                {/* <Button onClick={()=>handleEditRole(role._id)}>Save</Button> */}
                                <Dialog>
                                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={() => handleSetEditRole(role.title, role.description, role.image, role.logo, role.imageAlt, role.logoAlt)}>Edit</DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Edit the item</DialogTitle>

                                            <form className='flex flex-col gap-2 h-[600px] overflow-y-auto'>

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

                                                <DialogClose className="bg-black text-white p-3" disabled={isSubmitting} onClick={() => handleEditRole(role._id)} type='button'>Save</DialogClose>
                                            </form>


                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                                <Button onClick={() => handleDeleteRole(role._id)} className='h-10'>Delete</Button>
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

export default RoleSection