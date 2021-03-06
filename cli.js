#!/usr/bin/env node

import { Command } from 'commander'

import { name, version, description } from './constants.js'
import { gitCloneAll } from './actions.js'

const program = new Command()

program
  .name(name)
  .description(description)
  .version(version)
  .argument('username')
  .action(username => {
    gitCloneAll(username)
  })

program.parse()
