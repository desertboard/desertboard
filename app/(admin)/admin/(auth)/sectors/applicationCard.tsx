import { Card } from '@/app/components/ui/card'
import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities'

interface ApplicationCardProps {
    title:string;
    id:string
}

const ApplicationCard = ({title,id}:ApplicationCardProps) => {
    const {attributes,listeners,setNodeRef,transform,transition} = useSortable({id})

    const style = {
        transition,
        transform:CSS.Transform.toString(transform)
    }

  return (
    <Card className="p-3" key={id} ref={setNodeRef} {...attributes} {...listeners} style={style}>
                      {title}
    </Card>
  )
}

export default ApplicationCard