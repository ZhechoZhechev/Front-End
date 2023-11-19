function addItem() {
    let text = document.querySelector("#newItemText").value;
    let newItem = document.createElement("li");
    newItem.textContent = text;
    newItem.appendChild(createDeleteButton());

    document.querySelector("ul").appendChild(newItem);



    function createDeleteButton() {
        let deleteButton = document.createElement("a");
        deleteButton.href = "#";
        deleteButton.textContent = "[Delete]";
        deleteButton.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });

        return deleteButton;
    };
}