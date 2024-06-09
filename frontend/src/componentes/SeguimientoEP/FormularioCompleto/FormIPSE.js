import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import InformacionGeneral from "../InformacionGeneral/InformacionGeneral";
import PlanEP from "../PlaneacionEP/PlanEP";
import SeguimientoEp from "../SeguimientoEP/SeguimientoEp";
import EvaluacionEp from "../EvaluacionEP/EvaluacionEp";
import "./css/FormularioComp.css";
import { useParams } from "react-router-dom";


function FormularioCompleto() {
  const [loading, setLoading] = useState(false);
  const { id_aprendiz } = useParams();
  const [evaluacionAprendiz, setEvalaucionAprendiz] = useState({
    id_aprendiz: id_aprendiz,
  });

  return (
    <div id="formulario-completo" className="main-container__contenedor-hijo">
      <form>
        <div id="page1" className="pdf-page">
          <div className="infoGeneral-contenido">
            <InformacionGeneral evaluacionAprendiz={evaluacionAprendiz} setEvalaucionAprendiz={setEvalaucionAprendiz}/>
          </div>
          <div className="PlanEP-contenido">
            <PlanEP evaluacionAprendiz={evaluacionAprendiz} setEvalaucionAprendiz={setEvalaucionAprendiz}/>
          </div>
        </div>
        {/* <div id="page2" className="pdf-page">
          <div className="SeguimientoEP-contenido">
            <SeguimientoEp evaluacionAprendiz={evaluacionAprendiz} setEvalaucionAprendiz={setEvalaucionAprendiz}/>
          </div>
        </div>
        <div id="page3" className="pdf-page">
          <div className="EvalaucionEP-contenido">
            <EvaluacionEp evaluacionAprendiz={evaluacionAprendiz} setEvalaucionAprendiz={setEvalaucionAprendiz}/>
          </div>
        </div> */}
        <div className="generarpdf-box">
          <button type="button" disabled={loading}>
            {loading ? (
              <>
                <ClipLoader size={20} color={"#fff"} loading={loading} />
                <span> Generando PDF...</span>
              </>
            ) : (
              "Generar PDF"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioCompleto;
