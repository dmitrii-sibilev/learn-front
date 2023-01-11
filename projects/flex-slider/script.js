const slideItems = document.querySelectorAll('.slider__item');
const activeClassName = "slider__item_active";
slideItems.forEach((slide) => {
    slide.addEventListener('click', () => {
        resetSlider();
        activateSlide(slide);
    })
});
function activateSlide(slide) {
    slide.classList.add(activeClassName);
}
function resetSlider() {
    const activeSlides = document.querySelectorAll('.' + activeClassName)
    console.log(activeSlides)
    activeSlides.forEach((slide) => {
        deactivateSlide(slide);
    })
}
function deactivateSlide(slide) {
    slide.classList.remove(activeClassName);
}