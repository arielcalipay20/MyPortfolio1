
let showMenu = function() {
    document.getElementById('link-container').style.right = "0";
}

let hideMenu = function() {
    document.getElementById('link-container').style.right = "-300px";
}

let changeColor = () => {
    let colorMode = document.getElementById("nightmode");
    colorMode.classList.toggle("onclick");
    let colorBg = document.getElementById("body");
    colorBg.classList.toggle("body");
    let modeCon = document.getElementById("mode-container");
    modeCon.classList.toggle("mode-bg");
}

let colorMode = document.getElementById("nightmode");
colorMode.addEventListener("click", changeColor);


