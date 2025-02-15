export type Downloads = {
    data:{
        title:string;
        types:{
            title:string;
            _id:string;
            files:{
                file:string;
                name:string;
                thumbnail:string;
                _id:string;
            }[]
        }[]
        _id:string;
    }[]
}