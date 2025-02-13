"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ImageUploader } from '../ui/image-uploader'
import Image from 'next/image'

type FormData = {
    pageHeading: string;
    pageDescription: string;
    image:string;
    heading:string;
    description:string;
    image_url:string;
}

const AdminSustainability = () => {

    const [refetch,setRefetch] = useState(false)
    const [isSubmitting,setIsSubmitting]= useState(false)
    const [roles,setRoles] = useState([])
    const [goals,setGoals] = useState<{heading:string,description:string,goals:[]} | null>(null)
    const [partners,setPartners] = useState<{heading:string,description:string,partners:[]} | null>(null)
    const [visions,setVisions] = useState<{image:string,title:string,description:string,region:string}[] | []>([])

    
        const {
            handleSubmit,
            register,
            setValue,
            watch,
            getValues,
        } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
            setIsSubmitting(true);
            const formData = new FormData();
            formData.append("pageHeading", data.pageHeading);
            formData.append("pageDescription", data.pageDescription);
            formData.append("image", getValues("image_url"));
            formData.append("heading", data.heading);
            formData.append("description", data.description);
    
            try {
                const url = `/api/admin/sustainability`;
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
                    throw new Error("Failed to update contents");
                }
    
            } catch (error) {
                console.error("Error updating contents:", error);
                alert("Failed to update content. Please try again.");
            } finally {
                setIsSubmitting(false);
                setRefetch((prev)=>!prev)
            }
    
        };
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`/api/admin/sustainability`);
                    if (response.ok) {
    
                        const data = await response.json();
    
                        if (data.sustainability) {
    
                            setValue("pageHeading",data.sustainability.pageHeading)
                            setValue("pageDescription",data.sustainability.pageDescription)
                            setValue("heading",data.sustainability.heading)
                            setValue("description",data.sustainability.description)
                            setValue("image_url",data.sustainability.image)
                            setRoles(data.sustainability.roles)
                            setGoals(data.sustainability.goals)
                            setPartners(data.sustainability.partners)
                            setVisions(data.sustainability.vision)
                        }
    
                    } else {
                        console.error("Failed to fetch data");
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
    
            fetchData()
        }, [refetch])


  return (
    <div className='flex flex-col gap-5'>
        
        <section className='flex flex-col gap-3'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>Sustainability</div>
                <Button disabled={isSubmitting}>Save changes</Button>
            </div>
        <div>
            
                <div className='flex flex-col gap-3'>
                    <div>
                        <Label>Page Heading</Label>
                        <Input {...register("pageHeading")}/> 
                    </div>

                    <div>
                        <Label>Page description</Label>
                        <Input {...register("pageDescription")}/> 
                    </div>

                    <div>
                        <Label>Heading</Label>
                        <Input {...register("heading")}/> 
                    </div>

                    <div>
                        <Label>Description</Label>
                        <Input {...register("description")}/> 
                    </div>
                </div>
                
                <div>
                    <Label>Image</Label>
                    <ImageUploader value={watch("image_url")} onChange={(url) => setValue("image_url", url)} />
                </div>
                
            
        </div>
        </form>
        </section>
        
        <section>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='text-2xl font-bold'>Role Section</div>
                    <Link href={'/admin/sustainability/role'}><Button>Modify Section</Button></Link>
                </div>
                <div className='h-80 w-full border border-neutral-200 flex p-2 overflow-y-scroll flex-col gap-5 rounded-xl'>
                    {roles && roles.map((role:{image:string,logo:string,title:string},index)=>(
                        <div className='grid grid-cols-3 min-h-20 w-full bg-blue-50 rounded-xl border border-neutral-200' key={index}>
                        <div className='flex items-center justify-center relative w-1/2'>
                            {role.image !== "" ? <Image src={role.image} alt='role-image' fill className='absolute object-cover' /> : <span>No image</span>}
                        </div>
                        <div className='flex items-center justify-center relative w-3/4'>
                            {role.logo !== "" ? <Image src={role.logo} alt='role-image' fill className='absolute object-cover' /> : <span>No image</span>}
                        </div>
                        <div className='flex items-center justify-center'>
                            {role.title.slice(0,20)+"..."}
                        </div>
                        </div>
                    ))}
                    

                    
                </div>
            </div>
        </section>

        <section>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='text-2xl font-bold'>Goals Section</div>
                    <Link href={'/admin/sustainability/goals'}><Button>Modify Section</Button></Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <Label>Heading</Label>
                        <Input defaultValue={goals?.heading} readOnly></Input>
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input defaultValue={goals?.description} readOnly></Input>
                    </div>
                </div>
                <div className='h-80 w-full border border-neutral-200 flex p-2 overflow-y-scroll flex-col gap-5 rounded-xl'>
                    {goals && goals.goals.map((goal:{image:string,logo:string,heading:string,description:string},index)=>(
                        <div className='grid grid-cols-4 min-h-20 w-full bg-blue-50 rounded-xl border border-neutral-200' key={index}>
                        
                        <div className='flex items-center justify-center relative w-1/2'>
                            {goal.image !== "" ? <Image src={goal.image} alt='role-image' fill className='absolute object-cover' /> : <span>No image</span>}
                        </div>
                        
                        <div className='flex items-center justify-center relative w-3/4'>
                            {goal.logo !== "" ? <Image src={goal.logo} alt='role-image' fill className='absolute object-cover' /> : <span>No image</span>}
                        </div>
                        <div className='flex items-center justify-center'>
                            {goal.heading.slice(0,20)+"..."}
                        </div>
                        <div className='flex items-center justify-center'>
                            {goal.description.slice(0,20)+"..."}
                        </div>
                    </div>
                    ))}
                    

                    
                </div>
            </div>
        </section>


        <section>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='text-2xl font-bold'>Partners Section</div>
                    <Link href={'/admin/sustainability/partners'}><Button>Modify Section</Button></Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <Label>Heading</Label>
                        <Input defaultValue={partners?.heading} readOnly></Input>
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input defaultValue={partners?.description} readOnly></Input>
                    </div>
                </div>
                <div className='h-80 w-full border border-neutral-200 flex p-2 overflow-y-scroll flex-col gap-5 rounded-xl'>
                    {partners && partners.partners.map((partner:{title:string,description:string},index)=>(
                        <div className='grid grid-cols-2 min-h-20 w-full bg-blue-50 rounded-xl border border-neutral-200' key={index}>
                        <div className='flex items-center justify-center'>
                            {partner.title.slice(0,20)+"..."}
                        </div>
                        <div className='flex items-center justify-center'>
                            {partner.description.slice(0,20)+"..."}
                        </div>
                    </div>
                    ))}
                    

                    
                </div>
            </div>
        </section>

        <section>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='text-2xl font-bold'>Vision</div>
                    <Link href={'/admin/sustainability/vision'}><Button>Modify Section</Button></Link>
                </div>

                <div className='h-80 w-full border border-neutral-200 flex p-2 overflow-y-scroll flex-col gap-5 rounded-xl'>
                    {visions && visions.map((vision,index)=>(
                         <div className='grid grid-cols-4 min-h-20 w-full bg-blue-50 rounded-xl border border-neutral-200' key={index}>
                         <div className='flex items-center justify-center relative w-1/2'>
                            {vision.image !== "" ? <Image src={vision.image} alt='role-image' fill className='absolute object-cover' /> : <span>No image</span>}
                         </div>
                         <div className='flex items-center justify-center'>
                             {vision.title.slice(0,20)+"..."}
                         </div>
                         <div className='flex items-center justify-center'>
                             {vision.description.slice(0,20)+"..."}
                         </div>
                         <div className='flex items-center justify-center'>
                             {vision.region}
                         </div>
                     </div>
                    ))}
                   

                    
                </div>
            </div>
        </section>

    </div>
  )
}

export default AdminSustainability