import React, {useEffect, useState} from 'react';
import GifGridItem from './GifGridItem';

// import { getGifs } from '../helpers/getGif';

import useFetchGifs from '../hooks/useFetchGifs';

export const GifGrid = ({category})=>{
    /*Traer el Custom Hook*/
    // const state = useFetchGifs();
    // console.log(state);

    // const {data, loading} = useFetchGifs();

    // console.log(data);
    // console.log(loading);

    const {data:images,loading} = useFetchGifs(category);

    // useEffect(()=>{
    //     getGifs(category)
    //         .then((gifs)=>{ setImages(gifs)});
    // },[category]);

    // useEffect(()=>{
    //     getGifs(category)
    //         .then(setImages);
    // },[category]);

    // const [images, setImages] = useState([]);

    // getGifs();

    return(
        <>
            <h3>{ category }</h3>
            {/* {loading ? 'Cargando...' : 'Data Cargada'} */}
            {loading && <p>Cargando...</p> }
            <ol className='mostrarCategorias'>
                {
                    // images.map(element =>(
                    //     <li key={element.id}>{element.title}</li>
                    //     )
                    // )
                    // images.map(({id,title}) =>(
                    //     <li key={ id }>{ title }</li>
                    //     )
                    // )
                    // images.map((img) =>(
                    //     <GifGridItem key={img} img={img} />
                    //     )
                    // )
                    images.map((img) =>(
                        <GifGridItem key={img.id} {...img} />
                        )
                    )
                }
            </ol>
        </>
    );

}