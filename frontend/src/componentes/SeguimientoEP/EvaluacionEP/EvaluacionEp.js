import React, { useEffect, useState } from "react";
import "./css/EvaluacionEp.css";
import LogoSena from "./img/sena-verde.png";
import PopupFirmas from "../Firmas/PopupFirmas";

function EvaluacionEp() {
  const [selected, setSelected] = useState(""); // Estado para almacenar la selección
  const [reconoSelected, setReconoSelected] = useState("");
  const [firmas, setFirmas] = useState([]);
  const [currentFirmaField, setCurrentFirmaField] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelection = (type) => {
    setSelected(type);
  };

  const handleRecono = (type) => {
    setReconoSelected(type);
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
    <div className="main-container__contenedor-hijo">
      <div className="info-evaluacion-content-box">
        <img
          src={LogoSena}
          alt="logo-sena"
          className="info-evaluacion-content-box__logo-sena"
        />
        <table className="Evaluacion-EP__table">
          <thead>
            <tr className="Evaluacion-EP__table__tr">
              <td>
                <h2 className="text-center font-bold">
                  4. EVALUACIÓN ETAPA PRODUCTIVA
                </h2>
              </td>
            </tr>
            <tr className="Evaluacion-EP__table__tr">
              <th className="Evaluacion-EP__table__th"></th>
            </tr>
            <tr className="Evaluacion-EP__table__tr">
              <td className="Evaluacion-EP__table__td" colSpan={1}>
                <div className="evaluation-td-options">
                  <p>JUICIO DE EVALUACIÓN: </p>
                  <div
                    className="selectable-container-ep evaluation-op_1"
                    onClick={() => handleSelection("APROBADO")}
                  >
                    <div
                      className={`selectable-box-evaluation ${
                        selected === "APROBADO" ? "selected-evaluation" : ""
                      }`}
                    >
                      {selected && selected === "APROBADO" ? (
                        <input
                          type="text"
                          value={selected === "APROBADO" ? "X" : ""}
                          readOnly
                          className="w-4 input-check"
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
                        selected === "NO APROBADO" ? "selected-evaluation" : ""
                      }`}
                    >
                     {selected && selected === "NO APROBADO" ? (
                       <input
                       type="text"
                       readOnly
                       value={selected === "NO APROBADO" ? "X" : ""}
                       className="w-4 input-check"
                       name=""
                     />
                     ): (
                      null
                     )}
                    </div>
                    <p className="relative top-1">
                      <strong>NO APROBADO</strong>
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="Evaluacion-EP__table__tr">
              <td className="Evaluacion-EP__table__td">
                <div className="reconocimientos-section">
                  <p>RECONOCIMIENTOS ESPECIALES SOBRE EL DESEMPEÑO:</p>
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
                      {reconoSelected === "SI" ? "X" : ""}
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
                      {reconoSelected === "NO" ? "X" : ""}
                    </div>
                  </div>
                </div>
                <p>Especificar cuáles:</p>
                <textarea className="w-full"></textarea>
              </td>
            </tr>
            <tr className="Evaluacion-EP__table__tr">
              <td className="planEP-table__td" colSpan={6}>
                <div className="td__firmas_inputs">
                  <div>
                    <label>
                      <strong>Nombre del Ente Conformador:</strong>
                    </label>
                    <input type="text" />
                    <label>
                      <strong>Firma del Ente Conformador:</strong>
                    </label>
                    <button
                      type="button"
                      onClick={() => handleAddFirma(0)}
                      className={campos[0].firma ? "" : "btn-add-firma"}
                    >
                      {campos[0].firma ? (
                        <img
                          src={campos[0].firma}
                          alt="Firma del Ente Conformador"
                          style={{ width: 100, height: 50 }}
                        />
                      ) : (
                        "Añadir Firma"
                      )}
                    </button>
                  </div>
                  <div>
                    <label>
                      <strong>Firma del Aprendiz</strong>
                    </label>
                    <button
                      type="button"
                      onClick={() => handleAddFirma(1)}
                      className={campos[1].firma ? "" : "btn-add-firma"}
                    >
                      {campos[1].firma ? (
                        <img
                          src={campos[1].firma}
                          alt="Firma del Aprendiz"
                          style={{ width: 100, height: 50 }}
                        />
                      ) : (
                        "Añadir Firma"
                      )}
                    </button>
                  </div>
                  <div>
                    <label>
                      <strong>Nombre Instructor seguimiento:</strong>
                    </label>
                    <input type="text" />
                    <label>
                      <strong>Firma Instructor seguimiento</strong>
                    </label>
                    <button
                      type="button"
                      onClick={() => handleAddFirma(2)}
                      className={campos[2].firma ? "" : "btn-add-firma"}
                    >
                      {campos[2].firma ? (
                        <img
                          src={campos[2].firma}
                          alt="Firma Instructor seguimiento"
                          style={{ width: 100, height: 50 }}
                        />
                      ) : (
                        "Añadir Firma"
                      )}
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </thead>
        </table>
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
      <div className="footer-box">
        <footer className="footer-EP">GFPI-F-023 V04</footer>
      </div>
      <div className="generar-pdf-btn-box">
        <button className="btn-generar-pdf" type="submit">
          Generar PDF
        </button>
      </div>
    </div>
  );
}

export default EvaluacionEp;
