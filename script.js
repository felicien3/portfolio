function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    }else {
        menuBtn.className = "nav-menu";
    }
}


// --------- Dark mode -------------
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
})




// --------Typing Effect --------

var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});


// ---------- Scroll animation --------
const sr =  ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100});
srLeft.reveal(".contact-info", { delay: 100});

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skills", { delay: 100});
srRight.reveal(".skill-box", { delay: 100});

// ------- Active link -------
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        const sectionId = current.getAttribute("id");
        const link = document.querySelector('.nav-menu a[href*="#' + sectionId + '"]');
        if (!link) return;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            link.classList.add("active-link");
        } else {
            link.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);