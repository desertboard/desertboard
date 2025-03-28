"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const AdminGlossary = () => {
    const {register,getValues,setValue} = useForm()

    const handleSaveMeta = async() =>{
        try {
            const formData = new FormData()
            formData.append("metaTitle",getValues("metaTitle"))
            formData.append("metaDescription",getValues("metaDescription"))
            const response = await fetch("/api/admin/glossary/meta",{
                method:"POST",
                body:formData
            })
            if(response.ok){
                const data = await response.json()
                alert(data.message)
            }else{
                const data = await response.json()
                alert(data.message)
            }
        } catch (error) {
            console.log("Error saving meta",error)
        }
    }

    useEffect(()=>{
        const fetchMeta = async() =>{
            const response = await fetch("/api/admin/glossary/meta")
            if(response.ok){
                const data = await response.json()
                setValue("metaTitle",data.data.metaTitle)
                setValue("metaDescription",data.data.metaDescription)
            }
        }
        fetchMeta()
    },[])
    
    const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    return (
        <div className='flex flex-col gap-4'>
            <div className='text-3xl font-bold'>
                Glossary
            </div>
            <div className="flex gap-2 flex-col border-dashed border-2 border-gray-300 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <h3>Meta Section</h3>
                    <Button className="bg-blue-500 text-white w-fit" type="button" onClick={handleSaveMeta}>Save</Button>
                    </div>
                    <div>
                        <Label htmlFor="metaTitle">Meta Title</Label>
                        <Input {...register("metaTitle")} />
                    </div>
                    <div>
                        <Label htmlFor="metaDescription">Meta Description</Label>
                        <Input {...register("metaDescription")} />
                    </div>
                </div>
            <div className='grid grid-cols-1 gap-5'>
                <div className='col-span-1 flex flex-col gap-2 h-screen'>
                    <div className='overflow-scroll h-[85%] flex flex-col gap-2'>
                        {alphabets.map((item,index)=>(
                            <div className="border-b w-full p-6 bg-blue-50 flex justify-between" key={index}>
                                <div>
                                    {item}
                                </div>
                                <div>
                                    <Link href={`/admin/glossary/${item}`}><Button>Add / Edit</Button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AdminGlossary