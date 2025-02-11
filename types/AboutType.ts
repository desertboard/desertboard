export type AboutType = {
    about:{
        title:string;
    description:string;
    story:string;
    mission:string;
    vision:string;
    history:{
        description:string;
        heading:string;
        timeSpan:string;
        image:string;
    }[]
    partners:{
        description:string;
        partners:{
            image:string;
            name:string;
            description:string
        }[]
    }
    }[]
    
}