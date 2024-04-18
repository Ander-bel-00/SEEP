import React from 'react';
import './css/PlaneacionEP.css';

function PlanEP() {
  return (
    <div className='PlaneacionEP-box'>
        <h1>2. PLANEACIÓN ETAPA PRODUCTIVA</h1>
        <form className='planEP-main-box'>
            <table>
                <thead>
                    <tr>
                        <th>
                            <h5>ACTIVIDADES A DESARROLLAR</h5>
                            <p>
                                Relacione las actividades que el aprendiz va a realizar. 
                                (Estas deben corresponder al Perfil del egresado 
                                establecido en el programa de formación que el aprendiz 
                                está desarrollando)
                            </p>
                        </th>
                        <th>EVIDENCIAS DE APRENDIZAJE</th>
                        <th>RECOLECCIÓN DE EVIDENCIAS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <textarea required className='ml-4 border'/>
                        </td>
                        <td>
                            <textarea required className='ml-4 border'/>
                        </td>
                        <td>
                            <div className="columnas">
                                <div>
                                    <label htmlFor="fecha">Fecha:</label>
                                    <input type='date' id="fecha" required className='ml-4 border'/>
                                </div>
                                <div>
                                    <label htmlFor="lugar">Lugar:</label>
                                    <textarea id="lugar" required className='ml-4 border'/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea required className='ml-4 border'/>
                        </td>
                        <td>
                            <textarea required className='ml-4 border'/>
                        </td>
                        <td>
                            <div className="columnas">
                                <div>
                                    <label htmlFor="fecha">Fecha:</label>
                                    <input type='date' id="fecha" required className='ml-4 border'/>
                                </div>
                                <div>
                                    <label htmlFor="lugar">Lugar:</label>
                                    <textarea id="lugar" required className='ml-4 border'/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea required className='ml-4 border'/>
                        </td>
                        <td>
                            <textarea required className='ml-4 border'/>
                        </td>
                        <td>
                            <div className="columnas">
                                <div>
                                    <label htmlFor="fecha">Fecha:</label>
                                    <input type='date' id="fecha" required className='ml-4 border'/>
                                </div>
                                <div>
                                    <label htmlFor="lugar">Lugar:</label>
                                    <textarea id="lugar" required className='ml-4 border'/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <h3>Observaciones: </h3>
                            <textarea className='Observaciones-PlanEP'></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>

                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
  )
}

export default PlanEP;
