#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'

import pkg from './pkg.js'
import gitCloneAll from './git-clone-all.js'

const program = new Command()

program
  .name(pkg.name)
  .description(pkg.description)
  .version(pkg.version)
  .argument('user')
  .action(async user => {
    await gitCloneAll(user)
  })

program.parse()
