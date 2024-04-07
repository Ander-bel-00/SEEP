import React from 'react';
import './css/AgendaCell.css';
import { Link } from 'react-router-dom';

function AgendaCell({ visita }) {
  const numero_ficha = visita.numero_ficha_aprendiz;
  const id_aprendiz = visita.aprendiz
  return (
    <Link to={`visitas-add/${numero_ficha}/${id_aprendiz}`} className='Agenda-Link'>
      <div className="agenda-cell">
        <div><strong>Aprendiz:</strong></div>
        <div className='multiline'>{visita.nombres_aprendiz} {visita.apellidos_aprendiz}</div>
        <div><strong>Número de Ficha:</strong> {visita.numero_ficha_aprendiz}</div>
        <div><strong>Programa de Formación:</strong></div>
        <div className="multiline">{visita.programa_formacion}</div>
        <div><strong>Tipo de Visita:</strong> {visita.tipo_visita}</div>
        <div><strong>Fecha:</strong> {visita.fecha}</div>
        <div><strong>Hora de Inicio:</strong> {visita.hora_inicio}</div>
        <div><strong>Hora de Fin:</strong> {visita.hora_fin}</div>
        <div><strong>Lugar:</strong></div>
        <div className="multiline">{visita.lugar_visita}</div>
        <div><strong>Modalidad:</strong> {visita.modalidad_visita}</div>
      </div>
    </Link>
    
  );
}

export default AgendaCell;
