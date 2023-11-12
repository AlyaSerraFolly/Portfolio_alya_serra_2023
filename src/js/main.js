import { gsap, Power2 } from "gsap";

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
