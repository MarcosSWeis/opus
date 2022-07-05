import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';




export default function IsRoleProtect({children}) {

    const { user: currentUser } = useSelector((state) => state);
  const  isRoles = currentUser.roles[0] === 'ROLE_ADMIN'

if(!isRoles){ 
    return   <Navigate to='/panel/profile' replace />
   
    





}


return(
<>
{children}

</>

)


}