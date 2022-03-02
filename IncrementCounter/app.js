const pNodes = document.querySelectorAll("p");

pNodes.forEach((node) => {
    node.innerText = '0';

    const updateCounter = () => {
        const target = +node.getAttribute("data-target");
        const c = +node.innerText;

        const increment = target / 200;

        if (c < target){
            node.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 2);
        }
        else {
            node.innerText = target;
        }
    };

    updateCounter();
});