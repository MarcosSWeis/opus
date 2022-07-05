import React from 'react';
import { Link } from 'react-router-dom';




export default function NoMatch () {

    return(
<>

        
                <div >
                <h2 style={{fontFamily:'WorkSans', fontWeight:600,fontSize:'40px'}}> Upps ..No encuentras lo que buscas </h2>
                <h3> puedes Regresar a la pagina anterior o ir al <Link to='/'>home</Link></h3>
               
                </div>
               
           
          
             
           



</>


    )



}