"use client"

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { Controller,useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill/dist/quill.snow.css";

type FormData = {
    description: string;
};


const SectorsSection = () => {

        const {
            
            handleSubmit,
            formState: {},
            setValue,
            control,
        } = useForm<FormData>();

        const [submitting, setIsSubmitting] = useState(false)
        const [refetch,setRefetch] = useState(false)


        const onSubmit = async (data: FormData) => {
            setIsSubmitting(true);
            const formData = new FormData();
            formData.append("description", data.description);
            try {
                const url = `/api/admin/home/sectors`;
                const method = "PATCH";
                const response = await fetch(url, {
                    method: method,
                    body: formData,
                });
    
                if (response.ok) {
                    const data = await response.json()
                    alert(data.message)
                    setRefetch((prev)=>!prev)
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

            
        useEffect(() => {
                const fetchData = async () => {
                    try {
                        const response = await fetch(`/api/admin/home/second`);
                        if (response.ok) {
        
                            const data = await response.json();
                            if (data) {
                                setValue("description",data.home[0].sectorsDescription)
        
                            }
                        } else {
                            console.error("Failed to fetch data");
                        }
                    } catch (error) {
                        console.error("Error fetching data:", error);
                    }
                }
        
                fetchData()
            }, [setValue,refetch])



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='text-3xl flex justify-between'>
                <h3>Home / Sectos Section</h3>
                <Button disabled={submitting}>Save</Button>
            </div>
            <div className='mt-5'>
                <Label htmlFor="title">Description</Label>
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                />
            </div>

        </form>
    )
}

export default SectorsSection