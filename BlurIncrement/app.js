const node = document.querySelector(".background");
let blur = 20;

function changeBlur(operation){
    if (operation == "+" && blur < 9){
        blur += 2;
    }
    else if (operation == "-" && blur > 1) {
        blur -= 2;
    }

    node.style.filter = `blur(${blur}px)`
}