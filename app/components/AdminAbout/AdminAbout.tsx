"use client"

import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUploader } from "../ui/image-uploader";
import Image from "next/image";
// import { useTempImageStore } from "@/app/store/useTempImageStore";



type FormData = {
    title: string;
    description: string;
    story: string;
    mission: string;
    vision:string;
    partnerDescription:string;
    image_url:string;
    partner_image_url:string;
    bannerImage:string;
    metaTitle:string;
    metaDescription:string;
    bannerImageAlt:string;
};


export default function AdminAbout() {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        control,
        watch,
        reset
    } = useForm<FormData>();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timeSpan,setTimeSpan] = useState("")
    const [heading,setHeading] = useState("")
    const [description,setDescription] = useState("")
    const [imageAlt,setImageAlt] = useState("")
   
  

    const [partnerImage,setPartnerImage] = useState("")
    const [partnerName,setPartnerName] = useState("")
    const [partnerDescription,setPartnerDescription] = useState("")
    const [partnerImageAlt,setPartnerImageAlt] = useState("")

    // const { 
    //     tempHistoryImage, setTempHistoryImage, clearTempHistoryImage,
    //     tempPartnerImage, setTempPartnerImage, clearTempPartnerImage
    //   } = useTempImageStore((state)=>state)

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("story", data.story);
        formData.append("bannerImage",data.bannerImage)
        formData.append("bannerImageAlt",data.bannerImageAlt)
        formData.append("mission", data.mission);
        formData.append("vision", data.vision);
        formData.append("history",JSON.stringify(histories))
        formData.append("partners",JSON.stringify(partners))
        formData.append("partnerDescription",data.partnerDescription)
        formData.append("metaTitle",data.metaTitle)
        formData.append("metaDescription",data.metaDescription)


        try {
                if(aboutData){
                    const url = `/api/admin/about?id=${aboutData.id}`;
                    const method = "PATCH";
                const response = await fetch(url, {
                    method: method,
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json()
                    alert(data.message)
                    router.push('/admin/about')
                } else {
                    throw new Error("Failed to save about");
                }
           
            return;
                }
                

        } catch (error) {
            console.error("Error editing about:", error);
            alert("Failed to edit about. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const [histories,setHistories] = useState<{_id?:string;timeSpan:string,heading:string,description:string,image:string,imageAlt:string}[] | []>([])
    const [partners,setPartners] = useState<{image:string,name:string,description:string,imageAlt:string}[] | []>([])

    const handleAddHistory = () =>{
        console.log("Image",getValues("image_url"))
        setHistories((prev)=>{
            const newHistory = {timeSpan,heading,description,image:getValues("image_url"),imageAlt}
            return [...prev,newHistory]
        })
        setTimeSpan("")
        setHeading("")
        setDescription("")
        setImageAlt("")
    }

    const handleAddPartner = () =>{
        setPartners((prev)=>{
            const newPartner = {image:getValues("partner_image_url"),name:partnerName,description:partnerDescription,imageAlt}
            return [...prev,newPartner]
        })
        setTimeSpan("")
        setHeading("")
        setDescription("")
        setPartnerImageAlt("")
    }



    const handleEditHistory = (index:number) =>{
        setTimeSpan(histories[index].timeSpan)
        setHeading(histories[index].heading)
        setDescription(histories[index].description)
        setValue("image_url",histories[index].image)
        setImageAlt(histories[index].imageAlt)
    }

    const handleDeleteHistory = (index:number) =>{
        console.log("Index",index)
        setHistories((prev)=>(
            prev.filter((_,i)=>i!==index)
        ))
    }

    const handleConfirmEdit = (index: number) => {
        setHistories((prev) => {
           
            return prev.map((item, i) => 
                i === index ? { ...item, timeSpan, heading, description,image:getValues("image_url"),imageAlt } : item
            );
        });
    };

    const handleEditPartner = (index:number) =>{
        setPartnerImage(partners[index].image)
        setPartnerName(partners[index].name)
        setPartnerDescription(partners[index].description)
        setValue("partner_image_url",partners[index].image)
        setPartnerImageAlt(partners[index].imageAlt)
        console.log(partnerImage)
    }

    const handleConfirmEditPartner = (index: number) => {
        setPartners((prev) => {
           
            return prev.map((item, i) => 
                i === index ? { ...item, image:getValues("partner_image_url"), name:partnerName, description:partnerDescription,imageAlt:partnerImageAlt } : item
            );
        });
    };

    const handleDeletePartner = (index:number)=>{
        setPartners((prev)=>(
            prev.filter((_,i)=>i!==index)
        ))
    } 


    const [aboutData,setAboutData] = useState<{id:string} | null>(null)

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await fetch(`/api/admin/about`);
                if (response.ok) {

                    const data = await response.json();
                    if (data.about[0]) {

                        console.log(data.about[0])
                        setAboutData(data.about[0])

                        setValue("title", data.about[0].title);
                        setValue("description", data.about[0].description);
                        setValue("bannerImage", data.about[0].bannerImage);
                        setValue("bannerImageAlt", data.about[0].bannerImageAlt);
                        setValue("story", data.about[0].story);
                        setValue("mission", data.about[0].mission)
                        setValue("vision", data.about[0].vision)
                        setValue("partnerDescription", data.about[0].partners.description)
                        setValue("metaTitle", data.about[0].metaTitle)
                        setValue("metaDescription", data.about[0].metaDescription)


                        if (data.about[0].history) {
                            console.log(data.about[0].history)
                            setHistories(data.about[0].history)
                        }
                        if (data.about[0].partners) {
                            setPartners(data.about[0].partners.partners)
                        }

                    }

                } else {
                    console.error("Failed to about data");
                }
            } catch (error) {
                console.error("Error fetching about data:", error);
            }
        }

        fetchAboutData()
    }, [setValue])


    useEffect(() => {
        const imageUrl = getValues("image_url");
        // setTempHistoryImage(imageUrl)
        setValue("image_url", imageUrl);
      }, [watch("image_url"), setValue]);

     



    return (
        <form className="min-h-screen flex  text-black flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">About Page</h1>
                <Button variant="outline" className="bg-blue-50" type="submit" disabled={isSubmitting}>Save Changes</Button>
            </div>

            <div className="grid grid-cols-2 gap-5">
                
                <div>
                <div>
                    <Label htmlFor="bannerImage">Banner Image</Label>
                    <ImageUploader value={watch("bannerImage")} onChange={(url) => setValue("bannerImage", url)} />
                </div>

                <div>
                    <Label htmlFor="bannerImage">Banner Image Alt</Label>
                    <Input {...register("bannerImageAlt")} />
                </div>
                </div>

                <div>
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input {...register("metaTitle")} />

                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Input {...register("metaDescription")} />
                </div>
            </div>


            <div>
                <Label htmlFor="title">Title</Label>
                <Input {...register("title", { required: "Title is required" })} />
                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            </div>

            <div>
                <Label htmlFor="description">Description</Label>
                <Input {...register("description", { required: "Description is required" })} />
                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            </div>

            <div>
                <Label htmlFor="story">Story</Label>
                <Controller
                    name="story"
                    control={control}
                    rules={{ required: "Story is required" }}
                    render={({ field }) => (
                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                />
                {errors.story && <span className="text-red-500">{errors.story.message}</span>}
            </div>

            <div>
                <Label htmlFor="story">History</Label>
                <Table className="mt-5">
                    <TableHeader className="bg-blue-50">
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead className="w-[100px]">Time Span</TableHead>
                            <TableHead className=" max-w-14">Heading</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="">
                                <Sheet>
                                    <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button" onClick={()=>{setHeading("");setTimeSpan("");setDescription("");reset()}}>Add</SheetTrigger>
                                    <SheetContent>
                                        
                                        <SheetHeader>
                                            <SheetTitle>Add a history</SheetTitle>
                                        </SheetHeader>
                                            
                                            <div className="flex justify-center flex-col gap-3">
                                            <Label htmlFor="timeSpan">Time-span</Label>
                                            <Input value={timeSpan} onChange={(e)=>setTimeSpan(e.target.value)}/>
                                            
                                            <Label htmlFor="heading">Heading</Label>
                                            <Input value={heading} onChange={(e)=>setHeading(e.target.value)}/>
                                            
                                            <Label htmlFor="heading">Description</Label>
                                            <Input value={description} onChange={(e)=>setDescription(e.target.value)}/>

                                            <Label className="text-sm font-medium">Image</Label>
                                            <ImageUploader value={watch("image_url")} onChange={(url) => setValue("image_url", url)} />
                                            
                                            <Label htmlFor="heading">Image Alt</Label>
                                            <Input value={imageAlt} onChange={(e)=>setImageAlt(e.target.value)}/>
                                            
                                            <SheetClose className="bg-blue-500 text-white p-3" type="button" onClick={handleAddHistory}>Confirm</SheetClose>
                                            </div>
                                        
                                    </SheetContent>
                                </Sheet>
                                </TableHead>
                                <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {histories.map((history,index)=>(
                            <TableRow key={index}>
                            <TableCell className="font-medium">{history.image && <Image src={history.image} alt="image" width={100} height={100}/>}</TableCell>
                            <TableCell className="font-medium">{history.timeSpan}</TableCell>
                            <TableCell>{history.heading}</TableCell>
                            <TableCell>{history.description}</TableCell>
                            <TableCell>
                                <Sheet>
                                    <SheetTrigger onClick={()=>handleEditHistory(index)} className="border-2 py-1 px-3 bg-yellow-800 rounded-lg text-white">Edit</SheetTrigger>
                                    <Button className="border-2 py-1 px-3 bg-yellow-800 rounded-lg text-white max-h-8" onClick={()=>handleDeleteHistory(index)} type="button">Delete</Button>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Edit the history</SheetTitle>
                                        </SheetHeader>
                                            
                                            <div className="flex justify-center flex-col gap-3">
                                            <Label htmlFor="timeSpan">Time-span</Label>
                                            <Input value={timeSpan} onChange={(e)=>setTimeSpan(e.target.value)}/>
                                            
                                            <Label htmlFor="heading">Heading</Label>
                                            <Input value={heading} onChange={(e)=>setHeading(e.target.value)}/>
                                            
                                            <Label htmlFor="heading">Description</Label>
                                            <Input value={description} onChange={(e)=>setDescription(e.target.value)}/>

                                            <Label htmlFor="heading">Image</Label>
                                            <ImageUploader value={watch("image_url")} onChange={(url) => setValue("image_url", url)} />

                                            <Label htmlFor="heading">Image Alt</Label>
                                            <Input value={imageAlt} onChange={(e)=>setImageAlt(e.target.value)}/>

                                            <SheetClose className="bg-blue-500 text-white p-3" onClick={()=>handleConfirmEdit(index)}>Confirm</SheetClose>
                                            </div>

                                            

                                    </SheetContent>
                                </Sheet>
                            </TableCell>
                            
                        </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>

            </div>

            <div>
                <Label htmlFor="mission">Mission</Label>
                <Controller
                    name="mission"
                    control={control}
                    rules={{ required: "Mission is required" }}
                    render={({ field }) => (
                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                />
                {errors.mission && <span className="text-red-500">{errors.mission.message}</span>}
            </div>

            <div>
                <Label htmlFor="mission">Vision</Label>
                <Controller
                    name="vision"
                    control={control}
                    rules={{ required: "Vision is required" }}
                    render={({ field }) => (
                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                />
                {errors.vision && <span className="text-red-500">{errors.vision.message}</span>}
            </div>

            <div>
                <Label htmlFor="accreditation partners">Accreditation Partners</Label>
                <div>
                <Label htmlFor="mission">Description</Label>
                <Controller
                    name="partnerDescription"
                    control={control}
                    rules={{ required: "Partner description is required" }}
                    render={({ field }) => (
                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                />
                {errors.partnerDescription && <span className="text-red-500">{errors.partnerDescription.message}</span>}
            </div>
                <Table className="mt-5">
                    <TableHeader className="bg-blue-50">
                        
                            <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead className=" max-w-14">Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>
                            <Sheet>
                                    <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button" onClick={()=>{setPartnerName("");setPartnerDescription("");reset();setPartnerImageAlt("");}}>Add</SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Add a partner</SheetTitle>
                                        </SheetHeader>
                                            <div className="flex justify-center flex-col gap-3">
                                            {/* <Label htmlFor="timeSpan">Image</Label>
                                            <Input value={partnerImage} onChange={(e)=>setPartnerImage(e.target.value)}/> */}
                                            
                                            <Label htmlFor="heading">Partner Name</Label>
                                            <Input value={partnerName} onChange={(e)=>setPartnerName(e.target.value)}/>
                                            
                                            <Label htmlFor="heading">Partner Description</Label>
                                            <Input value={partnerDescription} onChange={(e)=>setPartnerDescription(e.target.value)}/>

                                            <Label className="text-sm font-medium">Image</Label>
                                            <ImageUploader value={watch("partner_image_url")} onChange={(url) => setValue("partner_image_url", url)} />

                                            <Label htmlFor="heading">Image Alt</Label>
                                            <Input value={partnerImageAlt} onChange={(e)=>setPartnerImageAlt(e.target.value)}/>
                                            
                                            <SheetClose className="bg-blue-500 text-white p-3" onClick={handleAddPartner}>Confirm</SheetClose>
                                            </div>
                                    </SheetContent>
                                </Sheet>
                            </TableHead>
                        </TableRow>
                        
                        
                    </TableHeader>
                    <TableBody>
                        {partners.map((partner,index)=>(
                            <TableRow key={index}>
                            <TableCell className="font-medium">{partner.image !== "test" && <Image src={partner.image} alt="image" width={100} height={100}/>}</TableCell>
                            <TableCell>{partner.name}</TableCell>
                            <TableCell>{partner.description}</TableCell>
                            <TableCell>
                                <Sheet>
                                    <SheetTrigger className="border-2 py-1 px-3 bg-yellow-800 rounded-lg text-white" onClick={()=>handleEditPartner(index)}>Edit</SheetTrigger>
                                    <Button className="border-2 py-1 px-3 bg-yellow-800 rounded-lg text-white max-h-8" onClick={()=>handleDeletePartner(index)} type="button">Delete</Button>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Edit Partner Data</SheetTitle>
                                        </SheetHeader>
                                            <div className="flex justify-center flex-col gap-3">
                                            <Label htmlFor="timeSpan">Image</Label>
                                            <ImageUploader value={watch("partner_image_url")} onChange={(url) => setValue("partner_image_url", url)} />
                                            
                                            <Label htmlFor="heading">Image Alt</Label>
                                            <Input value={partnerImageAlt} onChange={(e)=>setPartnerImageAlt(e.target.value)}/>
                                            
                                            <Label htmlFor="heading">Name</Label>
                                            <Input value={partnerName} onChange={(e)=>setPartnerName(e.target.value)}/>
                                            
                                            <Label htmlFor="heading">Description</Label>
                                            <Input value={partnerDescription} onChange={(e)=>setPartnerDescription(e.target.value)}/>

                                            <SheetClose className="bg-blue-500 text-white p-3" onClick={()=>handleConfirmEditPartner(index)}>Confirm</SheetClose>
                                            </div>
                                    </SheetContent>
                                </Sheet>
                            </TableCell>
                        </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>
            </div>

        </form>
    );
}
