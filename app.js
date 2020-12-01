const parseArgs = require('minimist');
const fs = require('fs');

const command = parseArgs(process.argv.slice(2,3));

const prop = '_'

const newCommand = Object.keys(command).reduce((object, key) => {
    if (key !== prop) {
      object[key] = command[key]
    }
    return object
  }, {})

  const handleData = (type, name) => {
    const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));

    if(type === "list") {
        data.map(item => console.log(item.title));

    } else if(type === "add") {
        if(data.find(item => item.title === name)) return console.log("Task already exist");
        const id = data.length + 1;

        const task = {
            id: id,
            title: name,
        }

        const newArr = data.concat(task);

        fs.writeFileSync('db.json', JSON.stringify(newArr))
        console.log(`Added: ${name}`);
    } else if (type === "remove") {
        if(data.find(item => item.title === name)) {
            const newArr = data.filter(item => item.title !== name);
            fs.writeFileSync('db.json', JSON.stringify(newArr));
            console.log(`Removed: ${name}`);
        } else {
            console.log("Task doesn't exist");
        }
    }
}


const handleCommit = ({add = null, remove = null, list = null}) => {
    
    if(add) {
        if(typeof add !== 'string') return console.log('You should write text'.red);
        handleData("add", add)
    } else if(remove) {
        if(typeof remove !== 'string') return console.log('You should write text'.red);
        handleData("remove", remove)
    } else if(list || list === '') {
        handleData("list", remove)
    } else {
        console.log("Undefined operation");
    }
}

handleCommit(newCommand);

