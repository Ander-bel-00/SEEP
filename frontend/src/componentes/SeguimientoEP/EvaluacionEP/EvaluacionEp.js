import React, { Fragment, useEffect, useState } from "react";
import "./css/EvaluacionEp.css";
import LogoSena from "./img/sena-verde.png";
import PopupFirmas from "../Firmas/PopupFirmas";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function EvaluacionEp({ evaluacionAprendiz, setEvalaucionAprendiz }) {
  const [selected, setSelected] = useState(""); // Estado para almacenar la selección
  const [reconoSelected, setReconoSelected] = useState("");
  const [firmas, setFirmas] = useState([]);
  const [currentFirmaField, setCurrentFirmaField] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelection = (type) => {
    setSelected(type);
    setEvalaucionAprendiz({ ...evaluacionAprendiz, juicio_aprendiz: type });
  };

  const handleRecono = (type) => {
    setReconoSelected(type);
    setEvalaucionAprendiz({ ...evaluacionAprendiz, recono_especiales: type });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEvalaucionAprendiz({ ...evaluacionAprendiz, [name]: value });
  };

  const [campos, setCampos] = useState([
    { firma: null },
    { firma: null },
    { firma: null },
  ]);

  useEffect(() => {
    const storedFirmas = localStorage.getItem("firmas");
    if (storedFirmas) {
      setFirmas(JSON.parse(storedFirmas));
    }
  }, []);

  const handleSaveFirma = (firma, editIndex = null) => {
    setFirmas((prevFirmas) => {
      let newFirmas;
      if (editIndex !== null) {
        if (firma) {
          newFirmas = prevFirmas.map((f, index) =>
            index === editIndex ? firma : f
          );
        } else {
          newFirmas = prevFirmas.filter((_, index) => index !== editIndex);
        }
      } else {
        newFirmas = [...prevFirmas, firma];
      }
      localStorage.setItem("firmas", JSON.stringify(newFirmas));
      return newFirmas;
    });

    if (currentFirmaField !== null) {
      const updatedCampos = campos.map((campo, index) =>
        index === currentFirmaField ? { ...campo, firma } : campo
      );
      setCampos(updatedCampos);
      setCurrentFirmaField(null);
    }
  };

  const handleAddFirma = (fieldId) => {
    setCurrentFirmaField(fieldId);
    setShowPopup(true);
  };

  const handleSelectFirma = (firma) => {
    if (currentFirmaField !== null) {
      const updatedCampos = campos.map((campo, index) =>
        index === currentFirmaField ? { ...campo, firma } : campo
      );
      setCampos(updatedCampos);
      setCurrentFirmaField(null);
      setShowPopup(false);
    }
  };

  return (
    <Fragment>
      <div className="info-evaluacion-content-box" id="evaluacionEP">
        <img
          src={LogoSena}
          alt="logo-sena"
          className="info-evaluacion-content-box__logo-sena"
        />
        <div className="evaluacionEP-container-table">
          {/* Row 1 */}
          <div className="col-8cols ep-table-td">
            <h3 className="font-bold space-word">
              4. EVALUACIÓN ETAPA PRODUCTIVA
            </h3>
          </div>
          {/* Row 2 */}
          <div className="ep-table-td ep-table-th col-8cols">
            <div>
              <p></p>
            </div>
          </div>
          <div className="col-8cols ep-table-td">
            <div className="evaluation-td-options">
              <p className="space-word">JUICIO DE EVALUACIÓN: </p>
              <div
                className="selectable-container-ep evaluation-op_1"
                onClick={() => handleSelection("APROBADO")}
              >
                <div
                  className={`selectable-box-evaluation ${
                    selected === "APROBADO" ? "selected-recono" : ""
                  }`}
                >
                  {selected && selected === "APROBADO" ? (
                    <input
                      type="text"
                      value={selected === "APROBADO" ? "X" : ""}
                      readOnly
                      className="w-4 recon-check"
                      name=""
                    />
                  ) : null}
                </div>
                <p className="relative top-1">
                  <strong>APROBADO</strong>
                </p>
              </div>
              <div
                className="selectable-container-ep evaluation-op_2"
                onClick={() => handleSelection("NO APROBADO")}
              >
                <div
                  className={`selectable-box-evaluation ${
                    selected === "NO APROBADO" ? "selected-recono" : ""
                  }`}
                >
                  {selected && selected === "NO APROBADO" ? (
                    <input
                      type="text"
                      readOnly
                      value={selected === "NO APROBADO" ? "X" : ""}
                      className="w-4 recon-check"
                      name=""
                    />
                  ) : null}
                </div>
                <p className="relative top-1">
                  <strong>NO APROBADO</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-8cols ep-table-td reconos-col">
            <div className="reconocimientos-section">
              <p className="space-word">
                RECONOCIMIENTOS ESPECIALES SOBRE EL DESEMPEÑO:
              </p>
              <div
                className="selectable-container-recono recono-op_1"
                onClick={() => handleRecono("SI")}
              >
                <p className="relative top-1">
                  <strong>SI</strong>
                </p>
                <div
                  className={`selectable-box-recono ${
                    reconoSelected === "SI" ? "selected-recono" : ""
                  }`}
                >
                  {reconoSelected && reconoSelected === "SI" ? (
                    <input
                      type="text"
                      value={reconoSelected === "SI" ? "X" : ""}
                      className="w-4 recon-check"
                      name=""
                    />
                  ) : null}
                </div>
              </div>
              <div
                className="selectable-container-ep recono-op_2"
                onClick={() => handleRecono("NO")}
              >
                <p className="relative top-1">
                  <strong>NO</strong>
                </p>
                <div
                  className={`selectable-box-recono ${
                    reconoSelected === "NO" ? "selected-recono" : ""
                  }`}
                >
                  {reconoSelected && reconoSelected === "NO" ? (
                    <input
                      type="text"
                      value={reconoSelected === "NO" ? "X" : ""}
                      readOnly
                      className="w-4 recon-check"
                      name=""
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="especific-recon">
              <p className="space-word">Especificar cuáles:</p>
              <textarea
                onChange={handleChange}
                name="especificar_recono"
              ></textarea>
            </div>
          </div>
          <div className="col-8cols ep-table-td firmas-ev-col">
            <div className="td__firmas_inputs">
              <div>
                <label>
                  <strong>Nombre del Ente Conformador:</strong>
                </label>
                <input
                  type="text"
                  readOnly
                  required
                  value={evaluacionAprendiz.nombre_ente_conformador}
                  className="relative left-10 border-b-2"
                />
                <label>
                  <strong>Firma del Ente Conformador:</strong>
                </label>
                {evaluacionAprendiz &&
                evaluacionAprendiz.firma_ente_conformador ? (
                  <img
                    src={evaluacionAprendiz.firma_ente_conformador}
                    alt="Firma Ente Conformador"
                    className="relative left-10"
                  />
                ) : null}
              </div>
              <div>
                <label>
                  <strong>Firma del Aprendiz</strong>
                </label>
                {evaluacionAprendiz && evaluacionAprendiz.firma_aprendiz ? (
                  <img
                    src={evaluacionAprendiz.firma_aprendiz}
                    alt="Firma del Aprendiz"
                    className="relative ml-3"
                  />
                ) : null}
              </div>
              <div>
                <label>
                  <strong>Nombre Instructor seguimiento:</strong>
                </label>
                <input
                  type="text"
                  readOnly
                  required
                  value={evaluacionAprendiz.nombre_instructor}
                  className="relative left-0 border-b-2"
                />
                <label>
                  <strong>Firma Instructor seguimiento</strong>
                </label>
                {evaluacionAprendiz &&
                evaluacionAprendiz.firma_instructor_seguimiento ? (
                  <img
                    src={evaluacionAprendiz.firma_instructor_seguimiento}
                    alt="Firma del Instructor de Seguimiento"
                    className="relative ml-5"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupFirmas
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onSave={(firma, editIndex) => {
          handleSaveFirma(firma, editIndex);
          setShowPopup(false);
        }}
        onSelect={(firma) => {
          handleSelectFirma(firma);
          setShowPopup(false);
        }}
        firmas={firmas}
      />
    </Fragment>
  );
}

export default EvaluacionEp;
