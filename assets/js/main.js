window.addEventListener("scroll", function () {
  var topheader = document.querySelector(".topheader");
  topheader.classList.toggle("active-bg", window.scrollY > 200);
});

// for the main Navbar
$(document).ready(function () {
  $(
    "#sidebarCollapse, #closeMenu, #side-click-close, .nv_link, .theme-settings, #body-overlay"
  ).on("click", function () {
    $(
      "#sidebarCollapse, #navbarNav, #closeMenu,  #side-click-close, #body-overlay"
    ).toggleClass("active");
    $("#overlay_menu").toggleClass("bg-body");
    $("body").toggleClass("stop-scroll");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
});

// theme settings
$(document).ready(function () {
  $(".theme-settings").on("click", function () {
    $(
      "body, .theme-settings, .navbar, section, .mynav-link, footer"
    ).toggleClass("active-theme");
  });
});

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Scroll to top
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const main = document.getElementById("main");
const highlight = document.getElementById("bar-higlight");
var mainHeight;
window.onscroll = function(){
    mainHeight = main.offsetHeight - window.innerHeight;
    mainPos = main.getBoundingClientRect();
    diff = mainHeight + mainPos.top;
    progressPercentage  = diff / mainHeight * 100;
    cssWidth = Math.floor(100 - progressPercentage);
    highlight.style.width = cssWidth + "%";
}
 
// AOS
AOS.init();

// Typing Js
var typed = new Typed(".type__text", {
    strings: ["I am an Assistant Manager", "New Product Development /SQA/ Business Excellence"],
    smartBackspace: true, // Default value
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
 });

 var loader = document.getElementById("preloader");
 window.addEventListener("load", function(){
     loader.style.left = "-100%";
     setTimeout(function () {
       clearInterval(tid); //clear above interval after 5 seconds
     }, 6000);
 });
 // Swiper Js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  margin: 30,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});