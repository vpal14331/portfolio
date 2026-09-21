// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


// ==========================================
// CLOSE MENU AFTER CLICK
// ==========================================

const navLinks = document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});


// ==========================================
// CURRENT YEAR
// ==========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ==========================================
// SIMPLE SCROLL REVEAL
// ==========================================

const elements = document.querySelectorAll(
    ".skill, .experience-item, .contact-card, .about-main"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(function (element) {

    observer.observe(element);

});