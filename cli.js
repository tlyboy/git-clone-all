import fs from 'fs'
import { Command } from 'commander'
import chalk from 'chalk'
import axios from 'axios'
import { execSync } from 'child_process'

const packageJson = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)))
const { name, version, description } = packageJson

const program = new Command()

program
  .name(chalk.cyan(name))
  .description(chalk.green(description))
  .version(chalk.magenta(version))
  .argument('user')
  .action(async user => {
    const { data } = await axios.get(`https://api.github.com/users/${user}/repos`)

    if (data) {
      const res = data.map(element => {
        return element.ssh_url
      })

      res.forEach(element => {
        execSync(`git clone ${element}`)
      })
    }
  })

program.parse()
