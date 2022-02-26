const styleType = {
	"success" : {
		styleClass: "alert-success",
		text: "Success"
	},
	"info" : {
		styleClass: "alert-info",
		text: "Info"
	},
	"danger" : {
		styleClass: "alert-danger",
		text: "Danger"
	}
}

function show(type) {
	const parentNode = document.querySelector(".container");
	const child = 
	`
	<strong>${styleType[type].text}!</strong> <span>Indicates a successful or positive action.</span>
	<button class="btn">X</button>
	`
	childNode = document.createElement("div");
	childNode.classList = `alert ${styleType[type].styleClass}`
	childNode.innerHTML = child;
	parentNode.appendChild(childNode);
	
	const btn = childNode.children[2];
	btn.addEventListener("click", () => {
		btn.parentNode.remove();
	});
}
