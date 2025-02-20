"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FileUploader } from '../../ui/file-uploader';
import ReCAPTCHA from 'react-google-recaptcha';


type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    resume: string;
}

const FormComponent = ({ department }: {
    department: string;
}) => {

    const recaptcha = useRef<ReCAPTCHA>(null)
    const { register, formState: { errors }, handleSubmit, reset, watch, setValue } = useForm<FormData>()
    const [file, setFile] = useState<string>("")
    const [fileName, setFileName] = useState("")
    const [message, setMessage] = useState("")
    const [error,setError] = useState("")


    const onSubmit = async (data: FormData) => {
        try {

            if (recaptcha) {
                const captchaValue = recaptcha?.current?.getValue()
                if (!captchaValue) {
                    setError("Please verify yourself to continue")
                    return;
                } else {
                    const formData = new FormData()
                    formData.append("name", data.name)
                    formData.append("email", data.email)
                    formData.append("phone", data.phone)
                    formData.append("message", data.message)
                    formData.append("resume", file)

                    if(department=="careers" && file == ""){
                        setError("Please add your resume")
                        return;
                    }

                    const url = `/api/admin/contact/enquiries?department=${department}`;
                    const method = "POST";
                    const response = await fetch(url, {
                        method: method,
                        body: formData,
                    });

                    if (response.ok) {
                        const data = await response.json()
                        setMessage(data.message)
                        reset()
                        setFile("")
                        setFileName("")
                        setError("")
                    } else {
                        const data = await response.json()
                        setError(data.error)
                        
                        throw new Error("Failed to submit");
                    }

                }

            }

        } catch (error) {
            console.log("Error submiting enquiry form:", error)
        }finally{
            
            recaptcha?.current?.reset()
        }
    }

    const handleFileUpload = (url: string) => {
        setFile(url)
        setFileName(() => {
            const parts = url.split("-")
            return parts[parts.length - 1]
        })
    }


    useEffect(() => {
        setValue("phone", /^\d*$/.test(watch("phone")) ? watch("phone") : "")
    }, [watch("phone")])


    return (
        <form className="mx-auto bg-[#E3DED9] md:px-6 px-0   py-0 md:py-8 text-black" onSubmit={handleSubmit(onSubmit)}>
            {message !== "" && <div className='text-green-500'>{message}</div>}
            {error !== "" && <div className='text-red-500'>{error}</div>}
            <div className="grid grid-cols-2 gap-6">
                <div className="relative float-label-input mb-4 md:mb-8 mt-0">
                    <input type="text" id="name" placeholder=" " {...register("name", { required: "Name is required" })} className="block w-full focus:shadow-outline  border-b border-gray-400 focus:outline-none focus:border-black bg-transparent texthelvetica20 clr15op50 lg:pl-3    py-3 px-3   appearance-none leading-normal   " />
                    <label className="absolute font-helvetica text-font20 text-[#000]/50 top-3 left-0 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Name</label>
                    {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                </div>
                <div className="relative float-label-input mb-4 md:mb-8 mt-0">
                    <input type="email" id="email" placeholder=" " {...register("email", { required: "Email is required" })} className="block w-full focus:shadow-outline  border-b border-gray-400 focus:outline-none focus:border-black bg-transparent texthelvetica20 clr15op50 lg:pl-3    py-3 px-3   appearance-none leading-normal   " />
                    <label className="absolute font-helvetica text-font20 text-[#000]/50 top-3 left-0 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Email</label>
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>
            </div>

            <div className="relative float-label-input mb-4 md:mb-8 mt-0">
                <input type="text" id="phone" placeholder=" "  {...register("phone", { required: "Phone is required" })} className="block w-full focus:shadow-outline   border-b border-gray-400 focus:outline-none focus:border-black bg-transparent texthelvetica20 clr15op50 lg:pl-3    py-3 px-3   appearance-none leading-normal   " />
                <label className="absolute font-helvetica text-font20 text-[#000]/50 top-3 left-0 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Phone</label>
                {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
            </div>

            <div className="relative float-label-input mb-4 md:mb-8 mt-0">
                <textarea {...register("message", {
                    validate: (value) => {
                        const wordCount = value.trim().split(/\s+/).length;
                        return wordCount <= 50 || "Maximum length is 50 words"
                    }
                })}
                    className="border-b w-full border-gray-400 focus:outline-none focus:border-black bg-transparent h-[131px] resize-none"
                ></textarea>
                <label className="absolute font-helvetica text-font20 text-[#000]/50 top-1 left-0 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Message</label>
                {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
            </div>

            {department == "careers" && <div className="mt-6  border-gray-400  bg-[#D8D4CF] rounded-xs text-font20">
                <div className="flex items-center py-3 rounded-md  lg:w-1/2 px-4 lg:gap-14 gap-3">
                    <label className="font-helvetica text-font20 text-[#000]/50">Resume</label>
                    <div>
                        <label className="font-helvetica font-bold text-font20   text-Darkgreen  cursor-pointer">
                            Choose File
                            <FileUploader className='hidden' type="resume"
                                value={file}
                                onChange={(url) => handleFileUpload(url)}
                            />
                        </label>

                        {<span className="ml-4 font-helvetica text-font20 text-[#000]/50">{fileName}</span>}
                    </div>

                </div>

            </div>}

            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} ref={recaptcha} />

            <button
                type="submit"
                className="mt-6    group items-center hover:border-b-2  border-[#FF671F] text-[#FF671F] pb-2   flex gap-1 nuber-next-heavy text-font18"
            >
                Send Message <div className="transition-all duration-300 group-hover:translate-x-1">
                    <svg width="20" height="15" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </div>
            </button>


        </form>
    )
}

export default FormComponent