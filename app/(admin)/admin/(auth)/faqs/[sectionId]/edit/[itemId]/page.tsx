"use client"

import ItemForm from '@/app/components/AdminFaqs/ItemForm'
import React from 'react'
import { useParams } from 'next/navigation'

const EditContent = () => {
    const {sectionId} = useParams()
  return (
    <ItemForm sectionId={sectionId} editMode/>
  )
}

export default EditContent