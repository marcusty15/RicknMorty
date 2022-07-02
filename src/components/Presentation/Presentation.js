import React from 'react'
import './Presentation.css'
import imag from '../../img/ricknmorty.webp'

const Presentation = () => {
  return (
    <div className=' mb-5 text-center presentation'>
        <img src={imag} alt='ricknmorty'/>
    </div>
  )
}

export default Presentation