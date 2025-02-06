import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const AdminGlossary = () => {
    const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    return (
        <div className='flex flex-col gap-4'>
            <div className='text-3xl font-bold'>
                Glossary
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