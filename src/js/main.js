import { gsap } from "gsap";

gsap.to(".landing-hidden", {
  opacity: 0,
  duration: 1.7,
  ease: "power2.inOut",
  onStart: () => {
    landingVisible = true;
  },
  onComplete: () => {
    document.querySelector(".landing-hidden").style.display = "none";
    document.body.style.overflow = "auto";
    landingVisible = false;
  },
});
