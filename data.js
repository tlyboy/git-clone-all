import { readFileSync } from 'fs'
import chalk from 'chalk'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

export let { name, description, version } = pkg

name = chalk.cyan(name)

description = chalk.green(description)

version = chalk.magenta(version)
