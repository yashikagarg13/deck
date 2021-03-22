import React from 'react'
import './ActionButton.scss'

function ActionButton({ onClick, title }) {
  return (
    <button className='action-button' onClick={onClick}>
      {title}
    </button>
  )
}

export default ActionButton