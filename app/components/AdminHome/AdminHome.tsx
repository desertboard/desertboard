"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Button } from '@/components/ui/button';
import Link from 'next/link';


type FormData = {
    pageHeading: string;
    pageDescription: string;
    inspiration:string;
    third_section_title:string;
    sectors_description:string;
    sustainability_title:string;
    video:string;
    sustainability_description:string;
};


const AdminHome = () => {

        const {
            register,
            handleSubmit,
            formState: { errors },
            control,
        } = useForm<FormData>();

        const [submitting,setIsSubmitting] = useState(false)

        const onSubmit = async (data: FormData) => {
            setIsSubmitting(true);
            const formData = new FormData();
            formData.append("pageHeading", data.pageHeading);
            formData.append("pageDescription", data.pageDescription);
            try {
                  
                        const url = `/api/admin/home`;
                        const method = "PATCH";
                        const response = await fetch(url, {
                        method: method,
                        body: formData,
                    });
    
                    if (response.ok) {
                        const data = await response.json()
                        alert(data.message)
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

        
  return (
    <div className=''>
        <h1 className='text-3xl font-bold'>HomePage</h1>

    <form className='border p-3 mt-5 flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between'>
            <h3 className='font-bold'>Intro - Section</h3>
            <Button type='submit' disabled={submitting}>Save</Button>
        </div>
        <div>
            <Label htmlFor="title">Page heading</Label>
            <Input {...register("pageHeading", { required: "Page heading is required" })} />
            {errors.pageHeading && <span className="text-red-500">{errors.pageHeading.message}</span>}
        </div>

        <div className='mt-5'>
            <Label htmlFor="title">Page description</Label>
            <Input {...register("pageDescription", { required: "Page description is required" })} />
            {errors.pageDescription && <span className="text-red-500">{errors.pageDescription.message}</span>}
        </div>
    </form>


    <div className='border p-3 mt-5 flex flex-col gap-2'>
        <div className='flex justify-between'>
            <h3 className='font-bold'>Second - Section</h3>
            <Link href={'/admin/home/second-section'}><Button>Modify Section</Button></Link>
        </div>
        <div>
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
            <Input {...register("video")} readOnly/>
        </div>
    </div>

    <div className='border p-3 mt-5 flex flex-col gap-2'>
        <div className='flex justify-between'>
            <h3 className='font-bold'>Third - Section</h3>
            <Link href={'/admin/home/third-section'}><Button>Modify Section</Button></Link>
        </div>

        <div className=''>
            <Label htmlFor="title">Title</Label>
            <Input {...register("third_section_title")} />
        </div>

        <div>
            <Label htmlFor="title">Contents</Label>
            <div className='bg-blue-50 w-full justify-between flex p-4'>
                <div>
                    Image
                </div>
                <div>
                    Title
                </div>
            </div>
        </div>

    </div>

    
    <div className='border p-3 mt-5 flex flex-col gap-2'>
        <div className='flex justify-between'>
            <h3 className='font-bold'>Sectors - Section</h3>
            <Link href={'/admin/home/sectors-section'}><Button>Modify Section</Button></Link>
        </div>


        <div className=''>
            <Label htmlFor="title">Description</Label>
            <Controller
                    name="sectors_description"
                    control={control}
                    render={({ field }) => (
                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                />
        </div>


    </div>

    
    <div className='border p-3 mt-5 flex flex-col gap-2'>
        <div className='flex justify-between'>
            <h3 className='font-bold'>Sustainablity - Section</h3>
            <Link href={'/admin/home/sustainability-section'}><Button>Modify Section</Button></Link>
        </div>

        <div className=''>
            <Label htmlFor="title">Title</Label>
            <Input {...register("sustainability_title")} />
        </div>

        <div>
            <Label htmlFor="title">Contents</Label>
            <div className='bg-blue-50 w-full justify-between flex p-4'>
                <div>
                    Image
                </div>
                <div>
                    Title
                </div>
            </div>
        </div>


    </div>
       


    </div>
    
  )
}

export default AdminHome