export const formatLinkForArticle = (title:string) =>{
    return title
        .replace(/®/g, '')
        .replace(/’/g, '')
        .replace(/'/g, '')
        .replace(/\./g, '')
        .replace(/–/g, '-')
        .replace(/[:\s]+/g, '-')  // Replace spaces and colons with "-"
        .replace(/-+/g, '-')
        .toLowerCase(); 
}


export const formatLinkForSectors = (link:string) =>{
    if(!link){
        return ""
    }
    return link
        .replace(/\s+/g, "-").replace(/&/g, "and").replace(/®/g, "").toLowerCase()
}