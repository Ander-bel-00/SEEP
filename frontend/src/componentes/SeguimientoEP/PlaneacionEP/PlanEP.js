import React, { useEffect, useState } from "react";
import "./css/PlaneacionEP.css";
import PopupFirmas from "../Firmas/PopupFirmas";

function PlanEP() {
  const [campos, setCampos] = useState([{ firma: null }, { firma: null }, { firma: null }]);
  const [firmas, setFirmas] = useState([]);
  const [currentFirmaField, setCurrentFirmaField] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Cargar firmas almacenadas al iniciar la página
  useEffect(() => {
    const storedFirmas = localStorage.getItem("firmas");
    if (storedFirmas) {
      setFirmas(JSON.parse(storedFirmas));
    }
  }, []);

  const agregarCampos = () => {
    setCampos([...campos, { id: campos.length, firma: null }]);
  };

  const handleAddFirma = (fieldId) => {
    setCurrentFirmaField(fieldId);
    setShowPopup(true);
  };

  const handleSaveFirma = (firma) => {
    setFirmas((prevFirmas) => {
      if (!prevFirmas.includes(firma)) {
        const newFirmas = [...prevFirmas, firma];
        // Almacenar las firmas actualizadas en el almacenamiento local
        localStorage.setItem("firmas", JSON.stringify(newFirmas));
        return newFirmas;
      }
      return prevFirmas;
    });

    if (currentFirmaField !== null) {
      const updatedCampos = campos.map((campo, index) =>
        index === currentFirmaField ? { ...campo, firma } : campo
      );
      setCampos(updatedCampos);
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
                CONCERTACIÓN PLAN DE TRABAJO DURANTE LA ETAPA PRODUCTIVA DEL APRENDIZ
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
              <tr key={index} className="planEP-table__tr">
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
                  <input type="text" required />
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
                    <button onClick={() => handleAddFirma(0)}>
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
                    <button onClick={() => handleAddFirma(1)}>
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
                    <button onClick={() => handleAddFirma(2)}>
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
            <tr>
              <td colSpan={6} className="">
                <div className="btn-add-inputs">
                  <button onClick={agregarCampos}>Añadir Actividad</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PopupFirmas
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onSave={(firma) => {
          handleSaveFirma(firma);
          setShowPopup(false); // Cerrar el modal después de guardar la firma
        }}
        firmas={firmas}
      />
    </div>
  );
}

export default PlanEP;
