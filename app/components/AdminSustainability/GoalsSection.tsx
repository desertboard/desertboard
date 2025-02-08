"use client"

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'


type FormData = {
    title: string;
    image: string;
    logo: string;
    description: string;
    contentheading: string;
    contentdescription: string
}


const GoalsSection = () => {

    const {
        handleSubmit,
        register,
        setValue,
        getValues,
    } = useForm<FormData>();

    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const [goals, setGoals] = useState<{ _id: string, image: string, logo: string, heading: string, description: string }[]>([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("image", "image");
        formData.append("logo", "logo");
        formData.append("description", data.description)


        try {
            const url = `/api/admin/sustainability/goals`;
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
                throw new Error("Failed to add goal");
            }

        } catch (error) {
            console.error("Error adding goals:", error);
            alert("Failed to add goals. Please try again.");
        } finally {
            setIsSubmitting(false);
            setRefetch((prev) => !prev)
            setIsOpen(false)
        }

    };


    useEffect(() => {
        const fetchRoleData = async () => {
            try {
                const response = await fetch(`/api/admin/sustainability/goals`);
                if (response.ok) {

                    const data = await response.json();

                    if (data.goals) {
                        
                        console.log(data.goals)
                        setGoals(data.goals)
                    }
                    if(data.topContent){
                        setValue("contentheading",data.topContent.heading) 
                        setValue("contentdescription",data.topContent.description) 
                    }

                } else {
                    console.error("Failed to fetch goals data");
                }
            } catch (error) {
                console.error("Error fetching goals data:", error);
            }
        }

        fetchRoleData()
    }, [refetch])


    const handleEditRole = async (id: string) => {
        try {
            const formData = new FormData()
            formData.append("title", title)
            formData.append("description", description)

            const url = `/api/admin/sustainability/goals?id=${id}`;
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
                throw new Error("Failed to update goal");
            }

        } catch (error) {
            console.error("Error editing goal:", error);
            alert("Failed to edit goal. Please try again.");
        } finally {
            setTitle("")
            setRefetch((prev) => !prev)
        }
    }


    const handleDeleteRole = async (id: string) => {
        try {
            console.log("Before deletion:", goals);
            const url = `/api/admin/sustainability/goals?id=${id}`;
            const method = "DELETE";
            const response = await fetch(url, {
                method: method,
            });

            if (response.ok) {
                const data = await response.json()
                setGoals((prevGoals) => prevGoals.filter((goal) => goal._id !== id));
                alert(data.message)
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to delete goal");
            }

        } catch (error) {
            console.error("Error deleting goal:", error);
            alert("Failed to delete goal. Please try again.");
        }
    }


    const handleAddRole = () => {
        setValue("title", "")
        setValue("image", "")
        setValue("logo", "")
        setValue("description", "")
    }

    const handleHeadDescSave = async(heading:string,description:string) =>{
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("contentheading", heading);
        formData.append("contentdescription", description);

        try {
            const url = `/api/admin/sustainability/goals?t=${true}`;
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
                throw new Error("Failed to edit goal");
            }

        } catch (error) {
            console.error("Error adding goals:", error);
            alert("Failed to add goals. Please try again.");
        } finally {
            setIsSubmitting(false);
            setRefetch((prev) => !prev)
            setIsOpen(false)
        }
    }

    return (
        <div className='flex flex-col gap-10'>
            
                <div className='flex justify-between'>
                    <div className='text-2xl font-bold'>Sustainability / Goals Section</div>
                    <Button onClick={()=>handleHeadDescSave(getValues("contentheading"),getValues("contentdescription"))}>Save</Button>
                </div>


                <div className='flex flex-col gap-2'>
                    <div>
                        <Label>Heading</Label>
                        <Input {...register("contentheading")}></Input>
                    </div>

                    <div>
                        <Label>Description</Label>
                        <Input {...register("contentdescription")}></Input>
                    </div>
                </div>
            

            <div className='flex justify-end'>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={handleAddRole}>Add Item</DialogTrigger>
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

                                <Label>Description</Label>
                                <Textarea {...register("description")} />

                                <Button disabled={isSubmitting}>Save</Button>
                            </form>


                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            {goals && goals.length > 0 ? goals.map((goal: { _id: string, image: string, logo: string, heading: string, description: string }) => (
                <div className='h-80 w-full border border-neutral-200 flex p-2  flex-col gap-5 rounded-xl' key={goal._id}>
                    <div className='grid grid-cols-2 h-full w-full rounded-xl  border-neutral-200 gap-5'>

                        <div className='flex items-center justify-center col-span-1 bg-blue-50'>
                            Image
                        </div>

                        <div className='flex flex-col h-full px-4 gap-5'>
                            <div className='flex flex-col'>

                                <Input placeholder='Title' defaultValue={goal.heading} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className='grid grid-cols-2 h-3/4 gap-2'>
                                <div className='col-span-1 bg-blue-50 h-full w-full flex items-center justify-center'>
                                    Logo
                                </div>
                                <div className='h-full'>
                                    <Textarea className='h-full' defaultValue={goal.description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                            </div>
                            <div className='flex justify-end items-end h-1/3 gap-2'>
                                <Button onClick={() => handleEditRole(goal._id)}>Save</Button>
                                <Button onClick={() => handleDeleteRole(goal._id)}>Delete</Button>
                            </div>
                        </div>

                    </div>


                </div>

            ))

                :

                <div className='text-center'>No goals exist</div>
            }




        </div>
    )
}

export default GoalsSection