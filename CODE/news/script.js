const allNews = document.querySelectorAll("#news");

allNews.forEach((singleNews, idx) => {
    singleNews.querySelector(".top").querySelector(".news-image").src = news[idx].image;

    singleNews.querySelector(".top").querySelector(".news-category").innerHTML = news[idx].category.label.toUpperCase();
    singleNews.querySelector(".top").querySelector(".news-category").style.color = news[idx].category.textColor;
    singleNews.querySelector(".top").querySelector(".news-category").style.backgroundColor = news[idx].category.backgroundColor;

    singleNews.querySelector(".top").querySelector(".release-date").innerHTML = news[idx].date;
    singleNews.querySelector(".bottom").querySelector(".headline").innerHTML = news[idx].headline;
    singleNews.querySelector(".bottom").querySelector(".description").innerHTML = news[idx].desc;
});

function displayContent(){
    hiddenContents.forEach((content) => {
        content.style.display = "inline";
    });
}

function hiddenContent(){
    hiddenContents.forEach((content) => {
        content.style.display = "none";
    });
}

const hiddenContents = document.querySelectorAll("#news:nth-child(n + 7)");
const showSetting = document.querySelector("#displayType");
let hidden = 1;

document.addEventListener("DOMContentLoaded", function(){
    hiddenContent();
});

showSetting.addEventListener("click", function(){
    if(hidden){
        displayContent();
        showSetting.innerHTML = "SHOW LESS";
        hidden = 0;
    } else {
        window.scrollTo(0, 0);
        showSetting.innerHTML = "SHOW MORE";
        hiddenContent();
        hidden = 1;
    }
});