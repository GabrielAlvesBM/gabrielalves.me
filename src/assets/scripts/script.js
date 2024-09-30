// Loadead Animation

const fadeItems = document.querySelectorAll(".fade-item");

document.addEventListener("DOMContentLoaded", () => {
    fadeItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("fade-in");
        }, index * 300);
    });
});

// Lightmode Functions

let lightmode = localStorage.getItem('lightmode');
const themeBtn = document.getElementById("theme");
const body = document.querySelector("body");
const themeIcon = document.querySelector(".fa-circle-half-stroke");

const enableLightmode = () => {
    body.classList.add("lightmode");
    localStorage.setItem("lightmode", "active");
};

const disableLightmode = () => {
    body.classList.remove("lightmode");
    localStorage.setItem("lightmode", null);
};

if(lightmode === "active") enableLightmode();

themeBtn.addEventListener("click",() => {
    lightmode = localStorage.getItem("lightmode");

    lightmode !== "active" ? enableLightmode() : disableLightmode();
    themeIcon.classList.toggle("fa-flip-horizontal");

    fadeItems.forEach((item, index) => {
        item.classList.remove("fade-in");
        setTimeout(() => {
            item.classList.add("fade-in");
        }, index * 300);
    });
});

// Hamburger Functions

const hamburger = document.querySelector(".hamburgerBtn");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("activeBtn");
    document.body.classList.toggle("overflow-track");
});

// Easter-egg

console.log("██████╗ █████╗██████╗██████╗███████████╗          █████╗██╗   ██╗   ████████████████╗  ");
console.log("██╔════╝██╔══████╔══████╔══██████╔════██║         ██╔══████║   ██║   ████╔════██╔════╝  ");
console.log("██║  ████████████████╔██████╔███████╗ ██║         █████████║   ██║   ███████╗ ███████╗  ");
console.log("██║   ████╔══████╔══████╔══██████╔══╝ ██║         ██╔══████║   ╚██╗ ██╔██╔══╝ ╚════██║  ");
console.log("╚██████╔██║  ████████╔██║  ██████████████████╗    ██║  █████████╚████╔╝██████████████║  ");
console.log(" ╚═════╝╚═╝  ╚═╚═════╝╚═╝  ╚═╚═╚══════╚══════╝    ╚═╝  ╚═╚══════╝╚═══╝ ╚══════╚══════╝  ");
                                                                                          
