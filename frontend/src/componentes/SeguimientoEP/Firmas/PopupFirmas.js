// PopupFirmas.js
import React, { useRef, useState } from "react";
import Modal from "react-modal";
import SignatureCanvas from "react-signature-canvas";
import "./css/PopupFirmas.css";

Modal.setAppElement('#root');

const PopupFirmas = ({ show, onClose, onSave, onSelect, firmas }) => {
  const sigCanvas = useRef({});
  const [editIndex, setEditIndex] = useState(null);

  const clearCanvas = () => {
    sigCanvas.current.clear();
  };

  const saveFirma = () => {
    const firma = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    onSave(firma, editIndex);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const firma = firmas[index];
    const image = new Image();
    image.src = firma;
    image.onload = () => {
      sigCanvas.current.fromDataURL(firma);
    };
  };

  const handleDelete = (index) => {
    const updatedFirmas = firmas.filter((_, i) => i !== index);
    localStorage.setItem("firmas", JSON.stringify(updatedFirmas));
    onSave(null, index);
  };

  const handleSelectFirma = (firma, index) => {
    onSelect(firma);
    onClose(); // Close the modal after selecting a firma
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Seleccionar o Crear Firma"
      className="modal-firmas"
      overlayClassName="modal-overlay"
    >
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2 className="text-center">Seleccionar o Crear Firma</h2>
      <div className="modal-content-firmas">
        <div className="firmas-list-container">
          <h6>Firmas Registradas</h6>
          <div className="firmas-list">
            {firmas.map((firma, index) => (
              <div key={index} className="firma-item-container">
                <img
                  src={firma}
                  alt={`Firma ${index}`}
                  className="firma-item"
                  onClick={() => handleSelectFirma(firma, index)}
                />
                <div className="button-container">
                  <button className="edit-button" onClick={() => handleEdit(index)}>Editar</button>
                  <button className="delete-button" onClick={() => handleDelete(index)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="firma-draw">
          <h3>{editIndex !== null ? "Editar Firma" : "Crear Nueva Firma"}</h3>
          <SignatureCanvas
            ref={sigCanvas}
            canvasProps={{ width: 300, height: 150, className: "sigCanvas" }}
          />
          <button onClick={clearCanvas}>Limpiar</button>
          <button onClick={saveFirma}>{editIndex !== null ? "Actualizar Firma" : "Guardar Firma"}</button>
        </div>
      </div>
    </Modal>
  );
};

export default PopupFirmas;
