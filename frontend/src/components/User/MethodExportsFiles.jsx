import copy from "../../imagenesUsuarios/icono_copiar.svg";
import pdf from "../../imagenesUsuarios/pdf_icono.svg";
import excel from "../../imagenesUsuarios/Excel_download.svg";

export default function MethodExportsFiles() {
  return (
    <div className="iconos select mt-5">
      <button type="button" class="btn btn-danger">
        {" "}
        <img src={copy} />
        COPIAR
      </button>
      <button type="button" class="btn btn-danger mx-3">
        <img src={pdf} />
        PDF
      </button>
      <button type="button" class="btn btn-danger">
        <img src={excel} />
        EXCEL
      </button>
    </div>
  );
}
