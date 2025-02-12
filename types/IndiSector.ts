export type IndiSectorType = {
    data:{
        applications:{
            title:string;
            description:string;
            image:string;
            product:string;
            _id:string;
        }[],
        title:string;
        description:string;
        icon:string;
        image:string;
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
}[]