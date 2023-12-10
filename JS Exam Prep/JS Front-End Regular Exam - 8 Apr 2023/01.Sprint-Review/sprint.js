let input = [
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',

];

function solve(input) {
    const tasksNum = Number(input.shift());
    const tasks = input.slice(0, tasksNum);
    const commands = input.slice(tasksNum);

    const sprintBoard = tasks.reduce((acc, curr) => {
        let [assignee, taskId, title, status, estimatedPoints] = curr.split(":");
        if (!acc[assignee]) {
            acc[assignee] = [];
        }
        acc[assignee].push({ taskId, title, status, points: Number(estimatedPoints) });
        return acc;
    }, {})

    const commandsMap = {
        "Add New": addNewTask,
        "Change Status": changeTaskStatus,
        "Remove Task": removeTask
    }

    commands.forEach(line => {
        let commandsTokens = line.split(":");
        let command = commandsTokens.shift();
        commandsMap[command](...commandsTokens);
    });

    const toDoPoints = getPointsForStatus("ToDo");
    const inProgressPoints = getPointsForStatus("In Progress");
    const codeReviewPoints = getPointsForStatus("Code Review");
    const donePoints = getPointsForStatus("Done");
    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    let successful = donePoints - (inProgressPoints + codeReviewPoints + toDoPoints) >= 0 ? true : false;

    if (successful) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }

    function getPointsForStatus(status) {
        return Object.values(sprintBoard)
            .flatMap(assigneeTasks => assigneeTasks.filter(task => task.status === status))
            .map(task => task.points)
            .reduce((acc, curr) => acc + curr, 0);
    }

    function addNewTask(assignee, taskId, title, status, points) {
        if (!sprintBoard[assignee]) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
            return;
        }
        sprintBoard[assignee].push({ taskId, title, status, points: Number(points) });
    }

    function changeTaskStatus(assignee, taskId, newStatus) {
        if (!sprintBoard[assignee]) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
            return;
        }

        let taskExists = sprintBoard[assignee].some(task => task.taskId === taskId);
        if (!taskExists) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
            return;
        }
        let taskToUpdate = sprintBoard[assignee].find(x => x.taskId == taskId);

        taskToUpdate.status = newStatus;
    }

    function removeTask(assignee, index) {
        if (!sprintBoard[assignee]) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        } else if (index < 0 || index >= sprintBoard[assignee].length) {
            console.log("Index is out of range!");
        } else {
            sprintBoard[assignee].splice(index, 1);
        }
    }
}

solve(input);
