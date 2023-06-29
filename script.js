let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");
let r = 255
let g = 255
let b = 255

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value
        + " , " 
        + color2.value 
        + ")";

       /*  css.textContent = body.style.background; */
}

function randomColorsGen() {
    let c1 = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    };
    let c2 = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    };
    c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
    c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
    body.style.background = "linear-gradient(to right, "+c1.rgb+" , "+c2.rgb+")";
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
button.addEventListener("click", randomColorsGen)

