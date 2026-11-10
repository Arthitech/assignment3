
const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000
};
ScrollReveal().reveal(".header-content span",{
    ...scrollRevealOption,
    delay:200,
})
ScrollReveal().reveal(".header-content .paragraph",{
    ...scrollRevealOption,
    delay:300,
})
ScrollReveal().reveal(".header-content .header-button",{
    ...scrollRevealOption,
    delay:400,
})

let observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting && window.scrollY>2) {
            entry.target.classList.add("show");
        }

    });
},{
    threshold: 0.1
});

let information = document.querySelector(".infomation-container");

observer.observe(information);
ScrollReveal().reveal(".info-text span",{
    ...scrollRevealOption,
    delay:200,
})
