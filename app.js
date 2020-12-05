const parseArgs = require('minimist');
const handleCommand = require('./handleCommand');

const command = parseArgs(process.argv.slice(2,3));

const prop = '_'

const newCommand = Object.keys(command).reduce((object, key) => {
    if (key !== prop) {
      object[key] = command[key]
    }
    return object
  }, {})

handleCommand(newCommand);

