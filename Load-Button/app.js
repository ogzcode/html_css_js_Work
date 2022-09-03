var timeId;
var hoverValue = 0;
const btn = document.querySelector("button");

btn.addEventListener("mouseover", () => {
    function load() {
        if (hoverValue < 100) {
            hoverValue += 2;
            btn.style.background = `conic-gradient(#03cc65 ${hoverValue}%, #fff 0)`;
        }
        else {
            clearInterval(timeId);
        }
    }

    timeId = setInterval(load, 40);
});

btn.addEventListener("mouseout", () => {
    clearInterval(timeId);
    timeId = setInterval(() => {
        if (hoverValue > 0) {
            btn.style.background = `conic-gradient(#03cc65 ${hoverValue}%, #fff 0)`;
            hoverValue -= 2;
        }
        else {
            btn.style.background = `conic-gradient(#03cc65 0, #fff 0)`;
            clearInterval(timeId);
        }
    }, 20);

});