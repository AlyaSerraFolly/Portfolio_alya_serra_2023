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
});

// Cursor

const $cursor = document.querySelector(".cursor__circle");
const $hover = document.querySelectorAll("a");

document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hover.length; i++) {
  $hover[i].addEventListener("mouseenter", onMouseHover);
  $hover[i].addEventListener("mouseleave", onMouseHoverOut);
}

function onMouseMove(e) {
  TweenMax.to($cursor, 0.4, {
    x: e.pageX - 27,
    y: e.pageY - 25,
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

// BURGER

var overlay = document.getElementById("overlay");
var toggleButton = document.getElementById("burger2");

function toggleOverlay() {
  if (overlay.style.display === "none" || overlay.style.display === "") {
    overlay.style.display = "flex"; // Utilisation de "flex" pour centrer le contenu
    overlay.style.height = "0"; // Réinitialisation de la hauteur avant l'animation
    gsap.to(overlay, { height: "100vh", ease: "power2.inOut", duration: 0.5 });
  } else {
    gsap.to(overlay, {
      height: 0,
      ease: "power2.inOut",
      duration: 0.5,
      onComplete: () => {
        overlay.style.display = "none";
      },
    });
  }
}

// Ajout d'un écouteur d'événements pour le clic sur la div rouge
toggleButton.addEventListener("click", toggleOverlay);
