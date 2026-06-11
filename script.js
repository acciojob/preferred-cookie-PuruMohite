//your JS code here. If required.
let saveBtn = document.querySelector("input[type='submit']");
let fontsizeInput = document.getElementById("fontsize");
let fontcolorInput = document.getElementById("fontcolor");
let root = document.querySelector(':root');


if(document.cookie.length > 0){
    // console.log(getCookie("fontsize"), getCookie("fontcolor"))
    renderPage(getCookie("fontsize"), getCookie("fontcolor"));
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    console.log(cookies);
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");

        if (key === name) {
            return value;
        }
    }

    return null;
}


function renderPage(font, color){
        document.cookie = `fontsize=${font}; max-age=86400`;
        document.cookie = `fontcolor=${color}; max-age=86400`;
        root.style.setProperty('--fontsize', `${font}px`);
        root.style.setProperty('--fontcolor', color);
        
}

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("clicked");
    renderPage(fontsizeInput.value, fontcolorInput.value);
})

