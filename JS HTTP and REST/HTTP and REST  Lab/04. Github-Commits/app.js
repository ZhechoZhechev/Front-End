async function loadCommits() {
    const userName = document.querySelector("#username").value;
    const repoName = document.querySelector("#repo").value;
    const ul = document.querySelector("#commits");

    let info = await fetch(`https://api.github.com/repos/${userName}/${repoName}/commits`)
    let body = await info.json();
    ul.innerHTML = ""

    if (info.status === 200) {
        body.forEach(el => {
            ul.appendChild(createEl(el.commit.author.name, el.commit.message));
        });
    }

    ul.appendChild(create404Li(info.status));

    function createEl(commitAuthor, commitMsg) {
        let li = document.createElement("li");
        li.textContent = `${commitAuthor}: ${commitMsg}`;
        return li;
    }

    function create404Li(status) {
        let li = document.createElement("li");
        li.textContent = `Error: ${status} (Not Found)`;
        return li;
    }
}