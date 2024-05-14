import React, { useState } from "react";
import "./css/PlaneacionEP.css";

function PlanEP() {
  const [campos, setCampos] = useState([]);

  const agregarCampos = () => {
    setCampos([...campos, { id: campos.length }]);
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="plan-content-box">
        <table className="planEP-table">
          <thead>
            <tr className="planEP-table__tr">
              <td className="planEP-table__td" colSpan={9}>
                <h3 className="text-center">2. PLANEACIÓN ETAPA PRODUCTIVA</h3>
              </td>
            </tr>
            <tr className="planEP-table__td">
              <th className="planEP-table__th text-center" colSpan={7}>
                CONCERTACIÓN PLAN DE TRABAJO DURANTE LA ETAPA PRODUCTIVA DEL
                APRENDIZ
              </th>
            </tr>
            <tr className="planEP-table__td">
              <th className="planEP-table__th" colSpan={3} rowSpan={2}>
                <p className="text-center">ACTIVIDADES A DESARROLLAR</p>
                <p>
                  Relacione las actividades que el aprendiz va a realizar.
                  <p>
                    (Estas deben corresponder al Perfil del egresado establecido
                    en el programa de formación que el aprendiz está
                    desarrollando)
                  </p>
                </p>
              </th>
              <th
                className="planEP-table__th text-wrap text-center"
                rowSpan={2}
              >
                EVIDENCIAS DE APRENDIZAJE
              </th>
              <th
                className="planEP-table__th text-wrap text-center"
                colSpan={2}
              >
                RECOLECCIÓN DE EVIDENCIAS
              </th>
            </tr>
            <tr className="planEP-table__td">
              <th className="planEP-table__th text-center">Fecha</th>
              <th className="planEP-table__th text-center">Lugar</th>
            </tr>
          </thead>
          <tbody>
            {campos.map((campo, index) => (
              <tr key={index} className="planEP-table__tr">
                <td colSpan={3} className="planEP-table__td">
                  <textarea required></textarea>
                </td>
                <td className="planEP-table__td">
                  <textarea required></textarea>
                </td>
                <td className="planEP-table__td">
                  <input type="date" required />
                </td>
                <td className="planEP-table__td">
                  <input type="date" required />
                </td>
              </tr>
            ))}
            <tr className="planEP-table__tr">
              <td className="planEP-table__td" colSpan={6}>
                <label>
                  <strong>Observaciones: </strong>
                </label>
                <textarea></textarea>
              </td>
            </tr>
            <tr className="planEP-table__tr">
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
                  </div>
                  <div>
                    <label>
                      <strong>Firma del Aprendiz</strong>
                    </label>
                  </div>
                  <div>
                    <label>
                      <strong>Nombre Instructor seguimiento:</strong>
                    </label>
                    <input type="text" />
                    <label>
                      <strong>Firma Instructor seguimiento</strong>
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="">
                <div className="btn-add-inputs">
                  <button onClick={agregarCampos}>Añadir Actividad</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlanEP;
