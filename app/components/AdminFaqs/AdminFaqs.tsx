"use client"

import { Input } from "@/components/ui/input";
import React from "react";
import { Label } from "@/components/ui/label"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import { useState } from "react";


export default function AdminFaqs() {

    const [newsection,setNewSection] = useState("")

    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Faqs</h1>
                    <Sheet>
                        <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button">Add Section</SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Add a history</SheetTitle>
                            </SheetHeader>
                            <div className="flex justify-center flex-col gap-3">
                                <Label htmlFor="timeSpan">Section Name</Label>
                                <Input value={newsection} onChange={(e) => setNewSection(e.target.value)} />

                                <SheetClose className="bg-blue-500 text-white p-3">Confirm</SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="grid grid-cols-3">
                    <div className="col-span-1 flex flex-col w-full gap-2 border-r-2 h-screen px-2">
                        <h3>Sections</h3>
                        <div className="border-b w-full p-6 bg-blue-50">
                            Item 1
                        </div>
                        <div className="border-b w-full p-6 bg-blue-50">
                            Item 2
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col w-full gap-2 h-screen px-2">
                        <h3>Items</h3>
                        <div className="border-b w-full p-6 bg-blue-50">
                            Item 1
                        </div>
                        <div className="border-b w-full p-6 bg-blue-50">
                            Item 2
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
