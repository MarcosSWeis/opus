import ver from "../../imagenesUsuarios/icono_ojo.svg";
import editar from "../../imagenesUsuarios/icono_lapiz.svg";
import eliminar from "../../imagenesUsuarios/icono_tacho.svg";
import ModalEditUser from "../modalEditUser/ModalEditUser";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
export default function RowsUsers( props) {
  const [modal, setModal] = useState(false);

  const handlerModal = () => {
    console.log (modal);
    setModal(!modal);
  }



  return (
    <tbody>
      <tr>
        <th scope="row">{props.tower}</th>
        <td>{props.departament_id}</td>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
        <td>{props.email}</td>
        <td>{props.dni}</td>
        <td>
          <div>
            <button type="button" class="btn btn-danger">
              {" "}
              <img src={ver} className="acciones" />
            </button>
            <button onClick={handlerModal} type="button" class="btn btn-danger mx-3">
              <img src={editar} className="acciones" />
            </button>
            <ModalEditUser
              show={modal}
              onHide={() => setModal(false)}
              scrollable={true}
              animation={true}
              backdrop={"static"}
              centered={true}
              handlerModal={handlerModal}
              {...props}
            />
            <button type="button" class="btn btn-danger">
              <img src={eliminar} className="acciones" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
