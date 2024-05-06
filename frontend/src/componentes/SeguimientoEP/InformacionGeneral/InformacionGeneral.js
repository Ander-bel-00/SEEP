import React, { useState } from "react";
import "./css/infoGeneral.css";
import LogoSena from "./img/sena-verde.png";
import PlanEP from "../PlaneacionEP/PlanEP";
import { Link } from "react-router-dom";

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
          PROCESO GESTIÓN DE FORMACIÓN PROFESIONAL INTEGRAL FORMATO PLANEACIÓN,
          SEGUIMIENTO Y EVALUACIÓN ETAPA PRODUCTIVA
        </h2>
        
      </div>
    </div>
  );
}

export default InformacionGeneral;
