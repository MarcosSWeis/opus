import React from 'react'
import { CgProfile } from 'react-icons/cg';
import {  Link, Outlet}  from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import { Avatar } from 'antd';
import './Dashboard.css'
import { logout } from '../../redux/actions';
import { useDispatch } from 'react-redux';



export default function BoardAdmin() {
const navigate = useNavigate()
const dispatch = useDispatch()
    const {user: currentUser} = useSelector((state) => state);
    if(!currentUser){
        navigate("/login");
        
    }
    const logOut = () => {
      dispatch(logout())
    
    }

  return (
      

    <>


<div className="row ">
    <div className="col">
   
    <aside>
   <div className='col'>
     <div className='conti'>
     <img className='imaged' src={currentUser.image} alt="" />
     </div>
     {/*   {currentUser.image ? <Avatar src={currentUser.image} /> : <CgProfile />} */}
<div className="contp">
<p className='pd'>{currentUser.email} </p>
</div>
   </div> 
    <hr />
    <div className="col">

    <button className='butond'/* style={{background:'#F83C4A' ,borderRadius:'5px', color:'white' }} */> Dashboard</button>
      </div>

      <p className='pd'><Link to='profile' style={{color:'white'}}>Perfil</Link></p>
      <p className='pd'>Mantenimiento</p>  
      <p className='pd'>Pagos</p>
      <a  href='/' className='pd' onClick={logOut}>Salir</a>
    </aside>

    </div>
    <div className="col align-self-center">

    <Outlet/>
    </div>
    </div>
    
   




 
  </>

  )
}
// "dloade0@cpanel.net","password":"7JRvpa"