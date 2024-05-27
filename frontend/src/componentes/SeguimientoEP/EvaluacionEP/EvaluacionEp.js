import React, { useState } from "react";
import "./css/EvaluacionEp.css";
import LogoSena from "./img/sena-verde.png";

function EvaluacionEp() {
  const [selected, setSelected] = useState(""); // Estado para almacenar la selección

  const handleSelection = (type) => {
    setSelected(type);
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
                <h2 className="text-center">4. EVALUACIÓN ETAPA PRODUCTIVA</h2>
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
                    className="selectable-container evaluation-op_1"
                    onClick={() => handleSelection("APROBADO")}
                  >
                    <div
                      className={`selectable-box-evaluation ${
                        selected === "APROBADO" ? "selected-evaluation" : ""
                      }`}
                    >
                      {selected === "APROBADO" ? "X" : ""}
                    </div>
                    <p className="relative top-1"><strong>APROBADO</strong></p>
                  </div>
                  <div
                    className="selectable-container evaluation-op_2"
                    onClick={() => handleSelection("NO APROBADO")}
                  >
                    <div
                      className={`selectable-box-evaluation ${
                        selected === "NO APROBADO" ? "selected-evaluation" : ""
                      }`}
                    >
                      {selected === "NO APROBADO" ? "X" : ""}
                    </div>
                    <p className="relative top-1"><strong>NO APROBADO</strong></p>
                  </div>
                </div>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default EvaluacionEp;
