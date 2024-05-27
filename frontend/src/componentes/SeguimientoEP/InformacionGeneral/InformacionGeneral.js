import React, { useState } from "react";
import "./css/infoGeneral.css";
import LogoSena from "./img/sena-verde.png";
import EvaluacionEp from "../EvaluacionEP/EvaluacionEp";
import PlanEP from "../PlaneacionEP/PlanEP";

function InformacionGeneral() {
  return (
    <div className="main-container__contenedor-hijo">
      <div className="info-general-content-box">
        <img
          src={LogoSena}
          alt="logo-sena"
          className="info-general-content-box__logo-sena"
        />
        <h2 className="info-general-content-box__main-title">
          PROCESO GESTIÓN DE FORMACIÓN PROFESIONAL INTEGRAL <br />
          FORMATO PLANEACIÓN, SEGUIMIENTO Y EVALUACIÓN ETAPA PRODUCTIVA
        </h2>

        <h3 className="mt-4">1. INFORMACIÓN GENERAL</h3>

        <table className="info-general-table">
          <thead>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Regional: </th>
              <td className="info-general-table_td">
                <input type="text" required />
              </td>
              <th className="info-general-table_th">Centro de Formación: </th>
              <td className="info-general-table_td" colSpan={2}>
                <input type="text" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Programa de Formación: </th>
              <td className="info-general-table_td" colSpan={2}>
                <input type="text" required />
              </td>
              <th className="info-general-table_th">No. de Ficha: </th>
              <td className="info-general-table_td">
                <input type="number" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <td className="info-general-table_td" colSpan={2}>
                <p></p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th" colSpan={1} rowSpan={5}>
                Datos del Aprendiz
              </th>
              <th className="info-general-table_th">Nombre: </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="text" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Identificación: </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="text" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Teléfono: </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="number" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Email: </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="email" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">
                Alternativa registrada en SOFIA plus
              </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="email" required />
              </td>
            </tr>
            {/* Ente Conformador */}
            <tr className="info-general-table_tr">
              <th className="info-general-table_th" colSpan={1} rowSpan={7}>
                Ente Conformador
              </th>
              <th className="info-general-table_th">
                Razón social Empresa: :{" "}
              </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="text" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Nit: </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="text" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Dirección: </th>
              <td className="info-general-table_td" colSpan={3}>
                <textarea required></textarea>
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">
                Nombre del Jefe Inmediato del aprendiz:{" "}
              </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="text" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Cargo:</th>
              <td className="info-general-table_td" colSpan={3}>
                <textarea required></textarea>
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Teléfono: </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="number" required />
              </td>
            </tr>
            <tr className="info-general-table_tr">
              <th className="info-general-table_th">Email: </th>
              <td className="info-general-table_td" colSpan={3}>
                <input type="email" required />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Segunda seccion */}
      <PlanEP />
    </div>
  );
}

export default InformacionGeneral;