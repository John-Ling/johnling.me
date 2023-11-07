// attaches on-scroll animations

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-slide");
        }
    });
});

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-fade");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const hiddenSlideElements = document.querySelectorAll(".hidden-slide");
    hiddenSlideElements.forEach((element) => slideObserver.observe(element)); 

    const hiddenFadeElements = document.querySelectorAll(".hidden-fade");
    hiddenFadeElements.forEach((element) => slideObserver.observe(element));
});