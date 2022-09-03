AOS.init();

//**********************************************************  NAVIGATION BAR **************************************************************** */
window.addEventListener("scroll", function() 
{
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


//*******************************************************  ANIMATION AU DEMARRAGE ********************************************************** */
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



//**********************************************************  NAVBAR HAMBURGER **************************************************************** */
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav_links");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});


const a = document.querySelector(".menu-hamburger");

a.addEventListener('click', () => {
    a.classList.toggle('mobile-menu');
})


const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');

a1.addEventListener("click", () => { navLinks.classList.remove('mobile-menu'); a.classList.remove('mobile-menu'); });
a2.addEventListener("click", () => { navLinks.classList.remove('mobile-menu'); a.classList.remove('mobile-menu'); });
a3.addEventListener("click", () => { navLinks.classList.remove('mobile-menu'); a.classList.remove('mobile-menu'); });
a4.addEventListener("click", () => { navLinks.classList.remove('mobile-menu'); a.classList.remove('mobile-menu'); });



//**********************************************************  SCROLL **************************************************************** */
const scrollToTop = document.querySelector('.scroll-to-top');
scrollToTop.addEventListener('click', pushToTop);

const homeBtn = document.querySelector('#nav1');
homeBtn.addEventListener('click', pushToTop);

function pushToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// SCROLL INTO VIEW
const projects = document.querySelector('#projects');
const skills = document.querySelector('#skill');
const contact = document.querySelector('#contact_section');

const projectBtn = document.querySelector('#nav2');
const skillBtn = document.querySelector('#nav3');
const contactBtn = document.querySelector('#nav4');


projectBtn.addEventListener('click', () => { navigateScrollTo(projects) });
skillBtn.addEventListener('click', () => { navigateScrollTo(skills) });
contactBtn.addEventListener('click', () => { navigateScrollTo(contact) });

function navigateScrollTo(id) {
    id.scrollIntoView({behavior: "smooth"});
}
