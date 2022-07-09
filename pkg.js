import { readFileSync } from 'fs'
import chalk from 'chalk'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))
const { name, version } = pkg

export default {
  name: chalk.cyan(name),
  description: `🛠️ ${chalk.green('Git clone all repositories')}`,
  version: chalk.magenta(version)
}
