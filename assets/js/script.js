"use strict";

/* Implementing scroll to top button transition 
--------------------------------------------------------------
*/
let btn__scrollToTop = document.getElementById("scrollToTop");
let navBar = document.querySelector("nav");
let logo = document.getElementById("logo-img");
/* Scroll to top function 
--------------------------------------------------------------
*/
const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

btn__scrollToTop.addEventListener("click", scrollToTop);

/* Navbar change on scroll 
--------------------------------------------------------------
*/
function sticky__nav() {
  /* Navbar, scroll button style when scroll bar is at top
--------------------------------------------------------------
 */
  if (window.scrollY == 0) {
    navBar.style.backgroundColor = "transparent";
    navBar.style.transition = "background-color 0.4s";
    navBar.classList.remove("navbar-light");
    navBar.classList.add("navbar-dark");
    logo.src = "assets/img/logo.png";
    btn__scrollToTop.style.opacity = 0;
    btn__scrollToTop.style.userSelect = "none";
    btn__scrollToTop.style.cursor = "default";
  }

  /* Navbar style after scrolling 
--------------------------------------------------------------
*/
  if (window.scrollY > 0) {
    navBar.style.backgroundColor = "#fff";
    navBar.style.transition = "background-color 0.4s";
    navBar.classList.remove("navbar-dark");
    navBar.classList.add("navbar-light");
    logo.src = "assets/img/logo-dark.png";
    btn__scrollToTop.style.opacity = 1;
    btn__scrollToTop.style.cursor = "pointer";
  }
}

window.onscroll = sticky__nav;

/* Header typing animation using Typedjs library */

var typed = new Typed("#typed", {
  strings: [
    "welcome to my website",
    "i am mohammad ibrahim",
    "i am an engineer",
    "I am a web developer",
  ],
  smartBackspace: true,
  typeSpeed: 40,
  backSpeed: 30,
  showCursor: false,
  loop: true,
});
