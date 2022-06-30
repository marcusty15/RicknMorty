import React, {  useContext, useState } from 'react'
import CardPersonaje from '../../components/CardPersonaje/CardPersonaje'
import './Personajes.css'
import { Context } from '../../store/Store'

const Personajes = () => {
  const [search, setSearch] = useState('')
  const {personajes} = useContext(Context)
  const personajesEncontrados =!search ? personajes : personajes.filter((personaje) => (personaje.name.toLowerCase().includes(search.toLowerCase())));


  return (
    <div className='container'>
      <h1>Este es nuestro proyecto de R&M</h1>
      <h2>Buscador de personajes</h2>
      <input type='text' onChange={e=>setSearch(e.target.value)} className='search'placeholder='Ingrese el nombre del personaje' />
      <div className='border d-flex flex-wrap justify-content-between'>
        {
          personajesEncontrados.length > 0 ?
            personajesEncontrados.map(personaje => (
              <CardPersonaje key={personaje.id} {...personaje} />
            ))
          :
              <p>Cargando...</p>
        }
      </div>
    </div>
  )
}

export default Personajes