#!/usr/bin/env node

const program = require('commander');
const utils = require('../lib/my-cli');

program
  .command('*')
  .action(function(...arg) {
    const key = arg[0];
    if(!utils.has(key)) return console.log(`${[...utils.keys()].join(' ')} 命令是可用的`);
    utils.get(key)();
  })

program.parse(process.argv)