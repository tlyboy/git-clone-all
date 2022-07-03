import fs from 'fs'
import chalk from 'chalk'

import action from './action.js'

const packageJson = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)))
const { name, description, version } = packageJson

export default {
  name: chalk.cyan(name),
  description: chalk.green(description),
  version: chalk.magenta(version),
  ...action
}
