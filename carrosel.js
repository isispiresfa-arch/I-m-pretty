const carousel = document.querySelector(".carrosel");
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const btnPrev = document.getElementbyId(".prev");
const btnNext = document.getElementbyId(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
const total = slides.length;
const intervalTime = 3000;
let timer = null;
