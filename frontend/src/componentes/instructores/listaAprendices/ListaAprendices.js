import React, { Fragment, useEffect, useState } from "react";
import clienteAxios from "../../../api/axios";
import { Link, useParams } from "react-router-dom";
import "./css/ListaAprendices.css";
import { FaUser } from "react-icons/fa";

function ListaAprendices() {
  const [aprendices, setAprendices] = useState([]);
  const { numero_ficha } = useParams();
  const [aprendizInfo, setAprendizInfo] = useState([]);
  const [fichaAprendiz, setFichaAprendiz] = useState([]);

  const consultarApi = async () => {
    try {
      const consultarAprendices = await clienteAxios.get(
        `/fichas-getAprendices/${numero_ficha}`
      );
      // Ordenar los aprendices por orden alfabético de apellidos.
      const aprendicesOrdenados = consultarAprendices.data.aprendices.sort(
        (a, b) => {
          return a.apellidos.localeCompare(b.apellidos);
        }
      );
      setAprendices(aprendicesOrdenados); // Actualiza el estado con el array de aprendices ordenados
    } catch (error) {
      console.error("Error al obtener los aprendices:", error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, [numero_ficha]);

  const getInfoAprendiz = async (id_aprendiz) => {
    try {
      const res = await clienteAxios.get(`/aprendiz/id/${id_aprendiz}`);
      setAprendizInfo(res.data);
      const resFichas = await clienteAxios.get(
        `/ficha-aprendiz/ficha/${res.data.numero_ficha}`
      );
      setFichaAprendiz(resFichas.data.ficha);
    } catch (error) {
      console.error("Hubo un error al obtener los datos del aprendiz", error);
    }
  };

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <div className="list-aprendices-box">
          <div className="list-col1">
            <h2 className="list-title">
              Aprendices de la Ficha {numero_ficha}
            </h2>
            <ul className="lista-aprendices">
              {Array.isArray(aprendices) && aprendices.length > 0 ? (
                aprendices.map((aprendiz) => (
                  <li
                    key={aprendiz.id_aprendiz}
                    className="aprendices-fichas"
                    onClick={() => getInfoAprendiz(aprendiz.id_aprendiz)}
                  >
                    <p className="flex p-2 user-info">
                      <p className="user-icon">
                        <FaUser />
                      </p>{" "}
                      <p>
                        {aprendiz.nombres} {aprendiz.apellidos}
                      </p>
                    </p>
                  </li>
                ))
              ) : (
                <li>No hay aprendices asociados a esta ficha</li>
              )}
            </ul>
          </div>
          <div className="list-col2">
            <div>
              <h2>
                {aprendizInfo && !aprendizInfo.id_aprendiz ? (
                  <p>Selecciona un Aprendiz</p>
                ) : (
                  <p>Información del Aprendiz</p>
                )}
              </h2>
              {/* Aquí la info del aprendiz */}

              {aprendizInfo && !aprendizInfo.id_aprendiz ? (
                <p>Selecciona un aprendiz para ver su información</p>
              ) : (
                <>
                  <label>Nombres y apellidos:</label>
                  <p>
                    {aprendizInfo.nombres} {aprendizInfo.apellidos}
                  </p>
                  <label>Número de Ficha</label>
                  <p>{aprendizInfo.numero_ficha}</p>
                  <label>Programa Formación</label>
                  <p>{fichaAprendiz.programa_formacion}</p>
                  <label>Estado del Aprendiz:</label>
                  <p>{aprendizInfo && aprendizInfo.estado ? aprendizInfo.estado : 'NO APROBADO'}</p>
                  {aprendizInfo && !aprendizInfo.id_aprendiz ? null : (
                    <div className="mt-4">
                      <button>
                        <Link
                          to={`/instructor/evaluacion-EP/${aprendizInfo.id_aprendiz}`}
                          className="agendarVisita"
                        >
                          Planeacion y Seguimiento
                        </Link>
                      </button>
                      <button>
                        <Link
                          to={`/instructor/visitas-add/${numero_ficha}/${aprendizInfo.id_aprendiz}`}
                          className="agendarVisita"
                        >
                          Ver o agendar visitas
                        </Link>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ListaAprendices;
