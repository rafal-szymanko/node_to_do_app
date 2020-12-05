const fs = require('fs');

const handleData = (type, name) => {
    const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));

    if(type === "list") {
        data.map(item => console.log(item.title));

    } else if(type === "add") {
        if(data.find(item => item.title === name)) return console.log("Task already exist");
        let newTasks = data.map((item, index) => {
            return {
                id: index + 1,
                title: item.title
            }
        });

        const id = data.length + 1;

        const task = {
            id: id,
            title: name,
        }

        const newArr = newTasks.concat(task);

        fs.writeFileSync('db.json', JSON.stringify(newArr))
        console.log(`Added: ${name}`);

    } else if (type === "remove") {
        if(data.find(item => item.title === name)) {
            const newArr = data.filter(item => item.title !== name);
            const updatedIdArr = newArr.map((item, index) => {
                return {
                    id: index + 1,
                    title: item.title,
                }
            })

            fs.writeFileSync('db.json', JSON.stringify(updatedIdArr));
            console.log(`Removed: ${name}`);

        } else {
            console.log("Task doesn't exist");
        }
    }
}

module.exports = handleData;