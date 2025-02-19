"use client"

import React, { useEffect, useState } from 'react'

const AdminSubscriptions = () => {

    const [emails,setEmails] = useState([])

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`/api/subscribe`);
                    if (response.ok) {
    
                        const data = await response.json();
                        if(data.emails){
                            setEmails(data.emails)
                        }
    
                    } else {
                        console.error("Failed to fetch emails");
                    }
                } catch (error) {
                    console.error("Error fetching subscription data:", error);
                }
            }
    
            fetchData()
        }, [])


  return (
    <div>
        <div className='text-3xl font-bold'>Subscriptions</div>
        <div className='h-screen overflow-y-scroll p-2 mt-5 bg-blue-50'>
            {emails.map((email:{email:string},index)=>(
                <div className='bg-blue-500 p-2 rounded-lg font-bold' key={index}>
                    <p>{email.email}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AdminSubscriptions