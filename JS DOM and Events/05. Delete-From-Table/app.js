function deleteByEmail() {
    let emailTabs = Array.from(document.querySelectorAll("td:nth-child(even)"));
    let searched = document.querySelector("input[type=text]").value;

    let searchedEmailTab = emailTabs.find(box => box.textContent === searched);
    let result = document.querySelector("#result");

    if (searchedEmailTab) {
        searchedEmailTab.parentElement.remove();
        result.textContent = "Deleted.";
    } else {
        result.textContent = "Not found."
    }
}