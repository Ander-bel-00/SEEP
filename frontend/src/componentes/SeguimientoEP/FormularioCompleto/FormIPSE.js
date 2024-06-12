import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import InformacionGeneral from "../InformacionGeneral/InformacionGeneral";
import PlanEP from "../PlaneacionEP/PlanEP";
import SeguimientoEp from "../SeguimientoEP/SeguimientoEp";
import EvaluacionEp from "../EvaluacionEP/EvaluacionEp";
import "./css/FormularioComp.css";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import clienteAxios from "../../../api/axios";
import Swal from "sweetalert2";
function FormularioCompleto() {
  const [loading, setLoading] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { id_aprendiz } = useParams();
  const [evaluacionAprendiz, setEvalaucionAprendiz] = useState({});

  useEffect(() => {
    const button = document.getElementById("generate-pdf-button");
    if (isGeneratingPDF) {
      button.style.display = "none"; // Oculta el botón antes de generar el PDF
    } else {
      button.style.display = "block"; // Muestra el botón después de generar el PDF
    }
  }, [isGeneratingPDF]);

  const generatePDF = () => {
    setLoading(true);
    setIsGeneratingPDF(true);

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
      scale: 0.5,
    });

    doc.html(document.getElementById("formulario-completo"), {
      callback: function (pdf) {
        let totalPages = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          // // Agregar el footer centrado en cada página
          // pdf.setFontSize(10);
          // const footerText = "GFPI-F-023 V04";
          // const textWidth =
          //   (pdf.getStringUnitWidth(footerText) * pdf.internal.getFontSize()) /
          //   pdf.internal.scaleFactor;
          // const textHeight =
          //   pdf.internal.getLineHeight() / pdf.internal.scaleFactor;
          // const pageSize = pdf.internal.pageSize;
          // const x = (pageSize.width - textWidth) / 2; // Calcula la posición x centrada
          // const y = pageSize.height - 30; // Ajusta la posición y según sea necesario
          // pdf.text(footerText, x, y);
        }
        pdf.save("formulario.pdf");
        setLoading(false);
        setIsGeneratingPDF(false);
      },
      x: 70,
      y: 10,
      width: 460,
      windowWidth: 830,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await clienteAxios.post(
        `/evaluacion-ep-aprendiz/${id_aprendiz}`, evaluacionAprendiz
      );
      Swal.fire({
        title:
          "Aprendiz registrado exitosamente, se ha enviado un correo al aprendiz con los pasos para iniciar sesión",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      console.log("Error al enviar la evalaucion", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un error al crear la evalaucion",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  console.log(evaluacionAprendiz)
  return (
    <div className="main-container__contenedor-hijo">
      <form className="form-seguimiento-complete" id="formulario-completo" onSubmit={handleSubmit}>
        <div id="page1" className="pdf-page">
          <InformacionGeneral
            evaluacionAprendiz={evaluacionAprendiz}
            setEvalaucionAprendiz={setEvalaucionAprendiz}
          />
        </div>
        <div id="page2" className="pdf-page">
          <PlanEP
            evaluacionAprendiz={evaluacionAprendiz}
            setEvalaucionAprendiz={setEvalaucionAprendiz}
          />
        </div>
        <div id="page3" className="pdf-page">
          <SeguimientoEp
            evaluacionAprendiz={evaluacionAprendiz}
            setEvalaucionAprendiz={setEvalaucionAprendiz}
          />
        </div>
        <div id="page4" className="pdf-page">
          <EvaluacionEp
            evaluacionAprendiz={evaluacionAprendiz}
            setEvalaucionAprendiz={setEvalaucionAprendiz}
          />
        </div>
        <div className="generarpdf-box">
          <button id="generate-pdf-button" type="submit" disabled={loading} onClick={generatePDF}>
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
