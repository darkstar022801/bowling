import { PromptModule } from 'inquirer'

export type HasMorePlayers = PromptModule & {
  hasMorePlayers: boolean
}

export type Player = PromptModule & {
  name: string
  firstFrame: Frame
  secondFrame: Frame
  thirdFrame: Frame
  fourthFrame: Frame
  fifthFrame: Frame
  sixthFrame: Frame
  seventhFrame: Frame
  eigthFrame: Frame
  ninthFrame: Frame
  tenthFrame: Frame
}

export type Frame = {
  firstThrow: number
  secondThrow: number
  thirdThrow: number
}
