import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApartament } from "../redux/actions";
import Skeleton from "react-loading-skeleton";
import Filter from "./Filter";
import Paginate from "./Paginate/Paginate";
import TemplateShowDepartaments from "./TemplateShowDepartaments";
import $ from "jquery";
import { getObjectParam } from "../helpers/getQueryParams";
import { Link } from "react-router-dom";

const initialFilter = {
  toilets: null,
  rooms: null,
  floor: null,
  initialPrice: null,
  endPrice: null,
  initialSize: null,
  endSize: null,
};
export default function Departaments() {
  const [inputsFilter, setInputsFilter] = useState(initialFilter);
  const [page, setPage] = useState(1);
  const [queryParams, setQueryParams] = useState({});

  const dispatch = useDispatch();
  const formFilter = $("formFilter");
  //recupero la informacion del estado que lo modifico la accion
  const responseFilter = useSelector((state) => {
    return state.departFilter;
  });

  function handlerChange(event) {
    setInputsFilter({
      ...inputsFilter,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, event.target.value);
  }
  function getDataDb() {
    dispatch(
      getApartament({
        ...inputsFilter,
        page: page,
        price: [
          !inputsFilter.initialPrice ? 0 : inputsFilter.initialPrice,
          !inputsFilter.endPrice ? Infinity : inputsFilter.endPrice,
        ],
        size: [
          !inputsFilter.initialSize ? 0 : inputsFilter.initialSize,
          !inputsFilter.endSize ? Infinity : inputsFilter.endSize,
        ],
      })
    );
  }
  useEffect(() => {
    getDataDb();
  }, [page]);

  function handlerSubmit(event) {
    event.preventDefault();
    getDataDb();
  }
  console.log(responseFilter);
  return (
    <div>
      <Filter
        handlerSubmit={handlerSubmit}
        handlerChange={handlerChange}
        setPage={setPage}
      />

      {responseFilter.data && responseFilter.data.length !== 0 ? (
        responseFilter.data.map((depto) => (
          <Link to={`/departments/${depto.id}`}>
            <TemplateShowDepartaments
              key={depto.id}
              price={depto.price}
              images={depto.image}
              description={depto.description}
              measure={depto.measure}
            />
          </Link>
        ))
      ) : (
        <Skeleton />
      )}
      <Paginate
        setPage={setPage}
        formFilter={formFilter}
        page={page}
        totalRowsBd={responseFilter.meta ? responseFilter.meta.total : null}
      />
    </div>
  );
}
