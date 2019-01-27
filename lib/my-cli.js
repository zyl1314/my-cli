const lib = require('./lib');
const project = require('./project');

const utils = new Map([
  ['lib', lib],
  ['project', project]
])

module.exports = utils;