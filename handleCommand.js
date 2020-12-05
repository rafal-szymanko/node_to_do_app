const handleData = require('./handleData')

const handleCommand = ({add = null, remove = null, list = null}) => {
    
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

module.exports = handleCommand;