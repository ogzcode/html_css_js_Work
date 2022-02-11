const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

inputs.forEach((input) => {
	input.addEventListener("keyup", () => {
		if (inputs[0].value != "" && inputs[1].value != ""){
			btn.disabled = false;
		}
		else {
			btn.disabled = true;
		}
	});
});

function show(){
	document.querySelector(".check").classList.toggle("active");
}

function changeIcon(node){
	const input = document.getElementById("password");
	if (node.classList == "fas fa-eye-slash"){
		node.classList = "fas fa-eye";
		input.type = "text";
	}
	else {
		node.classList = "fas fa-eye-slash";
		input.type = "password";
	}
}