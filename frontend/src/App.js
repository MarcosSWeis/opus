
import React from 'react';
import './styles/contacto.css' 
import Home from './components/Home/Home'
import logo from "./logo.svg";
import "./App.css";
import "./styles/contacto.css";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginform";
import Nosotros from "./components/nosotros";
import Contacto from "./components/contacto";
import Departaments from "./components/departaments/departaments";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Carrusel from "./components/Home/carrusel";
import Footer from "./components/Home/footer";



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route path="/about" element={<Nosotros />} />
          <Route path="/departments" element={<Departaments />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path= "/" element={<Home />} />
        

      {/* <Carrusel/>
      <Body/>
      <Footer/>
       <LoginForm/> 
      <Nosotros/>
      <Footer/>

      <Contacto/> */}
     

   

          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
