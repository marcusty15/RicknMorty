import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CardPersonaje from '../../components/CardPersonaje/CardPersonaje'
import CardUbicaciones from '../../components/CardUbicaciones'
import { Context } from '../../store/Store'
import './Ubicaciones.css'

const Ubicaciones = () => {
    const {setUbicaciones, ubicaciones , personajes} = useContext(Context)
    
    return (
      <>
      
      <div className='container'>
      <h2 className='h2'>UBICACIONES</h2>
        <div className='d-flex flex-wrap justify-content-between'>
          {
            ubicaciones.map(ubicacion => (
              <CardUbicaciones key={ubicacion.id} {...ubicacion}/>
            ))
            
          },
          {
            personajes.map(personaje => (
              <CardUbicaciones key={personaje.id} {...personaje} />
            ))
          }
        </div>
      </div>
      </>
    )
}

export default Ubicaciones