"use client"

import ItemForm from '@/app/components/AdminFaqs/ItemForm'
import React from 'react'
import { useParams } from 'next/navigation'

const AddContent = () => {
    const {sectionId} = useParams()
  return (
    <ItemForm sectionId={sectionId}/>
  )
}

export default AddContent