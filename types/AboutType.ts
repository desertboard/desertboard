export type AboutType = {
    about:{
        title:string;
    description:string;
    bannerImage:string;
    bannerImageAlt:string;
    story:string;
    mission:string;
    vision:string;
    history:{
        description:string;
        heading:string;
        timeSpan:string;
        image:string;
        imageAlt:string
    }[]
    partners:{
        description:string;
        partners:{
            image:string;
            name:string;
            description:string;
            imageAlt:string;
        }[]
    }
    }[]
    
}