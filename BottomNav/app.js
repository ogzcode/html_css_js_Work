const items = document.querySelectorAll(".nav__item");
const bottom = document.querySelector(".nav__bottom");

function changeActive(el){
    items.forEach((node) => {
        node.classList.remove("is--active");
    });

    bottom.style.width = `${el.offsetWidth}px`;
    bottom.style.left = `${el.offsetLeft}px`;

    el.classList.add("is--active");
}

items.forEach((node) => {
    node.addEventListener("click", (e) => {
        changeActive(e.target);
    });

    if (node.classList.contains("is--active")){
        changeActive(node);
    }
});