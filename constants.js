import { readFileSync } from 'fs'
import chalk from 'chalk'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

export const name = chalk.cyan(pkg.name)
export const description = chalk.green(pkg.description)
export const version = chalk.magenta(pkg.version)
