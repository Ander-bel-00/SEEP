import React, { useState } from 'react';
import './css/infoGeneral.css';
import PlanEP from '../PlaneacionEP/PlanEP';



function InformacionGeneral() {
const [showNextComponent, setShowNextComponent] = useState(false); // Estado para controlar la visibilidad del siguiente componente

  const handleNextButtonClick = () => {
    setShowNextComponent(true); // Al hacer clic en el botón, se muestra el siguiente componente
  };
  return (
    <div className='info-general-content-box'>
        <h1 className='text-center'>Información General</h1>
        <form>
            <label htmlFor='Regional'>Regional: </label>
            <input type='text' required className='ml-4 border'/>
            <label htmlFor='Regional'>Centro de formacion: </label>
            <input type='text' required className='ml-4 border'/>
            <label htmlFor='Regional'>Programa de Formación: </label>
            <input type='text' required className='ml-4 border'/>
            <label htmlFor='Regional'>N° de Ficha: </label>
            <input type='text' required className='ml-4 border'/>

            <h2>Datos del Aprendiz</h2>
            <label htmlFor='Regional'>Nombre: </label>
            <input type='text' required className='ml-4 border'/>

            <label htmlFor='Regional'>identificación: </label>
            <input type='text' required className='ml-4 border'/>

            <label htmlFor='Regional'>Teléfono: </label>
            <input type='text' required className='ml-4 border'/>

            <label htmlFor='Regional'>E-mail: </label>
            <input type='email' required className='ml-4 border'/>

            <label htmlFor='Regional'>Alternativa registrada en SOFIA plus: </label>
            <input type='text' required className='ml-4 border'/>

            <h2>Ente Conformador</h2>
            <label htmlFor='Regional'>Razón social empresa: </label>
            <input type='text' required className='ml-4 border'/>

            <label htmlFor='Regional'>Nit: </label>
            <input type='text' required className='ml-4 border'/>

            <label htmlFor='Regional'>Dirección: </label>
            <input type='text' required className='ml-4 border'/>

            <label htmlFor='Regional'>Programa de Formación: </label>
            <input type='text' required className='ml-4 border'/>
            
            <label htmlFor='Regional'>Nombre del jefe inmediato del aprendiz: </label>
            <input type='text' required className='ml-4 border'/>

            <label htmlFor='Regional'>Cargo: </label>
            <input type='text' required className='ml-4 border'/>

            <label htmlFor='Regional'>Teléfono: </label>
            <input type='text' required className='ml-4 border'/>

            <label htmlFor='Regional'>E-mail: </label>
            <input type='email' required className='ml-4 border'/>

            <button type="button" onClick={handleNextButtonClick}>Siguiente</button>
            {showNextComponent && <PlanEP />}
        </form>
    </div>
  )
}

export default InformacionGeneral;