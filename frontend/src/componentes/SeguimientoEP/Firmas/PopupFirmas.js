import React, { useRef } from "react";
import Modal from "react-modal";
import SignatureCanvas from "react-signature-canvas";
import "./css/PopupFirmas.css";

const PopupFirmas = ({ show, onClose, onSave, firmas }) => {
  const sigCanvas = useRef({});

  const clearCanvas = () => {
    sigCanvas.current.clear();
  };

  const saveFirma = () => {
    const firma = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    onSave(firma);
  };

  return (
    <Modal isOpen={show} onRequestClose={onClose} contentLabel="Seleccionar o Crear Firma">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>Seleccionar o Crear Firma</h2>
      <div className="firmas-list">
        <h3>Firmas Registradas</h3>
        {firmas.map((firma, index) => (
          <img
            key={index}
            src={firma}
            alt={`Firma ${index}`}
            className="firma-item"
            onClick={() => onSave(firma)}
            style={{ width: 100, height: 50 }}
          />
        ))}
      </div>
      <div className="firma-draw">
        <h3>Crear Nueva Firma</h3>
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{ width: 300, height: 150, className: "sigCanvas" }}
        />
        <button onClick={clearCanvas}>Limpiar</button>
        <button onClick={saveFirma}>Guardar Firma</button>
      </div>
    </Modal>
  );
};

export default PopupFirmas;
