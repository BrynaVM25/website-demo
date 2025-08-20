// ---------------------
// Texto con SplitText
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const splitText = new SplitText(".about-me h3", { type: "lines" });
  const lines = splitText.lines;

  gsap.from(lines, {
    duration: 1.5,
    yPercent: 80,
    opacity: 0,
    stagger: 0.2,
    ease: "back"
  });
});

// ---------------------
// Animación de imágenes hero
// ---------------------
gsap.registerPlugin(ScrollTrigger);

gsap.to(".heroimg", {
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.to(".heroimg2", {
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// ---------------------
// Video con scroll
// ---------------------
gsap.to(".video-container", {
  y: 950,
  width: "100vw",
  height: "100vh",
  borderRadius: "0",
  scrollTrigger: {
    trigger: ".content",
    endTrigger: ".section-video",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    ease: "power2.out"
  }
});

// ---------------------
// Movimiento con mouse (solo antes del scrollTrigger)
// ---------------------
let allowMouseMove = true;

document.addEventListener("mousemove", (e) => {
  if (!allowMouseMove) return;

  const video = document.querySelector(".video-container video");
  if (!video) return;

  const { innerWidth } = window;
  const mouseX = e.clientX;

  const progress = mouseX / innerWidth;
  const maxOffset = 200;
  const offsetX = (progress - 0.5) * 2 * maxOffset;

  gsap.to(video, {
    x: offsetX,
    duration: 0.6,
    ease: "power3.out"
  });
});

// Controlar activación/desactivación con ScrollTrigger
ScrollTrigger.create({
  trigger: ".section-video",
  start: "top center",
  onEnter: () => { allowMouseMove = false; },     // 🚫 desactiva movimiento
  onLeaveBack: () => { allowMouseMove = true; }  // ✅ lo reactiva si subes
});
