function solve() {

    let input = document.querySelector("#input");
    let output = document.querySelector("#result");
    let selectMenu = document.querySelector("#selectMenuTo");
    let resultButton = document.querySelector("body #container button")
    
    let hexaOption = document.createElement("option");
    hexaOption.value = "hexadecimal";
    hexaOption.textContent = "Hexadecimal";
    selectMenu.appendChild(hexaOption);

    let binaryOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.textContent = "Binary";
    selectMenu.appendChild(binaryOption);

    resultButton.addEventListener("click", function convert() {
        const base = selectMenu.value === "binary" ? 2 : 16;
        output.value = Number(input.value).toString(base).toUpperCase();
    });

}