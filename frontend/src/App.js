import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import LoginForm from './components/loginform';
import  Nosotros from "./components/nosotros"

function App() {
  return (
    <div >

      < Navbar/>

      {/* <LoginForm/>  */}

      <Nosotros/>

    </div>
  );
}

export default App;
