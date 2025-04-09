export type IndiSectorType = {
    data:{
        applications:{
            title:string;
            description:string;
           
            image:string;
            imageAlt:string;
            product:string;
            _id:string;
            bannerImage:string;
            bannerImageAlt:string;
            gallery:string[];
            shortDescription:string;
        }[],
        title:string;
        description:string;
        icon:string;
        image:string;
        imageAlt:string;
        bannerImage:string;
        bannerImageAlt:string;
        image_url:string;
        shortDescription:string;
        _id:string;
    }
            
}

export type Applications = {
        title:string;
        description:string;
        image:string;
        product:string;
        _id:string;
        gallery:string[]
        imageAlt:string;
}[]