import React, { useEffect, useState } from "react";
import "./css/PlaneacionEP.css";
import PopupFirmas from "../Firmas/PopupFirmas";
import Swal from "sweetalert2";

function PlanEP() {
  const [campos, setCampos] = useState([
    { firma: null },
    { firma: null },
    { firma: null },
  ]);
  const [firmas, setFirmas] = useState([]);
  const [currentFirmaField, setCurrentFirmaField] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedFirmas = localStorage.getItem("firmas");
    if (storedFirmas) {
      setFirmas(JSON.parse(storedFirmas));
    }
  }, []);

  const agregarCampos = () => {
    setCampos([...campos, { id: campos.length, firma: null }]);
  };

  const eliminarCampos = (index) => {
    // Evitar la eliminación si solo están presentes los campos iniciales
    if (campos.length > 3) {
      setCampos(campos.filter((_, i) => i !== index));
    } else {
      Swal.fire({
        icon: "warning",
        title: "Recuerda",
        text: "No se pueden eliminar las filas iniciales",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleAddFirma = (fieldId) => {
    setCurrentFirmaField(fieldId);
    setShowPopup(true);
  };

  const handleSaveFirma = (firma, editIndex = null) => {
    setFirmas((prevFirmas) => {
      let newFirmas;
      if (editIndex !== null) {
        if (firma) {
          newFirmas = prevFirmas.map((f, index) =>
            index === editIndex ? firma : f
          );
        } else {
          newFirmas = prevFirmas.filter((_, index) => index !== editIndex);
        }
      } else {
        newFirmas = [...prevFirmas, firma];
      }
      localStorage.setItem("firmas", JSON.stringify(newFirmas));
      return newFirmas;
    });

    if (currentFirmaField !== null) {
      const updatedCampos = campos.map((campo, index) =>
        index === currentFirmaField ? { ...campo, firma } : campo
      );
      setCampos(updatedCampos);
      setCurrentFirmaField(null);
    }
  };

  const handleSelectFirma = (firma) => {
    if (currentFirmaField !== null) {
      const updatedCampos = campos.map((campo, index) =>
        index === currentFirmaField ? { ...campo, firma } : campo
      );
      setCampos(updatedCampos);
      setCurrentFirmaField(null);
      setShowPopup(false);
    }
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="plan-content-box">
        <table className="planEP-table">
          <thead>
            <tr className="planEP-table__tr">
              <td className="planEP-table__td" colSpan={6}>
                <h3 className="text-center">2. PLANEACIÓN ETAPA PRODUCTIVA</h3>
              </td>
            </tr>
            <tr className="planEP-table__tr">
              <th className="planEP-table__th text-center" colSpan={6}>
                CONCERTACIÓN PLAN DE TRABAJO DURANTE LA ETAPA PRODUCTIVA DEL
                APRENDIZ
              </th>
            </tr>
            <tr className="planEP-table__tr">
              <th className="planEP-table__th" colSpan={3} rowSpan={2}>
                <p className="text-center">ACTIVIDADES A DESARROLLAR</p>
                <p>
                  Relacione las actividades que el aprendiz va a realizar.
                  (Estas deben corresponder al Perfil del egresado establecido
                  en el programa de formación que el aprendiz está
                  desarrollando)
                </p>
              </th>
              <th className="planEP-table__th text-center" rowSpan={2}>
                EVIDENCIAS DE APRENDIZAJE
              </th>
              <th className="planEP-table__th text-center" colSpan={2}>
                RECOLECCIÓN DE EVIDENCIAS
              </th>
            </tr>
            <tr className="planEP-table__tr">
              <th className="planEP-table__th text-center">Fecha</th>
              <th className="planEP-table__th text-center">Lugar</th>
            </tr>
          </thead>
          <tbody>
            {campos.map((campo, index) => (
              <tr
                key={index}
                className={`planEP-table__tr ${
                  index === campos.length - 1 ? "hover-visible" : ""
                }`}
              >
                <td colSpan={3} className="planEP-table__td">
                  <textarea required></textarea>
                </td>
                <td className="planEP-table__td">
                  <textarea required></textarea>
                </td>
                <td className="planEP-table__td">
                  <input type="date" required />
                </td>
                <td className="planEP-table__td">
                  <textarea required></textarea>
                  {index === campos.length - 1 && (
                    <div className="action-icons">
                      <button onClick={agregarCampos} className="add-icon" title="Añadir fila">
                        +
                      </button>
                      <button
                        onClick={() => eliminarCampos(index)}
                        className="remove-icon"
                        title="Eliminar fila"
                      >
                        -
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            <tr className="planEP-table__tr">
              <td className="planEP-table__td" colSpan={6}>
                <label>
                  <strong>Observaciones: </strong>
                </label>
                <textarea></textarea>
              </td>
            </tr>
            <tr className="planEP-table__tr">
              <td className="planEP-table__td" colSpan={6}>
                <div className="td__firmas_inputs">
                  <div>
                    <label>
                      <strong>Nombre del Ente Conformador:</strong>
                    </label>
                    <input type="text" />
                    <label>
                      <strong>Firma del Ente Conformador:</strong>
                    </label>
                    <button onClick={() => handleAddFirma(0)} className={campos[0].firma ? '' : 'btn-add-firma'}>
                      {campos[0].firma ? (
                        <img
                          src={campos[0].firma}
                          alt="Firma del Ente Conformador"
                          style={{ width: 100, height: 50 }}
                        />
                      ) : (
                        "Añadir Firma"
                      )}
                    </button>
                  </div>
                  <div>
                    <label>
                      <strong>Firma del Aprendiz</strong>
                    </label>
                    <button onClick={() => handleAddFirma(1)} className={campos[1].firma ? '' : 'btn-add-firma'}>
                      {campos[1].firma ? (
                        <img
                          src={campos[1].firma}
                          alt="Firma del Aprendiz"
                          style={{ width: 100, height: 50 }}
                        />
                      ) : (
                        "Añadir Firma"
                      )}
                    </button>
                  </div>
                  <div>
                    <label>
                      <strong>Nombre Instructor seguimiento:</strong>
                    </label>
                    <input type="text" />
                    <label>
                      <strong>Firma Instructor seguimiento</strong>
                    </label>
                    <button onClick={() => handleAddFirma(2)} className={campos[2].firma ? '' : 'btn-add-firma'}>
                      {campos[2].firma ? (
                        <img
                          src={campos[2].firma}
                          alt="Firma Instructor seguimiento"
                          style={{ width: 100, height: 50 }}
                        />
                      ) : (
                        "Añadir Firma"
                      )}
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PopupFirmas
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onSave={(firma, editIndex) => {
          handleSaveFirma(firma, editIndex);
          setShowPopup(false);
        }}
        onSelect={(firma) => {
          handleSelectFirma(firma);
          setShowPopup(false);
        }}
        firmas={firmas}
      />
    </div>
  );
}

export default PlanEP;