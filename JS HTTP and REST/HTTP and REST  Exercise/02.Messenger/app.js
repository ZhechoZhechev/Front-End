function attachEvents() {
    const issueUrl = "http://localhost:3030/jsonstore/messenger";
    const sendButton = document.querySelector("#submit");
    const refreshButton = document.querySelector("#refresh");

    sendButton.addEventListener("click", sendMessage);

    async function sendMessage() {
        let inputName = document.querySelector("input[name=author]");
        let inputMessage = document.querySelector("input[name=content]");

        let inputNameValue = inputName.value;
        let inputMessageValue = inputMessage.value;

        await fetch(issueUrl, {
            method: "POST",
            body: JSON.stringify({
                author: inputNameValue,
                content: inputMessageValue,
            }),
        });
    }

    refreshButton.addEventListener("click", displayChat);

    async function displayChat() {
        let chatOutput = document.querySelector("#messages");

        let chat = await fetch(issueUrl);
        let chatBody = await chat.json();

        let output = [];
        Object.values(chatBody).forEach(object =>{
            output.push(`${object["author"]}: ${object["content"]}`)
            chatOutput.value = output.join("\n");
        })
    }
}

attachEvents();
