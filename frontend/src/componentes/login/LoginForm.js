import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import clienteAxios from "../../api/axios";
import Cookies from "js-cookie";
import logoSena from "./img/sena-verde.png";
import logoSEEP from "./img/LOGO_SEEP-removebg-preview.png";
import "./css/login.styles.css";

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    rol_usuario: "",
    numero_documento: "",
    contrasena: "",
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const { rol_usuario, numero_documento, contrasena } = formData;

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
      const res = await clienteAxios.post("/login", formData);
      Cookies.set("token", res.data.token);
      onLogin({ role: formData.rol_usuario }); // Notifica al componente padre sobre el inicio de sesión exitoso
      navigate(`/${formData.rol_usuario.toLowerCase()}`); // Redirigir al usuario a la página correspondiente a su rol
    } catch (error) {
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
        <h1 className="text-center welcome-title">¡Bienvenidos!</h1>
        <main className="main-login-content">
          <form onSubmit={onSubmit} className="form-login-content">
            <h1 className="text-center">Iniciar Sesión</h1>
            <select
              name="rol_usuario"
              value={rol_usuario}
              onChange={onChange}
              className="form-login-content-input"
            >
              <option value="" disabled>
                Selecciona un rol...
              </option>
              <option value="instructor">Instructor</option>
              <option value="aprendiz">Aprendiz</option>
              <option value="admin">Administrador</option>
            </select>
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
              <button type="submit" className="form-login-content-loginBtn">
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
