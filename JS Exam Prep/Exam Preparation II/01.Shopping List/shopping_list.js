function solve(input) {
    const groceries = input.shift().split("!");

    while (true) {
        let line = input.shift();
        if (line === "Go Shopping!") break;

        let commands = line.split(" ");
        let command = commands[0];
        let item = commands[1];
        let newItem = commands[2];

        switch (command) {
            case "Urgent":
                if (!ifItemExists(item)) {
                    groceries.unshift(item);
                }
                break;
            case "Unnecessary":
                if (ifItemExists(item)) {
                    itemIndex = groceries.indexOf(item);
                    groceries.splice(itemIndex, 1);
                }
                break;
            case "Correct":
                if (ifItemExists(item)) {
                    itemIndex = groceries.indexOf(item);
                    groceries.splice(itemIndex, 1);
                    groceries.splice(itemIndex, 0, newItem);
                }
                break;
            case "Rearrange":
                if (ifItemExists(item)) {
                    itemIndex = groceries.indexOf(item);
                    groceries.splice(itemIndex, 1);
                    groceries.push(item);
                }
                break;
        }
    }

    console.log(groceries.join(", "));

    function ifItemExists(name) {
        return groceries.some(item => item === name);
    }
}

const input = (["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);

solve(input);