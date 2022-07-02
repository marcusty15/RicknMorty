import React, { useContext} from 'react'
import CardUbicaciones from '../../components/CardUbicaciones'
import { Context } from '../../store/Store'
import './Ubicaciones.css'

const Ubicaciones = () => {
    const {ubicaciones} = useContext(Context)
    
    return (
      <>
      
      <div className='container'>
      <h2 className='h2'>UBICACIONES</h2>
        <div className='d-flex flex-wrap justify-content-between'>
          {
            ubicaciones.map((ubicacion,index) => (
              <CardUbicaciones key={ubicacion.id} {...ubicacion} index={index}/>
            ))
          }
          
        </div>
      </div>
      </>
    )
}

export default Ubicaciones