let currentSlide = 1;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");

    currentSlide += direction;
    if (currentSlide < 1) {
        currentSlide = slides.length;
    } else if (currentSlide > slides.length) {
        currentSlide = 1;
    }

    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${(currentSlide - 1) * 33.33}%)`;

    slides.forEach((slide, index) => {
        const slidePosition = (index + 1 + slides.length - currentSlide) % slides.length;
        const blurAmount = slidePosition === 1 ? 0 : 5;
        slide.style.filter = `blur(${blurAmount}px)`;
    });
}
