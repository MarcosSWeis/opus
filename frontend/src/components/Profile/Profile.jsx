import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


export default function Profile() {
const navigate = useNavigate();



   

const {user: currentUser} = useSelector((state) => state);
if(!currentUser){
    navigate("/login");
    
}


  return (

      <>

  
 
  <p><strong>Id:</strong> {currentUser.id}</p> 
  <p><strong>Nombre</strong> {currentUser.firtsname}</p> 
  <p><strong>Email</strong> {currentUser.email}</p> 
  <p><strong>Dni</strong> {currentUser.dni}</p> 



   


      


    
</>
  )
}
