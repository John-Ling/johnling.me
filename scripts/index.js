const get_age = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    let age = year - 2005;
    if (month < 7 || month == 8 && day < 7) {
        age--;
    }
    return age;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("age-text").innerHTML = get_age();

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(element => observer.observe(element));
})
