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

window.addEventListener('load', () => {

const TL = gsap.timeline({paused: true});

TL
.staggerFrom(btns, 1, {bottom: -50, opacity: 0, ease: "power2.out"}, 0.3)
.staggerFrom(pSpans, 1, {bottom: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=1')
.staggerFrom(titreSpans, 1, {bottom: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=0.5')
.staggerFrom(picture, 1, {bottom: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=0.25')


TL.play();
})