
import { CARD_TYPE, CARD_NUMBER } from './constants'

export function createDeck() {
  const deck = []
  for (let i = 0; i < CARD_TYPE.length; i++) {
    for (let j = 0; j < CARD_NUMBER.length; j++) {
      deck.push({
        type: CARD_TYPE[i],
        number: CARD_NUMBER[j]
      })
    }
  }
  return deck
}