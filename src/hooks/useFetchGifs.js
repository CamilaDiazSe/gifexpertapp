import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGif';

const  useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    // useEffect(()=>{
    //     getGifs(category)
    //         .then(imgs => {
    //             setTimeout(()=>{
    //                 setState({
    //                     data: imgs,
    //                     loading: false,
    //                 })
    //             },3000);
    //         })
    // },[category]);

    useEffect(()=>{
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false,
                })
            })
    },[category]);

    // setTimeout(()=>{
    //     setState({
    //         data: [1,2,3,4,5,6],
    //         loading: false
    //     });
    // }, 3000);

    return state;
}

export default useFetchGifs;
