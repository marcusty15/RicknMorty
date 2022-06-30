import React, { useContext } from 'react'
import { Context } from '../../store/Store';
import './CardUbicaciones.css'

const CardUbicaciones = (props) => {
    const {name, type, dimension, image} = props;
    const {img, setImg} = useContext(Context)
    
  return (
    <>
    <div className="card mb-3" style={{width: "18rem"}}>
    <img src={img} className="card-img-top" alt={name} />
        <div className="card-body cards">
            <h5 className="card-title ">Nombre: {name}</h5>
            <p className="card-text mb-1">Tipo: {type}</p>
            <p className="card-text mb-1">Dimension: {dimension}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
    </>
  )
}

export default CardUbicaciones