import React, { Fragment, useEffect, useRef, useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidLogOut } from "react-icons/bi";
import { IoDocuments } from "react-icons/io5";
import { HiUserAdd } from "react-icons/hi";
import { TiUserAdd } from "react-icons/ti";
import { FaFileExcel } from "react-icons/fa";
import clienteAxios from "../../../api/axios";
import "./css/NavbarInstructor.css";

const NavbarInstructor = ({ showNav, handleLogout, setShowNav, modalIsOpen  }) => {
  const [usuario, setUsuario] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [hoveredPosition, setHoveredPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNav]);

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
            <div ref={menuRef} className="sidenavInstructor">
              <button className="close-btn" onClick={handleCloseMenu}>
                X
              </button>
              {!modalIsOpen && (
                <ul className="list-group menu-content">
                <MenuItem
                  title="Inicio"
                  icon={<IoHomeSharp className="inline-block" />}
                  link="/"
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                />
                <MenuItem
                  title="Agenda"
                  icon={<FaCalendar className="inline-block mr-1" />}
                  link={`agenda/visitas`}
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                />
                <MenuItem
                  title="Documentos"
                  icon={<IoDocuments className="inline-block mr-1" />}
                  link={`${usuario.id_instructor}/documents-instructor`}
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                />
                <MenuItem
                  title="Bitácoras"
                  icon={<FaFileExcel className="inline-block mr-1" />}
                  link={`${usuario.id_instructor}/bitacoras-instructor`}
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                />
                <MenuItem
                  title="Registrar Fichas"
                  icon={<HiUserAdd className="inline-block mr-1" />}
                  link={`${usuario.id_instructor}/nuevaFicha`}
                  handleHover={handleHover}
                  handleHoverEnd={handleHoverEnd}
                />
                <MenuItem
                  title="Registrar Aprendices"
                  icon={<TiUserAdd className="inline-block mr-1" />}
                  link={`${usuario.id_instructor}/aprendiz-add`}
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
              )}
              {hoveredOption && (
                <div className="hovered-options" style={{ top: hoveredPosition.top, left: hoveredPosition.left }}>
                  <div className="hovered-text">{hoveredOption}</div>
                </div>
              )}
            </div>
          ) : (
            <div ref={menuRef} className={showNav ? 'sidenav active' : 'sidenav'}>
              <button className="close-btn" onClick={handleCloseMenu}>X</button>
              <h3 className="text-xl userWelcome">¡Bienvenido {usuario.nombres}!</h3>
              <ul className="list-group menu-content">
                <li className="menu-options" onClick={handleCloseMenu}>
                  <Link to={'/'}>
                    <IoHomeSharp className="inline-block" /> Inicio
                  </Link>
                </li>
                <li className="menu-options text-nowrap" onClick={handleCloseMenu}>
                  <Link to={`agenda/visitas`}>
                    <FaCalendar className="inline-block mr-1" /> Agenda
                  </Link>
                </li>
                <li className="menu-options text-nowrap" onClick={handleCloseMenu}>
                  <Link to={`${usuario.id_instructor}/documents-instructor`}>
                    <IoDocuments className="inline-block mr-1" /> Documentos
                  </Link>
                </li>
                <li className="menu-options text-nowrap" onClick={handleCloseMenu}>
                  <Link to={`${usuario.id_instructor}/bitacoras-instructor`}>
                    <FaFileExcel className="inline-block mr-1" /> Bitácoras
                  </Link>
                </li>
                <li className="menu-options" onClick={handleCloseMenu}>
                  <Link to={`${usuario.id_instructor}/nuevaFicha`}>
                    <HiUserAdd className="inline-block mr-1" /> Registrar Fichas
                  </Link>
                </li>
                <li className="menu-options" onClick={handleCloseMenu}>
                  <Link to={`${usuario.id_instructor}/aprendiz-add`}>
                    <TiUserAdd className="inline-block mr-1" /> Registrar Aprendices
                  </Link>
                </li>
                <li className="menu-options text-nowrap">
                  <Link to="/login" onClick={handleLogout}>
                    <BiSolidLogOut className="inline-block mr-1" /> Cerrar sesión
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <p>Cargando usuario...</p>
      )}
    </Fragment>
  );
};

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

export default NavbarInstructor;
