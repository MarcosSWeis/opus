import ver from "../../imagenesUsuarios/icono_ojo.svg";
import editar from "../../imagenesUsuarios/icono_lapiz.svg";
import eliminar from "../../imagenesUsuarios/icono_tacho.svg";
export default function RowsUsers({
  tower,
  departament_id,
  first_name,
  last_name,
  email,
  dni,
}) {
  return (
    <tbody>
      <tr>
        <th scope="row">{tower}</th>
        <td>{departament_id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
        <td>{dni}</td>
        <td>
          <div>
            <button type="button" class="btn btn-danger">
              {" "}
              <img src={ver} className="acciones" />
            </button>
            <button type="button" class="btn btn-danger mx-3">
              <img src={editar} className="acciones" />
            </button>
            <button type="button" class="btn btn-danger">
              <img src={eliminar} className="acciones" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
