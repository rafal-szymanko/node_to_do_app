const parseArgs = require('minimist');
const colors = require('colors');

const command = parseArgs(process.argv.slice(2,3));

const prop = '_'

const newCommand = Object.keys(command).reduce((object, key) => {
    if (key !== prop) {
      object[key] = command[key]
    }
    return object
  }, {})


const handleCommit = ({add = null, remove = null, list = null}) => {
    
    if(add) {
        if(typeof add !== 'string') return console.log('You should write text'.red);
        console.log('dodaje zadania');
    } else if(remove) {
        console.log("usuwam zadanie");
        if(typeof remove !== 'string') return console.log('You should write text'.red);
        handleData()
    } else if(list || list === '') {
        console.log("pokazuje liste");
        handleData()
    } else {
        console.log("Undefined operation");
    }
}

handleCommit(newCommand);