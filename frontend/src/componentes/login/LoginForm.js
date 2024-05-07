import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import clienteAxios from "../../api/axios";
import Cookies from "js-cookie";
import logoSena from "./img/sena-verde.png";
import logoSEEP from "./img/LOGO_SEEP-removebg-preview.png";
import "./css/login.styles.css";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const { handleLogin } = useAuth();

  const [formData, setFormData] = useState({
    numero_documento: "",
    contrasena: "",
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const { numero_documento, contrasena } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    // Validar que solo se ingresen números
    if (name === "numero_documento" && !/^\d*$/.test(value)) {
      return; // Si se ingresa un valor no numérico, se ignora
    }
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(navigate, formData);
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else {
        setErrors([error.response.data.message]);
      }
    }
  };

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <Fragment>
      <div className="login-body">
        <header className="header-login">
          <h1 className="text-center cditi-title">
            Centro de Diseño e Innovación Tecnológica Industrial
          </h1>
          <img src={logoSEEP} alt="Logo SEEP" className="logo-seep" />
        </header>
        <main className="main-login-content">
          <h1 className="text-center welcome-title">¡Bienvenidos!</h1>
          <form onSubmit={onSubmit} className="form-login-content">
            <h1 className="text-center">Iniciar Sesión</h1>
            <label className="form-login-content-label">
              Número de Documento
            </label>
            <input
              placeholder="Número de documento"
              type="text"
              name="numero_documento"
              value={numero_documento}
              onChange={onChange}
              className="form-login-content-input"
            />
            <label className="form-login-content-label">Contraseña</label>
            <input
              placeholder="Contraseña"
              type="password"
              name="contrasena"
              value={contrasena}
              onChange={onChange}
              className="form-login-content-input"
            />
            {errors.map((error, i) => (
              <div
                key={i}
                className="text-red-600 ml-6 form-login-content-errors"
              >
                {error}
              </div>
            ))}

            <Link
              to="/restablecimiento-contrasena"
              className="form-login-content-forget"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <div className="form-login-content-btn-box">
              <button type="submit" className={`form-login-content-loginBtn ${errors.length > 0 ? 'btn-with-errors' : ''}`}>
                Iniciar Sesión
              </button>
            </div>
          </form>

          <footer className="piePagina">
            © SENA - Todos los derechos reservados
          </footer>
        </main>
      </div>
    </Fragment>
  );
};

export default LoginForm;
