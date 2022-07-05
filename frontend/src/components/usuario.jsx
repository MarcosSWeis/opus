import React from "react";
import usuarioIcono from "../imagenesUsuarios/icono_usuarios.svg";
import iconoUsuario from "../imagenesUsuarios/icono_usuario.svg";
import agregar from "../imagenesUsuarios/icono_de_más.svg";
import ajustes from "../imagenesUsuarios/icono_configuración.svg";
import $, { get } from "jquery";
import { Link } from "react-router-dom";
import usuario from "../styles/usuario.css";
import { useState } from "react";
import RowsUsers from "./User/RowsUsers";
import MethodExportsFiles from "./User/MethodExportsFiles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch, getUserByFloor } from "../redux/actions";
import Paginate from "./Paginate/Paginate";
import ModalNewUser from "./modalNewUser/ModalNewUser";

const Usuario = () => {
  const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);

  const [searchByFloor, setSearchByFloor] = useState(null);
  const [search, setSearch] = useState(null);

  const [paginateMaxRowsByFloor, setPaginateMaxRowsByFloor] = useState(false);
  const [paginateMaxRowsSearch, setPaginateMaxRowsSearch] = useState(false);

  let dataUsersByFloor = useSelector((state) => state.usersByFloor);
  let dataSearch = useSelector((state) => state.search);
  console.log(dataSearch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByFloor({ ...searchByFloor, page }));
  }, [searchByFloor, page, search]);
  function handlerSearchByFloor(event) {
    setPage(1);
    setSearchByFloor({
      ...searchByFloor,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, event.target.value);
  }

  function handlerSearchInput(event) {
    setPage(1);
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });

    console.log(event.target.name, event.target.value);
  }
  function handlerSubmitSearch(event) {
    event.preventDefault();
    console.log("ejecuto el submit en el paginado");
    dispatch(getSearch({ ...search, page }));
  }
  let formSearch = $("#formSearch");

  let handlerModal = () => {
    setModal(true);
  };

  return (
    <div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2 mb-2 ">
        <button class="btn  btn-light " type="button">
          <img src={ajustes} />
        </button>
        <button class="btn btn-light" type="button">
          <img src={iconoUsuario} />
        </button>
      </div>

      <div class="d-grid gap-2 d-md-flex justify-md-start mb-3">
        <button class="btn btn-danger" type="button">
          <img src={usuarioIcono} /> USUARIO
        </button>
        <button class="btn btn-danger" type="button" onClick={handlerModal}>
          <img src={agregar} />
          <div>
            <h5>Nuevo</h5>
          </div>{" "}
        </button>
        <ModalNewUser
          show={modal}
          onHide={() => setModal(false)}
          scrollable={true}
          animation={true}
          backdrop={"static"}
          centered={true}
        />
      </div>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2 mb-2">
        <div class="input-group mb-3 buscar">
          <form action="" onSubmit={handlerSubmitSearch} id="formSearch">
            <input
              type="text"
              class="form-control "
              placeholder="Buscar Usuario"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              id="search"
              name="search"
              onChange={handlerSearchInput}
            />
            <button class="btn btn-danger" type="submit" id="button-addon2">
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div className="iconos select2 ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/916/916771.png"
          className="edif"
          alt=""
        />
        <h5 className="mx-3">PISO</h5>

        <div className="mb-5 size">
          <select
            class="form-select selectPa"
            aria-label="Default select example"
            name="floor"
            onChange={handlerSearchByFloor}
            id="selectFloor"
          >
            <option selected className="text-center" value={0}>
              Buscar por Piso
            </option>
            {floors.map((floor) => (
              <option value={floor} className="text-center" key={floor}>
                {floor}
              </option>
            ))}
          </select>
        </div>
      </div>

      <MethodExportsFiles />

      <table class="table ">
        <thead>
          <tr>
            <th scope="col">Torre</th>
            <th scope="col">Departamento</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Dni</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        {Object.keys(dataUsersByFloor).length > 0
          ? dataUsersByFloor.rows.map(({ user, tower }) => (
              <RowsUsers
                tower={tower.tower_name}
                departament_id={user[0].departament_id}
                first_name={user[0].first_name}
                last_name={user[0].last_name}
                email={user[0].email}
                dni={user[0].dni}
              />
            ))
          : ""}

        {Object.keys(dataSearch).length > 0
          ? dataSearch.rows.map(
              ({
                departament_id,
                first_name,
                last_name,
                email,
                dni,
                departments,
              }) => (
                <RowsUsers
                  tower={departments.tower.tower_name}
                  departament_id={departament_id}
                  first_name={first_name}
                  last_name={last_name}
                  email={email}
                  dni={dni}
                />
              )
            )
          : ""}
      </table>
      {Object.keys(dataUsersByFloor).length > 0 ||
      Object.keys(dataSearch).length > 0 ? (
        <Paginate
          setPage={setPage}
          page={page}
          formFilter={formSearch}
          totalRowsBd={
            Object.keys(dataUsersByFloor).length > 0
              ? dataUsersByFloor.count
              : Object.keys(dataSearch).length > 0
              ? dataSearch.count
              : ""
          }
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Usuario;
