function sumTable() {
    let targetTds = Array.from(document.querySelectorAll("td:nth-child(even)"));
    // removing last <td> where sum is
    targetTds.pop();

    let numbers = targetTds.map(el => Number(el.textContent));
    let sum = numbers.reduce((acc, curr) =>{
        acc += curr;
        return acc;
    }, 0)

    document.querySelector("#sum").textContent = sum;
}