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
<<<<<<< HEAD
import Usuario from "./components/usuario";
import usuario from  "./styles/usuario.css"
import FormulalioUsuario from "./components/formularioUsuario";
=======
import Profile from "./components/Profile/Profile";
import BoardUser from "./components/BoardUser/BoardUser";
import BoardAdmin from "./components/BoardAdmin/BoardAdmin";
import Protected from "./components/Protected/Protected";
import NoMatch from "./components/NoMatch/NoMatch";
import {useSelector} from 'react-redux';

>>>>>>> e3b32d9f951b0d4b5a0a726aea086b70f9190f0d

function App() {


const {user:currentUser} = useSelector((state) => state);
 


  return (
<<<<<<< HEAD
                    <div>  

                          <FormulalioUsuario/>  

                                <Usuario/>   
  
                      </div>
  
    // <BrowserRouter>
    //   <div>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<LoginForm />} />
    //       <Route path="/about" element={<Nosotros />} />
    //       <Route path="/departments" element={<Departaments />} />
    //       <Route path="/contact" element={<Contacto />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </BrowserRouter>

=======
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route path="/" element={<>  <Navbar/>  <Home />   <Footer />  </> } />
          <Route path="/login" element={ <>  <Navbar/><LoginForm />  <Footer />  </>} />
          <Route path="/about" element={  <>  <Navbar/>  <Nosotros />  <Footer />  </>   } />
          <Route path="/departments" element={<>  <Navbar/>   <Departaments />  <Footer />  </>} />
          <Route path="/contact" element={  <>  <Navbar/><Contacto />  <Footer /> </>} />
          <Route path="*" element={ <>  <Navbar/><NoMatch /> <Footer /> </>} />

          <Route path="dashboard" element={ <Protected isLoggedIn={currentUser.isLoggedIn}> <BoardAdmin/> </Protected> }>
          <Route path="profile"element={<Profile/>}/>
          <Route path="user" element={<BoardUser />} />
          <Route path="*" element={<NoMatch />} />
   
   </Route>
       
        </Routes>
      

      </div>
    </BrowserRouter>
>>>>>>> e3b32d9f951b0d4b5a0a726aea086b70f9190f0d
  );
}

export default App;
