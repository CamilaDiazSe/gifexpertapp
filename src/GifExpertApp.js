/*=============== SALUDO ==============*/

// import React from 'react';

// const GifExpertApp = () => {
//     const saludo = "GifExpertApp";
//     return (
//         <h1>Hola soy {saludo}</h1>
//     );
// };

// export {
//     GifExpertApp
// }

/*================ LISTA DE CATEGORIAS =============*/
// import React from 'react';


// export const GifExpertApp = () =>{
//     const Categories = ['Dios', 'Jesus', 'Virgen Maria', 'Cruz Jesus'];
//     const letrero = "Dios Te Ama y mucho";

//     return(
//         <>
//             <h2>{ letrero }</h2>
//             <hr/>
//             <ol>
//                 {
//                     // Categories.map((category)=>{
//                     //     return <li key={category} >{category}</li>;
//                     // })

//                     Categories.map((category)=><li key={category} >{category}</li>)
//                 }
//             </ol>
//         </>
//     );
// }

/*========= LISTA DE CATEGORIAS CON ESTADO ==========*/

// import React, {useState} from 'react';
// import { AddCategory } from './components/AddCategory';


// export const GifExpertApp = () => {
//     const Categories = ['Dios', 'Jesus','Virgen Maria'];
//     const titulo = "Ha rezarle el rosario a María";

//     const [valorAgregar, setvalorAgregar] = useState(Categories);

//     const handleAdd = () =>{
//         setvalorAgregar([...valorAgregar, 'Rosario']);
//     }

//     return(
//         <>
//             <h2>{titulo}</h2>
//             <AddCategory/>
//             <hr/>
//             <button onClick={handleAdd}>Agregar</button>
//             <ol>
//                 {
//                     valorAgregar.map  ((category)=>{
//                         return <li key={category}>{category}</li>
//                     })
//                 }
//             </ol>
//         </>
//     );

// }


/*===== ENVIAR INFORMACIÓN A ADDCATEGORY =======*/
// import React, { useState } from 'react';
// import { AddCategory } from './components/AddCategory';


// export const GifExpertApp = ()=>{
//     const categories = ['Dios', 'Jesus','Virgen Maria'];
    
//     const [category, setCategory] = useState(categories);

//     // const handleAdd = ()=>{
//     //     setCategory([...category, "rosario"]);
//     // }

//     return(
//         <>
//             <h1>Categorias</h1>
//             <hr/>
//             <AddCategory setCategory={setCategory}/>
//             {/* <button onClick={handleAdd}>Agregar</button> */}
//             <ol>
//                 {
//                     category.map((category)=>{
//                         return <li key={category} >{category}</li>
//                     })
//                 }
//             </ol>
//         </>
//     );
// }

/*======== UTILIZAR EL FETCH ================*/

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ()=>{
    const categories = ['Santisimo', 'Eucaristia','Virgen Maria'];
    
    const [category, setCategory] = useState(categories);

    // const handleAdd = ()=>{
    //     setCategory([...category, "rosario"]);
    // }

    return(
        <>
            <h1>Categorias</h1>
            <hr/>
            <AddCategory setCategory={setCategory}/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    category.map((category)=>(
                            <GifGrid 
                                key={category}
                                category={category} 
                            />
                        )
                    )
                }
            </ol>
        </>
    );
}