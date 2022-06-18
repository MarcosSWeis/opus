import React from 'react'
import { useNavigate } from "react-router-dom";




export default function IsRole({isRoles,children}) {
const navigate = useNavigate();

if(!isRoles){ 
    navigate('/panel/profile');
    window.location.reload();
return alert('No tiene permisos');




}


return(
<>
{children}

</>

)


}