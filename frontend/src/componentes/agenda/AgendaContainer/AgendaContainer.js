import React, { useEffect, useState } from "react";
import "./css/AgendaContainer.css";
import AgendaHeader from "../AgendaHeader/AgendaHeader";
import AgendaBody from "../AgendaBody/AgendaBody";
import PageNavigation from "../PageNavigation/PageNavigation";
import clienteAxios from "../../../api/axios";

function AgendaContainer() {
  const [visitas, setVisitas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [tiposVisitaActivos, setTiposVisitaActivos] = useState([
    "Primera visita",
    "Segunda visita",
    "Tercera visita",
  ]);

  useEffect(() => {
    const obtenerVisitas = async () => {
      try {
        const respuesta = await clienteAxios.get("/visitas-getAll");
        setVisitas(respuesta.data.visitas);
        const totalPaginasCalculado = Math.ceil(
          respuesta.data.visitas.length / 3
        );
        setTotalPaginas(totalPaginasCalculado);
        const eventosActivos = respuesta.data.visitas.filter(
          (evento) => evento.estado !== "cancelado"
        );
        setVisitas(eventosActivos || []);

        // Obtener todos los tipos de visita activos
        const tiposActivos = eventosActivos.map((evento) => evento.tipo_visita);
        setTiposVisitaActivos([...new Set(tiposActivos)]);
      } catch (error) {
        console.error("Error al obtener las visitas:", error);
      }
    };

    obtenerVisitas();
  }, []);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  return (
    <div className="agenda-container">
      <AgendaHeader />
      <AgendaBody visitas={visitas} paginaActual={paginaActual} />
      <div className="page-navigation-container">
        <PageNavigation
          totalPaginas={totalPaginas}
          paginaActual={paginaActual}
          cambiarPagina={cambiarPagina}
        />
      </div>
    </div>
  );
}

export default AgendaContainer;
