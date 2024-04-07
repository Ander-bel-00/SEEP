import React from 'react'

function PlanEP() {
  return (
    <div className='PlaneacionEp-main-content'>
        <h1>2. PLANEACIÓN ETAPA PRODUCTIVA</h1>
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
                    <th>
                        RECOLECCIÓN DE EVIDENCIAS
                        <div>
                            <p>Fecha</p>
                        </div>
                        <div>
                            <p>Lugar</p>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type='text' required className='ml-4 border'/>
                    </td>
                    <td>
                        <input type='text' required className='ml-4 border'/>
                    </td>
                    <td>
                        <input type='text' required className='ml-4 border'/>
                    </td>
                    <td>
                        <input type='text' required className='ml-4 border'/>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default PlanEP;