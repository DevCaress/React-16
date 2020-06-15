import React from 'react'
import  {useState, Fragment} from 'react';


const Contador = () => {

    const [numero, setNumero] = useState(0);
    
    const aumentar = () => {
        setNumero( numero + 1) 
    }

    return ( 
        <Fragment>
            <h3>Da un click {numero} </h3> 
            <button onClick={aumentar}> Click :v</button>
        </Fragment>

    );
}
 
export default Contador;