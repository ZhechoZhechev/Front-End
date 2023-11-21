function subtract() {
    let inputs = Array.from(document.querySelectorAll("input"));

    let firstNumber = Number(document.querySelector("#firstNumber").value);
    let secondNumber = Number(document.querySelector("#secondNumber").value);

    let sub = firstNumber - secondNumber;
    let output = document.querySelector("#result");
    console.log(output)
    output.textContent = sub

    inputs.forEach( input => {
        input.removeAttribute("disabled");
        input.addEventListener("keyup", subtract);
    })
}