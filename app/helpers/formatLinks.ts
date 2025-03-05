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