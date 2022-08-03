import inquirer, { PromptModule } from 'inquirer'
import figlet from 'figlet'

import { confirmationQuestion, inputQuestion } from './questions/questions'
import { HasMorePlayers, Player } from './models/types'

async function getAllPlayers(): Promise<Player[]> {
  const players: Player[] = []

  const nameObject: Player = await inputQuestion('name')
  players.push(nameObject)

  const morePlayersConfirmation: HasMorePlayers =
    await confirmationQuestion<HasMorePlayers>('morePlayers')

  let morePlayers = morePlayersConfirmation.hasMorePlayers
  while (morePlayers) {
    const nameObject: Player = await inputQuestion('name')
    players.push(nameObject)

    const morePlayersConfirmation: HasMorePlayers =
      await confirmationQuestion<HasMorePlayers>('morePlayers')

    morePlayers = morePlayersConfirmation.hasMorePlayers
  }

  return players
}

async function main(): Promise<void> {
  console.log(
    figlet.textSync('Bowling', {
      font: 'pebbles',
    }),
  )

  const players: Player[] = await getAllPlayers()
  console.table(players)
}

main()
