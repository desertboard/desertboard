"use client"

import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


type FormData = {
    inspiration: string;
    video: string;
};


const SecondSection = () => {

    const {
        register,
        handleSubmit,
        setValue,
        control,
    } = useForm<FormData>();


    const [submitting, setIsSubmitting] = useState(false)
    const [refetch,setRefetch] = useState(false)

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("inspiration", data.inspiration);
        formData.append("video", data.video);
        try {

            const url = `/api/admin/home/second`;
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
                        setValue("inspiration",data.home[0].inspiration)
                        setValue("video",data.home[0].video)

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
                <h3>Home / SecondSection</h3>
                <Button disabled={submitting}>Save</Button>
            </div>
            <div className='mt-5'>
                <Label htmlFor="title">Inspiration</Label>
                <Controller
                    name="inspiration"
                    control={control}
                    render={({ field }) => (
                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                />
            </div>

            <div className='mt-5'>
                <Label htmlFor="title">Video</Label>
                <Input {...register("video")} />
            </div>

        </form>

    )
}

export default SecondSection