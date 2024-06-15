import React, { useEffect, useState } from 'react';
import clienteAxios from '../../api/axios';
import './css/documents-instructores.css';

function InstructorDocuments() {
    const [documentosAprendiz, setDocumentosAprendiz] = useState([]);
    const [numeroFicha, setNumeroFicha] = useState('');
    const [nombreAprendiz, setNombreAprendiz] = useState('');
    const [aprendizInfo, setAprendizInfo] = useState({});
    const [fichaAprendizInfo, setFichaAprendizInfo] = useState({});

    useEffect(() => {
        const fetchDocumentosAprendiz = async () => {
            try {
                const response = await clienteAxios.get(`/documentos-aprendiz-getAll`);
                const documentosData = response.data.documentos;
                setDocumentosAprendiz(documentosData);

                const aprendizPromises = documentosData.map(async (documento) => {
                    const aprendizRes = await clienteAxios.get(`/aprendiz/id/${documento.id_aprendiz}`);
                    const aprendizData = aprendizRes.data;

                    const fichaRes = await clienteAxios.get(`/ficha-aprendiz/ficha/${aprendizData.numero_ficha}`);
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
                console.error('Error al obtener los documentos del aprendiz:', error);
            }
        };

        fetchDocumentosAprendiz();
    }, []);

    const handleDownload = async (archivo) => {
        try {
            const response = await clienteAxios.get(`/documentos-download/${archivo}`, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', archivo);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };

    const handleNumeroFichaChange = (event) => {
        setNumeroFicha(event.target.value);
    };

    const handleNombreAprendizChange = (event) => {
        setNombreAprendiz(event.target.value);
    };

    const documentosFiltrados = documentosAprendiz.filter((documento) => {
        const aprendiz = aprendizInfo[documento.id_aprendiz];
        if (!aprendiz) return false;

        if (numeroFicha && !aprendiz.numero_ficha.toString().includes(numeroFicha.toString())) {
            return false;
        }

        if (nombreAprendiz && !aprendiz.nombres.toLowerCase().includes(nombreAprendiz.toLowerCase())) {
            return false;
        }

        return true;
    });

    return (
        <div>
            <h2 className='text-center' style={{ color: '#39a900' }}>Documentos de los Aprendices</h2>
            <div className='Search-documents-box'>
                <p className='inline-block pr-4'>
                    Buscar por numero de ficha:
                    <input
                        type='search'
                        placeholder='Numero de ficha'
                        value={numeroFicha}
                        onChange={handleNumeroFichaChange}
                        className='pl-2 border-b-2'
                    />
                </p>
                <p className='inline-block'>
                    Buscar por nombres del Aprendiz:
                    <input
                        type='search'
                        placeholder='Nombres del aprendiz'
                        value={nombreAprendiz}
                        onChange={handleNombreAprendizChange}
                        className='pl-2 border-b-2'
                    />
                </p>
            </div>
            <table className='docsTab'>
                <thead className='Thead'>
                    <tr className='tr'>
                        <th className='th'>Tipo de Archivo</th>
                        <th className='th'>Número De Documento De Identidad</th>
                        <th className='th'>Nombres</th>
                        <th className='th'>Apellidos</th>
                        <th className='th'>Número de Ficha</th>
                        <th className='th'>Programa de Formación</th>
                        <th className='th'>Acciones</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {documentosFiltrados.map((documento) => {
                        const aprendiz = aprendizInfo[documento.id_aprendiz] || {};
                        const ficha = fichaAprendizInfo[aprendiz.numero_ficha] || {};
                        
                        return (
                            <tr key={documento.id_documento} className='tr'>
                                <td className='td'>{documento.tipo_documento}</td>
                                <td className='td'>{aprendiz.numero_documento}</td>
                                <td className='td'>{aprendiz.nombres}</td>
                                <td className='td'>{aprendiz.apellidos}</td>
                                <td className='td'>{aprendiz.numero_ficha}</td>
                                <td className='td'>{ficha.programa_formacion}</td>
                                <td className='td'>
                                    <button onClick={() => handleDownload(documento.archivo)} className='btnDownloadInstruc'>Descargar</button>
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
