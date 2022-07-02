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
      <h1 className='text-white text-center'>RICK AND MORTY PROJECT</h1>
      <h2 className='text-white text-center mb-4'>Characters search</h2>
      <input type='text' onChange={e=>setSearch(e.target.value)} className='search'placeholder='Ingrese el nombre del personaje' />
      <div className='mb-3'>
      <h2 className='text-white mb-5'>filter</h2>
      <p>
        <button className="btn btn-dark boton w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          FILTER
        </button>
      </p>
        <div className="collapse w-25" id="collapseExample">
        <div className="card card-body bg-dark">
        <div className='d-flex'>
        <button className='btn btn-dark w-25 mb-2 me-2 boton' onClick={verTodos}>All</button>
        <button className='btn btn-dark w-25 mb-2 me-2 boton' onClick={() => statusPersonaje('Alive')}>live</button>
        <button className='btn btn-dark w-25 mb-2 me-2 boton' onClick={() => statusPersonaje('Dead')}>Dead</button>
        <button className='btn btn-dark w-25 mb-2 boton' onClick={() => statusPersonaje('unknown')}>???</button>        
        </div>
        </div>
      </div>
        
      
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