import { gsap, Power2 } from "gsap";

gsap.from(
  ".landing-text",
  { opacity: 0, y: 0 },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: Power2.easeInOut,
    onStart: () => {
      document.querySelector(".landing-text").style.display = "block";
    },
    onComplete: () => {
      gsap.to(".landing-text", {
        opacity: 0,
        duration: 1.7,
        ease: Power2.easeInOut,
      });
    },
  }
);

gsap.to(".landing-hidden", {
  y: "-100%",
  duration: 1,
  ease: Power2.easeInOut,
  delay: 2.2,
  onStart: () => {
    landingVisible = true;
  },
  onComplete: () => {
    document.querySelector(".landing-hidden").style.display = "none";
    document.body.style.overflow = "auto";
    landingVisible = false;
  },
});

// MenuBurger
const element = document.querySelector(".menu-btn-6");

function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
}

element.addEventListener("click", function () {
  menuBtnFunction(this);
});
