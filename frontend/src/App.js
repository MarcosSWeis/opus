import React from "react";
import "./App.css";
import "./styles/contacto.css";
import Navbar from "./components/navbar";
import LoginForm from "./components/LoginForm/loginform";
import Nosotros from "./components/nosotros";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import "./styles/contacto.css";
import Home from "./components/Home/Home";
import Departaments from "./components/Departaments";
import Usuario from "./components/usuario";
import FormulalioUsuario from "./components/formularioUsuario";
import Profile from "./components/Profile/Profile";
import BoardUser from "./components/BoardUser/BoardUser";
import BoardAdmin from "./components/BoardAdmin/BoardAdmin";
import Protected from "./components/Protected/Protected";
import NoMatch from "./components/NoMatch/NoMatch";
import { useSelector } from 'react-redux';
import Bookings from "./components/reservas/Bookings";
import Mantenimiento from "./components/mantenimiento/Mantenimiento";
import DetailDepartament from "./components/detail-departament/DetailDepartement";
import Dashboard from "./components/dashboard/Dashboard";

function App() {


  const { user: currentUser } = useSelector((state) => state);



  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<>  <Navbar />  <Home />   <Footer />  </>} />
          <Route path="/login" element={<>  <Navbar /><LoginForm />  <Footer />  </>} />
          <Route path="/about" element={<>  <Navbar />  <Nosotros />  <Footer />  </>} />
          <Route path="/departments" element={<>  <Navbar />   <Departaments />  <Footer />  </>} />
          <Route path="/departments/:id" element={<> <Navbar /> <DetailDepartament /> <Footer /> </>} />
          <Route path="/contact" element={<>  <Navbar /><Contacto />  <Footer /> </>} />
          <Route path="/reservas" element={<>  <Navbar /> <Bookings /> <Footer />  </>} />
          <Route path="/mantenimiento" element={<>  <Navbar /> <Mantenimiento /> <Footer />  </>} />
          <Route path="usuario" element={<>  <Navbar /> <Usuario /> <Footer /> </>} />
          <Route path="*" element={<>  <Navbar /><NoMatch /> <Footer /> </>} />
          <Route path="dashboard" element={<Protected isLoggedIn={currentUser.isLoggedIn}> <BoardAdmin /> </Protected>}>
            <Route path="profile" element={<Profile />} />
            <Route path="user" element={<BoardUser />} />
            <Route path="formuser" element={<FormulalioUsuario />} />
            <Route path="*" element={<NoMatch />} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
