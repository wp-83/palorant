fetch("../footer/footer.html").then((res) => {
    return res.text();
}).then((data) => {
    const parser = new DOMParser();
    const page = parser.parseFromString(data, "text/html");

    const content = page.body.innerHTML;

    const mainContent = document.querySelector("#footer-container");
    mainContent.innerHTML = content;
});