

export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=8bbqBKgzDIMLe8jgjl66pcFPmUCRRuEY`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    
    const gifs = data.map( element => {
        return {
            id: element.id,
            title: element.title,
            url: element.images?.downsized_medium.url
        }
    })

    return gifs;
    // console.log(gifs);
    // setImages(gifs);
    // data.forEach((element) => {
    //     console.log(element.images);
    // })

} 