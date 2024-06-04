import React, { Fragment, useEffect, useState } from 'react';
import clienteAxios from '../../api/axios';
import moment from 'moment';
import 'moment/locale/es';
import './css/aprendiz.styles.css';
import Swal from 'sweetalert2';

function Aprendiz() {
  const [usuario, setUsuario] = useState(null);
  const [visitas, setVisitas] = useState([]);
  const [aprendizInfo, setAprendizInfo] = useState([]);
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [mostrarActualizarContrasena, setMostrarActualizarContrasena] = useState(false); // Nuevo estado para controlar la visualización del formulario de actualización de contraseña
  const [contrasenaActualizada, setContrasenaActualizada] = useState(false); // Nuevo estado para controlar si la contraseña se ha actualizado correctamente
  const fechasPorTipo = {};
  const horasPorTipo = {};

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const response = await clienteAxios.get('/usuario');
        setUsuario(response.data.usuario);

        const resVisitas = await clienteAxios.get(`/visitas-aprendiz/${response.data.usuario.id_aprendiz}`);
        if (Array.isArray(resVisitas.data.visitas)) {
          setVisitas(resVisitas.data.visitas);
        } else {
          console.error('La respuesta de la API no es un array:', resVisitas.data.visitas);
        }

        const resAprendiz = await clienteAxios.get(`/aprendiz/id/${response.data.usuario.id_aprendiz}`);
        setAprendizInfo(resAprendiz.data);
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    };

    obtenerUsuario();
  }, []);

  const visitasPorTipo = {
    'primera visita': false,
    'segunda visita': false,
    'tercera visita': false
  };

  visitas.forEach(visita => {
    const tipoVisitaNormalizado = visita.tipo_visita.toLowerCase();
    visitasPorTipo[tipoVisitaNormalizado] = true;
    fechasPorTipo[tipoVisitaNormalizado] = visita.fecha;
    horasPorTipo[tipoVisitaNormalizado] = visita.hora_inicio;
  });

  const actualizarContrasena = async () => {
    // Verificar si el campo de nueva contraseña está vacío
    if (!nuevaContrasena.trim()) {
      Swal.fire({
        title: "Error",
        text: "Por favor ingresa una nueva contraseña.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return; // Detener la ejecución de la función si el campo está vacío
    }
  
    try {
      const response = await clienteAxios.put(`/aprendiz/${aprendizInfo.id_aprendiz}/nuevaContrasena`, {
        contrasena: nuevaContrasena
      });
      console.log('Contraseña actualizada', response.data);
      Swal.fire({
        title: "Su contraseña se ha actualizado",
        text: "Le informamos que su contraseña se ha actualizado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then(() => {
        setMostrarActualizarContrasena(false); // Cambiar el estado para ocultar el formulario de actualización de contraseña
        setContrasenaActualizada(true); // Establecer el estado de contraseña actualizada como verdadero
      });
    } catch (error) {
      console.error('Error al actualizar la contraseña:', error);
      Swal.fire({
        title: "Error al actualizar su contraseña",
        text: "Hubo un error al actualizar su contraseña",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };
  

  return (
    <Fragment>
      <div className="container">
        {usuario && usuario.id_aprendiz && usuario.rol_usuario ? (
          <Fragment>
            {!contrasenaActualizada && aprendizInfo && !!aprendizInfo.contrasena_temporal ? (
              <div className="actualizar-contrasena-card">
                <h3 className='text-center'>Debes Actualizar Tu Contraseña</h3>
                <label htmlFor="nuevaContrasena"><strong>Nueva Contraseña</strong></label>
                <input
                  type="password"
                  id="nuevaContrasena"
                  value={nuevaContrasena}
                  placeholder='Ingresa tu nueva contraseña'
                  onChange={(e) => setNuevaContrasena(e.target.value)}
                />
                <button onClick={actualizarContrasena}>Actualizar Contraseña</button>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="card carta info-aprendiz">
                    <i className="bi bi-person-circle"></i>
                    <div className="card-body cuerpo-carta">
                      <h5 className="card-title text-center"><strong>{usuario.rol_usuario}</strong></h5>
                      <p className="card-text texo-carta"><strong>Nombres: </strong> {usuario.nombres}</p>
                      <p className="card-text texo-carta"><strong>Apellidos: </strong> {usuario.apellidos}</p>
                      <p className="card-text texo-carta"><strong>Programa de formación: </strong> {usuario.programa_formacion}</p>
                      <p className="card-text texo-carta"><strong>Número de Ficha: </strong> {usuario.numero_ficha}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 my-4 visitas-cont">
                  <h2>Tus visitas programadas</h2>
                  <table className="tabla">
                    <thead>
                      <tr>
                        <th>Tipo de Visita</th>
                        <th>Fecha de Visita</th>
                        <th>Hora de Visita</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Primera visita</td>
                        <td>{fechasPorTipo['primera visita'] ? moment(fechasPorTipo['primera visita']).format('LL') : 'No agendada'}</td>
                        <td>{horasPorTipo['primera visita'] ? moment(horasPorTipo['primera visita'], 'HH:mm').format('h:mm A') : 'No agendada'}</td>
                      </tr>
                      <tr>
                        <td>Segunda visita</td>
                        <td>{fechasPorTipo['segunda visita'] ? moment(fechasPorTipo['segunda visita']).format('LL') : 'No agendada'}</td>
                        <td>{horasPorTipo['segunda visita'] ? moment(horasPorTipo['segunda visita'], 'HH:mm').format('h:mm A') : 'No agendada'}</td>
                      </tr>
                      <tr>
                        <td>Tercera visita</td>
                        <td>{fechasPorTipo['tercera visita'] ? moment(fechasPorTipo['tercera visita']).format('LL') : 'No agendada'}</td>
                        <td>{horasPorTipo['tercera visita'] ? moment(horasPorTipo['tercera visita'], 'HH:mm').format('h:mm A') : 'No agendada'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </Fragment>
        ) : (
          <p>Cargando usuario...</p>
        )}
      </div>
    </Fragment>
  );
}

export default Aprendiz;
