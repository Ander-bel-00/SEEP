import React, { Fragment, useEffect, useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiSolidLogOut } from "react-icons/bi";
import { IoDocuments } from "react-icons/io5";
import { FaFileExcel } from "react-icons/fa";
import clienteAxios from "../../../api/axios";
import './css/NavbarAprendiz.css';

const NavbarAprendiz = ({ showNav, handleLogout, setShowNav }) => {
    const [usuario, setUsuario] = useState(null);
    const [hoveredOption, setHoveredOption] = useState(null);
    const [hoveredPosition, setHoveredPosition] = useState({ top: 0, left: 0 });
  
    useEffect(() => {
      const obtenerUsuario = async () => {
        try {
          const response = await clienteAxios.get("/usuario");
          setUsuario(response.data.usuario);
        } catch (error) {
          console.error("Error al obtener la información del usuario:", error);
        }
      };
  
      obtenerUsuario();
    }, []);
  
    const handleCloseMenu = () => {
      setShowNav(false);
    };
  
    const handleHover = (option, position) => {
      setHoveredOption(option);
      const topPosition = position.top + 22;
      // Ajusta las coordenadas left y top para el texto del hover
      setHoveredPosition({
        top: topPosition,
        left: position.left + position.width + 70 // Suma la posición de desplazamiento del menú
      });
    };
  
    const handleHoverEnd = () => {
      setHoveredOption(null);
    };
    return (
        <Fragment>
        {usuario && usuario.rol_usuario ? (
          <>
            {window.innerWidth >= 1024 ? (
              <div className={showNav ? "sidenav active" : "sidenavAprendiz"}>
              <button className="close-btn" onClick={handleCloseMenu}>
                X
              </button>
              <ul className="list-group menu-content">
                <MenuItem
                  title="Inicio"
                  icon={<IoHomeSharp className="inline-block" />}
                  link="/"
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                />
                <MenuItem
                  title="Documentos"
                  icon={<IoDocuments className="inline-block mr-1" />}
                  link={`${usuario.id_aprendiz}/documents-aprendiz`}
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                />
                <MenuItem
                  title="Bitácoras"
                  icon={<FaFileExcel className="inline-block mr-1" />}
                  link={`${usuario.id_aprendiz}/bitacoras-aprendiz`}
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                />
                <MenuItem
                  title="Cerrar Sesión"
                  icon={<BiSolidLogOut className="inline-block mr-1" />}
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                  handleLogout={handleLogout}
                />
              </ul>
              {hoveredOption && (
                <div className="hovered-options" style={{ top: hoveredPosition.top, left: hoveredPosition.left }}>
                  <div className="hovered-text">{hoveredOption}</div>
                </div>
              )}
            </div>
            ): (
              <div className={showNav ? 'sidenav active' : 'sidenav'}>
                    <button className="close-btn" onClick={handleCloseMenu}>X</button>
                    <h3 className="text-xl userWelcome">¡Bienvenido {usuario.nombres}!</h3>
                    <ul className="list-group menu-content">
                        <li className="menu-options text-nowrap"><a href="/"><IoHomeSharp className="inline-block"/> Inicio</a></li>
                        {/* <li className="menu-options text-nowrap"><a href="#"><FaUser className="inline-block"/> Perfil</a></li> */}
                        <li className="menu-options text-nowrap"><Link to={`/${usuario.rol_usuario}/${usuario.id_aprendiz}/documents-aprendiz`}><IoDocuments className="inline-block"/> Documentos</Link></li>
                        <li className="menu-options text-nowrap"><Link to={`/${usuario.rol_usuario}/${usuario.id_aprendiz}/bitacoras-aprendiz`}><FaFileExcel className="inline-block"/> Bitacoras</Link></li>
                        <li className="menu-options text-nowrap"><Link to="/login" onClick={handleLogout}><BiSolidLogOut className="inline-block"/> Cerrar sesión</Link></li>
                    </ul>
                </div>
            )}
          </>
        ) : (
          <p>Cargando usuario...</p>
        )}
      </Fragment>
    )
}

const MenuItem = ({ title, icon, link, handleHover, handleHoverEnd, handleLogout }) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
  
    useEffect(() => {
      const updatePosition = () => {
        const element = document.getElementById(title.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          setPosition({ top: rect.top, left: rect.right });
        }
      };
  
      updatePosition();
  
      window.addEventListener("resize", updatePosition);
  
      return () => {
        window.removeEventListener("resize", updatePosition);
      };
    }, [title]);
  
    
  
    return (
      <li
        id={title.toLowerCase()}
        className="menu-options"
        onMouseEnter={() => handleHover(title, position)}
        onMouseLeave={handleHoverEnd}
        onClick={handleLogout}
      >
        <Link to={link}>
          <div className="menu-option-wrapper">
            {icon}
          </div>
        </Link>
      </li>
    );
  };

export default NavbarAprendiz;