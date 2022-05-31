import React from 'react'
import iconoUbi from "../imgContacto/iconodeubicacion.svg"
import iconoTel from "../imgContacto/iconodetelefono.svg"
import iconoCarta from "../imgContacto/iconodecarta.svg"
import iconoInstagram from "../imgContacto/iconodeinstagram.svg"
import fondo from "../imgContacto/imagendos.png"
import "../App.css" 


export default function contacto() {
  return (
    <>
        <head>
            <meta charSet='UTF-8'></meta>
            <title> Formulario de contacto </title>
            <link rel="stylesheet" href="estilos.css" />
        </head>
        <body class="contactos">
        
            <div style={{ backgroundImage: `url(${fondo})` }} class="imagen">               
            <div class="tituloContacto">
                <h2 class = "tituloContacto"> Contacta con nosotros </h2>
                <h3 class = "barra"></h3>
            </div>
            <div class="containerContacto">
                <a href="#" className='aContacto'><i><img src={iconoUbi} alt="" /></i>Hipolito Yrigoyen 3972 - Buenos Aires</a>
                <a href="#" className='aContacto'><i><img src={iconoTel} alt="" /></i>1149 58 2179</a>
                <a href="#" className='aContacto'><i><img src={iconoCarta} alt="" /></i>opus@gmail.com</a>
                <a href="#" className='aContacto'><i><img src={iconoInstagram} alt="" /></i>https://www.instagram.com/opus/</a>
            </div>
            <div class="containerContacto2">
            <form action="#" class="form-contact" method="post" tabindex="1">
                 <input type="text" class="form-contact-input" name="nombre" placeholder="Nombre" required />
                    <input type="email" class="form-contact-input mx-2" name="email" placeholder="Email" required />
                    <textarea class="form-contact-textarea" name="conteudo" placeholder="Mensaje" required></textarea>
                    <button type="submit" class="form-contact-button">Enviar</button>
                    </form>
                </div>
                </div>
        </body>
    </>
  )
}