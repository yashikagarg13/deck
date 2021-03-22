import React from 'react'
import './Card.scss'

function Card({ type, number }) {
  return (
    <div className={`card ${type} ${number}`}>
      <div className='number-top'>
        {number}
      </div>
      <img src={`./assets/${type}.jpeg`} alt={type} className={type}></img>
      <div className='number-bottom'>
        {number}
      </div>
    </div>
  )
}

export default Card