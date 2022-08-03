import figlet from 'figlet'

import { Player } from './models/types'
import { bowl } from './utils/bowl'
import { getAllPlayers } from './utils/players'

async function main(): Promise<void> {
  console.log(
    figlet.textSync('Bowling', {
      font: 'pebbles',
    }),
  )

  let frame: number = 1

  const players: Player[] = await getAllPlayers()

  while (frame < 11) {
    bowl(frame)
    frame++
  }

  console.table(players)
}

main()
