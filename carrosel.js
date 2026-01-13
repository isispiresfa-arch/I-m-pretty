const carousel = document.querySelector('.carousel');
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const dotsContainer = document.querySelector('.dots');

let index = 0;
const total = slides.length;
const intervalTime = 3000;
let timer = null;

for (let i = 0; i < total; i++){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if ( i == 0) dot.classList.add('active');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlide(){
    const slideWidth = slides[0].getBoundingClientRect().width;
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;

    dots.forEach(d => d.classList.remove('active'));
    if(dots[index]) dots[index].classList.add('active');
}

function nextSlide(){
    index = (index + 1) % total;
    updateSlide();
}

function prevSlide(){
    index = (index -1 + total) % total;
    updateSlide();
}

function startAutoplay(){
    stopAutoplay();
    timer = setInterval(nextSlide, intervalTime);
}

function stopAutoplay(){
    if(timer){
        clearInterval(timer); timer = null
    }
}

btnNext.addEventListener('click', () => {
    nextSlide();
    startAutoplay();
})

btnPrev.addEventListener('click', () => {
    prevSlide();
    startAutoplay();
})

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        index = Number(e.currentTarget.dataset.index);
        updateSlide();
        startAutoplay();
    });
})

carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

let resizeTimer;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateSlide();
    }, 50);
})

updateSlide();
startAutoplay();