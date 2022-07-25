let switchMode = document.getElementById("theme");
let imgTheme = document.getElementById("img-theme");
let imgArrowToTop = document.getElementById("arrow-to-top");

switchMode.onclick = function () {
    let theme = document.getElementById("style-theme");

    if (theme.getAttribute("href") == "css/style-light-theme.css") {
        theme.href = "css/style-dark-theme.css";
        imgTheme.src = "https://github.com/imLIVI/site-portfolio/blob/gh-pages/img/icon-dark-theme-moon.png?raw=true";
        imgArrowToTop.src = "img/icon-up-arrow-dark.png";
    } else {
        theme.href = "css/style-light-theme.css";
        imgTheme.src = "https://github.com/imLIVI/site-portfolio/blob/gh-pages/img/icon-light-theme-sun.png?raw=true";
        imgArrowToTop.src = "img/icon-up-arrow-light.png";
    }
}