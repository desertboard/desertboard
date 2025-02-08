"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form";

type FormData = {
    title: string;
    description: string;
}

const IndiGlossary = () => {

    const { alphabet } = useParams()

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [contents, setContents] = useState<{ _id:string,title: string, description: string }[] | []>([])
    const [editing,setEditing] = useState(false)
    const [editId,setEditId] = useState<null|string>(null)
    const [isOpen,setIsOpen] = useState(false)
    const [refetch,setRefetch] = useState(false)

    const {
        handleSubmit,
        register,
        setValue,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);

        if (alphabet) {
            formData.append("alphabet", alphabet.toString())
        }

        if(editing && editId){
            formData.append("editId",editId)
        }

        try {
            const url = `/api/admin/glossary`;
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
                throw new Error("Failed to save glossary");
            }

        } catch (error) {
            console.error("Error editing faqs:", error);
            alert("Failed to edit faqs. Please try again.");
        } finally {
            setIsSubmitting(false);
            setEditing(false)
            setEditId(null)
            setIsOpen(false)
            setRefetch((prev)=>!prev)
        }
    };


    useEffect(() => {
        const fetchGlossaryData = async () => {
            try {
                const response = await fetch(`/api/admin/glossary?alphabet=${alphabet}`);
                if (response.ok) {

                    const data = await response.json();

                    if (data.glossary) {

                        console.log(data.glossary.contents)
                        setContents(data.glossary.contents)
                    }

                } else {
                    console.error("Failed to fetch glossary data");
                }
            } catch (error) {
                console.error("Error fetching glossary data:", error);
            }
        }

        fetchGlossaryData()
    }, [refetch])


    const handleEditContent = (title:string,description:string) =>{
        setValue("title",title)
        setValue("description",description)
        
    }

    const setEditContent = (id:string) =>{
        setEditing(true)
        setEditId(id)
        setIsOpen(false)
    }

    const handleDialogueOpen = () =>{
        setValue("title","")
        setValue("description","")
    }
    

    const handleDeleteContent = async(id:string) =>{
        try {
            const formData = new FormData()
            if(alphabet){
                formData.append("alphabet",alphabet?.toString())
            }
            const url = `/api/admin/glossary?id=${id}`;
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
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>Contents</div>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger className='bg-blue-50 p-2' onClick={handleDialogueOpen}>Add Content</DialogTrigger>
                     <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add content to glossary</DialogTitle>

                            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                                <Label>Title</Label>
                                <Input {...register("title")}></Input>


                                <Label>Description</Label>
                                <Textarea {...register("description")} />
                                
                                
                                <Button>Save Content</Button>
                                
                            </form>


                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>

            {contents.map((item, index) => (
                <Accordion type="single" collapsible key={index}>
                    <AccordionItem value="item-1" className='bg-blue-50 px-3'>
                        <AccordionTrigger className='flex justify-between'>
                            <div>{item.title}</div>
                        </AccordionTrigger>
                        <AccordionContent className='flex flex-col gap-3'>
                            <div>
                                {item.description}
                            </div>
                            <div className='flex gap-2'>
                                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                    <DialogTrigger className='bg-black text-white rounded-lg py-2 px-4' onClick={()=>handleEditContent(item.title,item.description)}>Edit</DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Edit content of glossary</DialogTitle>

                                            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                                                <Label>Title</Label>
                                                <Input {...register("title")}></Input>


                                                <Label>Description</Label>
                                                <Textarea {...register("description")} />

                                                

                                                <Button onClick={()=>setEditContent(item._id)}>Save Content</Button>
                                            </form>


                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                                
                                
                                    <Button onClick={()=>handleDeleteContent(item._id)}>Delete</Button>
                                
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}


        </div>
    )
}

export default IndiGlossary