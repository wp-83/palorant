const frontContents = document.querySelectorAll("#card #front");
const backContents = document.querySelectorAll("#card #back");

let count = 0;
frontContents.forEach(frontContent => {
    frontContent.querySelector(".favorite-map-agent").src = agents[count].favMap.image[0];
    frontContent.querySelector(".role-picture").src = agents[count].role.image;
    frontContent.querySelector(".agent-role").querySelector("p").innerHTML = agents[count].role.name.toUpperCase();
    frontContent.querySelector(".agent-name").querySelector("p").innerHTML = agents[count].name.toUpperCase();
    frontContent.querySelector(".agent-picture").src = agents[count].image;
    count++;
});

count = 0;
backContents.forEach(backContent => {
    backContent.querySelector(".name").innerHTML = agents[count].name.toUpperCase();
    backContent.querySelector(".role").querySelector("img").src = agents[count].role.image;
    
    const roleNameFirstLetter = agents[count].role.name.charAt(0).toUpperCase();
    backContent.querySelector(".role").querySelector("p").innerHTML = roleNameFirstLetter + agents[count].role.name.slice(1);

    backContent.querySelector(".description").querySelector("p").innerHTML = agents[count].description;
    backContent.querySelector(".fav-map").querySelector("img").src = agents[count].favMap.image[0];
    backContent.querySelector(".fav-map").querySelector(".map-identity").querySelector(".map-name").innerHTML = agents[count].favMap.name.toUpperCase();
    backContent.querySelector(".agent-crop").querySelector("img").src = agents[count].image;
    count++;
});

const fronts = document.querySelectorAll(".front-content");
fronts.forEach(front => {
    front.addEventListener("click", function(){
        const card = front.closest(".card");
        document.querySelector('.card.active-card')?.classList.remove('active-card');
        card.classList.add("active-card");
    });
});

const flippedButtons = document.querySelectorAll(".flipped-back");
flippedButtons.forEach((flippedButton) => {
    flippedButton.addEventListener("click", function(){
        const card = flippedButton.closest(".card");
        card.classList.remove("active-card");
    });
});