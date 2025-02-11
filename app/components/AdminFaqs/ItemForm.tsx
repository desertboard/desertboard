"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from "react-hook-form";
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

type FormData = {
    question: string;
    answer: string;
};


const ItemForm = ({sectionId,editMode}:{
    sectionId:string | string[] | undefined
    editMode?:boolean
}) => {

    const router = useRouter()
    const {itemId} = useParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
    } = useForm<FormData>();

    console.log(sectionId)

    const [isSubmitting,setIsSubmitting] = useState(false)

    const onSubmit = async(data:FormData) =>{
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("question", data.question);
        formData.append("answer", data.answer);

        try {
                
                const url = editMode ? `/api/admin/faqs/section/content?sectionid=${sectionId}&contentid=${itemId}` : `/api/admin/faqs/section/content?id=${sectionId}`;
                const method = editMode ? "PATCH" : "POST";
                const response = await fetch(url, {
                    method: method,
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json()
                    alert(data.message)
                    router.push(`/admin/faqs/${sectionId}`)
                } else {
                    throw new Error("Failed to save about");
                }
           
            return;
                

        } catch (error) {
            console.error("Error editing about:", error);
            alert("Failed to edit about. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }


useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/admin/faqs/section/content?sectionid=${sectionId}&contentid=${itemId}`);
                if (response.ok) {

                    const data = await response.json();
                    if (data.content) {

                        console.log(data.content)
                        setValue("question", data.content.question);
                        setValue("answer", data.content.answer);

                    }

                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        }

        fetchData()
    }, [])


    return (
        <div className='flex flex-col gap-2'>
            <div className='text-3xl font-bold'>Add an item</div>
            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Question</Label>
                    <Input {...register("question",{required:"Question is required"})}/>
                    {errors.question && <span className="text-red-500">{errors.question.message}</span>}
                </div>
                <div>
                    <Label>Answer</Label>
                    <Controller
                        name="answer"
                        control={control}
                        rules={{ required: "Answer is required" }}
                        render={({ field }) => (
                            <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                        )}
                    />
                    {errors.answer && <span className="text-red-500">{errors.answer.message}</span>}
                </div>
                <Button disabled={isSubmitting} className='w-1/3 mx-auto'>Save</Button>
            </form>
        </div>
    )
}

export default ItemForm