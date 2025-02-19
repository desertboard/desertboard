"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Textarea } from '@/components/ui/textarea'
import { DialogClose } from '@radix-ui/react-dialog'

type FormData = {
    title: string;
    image: string;
    logo: string;
    description: string;
    contentheading: string;
    contentdescription: string
}

const PartnersSection = () => {

        const {
            handleSubmit,
            register,
            setValue,
            getValues,
        } = useForm<FormData>();

        const [isSubmitting, setIsSubmitting] = useState(false)
        const [refetch, setRefetch] = useState(false)
        
        const [partners, setPartners] = useState<{ _id: string, title: string, description: string }[]>([])
        const [editing,setEditing] = useState(false)
        const [editId,setEditId] = useState<null|string>(null)


        const onSubmit = async (data: FormData) => {
            setIsSubmitting(true);
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description)
    
            
            if(editing && editId){
                formData.append("editId",editId)
            }

            try {
                const url = `/api/admin/sustainability/partners`;
                const method = editing ? "PATCH" : "POST";
                const response = await fetch(url, {
                    method: method,
                    body: formData,
                });
    
                if (response.ok) {
                    const data = await response.json()
                    alert(data.message)
                    // router.push('/admin/about')
                } else {
                    throw new Error("Failed to add partner");
                }
    
            } catch (error) {
                console.error("Error adding partner:", error);
                alert("Failed to add partner. Please try again.");
            } finally {
                setIsSubmitting(false);
                setRefetch((prev) => !prev)
                
                setEditing(false)
                setEditId(null)
            }
    
        };


        useEffect(() => {
                const fetchPartnersData = async () => {
                    try {
                        const response = await fetch(`/api/admin/sustainability/partners`);
                        if (response.ok) {
        
                            const data = await response.json();
        
                            if (data.partners) {
                                
                                console.log(data.partners)
                                setPartners(data.partners)
                            }
                            if(data.topContent){
                                setValue("contentheading",data.topContent.heading) 
                                setValue("contentdescription",data.topContent.description) 
                            }
        
                        } else {
                            console.error("Failed to fetch partners data");
                        }
                    } catch (error) {
                        console.error("Error fetching partners data:", error);
                    }
                }
        
                fetchPartnersData()

            }, [refetch])

        const handleHeadDescSave = async(heading:string,description:string) =>{
            setIsSubmitting(true);
            const formData = new FormData();
            formData.append("contentheading", heading);
            formData.append("contentdescription", description);
    
            try {
                const url = `/api/admin/sustainability/partners?t=${true}`;
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
                
            }
        }

        const handleAddRole = () => {
            setValue("title", "")
            setValue("description", "")
        }

        const setEditContent = (id:string) =>{
            setEditing(true)
            setEditId(id)
           
        }

        const handleEditContent = (title:string,description:string) =>{
            setValue("title",title)
            setValue("description",description)
            
        }

        const handleDeleteContent = async(id:string) =>{
            try {
                const formData = new FormData()
                
                const url = `/api/admin/sustainability/partners?id=${id}`;
                const method = "DELETE";
                const response = await fetch(url, {
                    method: method,
                    body:formData
                });
    
                if (response.ok) {
                    const data = await response.json()
                    alert(data.message)
                    // router.push('/admin/about')
                } else {
                    throw new Error("Failed to delete glossary");
                }
    
            } catch (error) {
                console.error("Error deleting glossary", error);
                alert("Failed to delete glossary. Please try again.");
            }finally{
                setRefetch((prev)=>!prev)
            }
        }


  return (
    <div className='flex flex-col gap-10'>
            
                <div className='flex justify-between'>
                    <div className='text-2xl font-bold'>Sustainability / Partners Section</div>
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
                <Dialog>
                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={handleAddRole}>Add Item</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add an item</DialogTitle>

                            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>


                                <Label>Title</Label>
                                <Input {...register("title")}></Input>

                                <Label>Description</Label>
                                <Textarea {...register("description")} />

                                <DialogClose disabled={isSubmitting} className='bg-black text-white p-3' type='submit'>Save</DialogClose>
                            </form>


                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            {partners && partners.length > 0 ? partners.map((partner)=> (
                <Accordion type="single" collapsible key={partner._id}>
                <AccordionItem value="item-1" className='bg-blue-50 px-3'>
                    <AccordionTrigger className='flex justify-between'>
                        <div>{partner.title}</div>
                    </AccordionTrigger>
                    <AccordionContent className='flex flex-col gap-3'>
                        <div>
                            {partner.description}
                        </div>
                        <div className='flex gap-2'>
                            <Dialog>
                                <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={()=>handleEditContent(partner.title,partner.description)}>Edit</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Edit content of glossary</DialogTitle>

                                        <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                                            <Label>Title</Label>
                                            <Input {...register("title")}></Input>


                                            <Label>Description</Label>
                                            <Textarea {...register("description")} />

                                            

                                            <DialogClose type="submit" onClick={()=>setEditContent(partner._id)} className='bg-black text-white p-3'>Save Content</DialogClose>
                                        </form>


                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                            
                            
                                <Button onClick={()=>handleDeleteContent(partner._id)}>Delete</Button>
                            
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            ))

                :

                <div className='text-center'>No partners exist</div>
            }




        </div>
    )
}

export default PartnersSection