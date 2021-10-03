/*====================SIN FORMULARIO =============*/
// import React, {useState} from 'react';

// export const AddCategory = () =>{
//     const titulo = "AddCategory";
//     const [saludo, setSaludo] = useState("Hola hola");

//     const handleInputChange = (e) => {
//         // setSaludo(e.target.value);
//         console.log(e.target.value);
//     }

//     return(
//         // <h2>{titulo}</h2>
//         <input
//             type="text"
//             name="categoria"
//             value={saludo}
//             onChange={handleInputChange} 
//         />
//     );
// }

/*============= CON FORMULARIO ===========*/
// import React, { useState } from 'react';

// export const AddCategory = () =>{
    
//     const [inputValue, setInputValue] = useState("Valor");

//     const handleInputChange = (e) =>{
//         setInputValue(e.target.value);
//     }

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         console.log('submit false');
//     }
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={handleInputChange}
//             />
//         </form>
//     );
// }

/*======= CONEXIÓN CON GIFEXPERTAPP =========*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategory})=>{
    
    const [inputValue, setInputValue] = useState("");
    
    const handleInputValue = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategory(cats => [inputValue, ...cats]);
            setInputValue("");
        }
        
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    );
}

AddCategory.propTypes= {
    setCategory: PropTypes.func.isRequired
}