import React, { Fragment, useEffect, useState } from 'react';
import clienteAxios from '../../../api/axios';
import { Link, useParams } from 'react-router-dom';
import './css/ListaAprendices.css';

function ListaAprendices() {
    const [aprendices, setAprendices] = useState([]);
    const { numero_ficha } = useParams();
    
    const consultarApi = async () => {
        try {
            const consultarAprendices = await clienteAxios.get(`/fichas-getAprendices/${numero_ficha}`);
            // Ordenar los aprendices por orden alfabético de apellidos.
            const aprendicesOrdenados = consultarAprendices.data.aprendices.sort((a, b) => {
                return a.apellidos.localeCompare(b.apellidos);
            });
            setAprendices(aprendicesOrdenados); // Actualiza el estado con el array de aprendices ordenados
        } catch (error) {
            console.error('Error al obtener los aprendices:', error);
        }
    };

    useEffect(() => {
        consultarApi();
    }, [numero_ficha]);

    
    return (
        <Fragment>
            <div>
                <h1 className='text-center list-title'>Aprendices de la Ficha {numero_ficha}</h1>
                <ul className='lista-aprendices'>
                    {Array.isArray(aprendices) && aprendices.length > 0 ? (
                        aprendices.map(aprendiz => (
                            <li key={aprendiz.id_aprendiz} className='aprendices-fichas '>
                                {aprendiz.nombres} {aprendiz.apellidos}
                                <button><Link to={`/instructor/evaluacion-EP/${aprendiz.id_aprendiz}`} 
                                className='agendarVisita'>Planeacion y Seguimiento</Link></button>
                                <button><Link to={`/instructor/visitas-add/${numero_ficha}/${aprendiz.id_aprendiz}`} 
                                className='agendarVisita'>Ver o agendar visitas</Link></button>
                            </li>
                        ))
                    ) : (
                        <li>No hay aprendices asociados a esta ficha</li>
                    )}
                </ul>
            </div>
        </Fragment>
    )
}

export default ListaAprendices;
