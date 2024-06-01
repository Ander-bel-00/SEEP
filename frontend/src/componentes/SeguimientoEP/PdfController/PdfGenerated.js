import React from "react";
import html2pdf from "html2pdf.js";

function GenerarPDF() {
  const handleGeneratePDF = async () => {
    const opt = {
      margin: 1,
      filename: 'formulario.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const pdf = html2pdf().set(opt);

    // Captura los elementos en el orden deseado
    const ids = ["infoGeneral", "planEP", "seguimientoEP", "evaluacionEP"];
    for (let id of ids) {
      const element = document.getElementById(id);
      if (element) {
        await pdf.from(element).toContainer();
      }
    }

    pdf.save();
  };

  return (
    <button onClick={handleGeneratePDF} className="btn-generar-pdf">Generar PDF</button>
  );
}

export default GenerarPDF;
