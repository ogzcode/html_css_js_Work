const loadText = document.querySelector(".loading-text");
const img = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurring, 30);

function blurring(){
    load++;

    if (load >99){
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = (100 - load) / 100;
    img.style.filter = `blur(${20 - load / 5}px)`;
}