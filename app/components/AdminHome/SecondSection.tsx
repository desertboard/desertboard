"use client"

import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { VideoUploader } from '../ui/video-uploader'
import { ImageUploader } from '../ui/image-uploader'


type FormData = {
    title: string;
    sub_title: string;
    inspiration: string;
    video: string;
    poster:string;
    imageAlt:string;
};


const SecondSection = () => {

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        formState: { errors }
    } = useForm<FormData>();


    const [submitting, setIsSubmitting] = useState(false)
    const [refetch, setRefetch] = useState(false)

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("inspiration", data.inspiration);
        formData.append("video", data.video);
        formData.append("poster", data.poster);
        formData.append("title", data.title);
        formData.append("subTitle", data.sub_title);
        formData.append("imageAlt", data.imageAlt);
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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/admin/home/second`);
                if (response.ok) {

                    const data = await response.json();
                    if (data) {
                        setValue("inspiration", data.home[0].inspiration)
                        setValue("video", data.home[0].video)
                        setValue("title", data.home[0].secondSectionTitle)
                        setValue("sub_title", data.home[0].secondSectionSubTitle)
                        setValue("poster", data.home[0].videoPoster)
                        setValue("imageAlt", data.home[0].videoPosterAlt)

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


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='text-3xl flex justify-between'>
                <h3>Home / SecondSection</h3>
                <Button disabled={submitting}>Save</Button>
            </div>

            <div className='mt-5'>
                <Label htmlFor="title">Title</Label>
                <Input {...register("title", { required: "Title is required" })} />
                {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
            </div>

            <div className='mt-5'>
                <Label htmlFor="title">Subtitle</Label>
                <Input {...register("sub_title", { required: "Sub title is required" })} />
                {errors.sub_title && <span className='text-red-500'>{errors.sub_title.message}</span>}
            </div>


            <div className='mt-5'>
                <Label htmlFor="title">Description</Label>
                <Controller
                    name="inspiration"
                    control={control}
                    render={({ field }) => (
                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                />
            </div>

            <div className='grid grid-cols-2'>
                <div className='mt-5'>
                    <Label htmlFor="title">Video</Label>
                    <VideoUploader value={watch("video")} onChange={(url) => setValue("video", url)} />
                </div>
                <div>
                <div className='mt-5'>
                    <Label htmlFor="title">Poster</Label>
                    <ImageUploader value={watch("poster")} onChange={(url) => setValue("poster", url)} />
                </div>
                <div className='mt-5'>
                    <Label htmlFor="title">Image Alt</Label>
                    <Input {...register("imageAlt")}/>
                </div>
                </div>
            </div>


        </form>

    )
}

export default SecondSection