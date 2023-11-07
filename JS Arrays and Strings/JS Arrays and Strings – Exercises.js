//01. Array Rotation

function rotateArr(arr, num) {
    for (let index = 1; index <= num; index++) {
        let element = arr.shift();
        arr.push(element);
    }

    return arr.join(" ");
}

const result = rotateArr([51, 47, 32, 61, 21], 2);

console.log(result);

//02. Print every N-th Element from an Array

function printNthElement(stringArr, num) {
    let resultArr = [];

    for (let index = 0; index < stringArr.length; index += num) {
        resultArr.push(stringArr[index]);
    }

    return resultArr;
}
console.log(printNthElement(['5', '20', '31', '4', '20'], 2));

//03. List Of Names

function sortListOfNames(names) {

    let sortedNames = names.sort((a, b) => a.localeCompare(b));

    for (let index = 0; index < sortedNames.length; index++) {
        console.log(`${index + 1}.${sortedNames[index]}`);
    }
}

sortListOfNames(["John", "Bob", "Christina", "Ema"]);

//04. Sorting Numbers

function sortNumber(numArr) {
    let sortedAscending = numArr.sort((a, b) => a - b);
    let resultArr = [];

    while (sortedAscending.length > 0) {
        let firstNum = sortedAscending.shift();
        resultArr.push(firstNum);
        let lastNum = sortedAscending.pop();
        resultArr.push(lastNum);
    }

    return resultArr;
}

console.log(sortNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

//05.  Reveal Words

function replaceWordWithtemplate(word, template) {
    const wordsArr = word.split(", ");
    const templateArr = template.split(" ");

    for (let index = 0; index < wordsArr.length; index++) {

        let currWord = wordsArr[index];
        let currWordLenght = wordsArr[index].length;

        for (let i = 0; i < templateArr.length; i++) {
            if (templateArr[i].includes('*') && templateArr[i].length === currWordLenght) {
                templateArr[i] = currWord;
            }
        }
    }

    console.log(templateArr.join(" "));
}

replaceWordWithtemplate('great, learning',
    'softuni is ***** place for ******** new programming languages')

//06. Modern Times of #(HashTag)

function findSpecialWords(text) {
    let regex = /#([A-Za-z]+)/g;
    let matches = text.match(regex);

    matches.forEach(word => {
        console.log(word.substring(1, word.length))
    });
}

findSpecialWords('The symbol # #12321 is known #variously in English-speaking #regions as the #number sign');

//07. String Substring

function ifContainsWord(word, text) {
    textArr = text.toLowerCase().split(" ");
    if (textArr.includes(word.toLowerCase())) {
        return word
    } else {
        return `${word} not found!`
    }
}

console.log(ifContainsWord('javascript', 'JavaScript is the best programming language'));

//08. Pascal-Case Splitter

function splitByUpperCase(text){
    const words = text.match(/[A-Z][a-z]*/g);

    const result = words.join(', ');

    return result;
}

console.log(splitByUpperCase("HoldTheDoor"));
