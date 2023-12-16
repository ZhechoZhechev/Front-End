window.addEventListener("load", solve);

function solve(){
    const buttons = {
        addBtn: document.querySelector("#add-btn"),
        deleteExpnsesBtn: document.querySelector(".btn.delete")
    }

    const otherElements = {
        previewUl: document.querySelector("#preview-list"),
        expensesUl: document.querySelector("#expenses-list")
    }

    const inputs = {
        expenseType: document.querySelector("#expense"),
        amount: document.querySelector("#amount"),
        date: document.querySelector("#date"),
    }

    buttons.addBtn.addEventListener("click", addToPreview);
    buttons.deleteExpnsesBtn.addEventListener("click", deleteFromExpenses);

    function deleteFromExpenses(e){
        e.target.parentElement.querySelector("#expenses-list li").remove();
    }

    function addToPreview(){
        if(!isAnyInputEmpty()){
            let li = createElement("li", null, ["expense-item"], null, otherElements.previewUl);
            let article = createElement("article", null, [], null, li);
            createElement("p", `Type: ${inputs.expenseType.value}`, [], null, article);
            createElement("p", `Amount: ${inputs.amount.value}$`, [], null, article);
            createElement("p", `Date: ${inputs.date.value}`, [], null, article);
            let buttonsDiv = createElement("div", null, ["buttons"], null, li);
            let editBtn = createElement("button", "edit", ["btn", "edit"], null, buttonsDiv);
            editBtn.addEventListener("click", prepareForEdit);
            let okBtn = createElement("button", "ok", ["btn", "ok"], null, buttonsDiv);
            okBtn.addEventListener("click", moveToExpensesTab);

            buttons.addBtn.disabled = true;
            clearInputs(inputs);
        }
    }

    function moveToExpensesTab(e){
        let expenseItemsLi = e.target.parentElement.parentElement;
        let article = expenseItemsLi.querySelector("article");
        let li = createElement("li", null, ["expense-item"], null, otherElements.expensesUl);
        expenseItemsLi.remove();
        li.appendChild(article);
        buttons.addBtn.disabled = false;
    }

    function prepareForEdit(e){
        let expenseItemsLi = e.target.parentElement.parentElement;
        let expenseType = expenseItemsLi.querySelector("article p:nth-child(1)").textContent;
        expenseType = expenseType.split("Type: ")[1];
        let amount = expenseItemsLi.querySelector("article p:nth-child(2)").textContent;
        amount = parseFloat(amount.split("Amount: ")[1]);
        let date = expenseItemsLi.querySelector("article p:nth-child(3)").textContent;
        date = date.split("Date: ")[1];
        expenseItemsLi.innerHTML = "";

        inputs.expenseType.value = expenseType;
        inputs.amount.value = amount;
        inputs.date.value = date;

        buttons.addBtn.disabled = false;
    }

    function createElement(type, textContent, classes, id, parent) {
        const element = document.createElement(type);
    
        if (textContent) {
            element.textContent = textContent;
        }
    
        if (classes && classes.length > 0) {
            element.classList.add(...classes);
        }
    
        if (id) {
            element.setAttribute("id", id);
        }
    
        if (parent) {
            parent.appendChild(element);
        }
    
        return element;
    }

    function isAnyInputEmpty(inputs) {
        for (const key in inputs) {
            if (!inputs[key].value) {
                return true;
            }
        }
        return false;
    }
    
    function clearInputs(inputs) {
        for (const key in inputs) {
            inputs[key].value = "";
        }
    }
}