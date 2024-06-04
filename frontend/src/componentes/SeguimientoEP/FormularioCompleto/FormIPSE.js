import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
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

  const generatePDF = async () => {
    setLoading(true);

    const options = {
      scale: 3,
      useCORS: true,
      logging: true,
      letterRendering: true,
    };

    const input1 = document.getElementById("page1");
    const input2 = document.getElementById("page2");
    const input3 = document.getElementById("page3");

    const canvas1 = await html2canvas(input1, options);
    const canvas2 = await html2canvas(input2, options);
    const canvas3 = await html2canvas(input3, options);

    const imgData1 = canvas1.toDataURL("image/png");
    const imgData2 = canvas2.toDataURL("image/png");
    const imgData3 = canvas3.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData1, "PNG", 0, 0, 210, 297);
    pdf.addPage();
    pdf.addImage(imgData2, "PNG", 0, 0, 210, 297);
    pdf.addPage();
    pdf.addImage(imgData3, "PNG", 0, 0, 210, 297);

    pdf.save("document.pdf");
    setLoading(false);
  };

  

  return (
    <div className="main-container__contenedor-hijo">
      <form>
      <div id="page1" className="pdf-page1">
        <div className="infoGeneral-contenido">
          <InformacionGeneral evaluacionAprendiz={evaluacionAprendiz} setEvalaucionAprendiz={setEvalaucionAprendiz}/>
        </div>
        <div className="PlanEP-contenido">
          <PlanEP evaluacionAprendiz={evaluacionAprendiz} setEvalaucionAprendiz={setEvalaucionAprendiz}/>
        </div>
      </div>
      <div id="page2" className="pdf-page2">
        <div className="SeguimientoEP-contenido">
          <SeguimientoEp evaluacionAprendiz={evaluacionAprendiz} setEvalaucionAprendiz={setEvalaucionAprendiz}/>
        </div>
      </div>
      <div id="page3" className="pdf-page3">
        <div className="EvalaucionEP-contenido">
          <EvaluacionEp evaluacionAprendiz={evaluacionAprendiz} setEvalaucionAprendiz={setEvalaucionAprendiz}/>
        </div>
      </div>
      <div className="generarpdf-box">
        <button onClick={generatePDF} disabled={loading}>
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
