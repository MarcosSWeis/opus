import React from "react";
import "./App.css";
import "./styles/contacto.css";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginform";
import Nosotros from "./components/nosotros";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/contacto.css";
import Home from "./components/Home/Home";
import Departaments from "./components/Departaments";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<Nosotros />} />
          <Route path="/departments" element={<Departaments />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
