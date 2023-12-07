function attachEvents() {
    const issueURL = "http://localhost:3030/jsonstore/phonebook";
    const loadButton = document.querySelector("#btnLoad");
    const createButton = document.querySelector("#btnCreate");
    const contactsUl = document.querySelector("#phonebook");


    loadButton.addEventListener("click", loadContacts);
    createButton.addEventListener("click", createContact);
    contactsUl.addEventListener("click", hadleEvent);

    async function hadleEvent(e){
        const target = e.target;
        if (target.tagName === "BUTTON") {
            let contactId = target.dataset.id;
            await fetch(`http://localhost:3030/jsonstore/phonebook/${contactId}`, {method: "DELETE"});
        }
        loadContacts();
    }

    async function createContact(){
        let name = document.querySelector("#person").value;
        let phone = document.querySelector("#phone").value;

        await fetch(issueURL, {
            method: "POST",
            body: JSON.stringify({
                person: name,
                phone: phone
            })
        });
        loadContacts();
    }

    async function loadContacts(){
        contactsUl.textContent = "";
        let contactsInfo = await fetch(issueURL);
        let contactsBody = await contactsInfo.json();

        Object.entries(contactsBody).forEach(entri =>{
            let li = document.createElement("li");
            li.textContent = `${entri[1]["person"]}: ${entri[1]["phone"]}`;
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute("data-id", entri[1]["_id"]);
            li.appendChild(deleteButton);
            contactsUl.appendChild(li);
        })
    }
}

attachEvents();