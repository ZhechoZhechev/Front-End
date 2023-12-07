function attachEvents() {
    const loadPostsBtn = document.querySelector("#btnLoadPosts");
    const postsSelect = document.querySelector("#posts");
    const viewPostButton = document.querySelector("#btnViewPost");
    const postTitleH1 = document.querySelector("#post-title");
    const postBodyP = document.querySelector("#post-body");
    const postCommetntsUl = document.querySelector("#post-comments");

    loadPostsBtn.addEventListener("click", loadPostsOptions);

    let postData = {};


    async function loadPostsOptions() {
        let postsInfo = await fetch("http://localhost:3030/jsonstore/blog/posts");
        let postsBody = await postsInfo.json();

        postData = postsBody;

        Object.entries(postsBody).forEach(([key, object]) => {
            let option = document.createElement("option");
            option.value = key;
            option.text = object["title"];
            postsSelect.appendChild(option);
        });
    }

    viewPostButton.addEventListener("click", loadComments);

    async function loadComments() {
        postCommetntsUl.textContent = "";
        let commentsInfo = await fetch("http://localhost:3030/jsonstore/blog/comments");
        let commentsBody = await commentsInfo.json();
        let currOptionSelected = postsSelect.value;

        Object.entries(postData).forEach(arr => {
            if (arr[0] === currOptionSelected) {
                postTitleH1.textContent = arr[1]["title"];
                postBodyP.textContent = arr[1]["body"];
            }
        });

        Object.values(commentsBody).forEach(commentObj => {
            if (commentObj["postId"] === currOptionSelected) {
                let li = document.createElement("li");
                li.textContent = commentObj["text"];
                postCommetntsUl.appendChild(li);
            }
        });
    }
}

attachEvents();