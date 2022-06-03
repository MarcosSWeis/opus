
import React from 'react';
import './styles/contacto.css' 
import Body from './components/body'
import logo from "./logo.svg";
import "./App.css";
import "./styles/contacto.css";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginform";
import Nosotros from "./components/nosotros";
import Contacto from "./components/contacto";
import Departaments from "./components/departaments/departaments";
import { Route, Routes, BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route path="/about" element={<Nosotros />} />
          <Route path="/depataments" element={<Departaments />} />


      <Carrusel/>
      <Body/>
      <Footer/>
       <LoginForm/> 
      <Nosotros/>
      <Footer/>

      <Contacto/>
     

   

          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </div>

  );
}

export default App;
