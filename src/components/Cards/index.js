import React from 'react'
import Card from './../Card'
import './Cards.scss'

function Cards({ cards, title }) {
  return (
    <>
      <h1>{title}</h1>
      {cards.length === 0 && 
        (title === 'Drawer' 
          ? <p>Please draw some cards</p> 
          : <p>All cards drawn</p>
      )}
      <div className='cards'>
        {cards.map((card, index) => (
          <Card key={`card-${index}`} {...card} />
        ))}
      </div>
    </>
  )
}

export default Cards