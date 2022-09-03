function calcScrollValue(){
    let progress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let calcHeight = scrollHeight - clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100){
        progress.style.display = "grid";
    }
    else {
        progress.style.display = "none";
    }

    progress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
}

window.addEventListener("scroll", calcScrollValue);