"use client"

import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { FaPlusCircle } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
// import 'react-quill-new/dist/quill.snow.css';
// import { Quill } from "react-quill-new";
// import htmlEditButton from "quill-html-edit-button";
// Quill.register("modules/htmlEditButton", htmlEditButton);

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import { useState } from "react";
import { useForm } from "react-hook-form";



// const modules = {
//     htmlEditButton: {
//         msg: "Edit the content in HTML format", //Custom message to display in the editor, default: Edit HTML here, when you click "OK" the quill editor's contents will be replaced
//         okText: "Ok", // Text to display in the OK button, default: Ok,
//         cancelText: "Cancel", // Text to display in the cancel button, default: Cancel
//         buttonHTML: "HTML", // Text to display in the toolbar button, default: <>
//         buttonTitle: "Show HTML source", // Text to display as the tooltip for the toolbar button, default: Show HTML source
//         syntax: false, // Show the HTML with syntax highlighting. Requires highlightjs on window.hljs (similar to Quill itself), default: false
//         prependSelector: "div#myelement", // a string used to select where you want to insert the overlayContainer, default: null (appends to body),
//         editorModules: {} // The default mod
//       },
// }


export default function AdminFaqs() {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [section, setSection] = useState("")
    const [sections, setSections] = useState<string[]>([])
    const [answer, setAnswer] = useState("")
    const [question, setQuestion] = useState("")
    const [items, setItems] = useState<{customId:string,sectionName: string, question: string; answer: string }[]>([]);
    const [selectedSection, setSelectedSection] = useState<string>("")
    const [selectedItems, setSelectedItems] = useState<{customId:string,sectionName: string, question: string; answer: string }[]>([])
    const [sectionName,setSectionName] = useState("")
    const [previousSectionName,setPreviousSectionName] = useState("")
    const [refetch,setRefetch] = useState(false)
    

    const {
        handleSubmit,
    } = useForm();


    const handleAddSection = () => {
        setSections((prev) => (
            [...prev, section]
        ))
        setSection("")
    }

    const handleAddItem = () => {
        setItems((prev) => (
            [...prev, { customId:uuidv4(),sectionName: selectedSection, question, answer }]
        ))
    }

    useEffect(() => {
        const filteredItems = items.filter((item) => item.sectionName == selectedSection)
        setSelectedItems(filteredItems)

    }, [selectedSection, items])

    const onSubmit = async () => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("items", JSON.stringify(items));
        try {
            const url = `/api/admin/faqs`;
            const method = "POST";
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to save faqs");
            }

        } catch (error) {
            console.error("Error editing faqs:", error);
            alert("Failed to edit faqs. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    useEffect(() => {
        const fetchFaqData = async () => {
            try {
                const response = await fetch(`/api/admin/faqs`);
                if (response.ok) {

                    const data = await response.json();

                    if (data.faqs) {

                        console.log(data.faqs)
                        setItems(data.faqs)
                        setSections([...new Set(data.faqs.map((item: { sectionName: string }) => item.sectionName))] as string[]);
                    }

                } else {
                    console.error("Failed to fetch faqs data");
                }
            } catch (error) {
                console.error("Error fetching faqs data:", error);
            }
        }

        fetchFaqData()
    }, [refetch])

    const handleEditItem = (question:string,answer:string) =>{
        setQuestion(question)
        setAnswer(answer)
    }

    const handleConfirmEditItem = (id:string|null) =>{
        setItems((prev) =>
            prev.map((item) =>
                item.customId === id
                    ? { ...item, question, answer }
                    : item
            )
        );
    }

    const handleDeleteItem = (id:string) =>{
        setItems((prev)=>(
            prev.map((item)=>(
                item.customId === id ? 
                {...item,customId:item.customId + "DELETE"} 
                : item
            ))
        ))
    }

    const handleSetEditSection = (item:string) =>{
        setPreviousSectionName(item)
        setSectionName(item)
    }

    const handleEditSection = async() =>{
        const formData = new FormData();
        
        formData.append("sectionName", sectionName);
        formData.append("previousSectionName", previousSectionName);

        try {
            const url = `/api/admin/faqs/section`;
            const method = "PATCH";
            const response = await fetch(url, {
                method: method,
                body: formData,
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev)=>!prev)
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to save faqs");
            }

        } catch (error) {
            console.error("Error editing faqs:", error);
            alert("Failed to edit faqs. Please try again.");
        }
    }


    const handleDeleteSection = async(item:string) =>{
        try {
            const formData = new FormData()
            formData.append("sectionName",item)
            const url = `/api/admin/faqs/section`;
            const method = "DELETE";
            const response = await fetch(url, {
                method: method,
                body:formData
            });

            if (response.ok) {
                const data = await response.json()
                alert(data.message)
                setRefetch((prev)=>!prev)
                // router.push('/admin/about')
            } else {
                throw new Error("Failed to delete faqs");
            }

        } catch (error) {
            console.error("Error deleting faqs:", error);
            alert("Failed to delete faqs. Please try again.");
        }
    }


    return (
        <>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Faqs</h1>
                    <Button variant="outline" className="bg-blue-50" type="submit" disabled={isSubmitting}>Save Changes</Button>
                </div>
                <div className="grid grid-cols-3">
                    <div className="col-span-1 flex flex-col w-full gap-2 border-r-2 h-screen px-2">
                        <div className="flex gap-2 items-center">
                            <h3>Sections</h3>
                            <Sheet>
                                <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button"><FaPlusCircle /></SheetTrigger>
                                <SheetContent className="flex flex-col gap-2">

                                    <SheetHeader>
                                        <SheetTitle>Add a section</SheetTitle>
                                    </SheetHeader>

                                    <div className="flex justify-center flex-col gap-3">
                                        <Label htmlFor="section-name">Section name</Label>
                                        <Input value={section} onChange={(e) => setSection(e.target.value)} />
                                        <SheetClose className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleAddSection}>Confirm</SheetClose>
                                    </div>

                                </SheetContent>
                            </Sheet>

                        </div>
                        {sections.map((item, index) => (
                            <div className="border-b w-full p-6 bg-blue-50 flex justify-between" key={index} onClick={() => setSelectedSection(item)}>
                                <div>{item}</div>
                                <div className="flex items-center gap-2">
                                <Sheet>
                                <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button" onClick={()=>handleSetEditSection(item)}>Edit</SheetTrigger>
                                <SheetContent className="flex flex-col gap-4">

                                    <SheetHeader>
                                        <SheetTitle>Edit Section</SheetTitle>
                                    </SheetHeader>

                                    <div className="flex justify-center flex-col gap-4">
                                        <Label htmlFor="question">Section Name</Label>
                                        <Input value={sectionName} onChange={(e) => setSectionName(e.target.value)} />
                                        <SheetClose className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleEditSection}>Confirm</SheetClose>
                                    </div>

                                </SheetContent>
                            </Sheet>

                            <Button className="max-h-8" type="button" onClick={()=>handleDeleteSection(item)}>Delete</Button>
                                </div>
                                
                            </div>
                        ))}

                    </div>

                    <div className="col-span-2 flex flex-col w-full gap-2 h-screen px-2">
                        <div className="flex gap-2 items-center">
                            <h3>Items</h3>
                            {selectedSection !== "" && <Sheet>
                                <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button"><FaPlusCircle /></SheetTrigger>
                                <SheetContent className="flex flex-col gap-4">

                                    <SheetHeader>
                                        <SheetTitle>Add an item</SheetTitle>
                                    </SheetHeader>

                                    <div className="flex justify-center flex-col gap-4">
                                        <Label htmlFor="question">Question</Label>
                                        <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
                                        <Label htmlFor="answer">Answer</Label>
                                        {/* <Input value={answer} onChange={(e) => setAnswer(e.target.value)} /> */}
                                        {/* <ReactQuill theme="snow" value={answer} onChange={setAnswer} className="mt-1" modules={modules}/> */}
                                        <SheetClose className="mt-20 bg-blue-500 text-white p-2 rounded-lg" onClick={handleAddItem}>Confirm</SheetClose>
                                    </div>

                                </SheetContent>
                            </Sheet>}
                        </div>
                        {selectedItems.map((item, index) => (
                            
                            item.customId.slice(item.customId.length - 6,item.customId.length) == "DELETE" ? null 
                            
                            :


                            <div className="border-b w-full p-6 bg-blue-50 flex justify-between" key={index}>
                                <div>
                                    {item.question}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sheet>
                                        <SheetTrigger className="border-2 py-1 px-3 bg-blue-500 rounded-lg text-white" type="button" onClick={()=>handleEditItem(item.question,item.answer)}>Edit</SheetTrigger>
                                        <SheetContent className="gap-4 flex flex-col">

                                            <SheetHeader>
                                                <SheetTitle>Edit the item</SheetTitle>
                                            </SheetHeader>

                                            <div className="flex justify-center flex-col gap-3">
                                                <Label htmlFor="question">Question</Label>
                                                <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
                                                <Label htmlFor="answer">Answer</Label>
                                                {/* <ReactQuill theme="snow" value={answer} onChange={setAnswer} className="mt-1" modules={modules}/> */}
                                                <SheetClose className="mt-20 bg-blue-500 text-white p-2 rounded-lg" onClick={()=>handleConfirmEditItem(item.customId ?? null)}>Confirm</SheetClose>
                                            </div>

                                        </SheetContent>
                                    </Sheet>
                                    <Button className="max-h-8" onClick={()=>handleDeleteItem(item.customId)} type="button">Delete</Button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </form>


        </>
    )
}
