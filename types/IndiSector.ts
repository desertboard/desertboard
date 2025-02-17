export type IndiSectorType = {
    data:{
        applications:{
            title:string;
            description:string;
           
            image:string;
            product:string;
            _id:string;
            bannerImage:string;
            gallery:string[];
        }[],
        title:string;
        description:string;
        icon:string;
        image:string;
        bannerImage:string;
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
}[]