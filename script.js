const carousel = document.querySelector(".testimonials-content-list");
const arrowBtns = document.querySelectorAll(".slider-arrow i");
const firstCardWidth = carousel.querySelector(".testimonial-card").offsetWidth;
const carouselChildrens = [...carousel.children];

// get the number of cards that can fit in the carousal at once
let cardPerView = Math.random(carousel.offsetWidth / firstCardWidth);

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -(firstCardWidth + 30) : (firstCardWidth + 30);
    });
});