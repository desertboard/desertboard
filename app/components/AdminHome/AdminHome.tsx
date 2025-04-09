"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player'
import { VideoUploader } from '../ui/video-uploader';
import { ImageUploader } from '../ui/image-uploader';


type FormData = {
    pageHeading: string;
    pageDescription: string;
    metaTitle: string;
    metaDescription: string;
    inspiration: string;
    second_section_title:string;
    second_section_sub_title:string;
    third_section_title: string;
    sectors_description: string;
    sustainability_title: string;
    video: string;
    sustainability_description: string;
    bannerVideo:string;
    bannerPoster:string;
    bannerImageAlt:string;
};


const AdminHome = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue,
        watch,
    } = useForm<FormData>();

    const [submitting, setIsSubmitting] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const [thirdSectionItems, setThirdSectionItems] = useState([])
    const [sustainabilityItems, setSustainabilityItems] = useState([])
    const [videoUrl, setVideoUrl] = useState(null)
    const [videoPoster, setVideoPoster] = useState(null)

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("pageHeading", data.pageHeading);
        formData.append("pageDescription", data.pageDescription);
        formData.append("metaTitle", data.metaTitle);
        formData.append("metaDescription", data.metaDescription);
        formData.append("bannerVideo", data.bannerVideo);
        formData.append("bannerPoster", data.bannerPoster);
        formData.append("bannerImageAlt", data.bannerImageAlt);
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
                const response = await fetch(`/api/admin/home`);
                if (response.ok) {

                    const data = await response.json();
                    if (data) {
                        setValue("pageHeading", data.home[0].pageHeading)
                        setValue("pageDescription", data.home[0].pageDescription)
                        setValue("metaTitle", data.home[0].metaTitle)
                        setValue("metaDescription", data.home[0].metaDescription)
                        setValue("bannerVideo", data.home[0].bannerVideo)
                        setValue("bannerPoster", data.home[0].bannerPoster)
                        setValue("inspiration", data.home[0].inspiration)
                        setValue("second_section_title", data.home[0].secondSectionTitle)
                        setValue("second_section_sub_title", data.home[0].secondSectionSubTitle)
                        setVideoPoster(data?.home[0]?.videoPoster)
                        setVideoUrl(data?.home[0]?.video)
                        setValue("third_section_title", data.home[0].thirdSection.heading)
                        setThirdSectionItems(data.home[0].thirdSection.contents)
                        setValue("sectors_description", data.home[0].sectorsDescription)
                        setValue("sustainability_title", data.home[0].sustainabilitySection.heading)
                        setValue("sustainability_description", data.home[0].sustainabilitySection.description)
                        setSustainabilityItems(data.home[0].sustainabilitySection.contents)
                        // setItems(data.home[0].sustainabilitySection.contents)
                        setValue("bannerImageAlt",data.home[0].bannerImageAlt)
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
        <div className=''>
            <h1 className='text-3xl font-bold'>HomePage</h1>

            <form className='border p-3 mt-5 flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between'>
                    <h3 className='font-bold'>Intro - Section</h3>
                    <Button type='submit' disabled={submitting}>Save</Button>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='col-span-1'>
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

                    <div className='mt-5'>
                        <Label htmlFor="title">Meta Title</Label>
                        <Input {...register("metaTitle")} />
                    </div>

                    <div className='mt-5'>
                        <Label htmlFor="title">Meta Description</Label>
                        <Input {...register("metaDescription")} />
                    </div>

                    </div>

                    <div className='flex flex-col gap-5'>
                        <div>
                            <Label htmlFor="title" className='font-bold'>Banner Video</Label>
                            <div className='col-span-1'>
                                <VideoUploader value={watch("bannerVideo")} onChange={(url) => setValue("bannerVideo", url)} />
                            </div>
                        </div>
                        
                        <div>
                            <Label htmlFor="title" className='font-bold'>Banner Poster</Label>
                            <div className='col-span-1'>
                                <ImageUploader value={watch("bannerPoster")} onChange={(url) => setValue("bannerPoster", url)} />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="title" className='font-bold'>Banner Image Alt</Label>
                            <div className='col-span-1'>
                                <Input {...register("bannerImageAlt")}/>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>

            </form>


            <div className='border p-3 mt-5 flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <h3 className='font-bold'>Second - Section</h3>
                    <Link href={'/admin/home/second-section'}><Button>Modify Section</Button></Link>
                </div>
                
                <div className=''>
                    <Label htmlFor="title">Title</Label>
                    <Input {...register("second_section_title")} />
                </div>
                
                <div className=''>
                    <Label htmlFor="title">Sub title</Label>
                    <Input {...register("second_section_sub_title")} />
                </div>
                
                <div>
                    <Label htmlFor="title">Description</Label>
                    <Controller
                        name="inspiration"
                        control={control}
                        render={({ field }) => (
                            <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                        )}
                    />
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div className='mt-5 col-span-1'>
                        <Label htmlFor="title">Video</Label>
                        <ReactPlayer url={videoUrl ?? ""} controls />
                    </div>
                    <div className='mt-5 ml-20'>
                        <Label htmlFor="title">Poster</Label>
                        {videoPoster && <Image src={videoPoster} alt="image" width={300} height={500}/>}
                    </div>
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

                <div className='flex flex-col gap-4 mt-3'>
                    <Label htmlFor="title">Contents</Label>
                    {thirdSectionItems && thirdSectionItems.map((item: { title: string; image: string }, index) => (
                        <div className='bg-blue-50 w-full justify-between flex p-4 rounded-lg' key={index}>
                            <div className='h-20 w-20 relative'>
                                {item.image == "" ? <div className='flex justify-center items-center'>No image</div> : <Image src={item.image} alt='image' className='object-cover absolute' fill />}
                            </div>
                            <div>
                                {item.title}
                            </div>
                        </div>
                    ))}

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

                <div className=''>
                    <Label htmlFor="title">Description</Label>
                    <Input {...register("sustainability_description")} />
                </div>

                <div>
                    <Label htmlFor="title">Contents</Label>
                    {sustainabilityItems && sustainabilityItems.map((item: { title: string; image: string }, index) => (
                        <div className='bg-blue-50 w-full justify-between flex p-4' key={index}>
                            <div className='h-20 w-20 relative'>
                                {item.image == "" ? <div className='flex justify-center items-center'>No image</div> : <Image src={item.image} alt='image' className='object-cover absolute' fill />}
                            </div>
                            <div>
                                {item.title}
                            </div>

                        </div>
                    ))}

                </div>


            </div>



        </div>

    )
}

export default AdminHome