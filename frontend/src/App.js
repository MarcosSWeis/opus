import React from "react";
import "./App.css";
import "./styles/contacto.css";
import Navbar from "./components/navbar";
import LoginForm from "./components/LoginForm/loginform";
import Nosotros from "./components/nosotros";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/contacto.css";
import Home from "./components/Home/Home";
import Departaments from "./components/Departaments";
import Profile from "./components/Profile/Profile";
import BoardUser from "./components/BoardUser/BoardUser";
import BoardAdmin from "./components/BoardAdmin/BoardAdmin";
import Protected from "./components/Protected/Protected";
import {useSelector} from 'react-redux';


function App() {


const {user:currentUser} = useSelector((state) => state);
  /* const { isLoggedIn } = useSelector((state) => state); */


  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route path="/" element={<>  <Navbar/>  <Home />   <Footer />  </> } />
          <Route path="/login" element={ <>  <Navbar/><LoginForm />  <Footer />  </>} />
          <Route path="/about" element={  <>  <Navbar/>  <Nosotros />  <Footer />  </>   } />
          <Route path="/departments" element={<>  <Navbar/>   <Departaments />  <Footer />  </>} />
          <Route path="/contact" element={  <>  <Navbar/><Contacto />  <Footer />  </>} />
        </Routes>
      
<Routes>

  <Route path="dashboard" element={ <Protected isLoggedIn={currentUser.isLoggedIn}> <BoardAdmin/> </Protected> }>
  <Route path="profile"element={<Profile/>}/>
   <Route path="user" element={<BoardUser />} />
   </Route>
 </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
