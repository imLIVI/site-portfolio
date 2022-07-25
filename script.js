let switchMode = document.getElementById("theme");

let imgTheme = document.getElementById("img-theme");

switchMode.onclick = function () {
    let theme = document.getElementById("style-theme");

    if (theme.getAttribute("href") == "css/style-light-theme.css") {
        theme.href = "css/style-dark-theme.css";
        //for gitHub: https://github.com/imLIVI/site-portfolio/img/icon-dark-theme-moon.png
        imgTheme.src = "https://github.com/pages/imLIVI/site-portfolio/img/icon-dark-theme-moon.png";
        
    } else {
        theme.href = "css/style-light-theme.css";
        //for gitHub: https://github.com/imLIVI/site-portfolio/img/icon-light-theme-sun.png
        imgTheme.src = "https://github.com/pages/imLIVI/site-portfolio/img/icon-light-theme-sun.png";
    }
}