const left = document.getElementById("left");
const right = document.getElementById("right");
const list = document.getElementById("list");

let itemWidth = 480;

left.addEventListener("click", () => {
    list.scrollLeft -= itemWidth;
});

right.addEventListener("click", () => {
    list.scrollLeft += itemWidth;
});