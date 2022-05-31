import logo from './logo.svg';
import './App.css';
import "./styles/contacto.css" 
import Navbar from './components/navbar';
import LoginForm from './components/loginform';
import  Nosotros from "./components/nosotros"
import Contacto from './components/contacto';

function App() {
  return (
    <div >

      < Navbar/>

        <LoginForm/>  

      <Nosotros/>

      <Contacto/>

    </div>
  );
}

export default App;
