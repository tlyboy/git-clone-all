#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'

import constants from './constants.js'
import actions from './actions.js'

const { name, description, version } = constants

const program = new Command()

program
  .name(name)
  .description(description)
  .version(version)
  .argument('user')
  .action(async user => {
    await actions.gitCloneAll(user)
  })

program.parse()
