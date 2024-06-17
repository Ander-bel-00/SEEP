import React, { useEffect, useState } from "react";
import "./css/AgendaCell.css";
import { Link } from "react-router-dom";
import clienteAxios from "../../../api/axios";

function AgendaCell({ visita }) {
  const id_aprendiz = visita.aprendiz;
  const [aprendizInfo, setAprendizInfo] = useState([]);

  useEffect(() => {
    if (id_aprendiz) {
      const obtenerDatosAprendiz = async () => {
        try {
          const res = await clienteAxios.get(`/aprendiz/id/${id_aprendiz}`);
          setAprendizInfo(res.data);
        } catch (error) {
          console.error(
            "Hubo un error al obtenr los datos del aprendiz",
            error
          );
        }
      };
      obtenerDatosAprendiz();
    }
  }, [id_aprendiz]);
  return (
    <Link
      to={`visitas-add/${aprendizInfo ? aprendizInfo.numero_ficha : null}/${id_aprendiz}`}
      className="Agenda-Link"
    >
      <div className="agenda-cell">
        <div>
          <strong>Aprendiz:</strong>
        </div>
        <div className="multiline">
          {visita.nombres_aprendiz} {visita.apellidos_aprendiz}
        </div>
        <div>
          <strong>Número de Ficha:</strong> {visita.numero_ficha_aprendiz}
        </div>
        <div>
          <strong>Programa de Formación:</strong>
        </div>
        <div className="multiline">{visita.programa_formacion}</div>
        <div>
          <strong>Tipo de Visita:</strong> {visita.tipo_visita}
        </div>
        <div>
          <strong>Fecha:</strong> {visita.fecha}
        </div>
        <div>
          <strong>Hora de Inicio:</strong> {visita.hora_inicio}
        </div>
        <div>
          <strong>Hora de Fin:</strong> {visita.hora_fin}
        </div>
        <div>
          <strong>Lugar:</strong>
        </div>
        <div className="multiline">{visita.lugar_visita}</div>
        <div>
          <strong>Modalidad:</strong> {visita.modalidad_visita}
        </div>
      </div>
    </Link>
  );
}

export default AgendaCell;
