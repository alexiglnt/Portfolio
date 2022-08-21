// NAVIGATION BARRE
window.addEventListener("scroll", function() 
{
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


// ANIMATION AU DEMARAGE
const titreSpans = document.querySelectorAll('h1 span');
const pSpans = document.querySelectorAll('p span');

const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const picture = document.querySelectorAll('#presentation_img');

const btnHamburger = document.querySelector('.menu-hamburger');

window.addEventListener('load', () => {

// ANIMATION
    const TL = gsap.timeline({paused: true});

TL
.staggerFrom(btnHamburger, 1, {bottom: -50, opacity: 0, ease: "power2.out"}, 0.3)
.staggerFrom(btns, 1, {bottom: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=1')
.staggerFrom(pSpans, 1, {bottom: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=0.5')
.staggerFrom(titreSpans, 1, {bottom: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=0.25')
.staggerFrom(picture, 1, {bottom: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=0.125')


TL.play();
})



// NAVBAR HAMBURGER
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav_links");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});


const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');

a1.addEventListener("click", () => { navLinks.classList.remove('mobile-menu'); });
a2.addEventListener("click", () => { navLinks.classList.remove('mobile-menu'); });
a3.addEventListener("click", () => { navLinks.classList.remove('mobile-menu'); });
a4.addEventListener("click", () => { navLinks.classList.remove('mobile-menu'); });
