import React from "react";
import InformacionGeneral from "../InformacionGeneral/InformacionGeneral";
import GenerarPDF from "../PdfController/PdfGenerated";


function FormularioCompleto() {
  return (
    <div className="main-container__contenedor-hijo">
      <InformacionGeneral />
      <GenerarPDF />
    </div>
  );
}

export default FormularioCompleto;
