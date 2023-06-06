const get_age = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDate()
    let age = year - 2005
    if (month < 7 || month == 8 && day < 7) {
        age--
    }
    return age
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("age-text").innerHTML = get_age();
    const languageIcons = document.querySelectorAll(".language-icon")
    const languageIconsFadeOrder = [0, 1, 4, 2, 5, 3, 6, 7] // indexes of language icons
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fade 2s ease"
                observer.unobserve(entry.target)
            }
        })
    })
    languageIconsFadeOrder.forEach(index => {
        // add later
    })
})
