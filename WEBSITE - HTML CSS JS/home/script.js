document.getElementById("first-video").playbackRate = 0.5;

const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const agentsBook = document.querySelector("#agents-book");

const paper1 = document.querySelector("#paper-1");
const paper2 = document.querySelector("#paper-2");
const paper3 = document.querySelector("#paper-3");
const paper4 = document.querySelector("#paper-4");

prevButton.addEventListener("click", showPrevPage);
nextButton.addEventListener("click", showNextPage);

const prevResponsiveButton = document.querySelector(".responsive-button #prev-button");
const nextResponsiveButton = document.querySelector(".responsive-button #next-button");

prevResponsiveButton.addEventListener("click", showPrevPage);
nextResponsiveButton.addEventListener("click", showNextPage);

let currPage = 1;
let manyPaper = 4;
let maxLocation = manyPaper + 1;

openBook = () => {
    agentsBook.style.transform = "translateX(50%)";
    prevButton.style.transform = "translateX(-12rem)";
    nextButton.style.transform = "translateX(12rem)";
}

closeBook = (isAtLastPage) => {
    if (isAtLastPage){
        agentsBook.style.transform = "translateX(0%)";
    } else {
        agentsBook.style.transform = "translateX(100%)";
    }

    prevButton.style.transform = "translateX(0)";
    nextButton.style.transform = "translateX(0)";
}

function showNextPage() {
    if (currPage < maxLocation){
        prevButton.classList.remove("hidden-book-button");
        prevResponsiveButton.style.display = "inline";
        switch(currPage){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = -3;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = -2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = -1;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 0;
                closeBook(false);
                break;
            default:
                throw new Error("Not Valid!");
        }

        currPage++;
    }

    if (currPage == 5){
        nextButton.classList.add("hidden-book-button");
        nextResponsiveButton.style.display = "none";
    }
}

function showPrevPage() {
    if (currPage > 1){
        switch (currPage){
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 4;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 3;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 2;
                break;
            case 5:
                openBook();
                nextButton.classList.remove("hidden-book-button");
                nextResponsiveButton.style.display = "inline";
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 1;
                break;
            default:
                throw new Error("Not Valid!");
        }

        currPage--;
    }

    if (currPage == 1){
        prevButton.classList.add("hidden-book-button");
        prevResponsiveButton.style.display = "none";
    }
}

if (currPage == 1){
    prevButton.classList.add("hidden-book-button");
    prevResponsiveButton.style.display = "none";
}

const contents = document.querySelectorAll("#agents-content");
let count = 0;

contents.forEach(content => {
    content.querySelector(".roles").querySelector(".roles-picture").src = agents[agentsBookIdx[count]].role.image;
    const firstLetter = agents[agentsBookIdx[count]].role.name.charAt(0).toUpperCase();
    content.querySelector(".roles").querySelector("p").innerHTML = firstLetter + agents[agentsBookIdx[count]].role.name.slice(1);
    content.querySelector(".background-agent").src = agents[agentsBookIdx[count]].favMap.image[0];
    content.querySelector(".agent-picture-book").src = agents[agentsBookIdx[count]].image;
    content.querySelector(".agent-name-book").querySelector("p").innerHTML = agents[agentsBookIdx[count]].name;
    content.querySelector(".page-number").querySelector("p").innerHTML = count+1;
    count++;
});
