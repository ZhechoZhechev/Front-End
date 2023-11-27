function addItem() {
    const text = document.querySelector("#newItemText");
    const value = document.querySelector("#newItemValue");

    let option = document.createElement("option");

    option.text = text.value;
    option.value = value.value;

    let select = document.querySelector("select");
    select.appendChild(option);

    clearInputFields();

    function clearInputFields() {
        const inputs = Array.from(document.querySelectorAll("input:not([type=button])"));
        inputs.forEach((input) => (input.value = ""));
    }
}


