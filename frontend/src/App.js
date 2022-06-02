import React from 'react';
import './App.css';
import './styles/contacto.css' 
import Navbar from './components/navbar';
import Carrusel from './components/carrusel';
import Body from './components/body'
import Footer from './components/footer'
import LoginForm from './components/loginform';
import  Nosotros from "./components/nosotros"
import Contacto from './components/contacto';


function App() {
  return (
    <div >

      < Navbar/>

      <Carrusel/>
      <Body/>
      <Footer/>

      
        <LoginForm/>  
        

      <Nosotros/>
      <Footer/>

      <Contacto/>
     

    </div>
  );
}

export default App;
