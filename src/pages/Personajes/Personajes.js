import React, {  useContext, useState } from 'react'
import CardPersonaje from '../../components/CardPersonaje/CardPersonaje'
import './Personajes.css'
import { Context } from '../../store/Store'

const Personajes = () => {
  const [search, setSearch] = useState('')
  const {personajes, statusPersonaje, persDesconocido, persMuertos, persVivos, verTodos} = useContext(Context)
  const personajesEncontrados =!search ? personajes : personajes.filter((personaje) => (personaje.name.toLowerCase().includes(search.toLowerCase())));
  const pv = !search ? persVivos: persVivos.filter((personaje) => (personaje.name.toLowerCase().includes(search.toLowerCase())));
  const pm = !search ? persMuertos: persMuertos.filter((personaje) => (personaje.name.toLowerCase().includes(search.toLowerCase())));
  const pd = !search ? persDesconocido: persDesconocido.filter((personaje) => (personaje.name.toLowerCase().includes(search.toLowerCase())));

  return (
    <div className='container'>
      <h1>proyecto de Rick and Morty</h1>
      <h2>Buscador de personajes</h2>
      <input type='text' onChange={e=>setSearch(e.target.value)} className='search'placeholder='Ingrese el nombre del personaje' />
      <div className='mb-3'>
        <h2>Filtros</h2>
      <button className='btn btn-primary me-3 ' onClick={verTodos}>Ver todos</button>
        <button className='btn btn-primary me-3' onClick={() => statusPersonaje('Alive')}>Vivos</button>
        <button className='btn btn-primary me-3' onClick={() => statusPersonaje('Dead')}>Muertos</button>
        <button className='btn btn-primary' onClick={() => statusPersonaje('unknown')}>Desconocido</button>
        </div>
      <div className='d-flex flex-wrap justify-content-between'>
        
        {pv.length > 0  ?
          pv.map(vivo => (
            <CardPersonaje key={vivo.id} {...vivo} />
          ))
        :
        pm.length > 0 ?
          pm.map(muerto => (
            <CardPersonaje key={muerto.id} {...muerto} />
          ))
        :
        pd.length > 0 ?
          pd.map(desconocido => (
            <CardPersonaje key={desconocido.id} {...desconocido} />
          ))
        :
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