import React from "react";
export default function Paginate({ setPage, page, totalRowsBd, formFilter }) {
  const limit = 10;
  const selectNumberPage = [1, 2, 2];
  
  
  
  function handlerPreviousPage() {
    //si la pagina en la que estoy es mayor que uno, entonces si puedo volver hacia atrás
    if (page > 1) {
      setPage(page - 1);
      formFilter.submit();
    }
  }
  function handlerOnePage() {
    if (page !== 1) {
      setPage(1);
      formFilter.submit();
    }
  }
  function handlerTwoPage() {
    if (page !== 2) {
      setPage(2);
      formFilter.submit();
    }
  }
  function handlerThreePage() {
    if (page !== 3 && totalRowsBd > limit * 3) {
      setPage(3);
      formFilter.submit();
    }
  }
  function handlerNextPage() {
    setPage(page + 1);
    formFilter.submit();
  }
  console.log(totalRowsBd, "totalRowsBd");
  console.log(page, "page*limit");
  return (
    <div className="w-100 mt-5 ">
      <nav aria-label="...">
        <ul className="pagination justify-content-center">
          
          
          <li 
         
          className={`page-item  ${page === 1 ? "disabled" : ""}`}>
            <button
              style={{color:'white', backgroundColor:'#00bcd4', border:'none', borderRadius:'50px', 
             }}
              className="page-link"
              tabindex="-1"
              onClick={handlerPreviousPage}
            >
              Previous
            </button>
          </li>
          <li className="page-item active">
            <button 
            style={{backgroundColor:'#f83c4a', border:'none', borderRadius:'50px'}}
            className="page-link" onClick={handlerOnePage}>
              1
            </button>
          </li>
          <li 
          className="page-item ">
            <button 
            style={{borderRadius:'50px'}}
            className="page-link" onClick={handlerTwoPage}>
              2
            </button>
          </li>
          <li className="page-item">
            <button 
              style={{borderRadius:'50px'}}
            className="page-link" onClick={handlerThreePage}>
              3
            </button>
          </li>

          <li
            class={`page-item ${
              !(totalRowsBd > limit * page) ? "disabled" : ""
            }`}
          >
            <button 
            style={{backgroundColor:'#00bcd4', color:'white', borderRadius:'50px'}}
            className="page-link" onClick={handlerNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
