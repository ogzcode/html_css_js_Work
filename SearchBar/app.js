const btn = document.querySelector(".box__button");

btn.addEventListener("click", () => {
    document.querySelector(".box__input").classList.toggle("box__input--width")
    document.querySelector(".button__text").classList.toggle("button__text--invisible");
    document.querySelector(".button__icon").classList.toggle("button__icon--show");
});