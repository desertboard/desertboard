import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdminSustainability = () => {
  return (
    <div className='flex flex-col gap-5'>
        
        <section className='flex flex-col gap-3'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>Sustainability</div>
                <Button>Save changes</Button>
            </div>
        <div>
            <form className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col gap-3'>
                    <div>
                        <Label>Page Heading</Label>
                        <Input/> 
                    </div>

                    <div>
                        <Label>Page description</Label>
                        <Input/> 
                    </div>

                    <div>
                        <Label>Heading</Label>
                        <Input/> 
                    </div>

                    <div>
                        <Label>Description</Label>
                        <Input/> 
                    </div>
                </div>
                
                <div>
                    <Label>Image</Label>
                    <Input></Input>
                </div>
                
            </form>
        </div>
        </section>
        
        <section>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='text-2xl font-bold'>Role Section</div>
                    <Link href={'/admin/sustainability/role'}><Button>Modify Section</Button></Link>
                </div>
                <div className='h-80 w-full border border-neutral-200 flex p-2 overflow-y-scroll flex-col gap-5 rounded-xl'>
                    <div className='grid grid-cols-3 min-h-20 w-full bg-blue-50 rounded-xl border border-neutral-200'>
                        <div className='flex items-center justify-center'>
                            Image
                        </div>
                        <div className='flex items-center justify-center'>
                            Logo
                        </div>
                        <div className='flex items-center justify-center'>
                            Title
                        </div>
                    </div>

                    
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
                        <Input></Input>
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input></Input>
                    </div>
                </div>
                <div className='h-80 w-full border border-neutral-200 flex p-2 overflow-y-scroll flex-col gap-5 rounded-xl'>
                    <div className='grid grid-cols-4 min-h-20 w-full bg-blue-50 rounded-xl border border-neutral-200'>
                        <div className='flex items-center justify-center'>
                            Image
                        </div>
                        <div className='flex items-center justify-center'>
                            Logo
                        </div>
                        <div className='flex items-center justify-center'>
                            Heading
                        </div>
                        <div className='flex items-center justify-center'>
                            Description
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>


        <section>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='text-2xl font-bold'>Partners Section</div>
                    <Button>Modify Section</Button>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <Label>Heading</Label>
                        <Input></Input>
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input></Input>
                    </div>
                </div>
                <div className='h-80 w-full border border-neutral-200 flex p-2 overflow-y-scroll flex-col gap-5 rounded-xl'>
                    <div className='grid grid-cols-2 min-h-20 w-full bg-blue-50 rounded-xl border border-neutral-200'>
                        <div className='flex items-center justify-center'>
                            Title
                        </div>
                        <div className='flex items-center justify-center'>
                            Description
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>

        <section>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='text-2xl font-bold'>Vision</div>
                    <Button>Modify Section</Button>
                </div>

                <div className='h-80 w-full border border-neutral-200 flex p-2 overflow-y-scroll flex-col gap-5 rounded-xl'>
                    <div className='grid grid-cols-2 min-h-20 w-full bg-blue-50 rounded-xl border border-neutral-200'>
                        <div className='flex items-center justify-center'>
                            Image
                        </div>
                        <div className='flex items-center justify-center'>
                            Title
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>

    </div>
  )
}

export default AdminSustainability