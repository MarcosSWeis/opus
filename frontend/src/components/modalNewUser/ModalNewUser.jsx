import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import s from "./modalNewUser.module.css";
import img from "../../imagenesUsuarios/avatarNewUsuario.svg";
import { useDispatch, useSelector } from "react-redux";
import { postClient } from "../../redux/actions";
import { getTowers } from "../../redux/actions";
import { Toaster, toast } from "react-hot-toast";

export default function ModalNewUser(props) {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    TowerName: "",
    numDeApartamento: "",
    dni: "",
    cel: "",
    roles:["user"],
  });
  let Towers= useSelector ((state) => state.towers);
  useEffect (() => {
    dispatch (getTowers()) 
  },[])
  const dispatch = useDispatch();

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const handlerSubmit = async (e) => {
    e.preventDefault();

    dispatch(postClient (input)).then ((client) => {
      console.log(client);
      if (client.status===200){ 
        toast.success("Usuario creado correctamente");
        props.onHide();
      }else {
        toast.error(client.data.message);
      }
    });


    
  }


  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={s.h}>
        <Modal.Title id="contained-modal-title-vcenter" className={s.header}>
          Nuevo Usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={s.b}>
        <form onSubmit={handlerSubmit} >
        <div className={s.container}>
          <div className={s.img} >
          <img src={img} alt="" />
          </div> 
          <div className={s.container2}>
            <div className={s.containerLeft}>
              <select onChange={onChange}name="TowerName" id="">
                <option  className={s.opt1} >Seleccione una torre</option>
                {Towers.length?Towers.map((tower) => (
                  <option key={tower.id} value={tower.tower_name}>
                    {tower.tower_name}
                  </option>
                )):null}
              </select>
              {/* <input type="text"
              value={input.TowerName}
              onChange={onChange}
              name="TowerName"
              placeholder="Torre" /> */}
              <input type="text" 
              value={input.first_name}
              onChange={onChange}
              name="first_name"
              placeholder="Nombre" />
              <input type="text"
              value={input.cel} 
              onChange={onChange}
              name="cel"
              placeholder="Teléfono" />
              <input type="text"
              value={input.dni}
              onChange={onChange}
              name="dni"
              placeholder="Dni" />
                {/* <input type="text"
              value={input.roles}
              onChange={onChange}
              name="roles"
              placeholder="Roles" /> */}
            </div>

            <div className={s.containerRight}>
              <input type="text" 
              value={input.numDeApartamento}
              onChange={onChange}
              name="numDeApartamento"
              placeholder="Departamento" />
              <input type="text"
              value={input.last_name}
              onChange={onChange}
              name="last_name"
              placeholder="Apellido" />
              <input type="text" 
              value={input.email}
              onChange={onChange}
              name="email"
              placeholder="Correo" />
              <input type="text" 
              value={input.password}
              onChange={onChange}
              name="password"
              placeholder="Contraseña" />
            </div>
          </div>
          <div className={s.buttons} >
            <button type="submit" >Guardar</button>
            <button>Cerrar</button>
          </div>
        </div>
       </form> 
      </Modal.Body>
      <Toaster position="bottom-center" />
    </Modal>
  );
}
