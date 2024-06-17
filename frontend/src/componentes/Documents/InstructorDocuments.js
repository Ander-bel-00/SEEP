import React, { useEffect, useState } from "react";
import clienteAxios from "../../api/axios";
import "./css/documents-instructores.css";
import { FaDownload } from "react-icons/fa";

function InstructorDocuments() {
  const [documentosAprendiz, setDocumentosAprendiz] = useState([]);
  const [numeroFicha, setNumeroFicha] = useState("");
  const [nombreAprendiz, setNombreAprendiz] = useState("");
  const [aprendizInfo, setAprendizInfo] = useState({});
  const [fichaAprendizInfo, setFichaAprendizInfo] = useState({});
  const [hoveredButton, setHoveredButton] = useState(null); // Estado para controlar el hover

  useEffect(() => {
    const fetchDocumentosAprendiz = async () => {
      try {
        const response = await clienteAxios.get(`/documentos-aprendiz-getAll`);
        const documentosData = response.data.documentos;
        setDocumentosAprendiz(documentosData);

        const aprendizPromises = documentosData.map(async (documento) => {
          const aprendizRes = await clienteAxios.get(
            `/aprendiz/id/${documento.id_aprendiz}`
          );
          const aprendizData = aprendizRes.data;

          const fichaRes = await clienteAxios.get(
            `/ficha-aprendiz/ficha/${aprendizData.numero_ficha}`
          );
          const fichaData = fichaRes.data.ficha;

          setAprendizInfo((prevState) => ({
            ...prevState,
            [documento.id_aprendiz]: aprendizData,
          }));

          setFichaAprendizInfo((prevState) => ({
            ...prevState,
            [aprendizData.numero_ficha]: fichaData,
          }));
        });

        await Promise.all(aprendizPromises);
      } catch (error) {
        console.error("Error al obtener los documentos del aprendiz:", error);
      }
    };

    fetchDocumentosAprendiz();
  }, []);

  const handleDownload = async (archivo) => {
    try {
      const response = await clienteAxios.get(
        `/documentos-download/${archivo}`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", archivo);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

  const handleNumeroFichaChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNumeroFicha(value);
    }
  };

  const handleNombreAprendizChange = (event) => {
    const value = event.target.value;
    if (!/\d/.test(value)) {
      setNombreAprendiz(value);
    }
  };

  const documentosFiltrados = documentosAprendiz.filter((documento) => {
    const aprendiz = aprendizInfo[documento.id_aprendiz];
    if (!aprendiz) return false;

    if (
      numeroFicha &&
      !aprendiz.numero_ficha.toString().includes(numeroFicha.toString())
    ) {
      return false;
    }

    if (
      nombreAprendiz &&
      !aprendiz.nombres.toLowerCase().includes(nombreAprendiz.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const handleMouseEnter = (id) => {
    setHoveredButton(id);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div>
      <h2 className="text-center" style={{ color: "#39a900" }}>
        Documentos de los Aprendices
      </h2>
      <div className="Search-documents-box">
        <p className="pr-4">
          Buscar por número de ficha:
          <input
            type="text"
            placeholder="Número de ficha"
            value={numeroFicha}
            onChange={handleNumeroFichaChange}
            className="pl-2"
          />
        </p>
        <p className="pr-4">
          Buscar por nombres del Aprendiz:
          <input
            type="text"
            placeholder="Nombres del aprendiz"
            value={nombreAprendiz}
            onChange={handleNombreAprendizChange}
            className="pl-2"
          />
        </p>
      </div>
      <table className="docsTab">
        <thead className="Thead">
          <tr className="tr">
            <th className="th-docs">Tipo de Archivo</th>
            <th className="th-docs">N° Documento De Identidad</th>
            <th className="th-docs">Nombres</th>
            <th className="th-docs">Apellidos</th>
            <th className="th-docs">N° de Ficha</th>
            <th className="th-docs">Programa de Formación</th>
            <th className="th-docs">Acciones</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {documentosFiltrados.map((documento) => {
            const aprendiz = aprendizInfo[documento.id_aprendiz] || {};
            const ficha = fichaAprendizInfo[aprendiz.numero_ficha] || {};

            return (
              <tr key={documento.id_documento} className="tr">
                <td className="td">{documento.tipo_documento}</td>
                <td className="td">{aprendiz.numero_documento}</td>
                <td className="td">{aprendiz.nombres}</td>
                <td className="td">{aprendiz.apellidos}</td>
                <td className="td">{aprendiz.numero_ficha}</td>
                <td className="td">{ficha.programa_formacion}</td>
                <td className="td text-center">
                  <button
                    onClick={() => handleDownload(documento.archivo)}
                    className="btnDownloadInstruc"
                    onMouseEnter={() =>
                      handleMouseEnter(documento.id_documento)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <FaDownload />
                    {hoveredButton === documento.id_documento && (
                      <span className="download-tooltip">
                        Descargar documento
                      </span>
                    )}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default InstructorDocuments;
