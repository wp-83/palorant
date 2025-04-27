fetch("CODE/navbar/navbar.html").then((res) => {
    return res.text();
}).then((data) => {
    const parser = new DOMParser();
    const page = parser.parseFromString(data, "text/html");
    
    const content = page.body.innerHTML;
    
    const mainContent = document.querySelector("#nav-container");
    mainContent.innerHTML = content; 
    
    activePageStyle();

    window.addEventListener("click", (data) => {
        if (!data.target.classList.contains("hamburger") && !data.target.classList.contains("line") && !data.target.classList.contains("navigation") && !data.target.classList.contains("close-container")){
            document.querySelector(".hamburger-active")?.classList.remove("hamburger-active");
            document.querySelector(".navigation-active")?.classList.remove("navigation-active");
        }
    });

    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
        if (hamburger.classList.contains("hamburger-active")){
            hamburger.classList.remove("hamburger-active");
            document.querySelector(".navigation").classList.remove("navigation-active");
        } else {
            hamburger.classList.add("hamburger-active");
            document.querySelector(".navigation").classList.add("navigation-active");
        }
    });

    const closeIcon = document.querySelector(".close-icon");
    closeIcon.addEventListener("click", () => {
        document.querySelector(".hamburger-active")?.classList.remove("hamburger-active");
        document.querySelector(".navigation-active")?.classList.remove("navigation-active");
    });
});

function activePageStyle(){
    const currentPath = window.location.href;
    const hyperlinks = document.querySelectorAll(".navigation a");
    
    hyperlinks.forEach(hyperlink => {
        const path = new URL(hyperlink.href, window.location.origin).href;
        
        if (currentPath === path) {
            hyperlink.classList.add("active-page");
        }
    });
}

let prevScroll = window.pageYOffset;
window.onscroll = () => {
    let currScroll = window.pageYOffset;

    if(currScroll < prevScroll || window.pageYOffset == 0){
        document.querySelector("#navbar").style.top = "0";
    } else {
        if (!document.querySelector(".hamburger").classList.contains("hamburger-active")) document.querySelector("#navbar").style.top = "-5rem";
    }

    prevScroll = currScroll;
}