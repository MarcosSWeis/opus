import React from "react";
import "./App.css";
import "./styles/contacto.css";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginform";
import Nosotros from "./components/nosotros";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import "./styles/contacto.css";
import Home from "./components/Home/Home";
import Departaments from "./components/Departaments";
import Bookings from "./components/reservas/Bookings";
import DetailDepartament from "./components/detail-departament/DetailDepartement";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Link to={"/reservas"} />
        <Link to={"/dashboard"} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<Nosotros />} />
          <Route path="/departments" element={<Departaments />} />
          <Route path="/departments/:id" element={<DetailDepartament />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/reservas" element={<Bookings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
