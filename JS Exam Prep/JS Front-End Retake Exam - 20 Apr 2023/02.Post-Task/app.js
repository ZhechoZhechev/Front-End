window.addEventListener("load", solve);

function solve() {
    const publishBtn = document.querySelector("#publish-btn");

    const taskInputs = {
        title: document.querySelector("#task-title"),
        categoty: document.querySelector("#task-category"),
        content: document.querySelector("#task-content")
    }

    const taskOutputUls = {
        rewiew: document.querySelector("#review-list"),
        uploaded: document.querySelector("#published-list")
    }

    publishBtn.addEventListener("click", publishTask);

    function publishTask() {
        if (ifInputsAreValid()) {

            let li = createElement("li", null, ["rpost"]);
            let article = createElement("article", null, [], null, li);
            createElement("h4", taskInputs.title.value, [], null, article);
            createElement("p", `Category: ${taskInputs.categoty.value}`, [], null, article);
            createElement("p", `Content: ${taskInputs.content.value}`, [], null, article)
            let editBtn = createElement("button", "EDIT", ["action-btn", "edit"], null, li);
            editBtn.addEventListener("click", editPost);
            let postBtn = createElement("button", "POST", ["action-btn", "post"], null, li);
            postBtn.addEventListener("click", moveToUploaded);
            taskOutputUls.rewiew.appendChild(li);

            clearInputs();
        }
    }

    function moveToUploaded(e) {
        let [titleContent, categoryContent, contentContent] = extractArticleContent(e.target.parentElement);

        let li = createElement("li", null, ["rpost"]);
        let article = createElement("article", null, [], null, li);
        createElement("h4", titleContent, [], null, article);
        createElement("p", categoryContent, [], null, article);
        createElement("p", contentContent, [], null, article)
        taskOutputUls.uploaded.appendChild(li);

        let rpostLi = e.target.parentElement;
        rpostLi.remove();
    }

    function editPost(e) {
        let [titleContent, categoryContent, contentContent] = extractArticleContent(e.target.parentElement);
        
        categoryContent = categoryContent.split("Category: ")[1];
        contentContent = contentContent.split("Content: ")[1];

        taskInputs.title.value = titleContent;
        taskInputs.categoty.value = categoryContent;
        taskInputs.content.value = contentContent;

        let rpostLi = e.target.parentElement;
        rpostLi.remove();
    }

    function extractArticleContent(parentElement) {
        let titleContent = parentElement.querySelector("article > h4").textContent;
        let categoryContent = parentElement.querySelector("article p:nth-child(2)").textContent;
        let contentContent = parentElement.querySelector("article p:nth-child(3)").textContent;
    
        return [titleContent, categoryContent, contentContent];
    }

    function ifInputsAreValid() {
        if (taskInputs.title.value && taskInputs.categoty.value
            && taskInputs.content.value) return true;
        else return false;

    }

    function clearInputs() {
        for (const key in taskInputs) {
            taskInputs[key].value = "";
        }
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
}
