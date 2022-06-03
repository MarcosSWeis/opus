
import React from 'react';
import "./App.css";
import './styles/contacto.css' 
import Navbar from "./components/navbar";
import LoginForm from "./components/loginform";
import Nosotros from "./components/nosotros";
import Contacto from "./components/contacto";
import Departaments from "./components/departaments/departaments";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/contacto.css";
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<Nosotros />} />
          <Route path="/depataments" element={<Departaments />} />
          <Route path="/contact" element={<Contacto />} />

        </Routes>




   
      
    


    
      </div>
        </BrowserRouter>

    

  );
}

export default App;
