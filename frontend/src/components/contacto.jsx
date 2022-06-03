import React from 'react'
import iconoUbi from "../imgContacto/iconodeubicacion.svg"
import iconoTel from "../imgContacto/iconodetelefono.svg"
import iconoCarta from "../imgContacto/iconodecarta.svg"
import iconoInstagram from "../imgContacto/iconodeinstagram.svg"
import fondo from "../imgContacto/imagendos.png"



export default function contacto() {
  return (
    <>
        <head>
            <meta charSet='UTF-8'></meta>
            <title> Formulario de contacto </title>
            <link rel="stylesheet" href="estilos.css" />
        </head>
     
        
            <div style={{ backgroundImage: `url(${fondo})` }} className="imagen">               
            <div className="tituloContacto">
                <h2 className = "tituloContacto"> Contacta con nosotros </h2>
                <h3 className = "barra"></h3>
            </div>
            <div className="containerContacto">
                <a href="#" className='aContacto'><i><img src={iconoUbi} alt="" /></i>Hipolito Yrigoyen 3972 - Buenos Aires</a>
                <a href="#" className='aContacto'><i><img src={iconoTel} alt="" /></i>1149 58 2179</a>
                <a href="#" className='aContacto'><i><img src={iconoCarta} alt="" /></i>opus@gmail.com</a>
                <a href="#" className='aContacto'><i><img src={iconoInstagram} alt="" /></i>https://www.instagram.com/opus/</a>
            </div>
            <div className="containerContacto2">
            <form action="#" className="form-contact" method="post" tabindex="1">
                 <input type="text" className="form-contact-input" name="nombre" placeholder="Nombre" required />
                    <input type="email" className="form-contact-input mx-2" name="email" placeholder="Email" required />
                    <textarea className="form-contact-textarea" name="conteudo" placeholder="Mensaje" required></textarea>
                    <button type="submit" className="form-contact-button">Enviar</button>
                    </form>
                </div>
                </div>
       
    </>
  )
}