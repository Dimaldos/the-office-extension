window.addEventListener('load', () => {
    var el = document.querySelector("body > div.content-wrapper > main > div > article > div.flex-wrapper > div");
    if (el) {
        document.querySelector("body > div.content-wrapper > main > div > article > div.flex-wrapper > div").className = '';
        document.querySelector("body > div.content-wrapper > main > div > article > div.flex-wrapper").className = '';
        document.querySelector("body > div.content-wrapper > main").style.maxWidth = '1100px';
    }
});
