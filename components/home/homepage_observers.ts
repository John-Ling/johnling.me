export const update_fade_entries = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
        if (!entry.isIntersecting) {
            return;
        }
    
        // using ids we can set a single trigger to 
        // trigger multiple fade-ins
        // an example of this would be the skills display where when the skills display itself
        // becomes visible we fade all the icons in
        switch(entry.target.id)
        {
            case "skills-display":
                entry.target.classList.add("animate-fade-up");
                document.querySelectorAll(".skill-icon").forEach((element: Element) => {
                    element.classList.add("animate-fade-up");
                });  
                break;
            case "where-section":
                document.querySelectorAll(".where-section-picture").forEach((element: Element) => {
                    element.classList.add("animate-fade-up"); 
                });
                break;
            default:
                entry.target.classList.add("animate-fade-up");
                break;
        }
        observer.unobserve(entry.target);
    });
    return;
};

export const update_flicker_entries = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
        if (!entry.isIntersecting) {
            return;
        }

        switch(entry.target.id)
        {
            default:
                entry.target.classList.add("animate-flicker-on");
                break;
        }
        observer.unobserve(entry.target);
    })
}

export const options = {
    root: null,
    rootMargin: "0px",
    threshold:  0.7, // what portion of the hidden element must be visible before trigger (0.7 = 70%) 
};