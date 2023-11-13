import { gsap, Power2 } from "gsap";
import "sortable-tablesort/sortable.min.css";
import "sortable-tablesort/sortable.min.js";

document.addEventListener("DOMContentLoaded", function () {
  // Animation landing text - Apparition fixe
  gsap.from(".landing-text", {
    opacity: 0,
    duration: 0, // Pas de durée pour une apparition instantanée
    ease: Power2.easeInOut,
    onStart: () => {
      document.querySelector(".landing-text").style.display = "block";
    },
  });

  // Animation landing text - Disparition de bas en haut
  gsap.to(".landing-text", {
    opacity: 0,
    y: "-100%", // Disparaître vers le haut
    duration: 1.2, // Durée de l'ease-out
    ease: Power2.easeInOut,
    delay: 2,
    onComplete: () => {
      document.querySelector(".landing-text").style.display = "none";
    },
  });

  gsap.to(".landing-text", {
    opacity: 1,
    duration: 1,
    ease: Power2.easeInOut,
    delay: 3,
  });

  // MenuBurger
  const element = document.querySelector(".menu-btn-6");

  function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
  }

  if (element) {
    element.addEventListener("click", function () {
      menuBtnFunction(this);
    });
  }

  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".menu-overlay");

  const openAnimation = gsap.to(overlay, {
    duration: 0.5,
    height: "100%",
    ease: "power2.inOut",
    paused: true,
  });

  gsap.from(".menu-overlay", {
    opacity: 0,
    y: -100,
    height: "100%",
    duration: 2.5,
    ease: "power2.inOut",
  });

  menu.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    overlay.classList.toggle("open");

    if (isOpen) {
      openAnimation.play();
    } else {
    }
  });
});

const $cursor = document.querySelector(".cursor__circle");
const $hover = document.querySelectorAll("a");

document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hover.length; i++) {
  $hover[i].addEventListener("mouseenter", onMouseHover);
  $hover[i].addEventListener("mouseleave", onMouseHoverOut);
}

function onMouseMove(e) {
  TweenMax.to($cursor, 0.4, {
    x: e.pageX - 16,
    y: e.pageY - 16,
  });
}

function onMouseHover() {
  TweenMax.to($cursor, 0.4, {
    scale: 3,
  });
}
function onMouseHoverOut() {
  TweenMax.to($cursor, 0.4, {
    scale: 1,
  });
}
