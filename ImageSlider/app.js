const left = document.getElementById("left");
const right = document.getElementById("right");
const slides = document.querySelectorAll(".slide");
const circles = document.querySelectorAll(".circle");

let afterSlide = 0;
let beforeSlide = 0;

function change(beforeNode, afterNode, styleClass){
	beforeNode.classList.remove(styleClass);
	afterNode.classList.add(styleClass);
}

left.addEventListener("click", () => {
	beforeSlide = afterSlide;
	afterSlide--;
	
	if (afterSlide < 0){
		afterSlide = slides.length - 1;
	}
	change(slides[beforeSlide], slides[afterSlide], "active");
	change(circles[beforeSlide], circles[afterSlide], "current");
});

right.addEventListener("click", () => {
	beforeSlide = afterSlide;
	afterSlide++;

	if (afterSlide > slides.length - 1){
		afterSlide = 0;
	}
	change(slides[beforeSlide], slides[afterSlide], "active");
	change(circles[beforeSlide], circles[afterSlide], "current");
});