import React, { useEffect, useState } from "react";
import "./css/infoGeneral.css";
import LogoSena from "./img/sena-verde.png";
import { useParams } from "react-router-dom";
import clienteAxios from "../../../api/axios";

function InformacionGeneral({ evaluacionAprendiz, setEvalaucionAprendiz }) {
  const { id_aprendiz } = useParams();
  const [aprendizInfo, setAprendizInfo] = useState([]);
  const [fichaAprendizInfo, setFichaAprendizInfo] = useState([]);
  const [empresaInfo, setEmpresaInfo] = useState([]);

  useEffect(() => {
    const obtenerDatosAprendiz = async () => {
      if (id_aprendiz) {
        try {
          const res = await clienteAxios.get(`/aprendiz/id/${id_aprendiz}`);
          setAprendizInfo(res.data);
          const empresaData = await clienteAxios.get(
            `/empresas/get/${res.data.id_empresa}`
          );
          setEmpresaInfo(empresaData.data.empresa);
          const fichaData = await clienteAxios.get(
            `/ficha-aprendiz/ficha/${res.data.numero_ficha}`
          );
          setFichaAprendizInfo(fichaData.data.ficha);
        } catch (error) {
          console.error("Error al obtner los datos del aprendiz", error);
        }
      }
    };
    obtenerDatosAprendiz();
  }, [id_aprendiz]);


  return (
    <div className="main-container__contenedor-hijo">
      <form>
        <div className="info-general-content-box" id="infoGeneral">
          <img
            src={LogoSena}
            alt="logo-sena"
            className="info-general-content-box__logo-sena"
          />
          <h2 className="info-general-content-box__main-title">
            PROCESO GESTIÓN DE FORMACIÓN PROFESIONAL INTEGRAL <br />
            FORMATO PLANEACIÓN, SEGUIMIENTO Y EVALUACIÓN ETAPA PRODUCTIVA
          </h2>

          <h3 className="mt-4 font-bold">1. INFORMACIÓN GENERAL</h3>

          <table className="info-general-table">
            <thead>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">Regional: </th>
                <td className="info-general-table_td">
                  <input
                    type="text"
                    required
                    readOnly
                    value={
                      fichaAprendizInfo
                        ? fichaAprendizInfo.nombre_regional
                        : null
                    }
                  />
                </td>
                <th className="info-general-table_th">Centro de Formación: </th>
                <td className="info-general-table_td" colSpan={2}>
                  <p className="relative top-2 left-1">
                    {fichaAprendizInfo
                      ? fichaAprendizInfo.centro_formacion
                      : null}
                  </p>
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">
                  Programa de Formación:{" "}
                </th>

                <td className="info-general-table_td" colSpan={2}>
                  <input
                    type="text"
                    required
                    readOnly
                    value={
                      fichaAprendizInfo
                        ? fichaAprendizInfo.programa_formacion
                        : null
                    }
                  />
                </td>
                <th className="info-general-table_th">No. de Ficha: </th>
                <td className="info-general-table_td">
                  <input
                    type="number"
                    required
                    readOnly
                    value={
                      fichaAprendizInfo ? fichaAprendizInfo.numero_ficha : null
                    }
                  />
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
                  <p className="relative top-2 left-3">
                    {aprendizInfo ? aprendizInfo.nombres : null}{" "}
                    {aprendizInfo ? aprendizInfo.apellidos : null}
                  </p>
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">Identificación: </th>
                <td className="info-general-table_td" colSpan={3}>
                  <input
                    type="text"
                    required
                    readOnly
                    value={aprendizInfo ? aprendizInfo.numero_documento : null}
                  />
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">Teléfono: </th>
                <td className="info-general-table_td" colSpan={3}>
                  <input
                    type="number"
                    required
                    readOnly
                    value={aprendizInfo ? aprendizInfo.numero_celular1 : null}
                  />
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">Email: </th>
                <td className="info-general-table_td" colSpan={3}>
                  <input
                    type="email"
                    required
                    readOnly
                    value={
                      aprendizInfo ? aprendizInfo.correo_electronico1 : null
                    }
                  />
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">
                  Alternativa registrada en SOFIA plus
                </th>
                <td className="info-general-table_td" colSpan={3}>
                  <input
                    type="email"
                    required
                    readOnly
                    value={
                      aprendizInfo
                        ? aprendizInfo.correo_electronico_sofia_plus
                        : null
                    }
                  />
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
                  <p className="relative top-2 left-3">
                    {empresaInfo ? empresaInfo.razon_social : null}
                  </p>
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">Nit: </th>
                <td className="info-general-table_td" colSpan={3}>
                  <p className="relative top-2 left-3">
                    {empresaInfo ? empresaInfo.nit_empresa : null}
                  </p>
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">Dirección: </th>
                <td className="info-general-table_td" colSpan={3}>
                  <p className="relative top-2 left-3">
                    {empresaInfo ? empresaInfo.direccion_empresa : null}
                  </p>
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">
                  Nombre del Jefe Inmediato del aprendiz:{" "}
                </th>
                <td className="info-general-table_td" colSpan={3}>
                  <p className="relative top-2 left-3">
                    {empresaInfo ? empresaInfo.nombre_jefe_inmediato : null}{" "}
                    {empresaInfo ? empresaInfo.apellidos_jefe_inmediato : null}
                  </p>
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">Cargo:</th>
                <td className="info-general-table_td" colSpan={3}>
                  <p className="relative top-2 left-3">
                    {empresaInfo ? empresaInfo.cargo_jefe_inmediato : null}
                  </p>
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">Teléfono: </th>
                <td className="info-general-table_td" colSpan={3}>
                  <p className="relative top-2 left-3">
                    {empresaInfo ? empresaInfo.telefono_jefe_inmediato : null}
                  </p>
                </td>
              </tr>
              <tr className="info-general-table_tr">
                <th className="info-general-table_th">Email: </th>
                <td className="info-general-table_td" colSpan={3}>
                  <p className="relative top-2 left-3">
                    {empresaInfo ? empresaInfo.email_jefe_imediato : null}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default InformacionGeneral;
