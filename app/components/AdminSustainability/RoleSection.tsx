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
    logo: string;
}

const RoleSection = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const [roles, setRoles] = useState([])
    const [title,setTitle] = useState("")
    const [isOpen,setIsOpen] = useState(false)

    const {
        handleSubmit,
        register,
        setValue,
    } = useForm<FormData>();


    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("image", "image");
        formData.append("logo", "logo");

        try {
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
            setRefetch((prev)=>!prev)
            setIsOpen(false)
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


    const handleEditRole = async(id:string) =>{
        try {
            const formData = new FormData()
            formData.append("title",title)
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
        }finally{
            setTitle("")
            setRefetch((prev)=>!prev)
        }
    }

    
    const handleDeleteRole = async(id:string) =>{
        try {
            const url = `/api/admin/sustainability/roles?id=${id}`;
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
                throw new Error("Failed to delete role");
            }

        } catch (error) {
            console.error("Error deleting role:", error);
            alert("Failed to delete role. Please try again.");
        }
    }

    const handleAddRole = () =>{
        setValue("title","")
        setValue("image","")
        setValue("logo","")
    }


    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between'>
                <div className='text-2xl font-bold'>Sustainability / RoleSection</div>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4'onClick={handleAddRole}>Add Item</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add an item</DialogTitle>

                            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>

                                <Label>Image</Label>
                                <Input {...register("image")}></Input>


                                <Label>Logo</Label>
                                <Input {...register("logo")}></Input>

                                <Label>Title</Label>
                                <Input {...register("title")}></Input>

                                <Button>Save</Button>
                            </form>


                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            {roles && roles.length > 0 ? roles.map((role:{_id:string,image:string,logo:string,title:string},key) => (
                <div className='h-80 w-full border border-neutral-200 flex p-2  flex-col gap-5 rounded-xl' key={key}>
                    <div className='grid grid-cols-2 h-full w-full rounded-xl  border-neutral-200 gap-5'>

                        <div className='flex items-center justify-center col-span-1 bg-blue-50'>
                            {role.image}
                        </div>

                        <div className='flex flex-col h-full px-4 gap-5'>
                            <div className='flex flex-col'>

                                <Input placeholder='Title' defaultValue={role.title} onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                            <div className='flex items-center justify-center h-3/4 bg-blue-50'>
                                {role.logo}
                            </div>
                            <div className='flex justify-end items-end h-1/3 gap-2'>
                                <Button onClick={()=>handleEditRole(role._id)}>Save</Button>
                                <Button onClick={()=>handleDeleteRole(role._id)}>Delete</Button>
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