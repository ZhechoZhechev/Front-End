function addItem() {
    let text = document.querySelector("#newItemText").value;
    let newItem = document.createElement("li");
    newItem.textContent = text;

    document.querySelector("ul").appendChild(newItem);
}