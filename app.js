
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        showArticle(event.target.getAttribute("data-linked-article"));
    });
});


function showArticle(articleID) {
    let articles = document.querySelectorAll("article");
    articles.forEach((article) => {
        article.classList.add("hidden");
    });
    document.querySelector("#" + articleID).classList.remove("hidden");
}