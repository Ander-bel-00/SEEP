import React, { Fragment, useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./css/calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import clienteAxios from "../../api/axios";
import { FaThList } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const localizer = momentLocalizer(moment);

const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, "dddd", culture),
};

function Calendario() {
  moment.locale("es");
  const { numero_ficha, rol_usuario, id_aprendiz } = useParams();
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const [selectedPlaceEvent, setSelectedPlaceEvent] = useState("");
  const [selectedModalidadEvent, setSelectedModalidadEvent] = useState("");
  const [aprendizInfo, setAprendizInfo] = useState([]);
  const [fichaAprendizInfo, setFichaAprendizInfo] = useState([]);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {

        const resAprendiz = await clienteAxios.get(`/aprendiz/id/${id_aprendiz}`);
        setAprendizInfo(resAprendiz.data);
        const fichaData = await clienteAxios.get(
          `/ficha-aprendiz/ficha/${resAprendiz.data.numero_ficha}`
        );
        setFichaAprendizInfo(fichaData.data.ficha);
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
      }
    };

    obtenerUsuario();
  });
  
  useEffect(() => {
    cargarEventos();
  }, []);

  const cargarEventos = async () => {
    try {
      const response = await clienteAxios.get(
        `/visitas-aprendiz/${id_aprendiz}`
      );
      setEvents(response.data.visitas || []);
    } catch (error) {
      console.error("Error al cargar eventos:", error);
    }
  };

  const openModalAgregarEvento = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setSelectedTime("");
    setEventTitle("");
    setShowModal(true);
  };

  const openModalVerEvento = (event) => {
    setSelectedEvent(event);
    setSelectedDate(moment(event.fecha).toDate());
    setSelectedTime(event.hora_inicio);
    setEventTitle(event.tipo_visita);
    setShowModal(true);
  };

  const openEditModal = () => {
    setShowEditModal(true); // Mostrar el modal de edición al hacer clic en "Editar Evento"
    setShowModal(false);
    setEventTitle(selectedEvent.tipo_visita);
    setSelectedTime(selectedEvent.hora_inicio);
    setSelectedEndTime(selectedEvent.hora_fin);
    setSelectedPlaceEvent(selectedEvent.lugar_visita);
    setSelectedModalidadEvent(selectedEvent.modalidad_visita);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowEditModal(false);
    setSelectedDate(null);
    setEventTitle("");
    setSelectedTime("");
    setSelectedEvent(null);
  };

  const saveEvent = async () => {
    if (!eventTitle || !selectedDate || !selectedTime || !selectedEndTime) {
      console.error("Por favor, complete todos los campos.");
      return;
    }

    const formattedStartTime = moment(selectedTime, "HH:mm").format("HH:mm");
    const formattedEndTime = moment(selectedEndTime, "HH:mm").format("HH:mm");

    // Obtener la fecha actual
    const currentDate = moment();

    // Verificar si la fecha seleccionada es anterior a la fecha actual
    if (moment(selectedDate).isBefore(currentDate, "day")) {
      console.error("No se pueden agregar eventos en fechas anteriores a hoy.");
      // Mostrar mensaje de error en el frontend
      Swal.fire({
        icon: "error",
        title: "Error al agendar visita",
        text: "Solo se permiten agendar visitas en la fecha actual o en fechas posteriores.",
      });
      return;
    }

    try {
      const response = await clienteAxios.post(`/nuevaVisita/${id_aprendiz}`, {
        tipo_visita: eventTitle,
        fecha: selectedDate,
        hora_inicio: formattedStartTime,
        hora_fin: formattedEndTime,
        lugar_visita: selectedPlaceEvent,
        modalidad_visita: selectedModalidadEvent,
      });

      setEvents((prevEvents) => [...prevEvents, response.data]);
      closeModal();
      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: "success",
        title: "Visita agendada correctamente",
        text: "La visita se ha agendado correctamente.",
      });
    } catch (error) {
      console.error("Error al guardar el evento:", error);
      // Mostrar SweetAlert de error con el mensaje del backend
      Swal.fire({
        icon: "error",
        title: "Error al agendar visita",
        text:
          error.response.data.error ||
          "Hubo un error al intentar agendar la visita.",
      });
    }
  };

  const editarEvento = async () => {
    try {
      if (!selectedEvent || !eventTitle || !selectedDate || !selectedTime) {
        console.error("Por favor, complete todos los campos.");
        return;
      }

      const response = await clienteAxios.put(
        `/visitas-update/${selectedEvent.id_visita}`,
        {
          tipo_visita: eventTitle,
          fecha: selectedDate,
          hora_inicio: selectedTime,
          hora_fin: selectedEndTime,
          lugar_visita: selectedPlaceEvent,
          modalidad_visita: selectedModalidadEvent,
        }
      );

      // Recargar los eventos después de la edición
      await cargarEventos();

      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: "success",
        title: "Visita actualizada",
        text: "La visita se actualizó correctamente.",
      });

      closeModal(); // Cerrar el modal después de la edición
    } catch (error) {
      console.error("Error al actualizar el evento:", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al intentar actualizar la visita.",
      });
    }
  };

  const eliminarEvento = async () => {
    try {
      const id_visita = selectedEvent.id_visita;
      const response = await clienteAxios.delete(
        `/visitas-delete/${id_visita}`
      );
      console.log("Eliminar evento:", response.data.mensaje);
      // Eliminar el evento del estado local
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id_visita !== id_visita)
      );
      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: "success",
        title: "Visita Cancelada",
        text: "La visita se ha cancelado correctamente",
      });
      closeModal(); // Cerrar el modal solo si la visita se elimina con éxito
    } catch (error) {
      console.error("Error al eliminar la Visita:", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al intentar eliminar la Visita",
      });
    }
  };

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <button
          type="button"
          className="relative left-10 top-14 back__button-calendar"
          title="Regresar a la lista de aprendices"
        >
          <Link
            to={`/instructor/aprendicesFicha/${numero_ficha}`}
            className="Regresar-calendar"
          >
            <FaThList className="inline-block" />
          </Link>
        </button>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          onSelectSlot={openModalAgregarEvento}
          onSelectEvent={openModalVerEvento}
          events={events.map((event) => ({
            ...event,
            start: moment(
              event.fecha + " " + event.hora_inicio,
              "YYYY-MM-DD HH:mm"
            ).toDate(),
            end: moment(
              event.fecha + " " + event.hora_fin,
              "YYYY-MM-DD HH:mm"
            ).toDate(),
            title: (
              <div>
                <div>{event.tipo_visita}</div>
              </div>
            ),
          }))}
          messages={messages}
          overlayClassName="modal-overlay"
          className="calendar-container"
        />

        {showModal && (
          <div className="overlay">
            <div
              className="modal modal-calendario"
              style={{
                display: "block",
                backgroundColor: "rgba(0.0.0.0.5)",
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                outline: "2px solid #ffffff",
              }}
            >
              <div
                className="modal-dialog"
                style={{ maxWidth: "600px", margin: "auto", top: "100px" }}
              >
                <div className="modal-content modal-calendar-content">
                  <div
                    className="modal-header"
                    style={{ backgroundColor: "#39A900", color: "#ffffff" }}
                  >
                    <h5 className="modal-title text-center">
                      {selectedEvent
                        ? "Información del Evento"
                        : "Agendar Visita"}
                      <br />
                      {selectedDate && (
                        <p
                          style={{
                            fontWeight: "bold",
                            marginTop: "15px",
                            fontSize: "32px",
                          }}
                        >
                          {`${moment(selectedDate).format("LL")}${
                            selectedTime
                              ? ` ${moment(selectedTime, "HH:mm").format(
                                  "h:mm A"
                                )}`
                              : " Selecciona hora"
                          }`}
                        </p>
                      )}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    {selectedEvent ? (
                      <Fragment>
                        <div className="info-modal-calendar">
                          <div className="info-modal-calendar__col1">
                            <h2>Información de la Visita</h2>
                            <div>
                              <strong>Tipo de Visita:</strong>{" "}
                              {selectedEvent.tipo_visita}
                            </div>
                            <div>
                              <strong>Fecha:</strong>{" "}
                              {moment(selectedEvent.fecha).format("LL")}
                            </div>
                            <div>
                              <strong>Hora de Inicio:</strong>{" "}
                              {moment(
                                selectedEvent.hora_inicio,
                                "HH:mm"
                              ).format("h:mm A")}
                            </div>
                            <div>
                              <strong>Hora Fin:</strong>{" "}
                              {moment(selectedEvent.hora_fin, "HH:mm").format(
                                "h:mm A"
                              )}
                            </div>
                            <div>
                              <strong>Lugar:</strong>{" "}
                              {selectedEvent.lugar_visita}
                            </div>
                            <div>
                              <strong>Modalidad:</strong>{" "}
                              {selectedEvent.modalidad_visita}
                            </div>
                          </div>
                          <div className="info-modal-calendar__col2">
                            <h2>Datos del Aprendiz</h2>
                            <div>
                              <strong>Número de Documento:</strong>{" "}
                              {aprendizInfo.numero_documento}
                            </div>
                            <div>
                              <strong>Nombres:</strong>{" "}
                              {aprendizInfo.nombres}
                            </div>
                            <div>
                              <strong>Apellidos:</strong>{" "}
                              {aprendizInfo.apellidos}
                            </div>
                            <div>
                              <strong>Número de Ficha:</strong>{" "}
                              {aprendizInfo.numero_ficha}
                            </div>
                            <div>
                              <strong>Programa de Formación:</strong>{" "}
                              {fichaAprendizInfo.programa_formacion}
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <label
                          style={{ fontWeight: "bold" }}
                          className="inline-block"
                        >
                          Tipo de visita:
                        </label>
                        <select
                          value={eventTitle}
                          onChange={(e) => setEventTitle(e.target.value)}
                          className="w-80 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                        >
                          <option value="">
                            Seleccione el tipo de visita...
                          </option>
                          <option value="Primera visita">Primera visita</option>
                          <option value="Segunda Visita">Segunda visita</option>
                          <option value="Tercera visita">Tercera visita</option>
                        </select>
                        <br />
                        <label
                          style={{ fontWeight: "bold" }}
                          className="inline-block pr-5"
                        >
                          Hora de incio:
                        </label>
                        <input
                          type="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-40 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                        />
                        <br />
                        <label
                          style={{ fontWeight: "bold" }}
                          className="inline-block"
                        >
                          Hora de fin:
                        </label>
                        <input
                          type="time"
                          value={selectedEndTime}
                          onChange={(e) => setSelectedEndTime(e.target.value)}
                          className="w-40 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                        />
                        <br />
                        <label
                          style={{ fontWeight: "bold" }}
                          className="inline-block"
                        >
                          Lugar de la visita:
                        </label>
                        <input
                          type="text"
                          value={selectedPlaceEvent}
                          onChange={(e) =>
                            setSelectedPlaceEvent(e.target.value)
                          }
                          className="w-80 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                        />
                        <br />
                        <label
                          style={{ fontWeight: "bold" }}
                          className="
                    inline-block"
                        >
                          Modalidad de la Visita:
                        </label>
                        <select
                          value={selectedModalidadEvent}
                          onChange={(e) =>
                            setSelectedModalidadEvent(e.target.value)
                          }
                          className="w-80 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                        >
                          <option value="">
                            Seleccione el tipo de modalidad...
                          </option>
                          <option value="Presencial">Presencial</option>
                          <option value="Virtual">Virtual</option>
                        </select>
                      </Fragment>
                    )}
                  </div>
                  {!selectedEvent && (
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={saveEvent}
                        style={{ backgroundColor: "#39A900", color: "#ffffff" }}
                      >
                        Guardar
                      </button>
                    </div>
                  )}
                  {selectedEvent && (
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={openEditModal}
                        style={{ backgroundColor: "#39A900", color: "#ffffff" }}
                      >
                        Editar Visita
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={eliminarEvento}
                      >
                        Cancelar Visita
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {showEditModal && (
          <div className="overlay">
            <div
              className="modal"
              style={{
                display: "block",
                backgroundColor: "rgba(0.0.0.0.5)",
                position: "fixed",
                top: -30,
                bottom: 0,
                left: 8,
                right: 0,

              }}
            >
              <div
                className="modal-dialog"
                style={{ maxWidth: "600px", margin: "auto", top: "50px" }}
              >
                <div className="modal-content">
                  <div
                    className="modal-header"
                    style={{ backgroundColor: "#39A900", color: "#ffffff" }}
                  >
                    <h5 className="modal-title">
                      Editar Evento
                      {selectedDate && (
                        <p
                          style={{
                            fontWeight: "bold",
                            marginTop: "10px",
                            fontSize: "32px",
                          }}
                        >
                          {`${moment(selectedDate).format("LL")}${
                            selectedTime
                              ? ` ${moment(selectedTime, "HH:mm").format(
                                  "h:mm A"
                                )}`
                              : " Selecciona hora"
                          }`}
                        </p>
                      )}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <label style={{ fontWeight: "bold" }}>
                      Tipo de visita:
                    </label>
                    <select
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                      className="w-80 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                    >
                      <option value="">Seleccione el tipo de visita...</option>
                      <option value="Primera visita">Primer visita</option>
                      <option value="Segunda Visita">Segunda visita</option>
                      <option value="Tercera visita">Tercera visita</option>
                    </select>
                    <label
                      style={{ fontWeight: "bold" }}
                      className="inline-block pr-5"
                    >
                      Hora de incio:
                    </label>
                    <input
                      type="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-40 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                    />
                    <br />
                    <label
                      style={{ fontWeight: "bold" }}
                      className="inline-block"
                    >
                      Hora de fin:
                    </label>
                    <input
                      type="time"
                      value={selectedEndTime}
                      onChange={(e) => setSelectedEndTime(e.target.value)}
                      className="w-40 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                    />
                    <br />
                    <label
                      style={{ fontWeight: "bold" }}
                      className="inline-block"
                    >
                      Lugar de la visita:
                    </label>
                    <input
                      type="text"
                      value={selectedPlaceEvent}
                      onChange={(e) => setSelectedPlaceEvent(e.target.value)}
                      className="w-80 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                    />
                    <br />
                    <label
                      style={{ fontWeight: "bold" }}
                      className="
                    inline-block"
                    >
                      Modalidad de la Visita:
                    </label>
                    <select
                      value={selectedModalidadEvent}
                      onChange={(e) =>
                        setSelectedModalidadEvent(e.target.value)
                      }
                      className="w-80 bg-white text-black px-4 py-2 rounded-md my-4 border ml-6"
                    >
                      <option value="">
                        Seleccione el tipo de modalidad...
                      </option>
                      <option value="Presencial">Presencial</option>
                      <option value="Virtual">Virtual</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={editarEvento}
                      style={{ backgroundColor: "#39A900", color: "#ffffff" }}
                    >
                      Guardar Cambios
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeModal}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Calendario;
