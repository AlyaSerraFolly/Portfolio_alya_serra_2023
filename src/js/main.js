import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // Vos autres animations ici...

  gsap.from(".landing-text", {
    opacity: 0,
    duration: 0,
    ease: Power2.easeInOut,
    onStart: () => {
      document.querySelector(".landing-text").style.display = "block";
    },
  });

  gsap.to(".landing-text", {
    opacity: 0,
    y: "-100%",
    duration: 1.2,
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

  let parallaxImage = document.querySelector("#header-image-animation");
  let parallaxContainer = document.querySelector(".locked-scroll");

  function updateParallax() {
    if (window.innerWidth >= 577) {
      let scrollTop = parallaxContainer.scrollTop;
      parallaxImage.style.top = scrollTop / 50 + "%";
    } else {
      // Appliquer les styles CSS lorsque la largeur d'écran est inférieure à 564px
      parallaxImage.style.position = "absolute";
      parallaxImage.style.bottom = "0";
      parallaxImage.style.top = "auto";
    }
  }

  // Appel initial de la fonction
  updateParallax();

  // Gestionnaire d'événements pour l'événement de redimensionnement de la fenêtre
  window.addEventListener("resize", updateParallax);

  // Gestionnaire d'événements pour l'événement de défilement du conteneur
  parallaxContainer.addEventListener("scroll", updateParallax);
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
    x: e.clientX - 27,
    y: e.clientY - 25,
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
    overlay.style.display = "flex";
    overlay.style.height = "0";
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

toggleButton.addEventListener("click", toggleOverlay);

const swiper = new Swiper(".swiper", {
  autoplay: {
    disableOnInteraction: true,
    delay: 4000,
  },
});

// Loading
