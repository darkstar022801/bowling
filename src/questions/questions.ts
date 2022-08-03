import inquirer, { PromptModule } from 'inquirer'

const confirmationQuestions = {
  morePlayers: {
    name: 'hasMorePlayers',
    message: 'Are there more players today??',
  },
}

const inputQuestions = {
  name: {
    name: 'name',
    message: 'What is your name??',
  },
}

export async function inputQuestion<Type>(question: string): Promise<Type> {
  const { name, message } = inputQuestions[question] || {}
  return await inquirer.prompt([
    {
      type: 'input',
      name,
      message,
    },
  ])
}

export async function confirmationQuestion<Type>(
  question: string,
): Promise<Type> {
  const { name, message } = confirmationQuestions[question] || {}
  return await inquirer.prompt([
    {
      type: 'confirm',
      name,
      message,
    },
  ])
}
