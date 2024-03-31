import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import clienteAxios from '../../api/axios';
import Cookies from 'js-cookie';
import logoSena from './img/sena-verde.png';
import './css/login.styles.css';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    rol_usuario: '',
    numero_documento: '',
    contrasena: ''
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const { rol_usuario, numero_documento, contrasena } = formData;

  const onChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await clienteAxios.post('/login', formData);
      Cookies.set('token', res.data.token);
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
    <div className='body-login-form'>
      <header className="flex justify-between header-login">
        <img src={logoSena} alt="logo-sena" id="logo-sena" className="logo-sena w-16 ml-2 my-1" />
        <h2 className="text-4xl seepTitle">S.E.E.P</h2>
      </header>

      <div className="flex h-[calc(100vh-100px)] items-center justify-center login-content">
        <div className="bg-white max-w-md w-full p-10 rounded-md form-container mb-4">
          <h1 className="text-center text-2xl font-bold my-4">Iniciar sesión</h1>
          <form onSubmit={onSubmit} className='form-options'>
            <p className="selectRol">
              <select
                name="rol_usuario"
                value={rol_usuario}
                onChange={onChange}
                className="w-80 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6 options"
              >
                <option value="" disabled>Selecciona un rol...</option>
                <option value="instructor">Instructor</option>
                <option value="aprendiz">Aprendiz</option>
                <option value="admin">Administrador</option>
              </select>
            </p>
            <div className="input-container">
              <input
                placeholder="Número de documento"
                type="text"
                name="numero_documento"
                value={numero_documento}
                onChange={onChange}
                className="flex items-center justify-center w-80 bg-white text-black px-4 py-2 rounded-md my-2 border ml-6 options"
              />
            </div>
            <div className="input-container">
              <input
                placeholder="Contraseña"
                type="password"
                name="contrasena"
                value={contrasena}
                onChange={onChange}
                className="w-80 bg-white text-black px-4 py-2 rounded-md my-2 border ml-6 options"
              />
            </div>
            {errors.map((error, i) => (
              <div key={i} className="text-red-600 ml-6">
                {error}
              </div>
            ))}

            <div>
              <Link to="/restablecimiento-contrasena" className='forget'>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <button type="submit" className="loginButton rounded-md p-3 ml-32 mt-4">
              Iniciar Sesión
            </button>
          </form>
        </div>
        <footer className="piePagina">© SENA - Todos los derechos reservados</footer>
      </div>
    </div>
  );
};

export default LoginForm;
