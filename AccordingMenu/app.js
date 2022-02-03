const btns = document.querySelectorAll(".btn");

for (let btn of btns){
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
		const content = btn.nextElementSibling;
		if (content.style.height){
			content.style.height = null;
		}
		else {
			content.style.height = content.scrollHeight + "px";
		}
	});
}