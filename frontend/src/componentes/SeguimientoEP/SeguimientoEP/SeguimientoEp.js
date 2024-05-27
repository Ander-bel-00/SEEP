import React, { useState } from "react";
import LogoSena from "./img/sena-verde.png";
import "./css/SegumientoEP.css";
import EvaluacionEp from "../EvaluacionEP/EvaluacionEp";

function SeguimientoEp() {
  const [selected, setSelected] = useState(""); // Estado para almacenar la selección

  const handleSelection = (type) => {
    setSelected(type);
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="segumiento-table-box">
        <img
          src={LogoSena}
          alt="logo-sena"
          className="plan-content-box__logo-sena"
        />
        <table className="seguimientoEP-table">
          <thead>
            <tr className="seguimientoEP-table__tr">
              <td colSpan={5} className="seguimientoEP-table__td">
                <h3 className="text-center">3. SEGUIMIENTO ETAPA PRODUCTIVA</h3>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th" >
                TIPO DE INFORME
              </th>
              <td className="seguimientoEP-table__td" colSpan={2}>
                <div
                  className="selectable-container"
                  onClick={() => handleSelection("Parcial")}
                >
                  <p>Parcial:</p>
                  <div
                    className={`selectable-box ${
                      selected === "Parcial" ? "selected-box" : ""
                    }`}
                  >
                    {selected === "Parcial" ? "X" : ""}
                  </div>
                </div>
                <div
                  className="selectable-container"
                  onClick={() => handleSelection("Final")}
                >
                  <p>Final:</p>
                  <div
                    className={`selectable-box ${
                      selected === "Final" ? "selected-box" : ""
                    }`}
                  >
                    {selected === "Final" ? "X" : ""}
                  </div>
                </div>
              </td>
              <th className="seguimientoEP-table__th" >
                PERÍODO EVALUADO
              </th>
              <td className="seguimientoEP-table__td">
                <p className="td_p">
                  Inicio: <input type="date" />
                </p>
                <p className="td_p">
                  Finalización: <input type="date" />
                </p>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th text-center" colSpan={5}>
                FACTORES ACTITUDINALES Y COMPORTAMENTALES
              </th>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th text-center" rowSpan={2}>
                VARIABLE
              </th>
              <th className="seguimientoEP-table__th text-center" rowSpan={2}>
                DESCRIPCIÓN
              </th>
              <th className="seguimientoEP-table__th text-center" colSpan={2}>
                VALORACIÓN
              </th>
              <th className="seguimientoEP-table__th text-center" rowSpan={2}>
                Observación
              </th>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th text-center">
                Satisfactorio
              </th>
              <th className="seguimientoEP-table__th text-center">
                Por mejorar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">
                RELACIONES INTERPERSONALES
              </th>
              <td className="seguimientoEP-table__td">
                <p>
                  Desarrolla relaciones interpersonales con las personas de los
                  diferentes niveles del ente Conformador en forma armoniosa,
                  respetuosa y enmarcada dentro de los principios de convivencia
                  social.{" "}
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">TRABAJO EN EQUIPO</th>
              <td className="seguimientoEP-table__td">
                <p>
                  Participa en forma activa y propositiva en equipos de trabajo
                  asumiendo los roles, de acuerdo con sus fortalezas.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">SOLUCIÓN DE PROBLEMAS</th>
              <td className="seguimientoEP-table__td">
                <p>
                  Propone alternativas de solución a situaciones problemáticas,
                  en el contexto del desarrollo de su etapa productiva.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">CUMPLIMIENTO</th>
              <td className="seguimientoEP-table__td">
                <p>
                  Asume compromiso de las funciones y responsabilidades
                  asignadas en el desarrollo de su trabajo.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">ORGANIZACIÓN</th>
              <td className="seguimientoEP-table__td">
                <p>
                  Demuestra capacidad para ordenar y disponer los elementos
                  necesarios e información para facilitar la ejecución de un
                  trabajo y el logro de los objetivos.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th text-center" colSpan={5}>
                FACTORES TÉCNICOS
              </th>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th text-center" rowSpan={2}>
                VARIABLE
              </th>
              <th className="seguimientoEP-table__th text-center" rowSpan={2}>
                DESCRIPCIÓN
              </th>
              <th className="seguimientoEP-table__th text-center" colSpan={2}>
                VALORACIÓN
              </th>
              <th className="seguimientoEP-table__th text-center" rowSpan={2}>
                Observación
              </th>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th text-center">
                Satisfactorio
              </th>
              <th className="seguimientoEP-table__th text-center">
                Por mejorar
              </th>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">
                TRANSFERENCIA DE CONOCIMIENTO
              </th>
              <td className="seguimientoEP-table__td">
                <p>
                  Demuestra las competencias específicas del programa de
                  formación en situaciones reales de trabajo
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">MEJORA CONTINUA</th>
              <td className="seguimientoEP-table__td">
                <p>
                  Aporta al mejoramiento de los procesos propios de su
                  desempeño.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">
                FORTALECIMIENTO OCUPACIONAL
              </th>
              <td className="seguimientoEP-table__td">
                <p>
                  Autogestiona acciones que fortalezca su perfil ocupacional en
                  el marco de su proyecto de vida.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">OPORTUNIDAD Y CALIDAD</th>
              <td className="seguimientoEP-table__td">
                <p>
                  Presenta con oportunidad y calidad los productos generados en
                  el desarrollo de sus funciones y actividades.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">
                RESPONSABILIDAD AMBIENTAL
              </th>
              <td className="seguimientoEP-table__td">
                <p>
                  Administra los recursos para el desarrollo de sus actividades
                  con criterios de responsabilidad ambiental.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">
                ADMINISTRACIÓN DE RECURSOS
              </th>
              <td className="seguimientoEP-table__td">
                <p>
                  Utiliza de manera racional los materiales, equipos y
                  herramientas suministrados para el desempeño de sus
                  actividades o funciones.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">
                SEGURIDAD OCUPACIONAL E INDUSTRIAL
              </th>
              <td className="seguimientoEP-table__td">
                <p>
                  Utiliza los elementos de seguridad y salud ocupacional de
                  acuerdo con la normatividad vigente establecida para sus
                  actividades o funciones.
                </p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">
                DOCUMENTACIÓN ETAPA PRODUCTIVA
              </th>
              <td className="seguimientoEP-table__td">
                <p>Actualiza permanentemente el portafolio de evidencias.</p>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
              <td className="seguimientoEP-table__td">
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <td className="seguimientoEP-table__td" colSpan={5}>
                <label>
                  <strong>Observaciones del responsable ente Conformador.</strong> (Sus
                  observaciones proporcionan información que aporta al
                  <br />
                  mejoramiento de la calidad de la Formación Profesional
                  Integral):{" "}
                </label>
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <td className="seguimientoEP-table__td" colSpan={5}>
                <label><strong>Observaciones del Aprendiz:</strong></label>
                <textarea></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer-box">
        <footer className="footer-EP">GFPI-F-023 V04</footer>
      </div>
      {/* Cuarta sección */}
      <EvaluacionEp />
    </div>
  );
}

export default SeguimientoEp;
