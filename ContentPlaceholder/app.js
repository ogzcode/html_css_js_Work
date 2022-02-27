const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBg = document.querySelectorAll(".animated-bg");
const animatedBgText = document.querySelectorAll(".animated-bg-text");

function getData(){
    header.innerHTML = `<img src="image.jfif" alt=""/>`;
    title.innerHTML = `Lorem ipsum dolor sit amet`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`;
    profile_img.innerHTML =  `<img src="avatar.jpg" alt=""/>`;
    name.innerHTML = 'Joe Doe';
    date.innerHTML = 'Oct 08, 2020';

    animatedBg.forEach((bg) => bg.classList.remove("animated-bg"));
    animatedBgText.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2500);