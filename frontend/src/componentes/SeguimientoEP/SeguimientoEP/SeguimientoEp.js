import React, { useState } from "react";
import LogoSena from "./img/sena-verde.png";
import "./css/SegumientoEP.css";

function SeguimientoEp({evaluacionAprendiz, setEvalaucionAprendiz}) {
  const [selected, setSelected] = useState(""); // Estado para almacenar la selección

  const handleSelection = (type) => {
    setSelected(type);
    setEvalaucionAprendiz({ ...evaluacionAprendiz, tipo_informe: type });
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEvalaucionAprendiz({ ...evaluacionAprendiz, [name]: value });
  };

  console.log(evaluacionAprendiz)

  return (
    <div className="main-container__contenedor-hijo">
      <div className="segumiento-table-box" id="seguimientoEP">
        <img
          src={LogoSena}
          alt="logo-sena"
          className="plan-content-box__logo-sena"
        />
        <table className="seguimientoEP-table">
          <thead>
            <tr className="seguimientoEP-table__tr">
              <td colSpan={6} className="seguimientoEP-table__td">
                <h3 className="text-center font-bold">
                  3. SEGUIMIENTO ETAPA PRODUCTIVA
                </h3>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th" rowSpan={2}>
                TIPO DE INFORME
              </th>
              <td className="seguimientoEP-table__td col_parcial">
                <div
                  className="selectable-container"
                  onClick={() => handleSelection("Parcial")}
                >
                  <p className="font-medium">Parcial:</p>
                  <div
                    className={`selectable-box ${
                      selected === "Parcial" ? "selected-box" : ""
                    }`}
                  >
                    {selected && selected === "Parcial" ? (
                      <input
                        type="text"
                        value={selected === "Parcial" ? "X" : ""}
                        className="input-check-seguimineto"
                        readOnly
                      />
                    ) : null}
                  </div>
                </div>
              </td>
              <th className="seguimientoEP-table__th text-center" rowSpan={2}>
                PERÍODO EVALUADO
              </th>
              <td className="seguimientoEP-table__td" colSpan={3}>
                <p className="font-medium">
                  Inicio: <input type="date" className="ml-2" />
                </p>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <td className="seguimientoEP-table__td col_parcial">
                <div
                  className="selectable-container"
                  onClick={() => handleSelection("Final")}
                >
                  <p className="font-medium">Final:</p>
                  <div
                    className={`selectable-box ${
                      selected === "Final" ? "selected-box" : ""
                    }`}
                  >
                     {selected && selected === "Final" ? (
                      <input
                        type="text"
                        value={selected === "Final" ? "X" : ""}
                        className="input-check-seguimineto"
                        readOnly
                      />
                    ) : null}
                  </div>
                </div>
              </td>
              <td className="seguimientoEP-table__td text-nowrap" colSpan={3}>
                <p className="font-medium">
                  Finalización: <input type="date" className="ml-2" />
                </p>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th text-center" colSpan={6}>
                FACTORES ACTITUDINALES Y COMPORTAMENTALES
              </th>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th text-center" rowSpan={2}>
                VARIABLE
              </th>
              <th
                className="seguimientoEP-table__th text-center"
                rowSpan={2}
                colSpan={2}
              >
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
              <th className="seguimientoEP-table__th">
                Por <br />
                mejorar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th">
                RELACIONES INTERPERSONALES
              </th>
              <td className="seguimientoEP-table__td" colSpan={2}>
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
              <td className="seguimientoEP-table__td" colSpan={2}>
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Propone alternativas de solución a situaciones
                  <br /> problemáticas, en el contexto del desarrollo de su
                  <br /> etapa productiva.
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Asume compromiso de las funciones y <br /> responsabilidades
                  asignadas en el desarrollo de su <br />
                  trabajo.
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Demuestra capacidad para ordenar y disponer los <br />{" "}
                  elementos necesarios e información para facilitar <br /> la
                  ejecución de un trabajo y el logro de los
                  <br /> objetivos.
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
              <th className="seguimientoEP-table__th text-center" colSpan={6}>
                FACTORES TÉCNICOS
              </th>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <th className="seguimientoEP-table__th text-center" rowSpan={2}>
                VARIABLE
              </th>
              <th
                className="seguimientoEP-table__th text-center"
                rowSpan={2}
                colSpan={2}
              >
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Demuestra las competencias específicas del <br /> programa de
                  formación en situaciones reales de <br /> trabajo
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Aporta al mejoramiento de los procesos propios <br /> de su
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Autogestiona acciones que fortalezca su perfil <br />{" "}
                  ocupacional en el marco de su proyecto de vida.
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Presenta con oportunidad y calidad los productos
                  <br /> generados en el desarrollo de sus funciones y <br />{" "}
                  actividades.
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Administra los recursos para el desarrollo de sus
                  <br /> actividades con criterios de responsabilidad
                  <br /> ambiental.
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Utiliza de manera racional los materiales, equipos
                  <br /> y herramientas suministrados para el desempeño
                  <br /> de sus actividades o funciones.
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Utiliza los elementos de seguridad y salud
                  <br /> ocupacional de acuerdo con la normatividad
                  <br /> vigente establecida para sus actividades o<br />{" "}
                  funciones.
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
              <td className="seguimientoEP-table__td" colSpan={2}>
                <p>
                  Actualiza permanentemente el portafolio de <br /> evidencias.
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
              <td className="seguimientoEP-table__td" colSpan={6}>
                <label>
                  <strong>
                    Observaciones del responsable ente Conformador.
                  </strong>{" "}
                  (Sus observaciones proporcionan información que aporta al
                  <br />
                  mejoramiento de la calidad de la Formación Profesional
                  Integral):{" "}
                </label>
                <textarea></textarea>
              </td>
            </tr>
            <tr className="seguimientoEP-table__tr">
              <td className="seguimientoEP-table__td" colSpan={6}>
                <label>
                  <strong>Observaciones del Aprendiz:</strong>
                </label>
                <textarea></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer-box">
        <footer className="footer-EP">GFPI-F-023 V04</footer>
      </div>
    </div>
  );
}

export default SeguimientoEp;
