import React, {useState} from 'react'
import Cards from './components/Cards'
import ActionButton from './components/ActionButton'
import { createDeck } from './utils/helpers'
import './App.scss'

function App() {
  const [deck, setDeck] = useState(createDeck())
  const [drawn, setDrawn] = useState([])

  function drawCards () {
    /* const randomNumbers = Array.from(Array(Math.min(5, deck.length)))
    const newDeck = randomNumbers.reduce((d) => {
      const n =  Math.floor(Math.random() * d.length)

      return [
        ...d.slice(0, n),
        ...d.slice(n + 1)
      ]
    }, deck) */

    let newDeck = [...deck]
    let newDrawn = []
    const totalCardsToDraw = Math.min(5, deck.length)
    for(let i = 0; i < totalCardsToDraw; i++) {
      const n = Math.floor(Math.random() * newDeck.length)
      newDrawn.push(newDeck[n])
      newDeck.splice(n, 1)
    }

    setDeck(newDeck)
    setDrawn([...drawn, ...newDrawn])
  }

  function reset() {
    setDeck(createDeck())
    setDrawn([])
  }

  return (
    <div className='app'>
      <div className='container'>
        <Cards title='Drawer' cards={drawn} />
        <Cards title='Deck' cards={deck} />
      </div>
      <ActionButton 
        onClick={deck.length === 0 ? reset : drawCards} 
        title={deck.length === 0 ? 'Reload' : 'Draw'} 
      />
    </div>
  );
}

export default App
