import { HasMorePlayers, Player } from '../models/types'
import { confirmationQuestion, inputQuestion } from '../questions/questions'

export async function getAllPlayers(): Promise<Player[]> {
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
