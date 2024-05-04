import React, { Fragment, useEffect, useState } from "react";
import clienteAxios from "../../api/axios";
import logoSena from "./img/sena-verde.png";
import "./css/Instructores.css";
import { Link } from "react-router-dom";

function Instructor() {
  const [usuario, setUsuario] = useState(null);
  const [fichasAsignadas, setFichasAsignadas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [fichasPorPagina] = useState(3); // Número de fichas por página

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const response = await clienteAxios.get("/usuario");
        setUsuario(response.data.usuario);

        const responseFichas = await clienteAxios.get(
          `/instructor/${response.data.usuario.numero_documento}/fichas-asignadas`
        );
        const fichasOrdenadas = responseFichas.data.fichasAsignadas.sort(
          (a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
          }
        );
        setFichasAsignadas(fichasOrdenadas);
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
      }
    };

    obtenerUsuario();
  }, []);

  // Función para formatear la fecha en el formato Año-mes-día
  const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString);
    return fecha.toISOString().split("T")[0];
  };

  // Función para manejar cambios en el campo de búsqueda
  const handleChangeBusqueda = (event) => {
    let valor = event.target.value;
    if (isNaN(valor)) {
      valor = valor.replace(/\D/g, "");
    }
    setBusqueda(valor);
  };

  // Filtrar las fichas según el número de ficha ingresado en el campo de búsqueda
  const fichasFiltradas = fichasAsignadas.filter((ficha) =>
    ficha.numero_ficha.toString().includes(busqueda)
  );

  // Calcular el índice inicial y final de las fichas a mostrar en la página actual
  const indexInicial = (currentPage - 1) * fichasPorPagina;
  const indexFinal = currentPage * fichasPorPagina;

  // Obtener las fichas a mostrar en la página actual
  const fichasPagina = fichasFiltradas.slice(indexInicial, indexFinal);

  // Funciones para cambiar de página
  const pageBefore = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageAfter = () => {
    const totalPages = Math.ceil(fichasFiltradas.length / fichasPorPagina);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <div className="titles mt-11">
          <h2 className="fichasAsignedTitle ">Agendamiento de visitas</h2>
          <h5 className=" text-gray-500 selctFicha">Selecciona una ficha</h5>
        </div>
        {usuario && usuario.rol_usuario ? (
          <>
            {window.innerWidth >= 1024 ? (
              <Fragment>
                <div className="row my-2 fichas-content rounded-md">
                  <div className="searchContent">
                    <input
                      type="search"
                      placeholder="Buscar Fichas..."
                      className="buscarFichas"
                      name="searchFichas"
                      value={busqueda}
                      onChange={handleChangeBusqueda}
                    />
                  </div>
                  {fichasPagina.length > 0 ? (
                    <div className="fichas-grid">
                      {fichasPagina.map((ficha) => (
                        <div key={ficha.numero_ficha} className="ficha-card">
                          <Link
                            to={`/${usuario.rol_usuario}/aprendicesFicha/${ficha.numero_ficha}`}
                            title="Presiona en cada ficha para acceder a su información"
                            className="link-ficha"
                          >
                            <div className="card fichas">
                              <div className="card-body carta-cuerpo">
                                <h5 className="card-title">
                                  Ficha {ficha.numero_ficha}
                                </h5>
                                <img
                                  src={logoSena}
                                  className="w-9 logSenaFichas relative"
                                />
                                <p className="card-text">
                                  <strong>Programa de formación: </strong>
                                  {ficha.programa_formacion}
                                </p>
                                <p className="card-text">
                                  <strong>Nivel de formación: </strong>
                                  {ficha.nivel_formacion}
                                </p>
                                <p className="card-text">
                                  <strong>Título obtenido: </strong>
                                  {ficha.titulo_obtenido}
                                </p>
                                <p className="card-text">
                                  <strong>Fecha fin lectiva: </strong>
                                  {formatearFecha(ficha.fecha_fin_lectiva)}
                                </p>
                              </div>
                              <button className="btnVerFicha">
                                <Link
                                  to={`aprendicesFicha/${ficha.numero_ficha}`}
                                  className="verFichas"
                                >
                                  Ver Ficha
                                </Link>
                              </button>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="noFichas">
                      <p>No hay fichas asignadas</p>
                    </div>
                  )}
                </div>
              </Fragment>
            ) : (
              // Para dispositivos moviles
              <Fragment>
                <div className="row my-2 fichas-content rounded-md">
                  <div className="searchContent">
                    <input
                      type="search"
                      placeholder="Buscar Fichas..."
                      className="relative buscarFichas"
                      name="searchFichas"
                      value={busqueda}
                      onChange={handleChangeBusqueda}
                    />
                  </div>
                  {fichasFiltradas.length > 0 ? (
                    <div className="fichas-grid">
                      {fichasFiltradas.map((ficha) => (
                        <div
                          key={ficha.numero_ficha}
                          className="ficha-card"
                          title="Presiona en cada ficha
                      para acceder a su información"
                        >
                          <Link
                            to={`/${usuario.rol_usuario}/aprendicesFicha/${ficha.numero_ficha}`}
                            className="link-ficha"
                          >
                            <div className="card fichas">
                              <div className="card-body carta-cuerpo">
                                <h5 className="card-title">
                                  Ficha {ficha.numero_ficha}
                                </h5>
                                <img
                                  src={logoSena}
                                  className="w-9 logSenaFichas relative"
                                />
                                <p className="card-text">
                                  <strong>Programa de formación: </strong>
                                  {ficha.programa_formacion}
                                </p>
                                <p className="card-text">
                                  <strong>Nivel de formación: </strong>
                                  {ficha.nivel_formacion}
                                </p>
                                <p className="card-text">
                                  <strong>Título obtenido: </strong>
                                  {ficha.titulo_obtenido}
                                </p>
                                <p className="card-text">
                                  <strong>Fecha fin lectiva: </strong>
                                  {formatearFecha(ficha.fecha_fin_lectiva)}
                                </p>
                              </div>
                              <button className="btnVerFicha" type="button">
                                <Link
                                  to={`aprendicesFicha/${ficha.numero_ficha}`}
                                  className="verFichas"
                                >
                                  Ver Ficha
                                </Link>
                              </button>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="noFichas">
                      <p>No hay fichas asignadas</p>
                    </div>
                  )}
                </div>
              </Fragment>
            )}
          </>
        ) : (
          <p>Cargando usuario...</p>
        )}
        <div className="pageFichas-content">
          <button
            className="btn-pages"
            onClick={pageBefore}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>
            {currentPage} de {" "}
            {Math.ceil(fichasFiltradas.length / fichasPorPagina)}
          </span>
          <button
            className="btn-pages"
            onClick={pageAfter}
            disabled={
              currentPage ===
              Math.ceil(fichasFiltradas.length / fichasPorPagina)
            }
          >
            Siguiente
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Instructor;
