#!/usr/bin/env node

import fs from 'fs'
import { Command } from 'commander'
import chalk from 'chalk'

import main from './main.js'

const { name, description, version, gitCloneAll } = main

const program = new Command()

program
  .name(chalk.cyan(name))
  .description(chalk.green(description))
  .version(chalk.magenta(version))
  .argument('user')
  .action(async user => {
    gitCloneAll(user)
  })

program.parse()
